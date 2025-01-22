import React from 'react';
import { useNavigate } from 'react-router-dom';  // React Router v6

const TrainSchedule = () => {
  const navigate = useNavigate();  // Hook for navigation
  const trains = [
    { id: 1, stopNumber: 1, destination: 'New York', fare: 500 },
    { id: 2, stopNumber: 2, destination: 'Washington DC', fare: 700 },
  ];

  const handleSelectTrain = (train) => {
    localStorage.setItem('selectedTrain', JSON.stringify(train));  // Store train in localStorage
    navigate('/booking');  // Redirect to booking page
  };

  return (
    <div className="min-h-screen pt-16 bg-secondary p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-highlight mb-6">Select Train</h2>
        <div className="space-y-6">
          {trains.map((train) => (
            <div
              key={train.id}
              className="p-4 bg-light rounded-md shadow flex items-center justify-between"
            >
              <div>
                <p className="text-lg font-bold text-dark">Stop No. : {train.stopNumber}</p> {/* Display Stop number */}
                <p className="text-sm text-gray-700">Destination: {train.destination}</p>  {/* Display destination */}
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-dark">₹{train.fare}</p> {/* Display fare */}
                <button
                  onClick={() => handleSelectTrain(train)}
                  className="mt-4 px-6 py-2 bg-accent text-light rounded-md hover:bg-highlight transition duration-300"
                >
                  Select Train
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainSchedule;
