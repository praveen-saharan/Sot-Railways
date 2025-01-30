import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Card  from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useLocation } from "react-router-dom";

const Base_url = "https://tailorapp.azurewebsites.net";

const App = ({ userid, userName }) => {

  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
    fullName: userName || "", // Pre-fill the full name if available
    focused: "",
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const totalPrice = queryParams.get("totalPrice");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      focused: name === "cvc" ? "cvc" : formData.focused,
    });
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      orderPrice: totalPrice,
    }));
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    try {
      // Sending the data to the server
      const response = await fetch(`${Base_url}/create-order/${userid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setFormData({
        ...formData,
        cardNumber: "",
        expiry: "",
        cvc: "",
        fullName: userName || "Praveen", // Reset to default name
        focused: "",
      });

      // Handle success/failure if needed, such as redirection
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleInputFocus = ({ target }) => {
    setFormData({ ...formData, focused: target.name });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-50 py-24">
      <div className="w-full max-w-4xl px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container relative">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-start items-start w-full space-y-9 bg-white shadow-lg rounded-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Card Payment Details</h2>
          
          {/* Card Details Section */}
          <div className="flex flex-col justify-center items-center w-full">
            <div className="p-8 bg-gray-100 flex flex-col w-full xl:w-4/5 rounded-lg shadow-md">
              {/* Credit Card Preview */}
              <div className="mt-4 flex justify-center">
                <Card
                  number={formData.cardNumber}
                  name={formData.fullName}
                  expiry={formData.expiry}
                  cvc={formData.cvc}
                  focused={formData.focused}
                />
              </div>

              {/* Card Number Input */}
              <div className="mt-6">
                <input
                  className="border rounded-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="number"
                  name="cardNumber"
                  placeholder="0000 1234 6549 15151"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Full Name Input */}
              <div className="mt-4">
                <input
                  className="border rounded-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Expiry & CVC Inputs */}
              <div className="mt-4 flex space-x-4">
                <input
                  className="border rounded-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleInputChange}
                  required
                />
                <input
                  className="border rounded-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  name="cvc"
                  placeholder="CVC"
                  value={formData.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-8 bg-blue-700 text-white hover:bg-blue-400 text-lg py-4 rounded-xl w-full transition duration-300 ease-in-out"
              >
                <div>
                  <p className="text-base leading-4">Pay ₹{totalPrice}</p>
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
