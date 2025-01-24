import React, { useState } from 'react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  
  // Static booking data
  const bookingData = {
    train: {
      name: "Express Train",
      fare: 500,
    },
  };

  const handlePayment = () => {
    if (paymentMethod) {
      console.log('Proceeding to ticket...');
      // history.push('/ticket'); // Uncomment this when using routing
    } else {
      console.log('Please select a payment method');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-secondary p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-highlight mb-4">Payment</h2>
      <div>
        <p><strong>Train:</strong> {bookingData.train.name}</p>
        <p><strong>Fare:</strong> ₹{bookingData.train.fare}</p>
        <div className="space-y-4">
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-3 rounded-md bg-light text-dark focus:outline-none focus:ring-2 focus:ring-accent"
            required
          >
            <option value="">Select Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="UPI">UPI</option>
          </select>
        </div>
        <button
          onClick={handlePayment}
          className="w-full p-3 bg-accent text-light rounded-md hover:bg-highlight transition duration-300"
        >
          Pay ₹{bookingData.train.fare}
        </button>
      </div>
    </div>
  );
};

export default Payment;
