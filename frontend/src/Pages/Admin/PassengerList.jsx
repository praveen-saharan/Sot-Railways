import React, { useState, useEffect } from 'react';
import { Layout, Input, Button, Table, Pagination, Modal } from 'antd';
import { Link } from 'react-router-dom';
import logo1 from "../../assets/Picture1.png"; 
import { format } from 'date-fns'; 

const { Content, Sider } = Layout;

const PassengerList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ name: '', trainStation: '' });
  const [passengerData, setPassengerData] = useState([]); // Store data from API
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPassenger, setSelectedPassenger] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/transactions/all-transactions');
        const data = await response.json();
        setPassengerData(data); // Set data from API
      } catch (error) {
        console.error('Error fetching passenger data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array, so it runs only on mount

  // Columns for the table
  const columns = [
    { title: 'Transaction ID', dataIndex: 'transactionId', key: 'transactionId' },
    { title: 'Passenger Name', dataIndex: 'userFirstname', key: 'userFirstname' },
    { title: 'Payment Method', dataIndex: 'modeOfPayment', key: 'modeOfPayment' },
    { title: 'Destination', dataIndex: 'destinationName', key: 'destinationName' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    { title: 'Transaction Time', dataIndex: 'transactionDateTime', key: 'transactionDateTime',
      render: (text) => format(new Date(text), 'yyyy-MM-dd HH:mm:ss') // Format date here
    },
    { title: 'Train Station ID', dataIndex: 'trainStationId', key: 'trainStationId' },
  ];

  // Filter passengers based on name (firstname or lastname) and destination (train station)
  const filteredData = passengerData.filter(passenger => 
    (passenger.userFirstname.toLowerCase().includes(filters.name.toLowerCase()) || 
     passenger.userLastname.toLowerCase().includes(filters.name.toLowerCase())) &&
    (passenger.destinationName.toLowerCase().includes(filters.trainStation.toLowerCase()))
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Show passenger details in modal
  const showPassengerDetails = (passenger) => {
    setSelectedPassenger(passenger);
    setIsModalVisible(true);
  };

  // Close modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
            <h2 className="text-3xl font-semibold text-gray-800">Passenger List</h2>
            <div className="flex items-center space-x-4">
              <Input
                value={filters.name}
                onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                placeholder="Search by Passenger Name (First or Last)"
                className="w-64"
              />
              <Input
                value={filters.trainStation}
                onChange={(e) => setFilters({ ...filters, trainStation: e.target.value })}
                placeholder="Filter by Destination"
                className="w-64"
              />
              <Button type="primary" className="bg-purple-700 hover:bg-purple-800">
                Apply Filter
              </Button>
            </div>
          </div>

          {/* Table Section */}
          <Table
            columns={columns}
            dataSource={filteredData}
            pagination={false} // Disable built-in pagination
            rowKey="transactionId"
            onRow={(record) => ({
              onClick: () => showPassengerDetails(record),
            })}
          />

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <Pagination
              current={currentPage}
              total={filteredData.length}
              pageSize={5}
              onChange={handlePageChange}
            />
          </div>
        </Content>
      </Layout>

      {/* Modal for Passenger Details */}
      <Modal
        title="Passenger Details"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {selectedPassenger && (
          <div className="space-y-4">
            <p><strong>Transaction ID:</strong> {selectedPassenger.transactionId}</p>
            <p><strong>Name:</strong> {selectedPassenger.userFirstname} {selectedPassenger.userLastname}</p>
            <p><strong>Payment Method:</strong> {selectedPassenger.modeOfPayment}</p>
            <p><strong>Destination:</strong> {selectedPassenger.destinationName}</p>
            <p><strong>Amount:</strong> ¥{selectedPassenger.amount}</p>
            <p><strong>Transaction Time:</strong> {format(new Date(selectedPassenger.transactionDateTime), 'yyyy-MM-dd HH:mm:ss')}</p>
            <p><strong>Train Station ID:</strong> {selectedPassenger.trainStationId}</p>
            <p><strong>Card No.:</strong>**** **** **** {selectedPassenger.cardNumber.slice(-4)}</p>
          </div>
        )}
      </Modal>
    </Layout>
  );
};

export default PassengerList;
