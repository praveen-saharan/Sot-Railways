import React, { useState } from 'react';
import { Layout, Input, Button, Table, Pagination, Modal } from 'antd';
import { Link } from 'react-router-dom';
import logo1 from "../../assets/Picture1.png"; 

const { Content, Sider } = Layout;

const PassengerList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ name: '', trainStation: '' });
  const [selectedPassenger, setSelectedPassenger] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Dummy data for passengers
  const data = [
    { key: '1', passengerId: 'P12345', passengerName: 'John Doe', paymentMethod: 'Credit Card', destination: 'Tokyo', stopNumber: 5, fareAmount: 1200, paymentTime: '2025-01-01 12:30:00', trainStation: 'Shibuya' },
    { key: '2', passengerId: 'P12346', passengerName: 'Jane Smith', paymentMethod: 'Cash', destination: 'Osaka', stopNumber: 3, fareAmount: 800, paymentTime: '2025-01-02 14:15:00', trainStation: 'Shinjuku' },
    { key: '3', passengerId: 'P12347', passengerName: 'Michael Brown', paymentMethod: 'Debit Card', destination: 'Kyoto', stopNumber: 2, fareAmount: 1000, paymentTime: '2025-01-03 10:00:00', trainStation: 'Shibuya' },
    { key: '4', passengerId: 'P12348', passengerName: 'Emily Davis', paymentMethod: 'PayPal', destination: 'Hiroshima', stopNumber: 4, fareAmount: 1100, paymentTime: '2025-01-04 09:45:00', trainStation: 'Shinjuku' },
    { key: '5', passengerId: 'P12349', passengerName: 'David Wilson', paymentMethod: 'Credit Card', destination: 'Fukuoka', stopNumber: 6, fareAmount: 1300, paymentTime: '2025-01-05 16:20:00', trainStation: 'Shibuya' },
  ];

  // Columns for the table
  const columns = [
    { title: 'Passenger Id', dataIndex: 'passengerId', key: 'passengerId' },
    { title: 'Passenger Name', dataIndex: 'passengerName', key: 'passengerName' },
    { title: 'Payment Method', dataIndex: 'paymentMethod', key: 'paymentMethod' },
    { title: 'Destination', dataIndex: 'destination', key: 'destination' },
    { title: 'Stop Number', dataIndex: 'stopNumber', key: 'stopNumber' },
    { title: 'Fare Amount', dataIndex: 'fareAmount', key: 'fareAmount' },
    { title: 'Payment Time', dataIndex: 'paymentTime', key: 'paymentTime' },
  ];

  // Filter passengers based on name, station, and destination
  const filteredData = data.filter(passenger => 
    (passenger.passengerName.toLowerCase().includes(filters.name.toLowerCase())) &&
    (passenger.trainStation.toLowerCase().includes(filters.trainStation.toLowerCase()))
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
                placeholder="Search by Passenger Name"
                className="w-64"
              />
              <Input
                value={filters.trainStation}
                onChange={(e) => setFilters({ ...filters, trainStation: e.target.value })}
                placeholder="Filter by Train Station"
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
            rowKey="key"
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
            <p><strong>Passenger ID:</strong> {selectedPassenger.passengerId}</p>
            <p><strong>Name:</strong> {selectedPassenger.passengerName}</p>
            <p><strong>Payment Method:</strong> {selectedPassenger.paymentMethod}</p>
            <p><strong>Destination:</strong> {selectedPassenger.destination}</p>
            <p><strong>Stop Number:</strong> {selectedPassenger.stopNumber}</p>
            <p><strong>Fare Amount:</strong> ¥{selectedPassenger.fareAmount}</p>
            <p><strong>Payment Time:</strong> {selectedPassenger.paymentTime}</p>
            <p><strong>Train Station:</strong> {selectedPassenger.trainStation}</p>
          </div>
        )}
      </Modal>
    </Layout>
  );
};

export default PassengerList;
