import React, { useState } from 'react';
import { FaFileUpload, FaUsers, FaFileInvoice } from 'react-icons/fa'; // Import icons
import { Layout, Button, Modal, Upload, message, Spin } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import logo1 from "../../assets/Picture1.png"; 
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const AdminHome = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  // Handle modal close
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Handle file upload change
  const handleChange = (info) => {
    setFileList(info.fileList);
  };

  // Handle file upload and make the POST request
  const handleUpload = async () => {
    if (fileList.length === 0) {
      message.error('Please select a CSV file to upload.');
      return;
    }

    setIsLoading(true); // Start loading

    const formData = new FormData();
    formData.append('file', fileList[0].originFileObj); // Append the file

    try {
      const response = await axios.post('http://localhost:8080/api/trainstations/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });

      if (response.status === 200) {
        message.success('File uploaded successfully!');
        setIsModalVisible(false); // Close the modal on success
        setFileList([]); // Reset file list
      }
    } catch (error) {
      message.error('File upload failed. Please try again.');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }} className="bg-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-purple-900 text-white flex justify-between items-center px-8 py-4 shadow-md">
        <div className="flex items-center space-x-3">
          <img src={logo1} alt="Logo" className="h-8" />
          <span className="text-xl font-semibold">SoT Railway Ticketing System</span>
        </div>
        <Link to="/" className="hover:bg-purple-300  rounded-lg px-4 py-2 text-sm font-medium">
          Logout
        </Link>
      </nav>

      <Content className="pt-24 px-8 bg-gray-100">
        <div className="text-center py-8">
          <h2 className="text-3xl font-semibold text-gray-800">Welcome, Admin!</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Upload CSV Button */}
          <div className="bg-white p-8 rounded-lg shadow-xl text-center hover:bg-purple-100 transition-colors">
            <FaFileUpload className="text-5xl mb-4 text-purple-600" />
            <button
              onClick={showModal}
              size="large"
              className="text-xl font-medium text-gray-800 border-2 border-purple-200 p-2 rounded-lg"
            >
              Upload New CSV File
            </button>
          </div>

          {/* Passenger Data Button */}
          <div className="bg-white p-8 rounded-lg shadow-xl text-center hover:bg-purple-100 transition-colors">
            <FaUsers className="text-5xl mb-4 text-purple-600" />
            <Link to="/admin/passenger-list"
              size="large"
              className="text-xl font-medium text-gray-800 border-2 border-purple-200 p-2 rounded-lg"
            >
              Passenger Data
            </Link>
          </div>

          {/* Financial Reports Button */}
          <div className="bg-white p-8 rounded-lg shadow-xl text-center hover:bg-purple-100 transition-colors">
            <FaFileInvoice className="text-5xl mb-4 text-purple-600" />
            <Link to="/admin/financial-reports"
              size="large"
              className="text-xl font-medium text-gray-800 border-2 border-purple-200 p-2 rounded-lg"
            >
              Financial Reports
            </Link>
          </div>
        </div>
      </Content>

      {/* Modal for CSV Upload */}
      <Modal
        title="Upload CSV File"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} className="bg-gray-500 hover:bg-gray-600 text-white">
            Cancel
          </Button>,
          <Button 
            key="submit" 
            type="primary" 
            onClick={handleUpload} 
            className="bg-purple-700 hover:bg-purple-800"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? <Spin /> : "Upload"} {/* Show spinner if loading */}
          </Button>,
        ]}
      >
        <Upload
          accept=".csv"
          fileList={fileList}
          onChange={handleChange}
          beforeUpload={() => false} // Disable automatic upload, we'll handle it manually
        >
          <Button icon={<UploadOutlined />} className="bg-purple-700 text-white hover:bg-purple-800">
            Select CSV File
          </Button>
        </Upload>
      </Modal>
    </Layout>
  );
};

export default AdminHome;
