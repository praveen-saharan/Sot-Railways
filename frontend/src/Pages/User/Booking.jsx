import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const Booking = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [seatPreference, setSeatPreference] = useState('');
  const [contact, setContact] = useState('');

  // const history = useHistory();
  const selectedTrain = JSON.parse(localStorage.getItem('selectedTrain'));

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      name,
      age,
      gender,
      seatPreference,
      contact,
      train: selectedTrain,
    };
    // localStorage.setItem('bookingData', JSON.stringify(bookingData));
    // history.push('/booking-summary');
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-secondary p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-highlight mb-4">Enter Passenger Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Passenger Name"
          className="w-full p-3 rounded-md bg-light text-dark focus:outline-none focus:ring-2 focus:ring-accent"
          required
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          className="w-full p-3 rounded-md bg-light text-dark focus:outline-none focus:ring-2 focus:ring-accent"
          required
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-3 rounded-md bg-light text-dark focus:outline-none focus:ring-2 focus:ring-accent"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Contact Number"
          className="w-full p-3 rounded-md bg-light text-dark focus:outline-none focus:ring-2 focus:ring-accent"
          required
        />
        <select
          value={seatPreference}
          onChange={(e) => setSeatPreference(e.target.value)}
          className="w-full p-3 rounded-md bg-light text-dark focus:outline-none focus:ring-2 focus:ring-accent"
          required
        >
          <option value="">Select Seat Preference</option>
          <option value="Lower">Lower</option>
          <option value="Middle">Middle</option>
          <option value="Upper">Upper</option>
        </select>
        <button
          type="submit"
          className="w-full p-3 bg-accent text-light rounded-md hover:bg-highlight transition duration-300"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Booking;
