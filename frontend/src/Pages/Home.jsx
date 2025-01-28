import React, { useState } from "react";
import trainBg from "../assets/Background_Image.png"; // Import the background image

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    destination: ""
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError("");
  };

  const handleSubmit = () => {
    const { firstName, lastName, destination } = formData;
    if (!firstName || !lastName || !destination) {
      setError("All fields are required");
      return;
    }

    // Navigate to the next page or handle booking logic
    console.log("Form submitted", formData);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${trainBg})` }} // Use the imported image here
    >
            {/* Navbar */}
      <nav className="fixed top-0 w-full bg-purple-900 text-white flex justify-between items-center px-8 py-4 shadow-md">
        <div className="flex items-center space-x-3">
          <img src="../assets/Picture1.png" alt="Logo" className="h-8" />
          <span className="text-xl font-bold">SoT Railway Ticketing System</span>
        </div>
        <button className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded text-sm font-medium">ADMIN</button>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center mt-20">
        <h1 className="text-white text-5xl font-bold leading-tight text-center shadow-lg mb-12">
          Book Your Tickets Now!
        </h1>

        <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter your last name"
              />
            </div>

            <div>
              <label
                htmlFor="destination"
                className="block text-sm font-semibold text-gray-700"
              >
                Destination
              </label>
              <select
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">Select your destination</option>
                <option value="City A">City A</option>
                <option value="City B">City B</option>
                <option value="City C">City C</option>
              </select>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-purple-700 text-white font-semibold py-3 rounded-md shadow-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Book
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-4 text-center text-sm">
        Railway Ticketing System 2025 | All Rights Reserved
      </footer>
    </div>
  );
};

export default Home;
