import React, { useState } from 'react';
import { Layout, Input, Button, Table, Pagination } from 'antd';
import logo1 from "../../assets/Picture1.png"; 
import { Link } from 'react-router-dom';

const { Content, Sider } = Layout;

const FinancialReports = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ stationName: '' });

  // Dummy data for financial reports
  const data = [
    {
      key: '1',
      stationName: 'Shibuya',
      earnings: 1200000, // Earnings in yen
      totalPassengers: 1500,
    },
    {
      key: '2',
      stationName: 'Shinjuku',
      earnings: 1000000,
      totalPassengers: 1300,
    },
    {
      key: '3',
      stationName: 'Osaka',
      earnings: 950000,
      totalPassengers: 1200,
    },
    {
      key: '4',
      stationName: 'Kyoto',
      earnings: 850000,
      totalPassengers: 1000,
    },
    {
      key: '5',
      stationName: 'Hiroshima',
      earnings: 700000,
      totalPassengers: 800,
    },
  ];

  // Columns for the financial report table
  const columns = [
    {
      title: 'Station Name',
      dataIndex: 'stationName',
      key: 'stationName',
    },
    {
      title: 'Earnings in Yen (¥)',
      dataIndex: 'earnings',
      key: 'earnings',
    },
    {
      title: 'Total Passengers',
      dataIndex: 'totalPassengers',
      key: 'totalPassengers',
    },
  ];

  // Filter reports based on filter state (search by stationName)
  const filteredData = data.filter((report) =>
    report.stationName.toLowerCase().includes(filters.stationName.toLowerCase())
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
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
            <h2 className="text-3xl font-semibold text-gray-800">Financial Reports</h2>
            <div className="flex items-center space-x-4">
              <Input
                value={filters.stationName}
                onChange={(e) => setFilters({ ...filters, stationName: e.target.value })}
                placeholder="Search by Station Name"
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
          />

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <Pagination
              current={currentPage}
              total={filteredData.length}
              pageSize={5} // Show 5 reports per page
              onChange={handlePageChange}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default FinancialReports;
