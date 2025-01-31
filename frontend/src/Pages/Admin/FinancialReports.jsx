import React, { useState, useEffect } from 'react';
import { Layout, Input, Button, Table, Pagination, message, Modal, DatePicker } from 'antd';
import { format } from 'date-fns';
import dayjs from 'dayjs';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo1 from "../../assets/Picture1.png";

const { Content, Sider } = Layout;

const FinancialReports = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ stationName: '' });
  const [financialData, setFinancialData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs()); 

  const pageSize = 5;

  // Fetch financial data
  const fetchFinancialData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/revenue/calculate-and-save");
      setFinancialData(response.data);
    } catch (error) {
      console.error('Error fetching financial data:', error);
      message.error('Error fetching financial data.');
    }
  };

  // Fetch transactions data for a train
  const fetchTransactionData = async () => {
    if (!selectedTrain) return;

    try {
      const response = await axios.get(
        `http://localhost:8080/api/revenue/station/${selectedTrain}/transactions?date=${selectedDate.format('YYYY-MM-DD')}`
      );
      setTransactions(response.data.length > 0 ? response.data : []);
    } catch (error) {
      console.error('Error fetching transaction data:', error);
      message.error('Error fetching transaction data.');
    }
  };

  // Filter and paginate data
  const filteredData = financialData.filter((report) =>
    report.stationName?.toLowerCase().includes(filters.stationName.toLowerCase())
  );
  const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // Handle modal visibility and fetch transactions when a train is selected
  const showModal = (trainId) => {
    setSelectedTrain(trainId);
    setIsModalVisible(true);
  };

  // Handle modal close
  const handleCancel = () => {
    setIsModalVisible(false);
    setTransactions([]); 
    setSelectedTrain(null);
  };

  // Fetch transactions when selectedTrain or selectedDate changes
  useEffect(() => {
    if (isModalVisible && selectedTrain) fetchTransactionData();
  }, [selectedTrain, selectedDate]);

  // Fetch financial data on component mount
  useEffect(() => {
    fetchFinancialData();
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }} className="bg-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-purple-900 text-white flex justify-between items-center px-8 py-4 shadow-md">
        <div className="flex items-center space-x-3">
          <img src={logo1} alt="Logo" className="h-8" />
          <span className="text-xl font-semibold">SoT Railway Ticketing System</span>
        </div>
        <button className="hover:bg-purple-300 rounded-lg px-4 py-2 text-sm font-medium">
          Logout
        </button>
      </nav>

      {/* Sidebar */}
      <Sider width={250} className="bg-purple-900 text-white mt-20">
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/admin" className="text-lg text-white hover:text-purple-300 transition-colors">Home</Link>
            </li>
            <li className="mb-4">
              <Link to="/admin/passenger-list" className="text-lg text-white hover:text-purple-300 transition-colors">Passenger Data</Link>
            </li>
            <li className="mb-4">
              <Link to="/admin/financial-reports" className="text-lg text-white hover:text-purple-300 transition-colors">Financial Report</Link>
            </li>
          </ul>
        </nav>
      </Sider>

      {/* Main Content */}
      <Layout className="site-layout">
        <Content className="pt-24 px-8">
          {/* Filter Section */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-gray-800">Financial Reports</h2>
            <div className="flex items-center space-x-4">
              <Input
                value={filters.stationName}
                onChange={(e) => setFilters({ ...filters, stationName: e.target.value })}
                placeholder="Search by Station Name"
                className="w-64"
              />
              <Button type="primary" className="bg-purple-700 hover:bg-purple-800" onClick={fetchFinancialData}>
                Apply Filter
              </Button>
            </div>
          </div>

          {/* Table Section */}
          <Table
            columns={[
              { title: 'Train ID', dataIndex: 'trainId', key: 'trainId' },
              { title: 'Station Name', dataIndex: 'stationName', key: 'stationName' },
              { title: 'Earnings (¥)', dataIndex: 'earnings', key: 'earnings' },
              { title: 'Total Passengers', dataIndex: 'totalPassengers', key: 'totalPassengers' },
            ]}
            dataSource={paginatedData}
            pagination={false}
            rowKey="trainId"
            onRow={(record) => ({
              onClick: () => showModal(record.trainId),
            })}
          />

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <Pagination
              current={currentPage}
              total={filteredData.length}
              pageSize={pageSize}
              onChange={setCurrentPage}
            />
          </div>
        </Content>
      </Layout>

      {/* Transactions Modal */}
      <Modal
        title={`Transactions for Train ID ${selectedTrain}`}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        {/* DatePicker */}
        <div className="mb-4">
          <DatePicker
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            format="YYYY-MM-DD"
            className="w-full"
          />
        </div>

        {/* Transaction Table */}
        <Table
          columns={[
            { title: 'Transaction ID', dataIndex: 'transactionId', key: 'transactionId' },
            { title: 'Passenger Name', dataIndex: 'userFirstname', key: 'userFirstname', render: (text, record) => `${text} ${record.userLastname}` },
            { title: 'Payment Method', dataIndex: 'modeOfPayment', key: 'modeOfPayment' },
            { title: 'Destination', dataIndex: 'destinationName', key: 'destinationName' },
            { title: 'Amount (¥)', dataIndex: 'amount', key: 'amount' },
            { title: 'Transaction Time', dataIndex: 'transactionDateTime', key: 'transactionDateTime', render: (text) => format(new Date(text), 'yyyy-MM-dd HH:mm:ss') },
            { title: 'Train Station ID', dataIndex: 'trainStationId', key: 'trainStationId' },
          ]}
          dataSource={transactions}
          rowKey="transactionId"
          pagination={false}
        />
      </Modal>
    </Layout>
  );
};

export default FinancialReports;
