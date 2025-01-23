import React from 'react';

const Ticket = () => {
  // Static booking data
  const bookingData = {
    name: "John Doe",
    train: {
      name: "Express Train",
      fare: 500,
    },
    seatPreference: "Window",
    contact: "1234567890",
    paymentMethod: "Credit Card",
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-secondary p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-highlight mb-4">Your Ticket</h2>
      <div className="space-y-4">
        <p><strong>Name:</strong> {bookingData.name}</p>
        <p><strong>Train:</strong> {bookingData.train.name}</p>
        <p><strong>Seat Preference:</strong> {bookingData.seatPreference}</p>
        <p><strong>Fare:</strong> ₹{bookingData.train.fare}</p>
        <p><strong>Contact:</strong> {bookingData.contact}</p>
        <p><strong>Payment Method:</strong> {bookingData.paymentMethod}</p>
      </div>
    </div>
  );
};

export default Ticket;
