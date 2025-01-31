import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';  // Import jsPDF
import { Button, Typography, Space, Divider } from 'antd';  // Ant Design components
import { motion } from 'framer-motion';  // Framer Motion
import tick from "../../assets/tick.png";
import { useLocation, useNavigate } from "react-router-dom";
import logo1 from "../../assets/Picture1.png"; 

const { Title, Text } = Typography;

const Ticket = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    amount,
    cardNumber,
    destinationName,
    modeOfPayment,
    source,
    travelTime,
    userFirstname,
    userLastname
  } = state.requestData;
  

  const [arrivalTimeString, setArrivalTimeString] = useState('');
  const [departureTimeString, setDepartureTimeString] = useState('');


    useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigate]);

  useEffect(() => {
    const departureTime = new Date();
    departureTime.setMinutes(departureTime.getMinutes());

    setDepartureTimeString(departureTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }));

    const arrivalTime = new Date(departureTime);
    arrivalTime.setMinutes(arrivalTime.getMinutes() + parseInt(travelTime)); // Adjust based on travelTime

    setArrivalTimeString(arrivalTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }));
  }, [travelTime]);

  const downloadPDF = () => {
    const doc = new jsPDF();
  
    doc.setLineWidth(1);
    doc.rect(10, 10, 190, 270); // (x, y, width, height)
  
    doc.setFontSize(22);
    doc.setTextColor(0, 102, 204);
    doc.setFont('helvetica', 'bold');
    doc.text('Booking Confirmation', 105, 30, { align: 'center' });
  
    doc.addImage(tick, 'PNG', 85, 40, 40, 40);
  
    doc.setFontSize(14);
    doc.setTextColor(40, 40, 40);
    doc.setFont('helvetica', 'normal');
    doc.text(` Booked On: ${new Date().toLocaleString()}`, 20, 250);
    
    doc.text(` Name: ${userFirstname} ${userLastname}`, 20, 90);
    doc.text(` From: ${source || "Tokyo"}`, 20, 110);
    doc.text(` Destination: ${destinationName}`, 20, 130);
    doc.text(` Departure Time: ${departureTimeString}`, 20, 150);
    doc.text(` Arrival Time: ${arrivalTimeString}`, 20, 170);
    
    doc.setFont('helvetica', 'bold');
    doc.text(' Payment Details:', 20, 190);
    doc.setFont('helvetica', 'normal');
    doc.text(` Fare: ¥‎${amount.toFixed(2)}`, 20, 205);
    doc.text(` Mode: ${modeOfPayment}`, 20, 220);
    doc.text(` Card: **** **** **** ${cardNumber.toString().slice(-4)}`, 20, 235);
  
    doc.setFontSize(16);
    doc.setTextColor(0, 153, 76);
    doc.setFont('helvetica', 'bold');
    doc.text('Thanks for choosing SoT Railways! Happy Journey!', 105, 270, { align: 'center' });
  
    doc.save('ticket.pdf');
  };

  return (
    <div className="min-h-screen bg-[#E2CFEA]">
      <nav className="fixed top-0 w-full bg-purple-900 text-white flex justify-between items-center px-8 py-4 shadow-md">
        <div className="flex items-center space-x-3">
          <img src={logo1} alt="Logo" className="h-8" />
          <span className="text-xl font-bold">SoT Railway Ticketing System</span>
        </div>
        <button className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded text-sm font-medium">ADMIN</button>
      </nav>

      <motion.div 
        className="max-w-2xl mx-auto mt-16 py-3 rounded-lg shadow-xl bg-gradient-to-r from-blue-100 via-white to-blue-100"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        {/* Success Tick Image */}
        <div className="flex justify-center mb-8">
          <img src={tick} alt="Ticket Confirmed" className="w-32 h-32" />
        </div>

        {/* Main Heading */}
        <Title level={2} className="text-center text-green-600 mb-6">
          Hurray! Your Ticket has been confirmed
        </Title>

        {/* Booking Details */}
        <div className="space-y-4">
          <Space direction="vertical" size="large">
            <div className="flex justify-between">
              <Text strong>Name:</Text>
              <Text>{`${userFirstname} ${userLastname}`}</Text>
            </div>
            <div className="flex justify-between">
              <Text strong>Source:</Text>
              <Text>{source || "Tokyo"} - {departureTimeString}</Text>
              </div>
            <div className="flex justify-between">
              <Text strong>Destination:</Text>
              <Text>{destinationName} - {arrivalTimeString}</Text>
            </div>
            <div className="flex justify-between">
              <Text strong>Fare Amount:</Text>
              <Text>¥‎{amount}</Text>
            </div>
            <div className="flex justify-between">
              <Text strong>Mode of Payment:</Text>
              <Text>{modeOfPayment}</Text>
            </div>
            <div className="flex justify-between">
              <Text strong>Card Number:</Text>
              <Text>**** **** **** {cardNumber.toString().slice(-4)}</Text>
            </div>
            <div className="flex justify-between">
              <Text strong>Booking Time:</Text>
              <Text>{new Date().toLocaleString()}</Text>
            </div>
          </Space>
        </div>

        {/* Divider for Visual Separation */}
        <Divider />

        {/* Instructions */}
        <div className="mt-8">
          <Text className="text-lg text-center text-gray-600">
            Thanks for choosing SoT Railways. Happy Journey!
          </Text>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-6">
          <Button 
            type="primary" 
            size="large" 
            icon={<i className="fas fa-download"></i>} 
            onClick={downloadPDF}
            className="w-full md:w-1/4 text-lg"
          >
            Download PDF
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Ticket;
