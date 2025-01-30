// import React, { useState, useEffect } from "react";
// import trainBg from "../assets/Background_Image.png"; 
// import logo from "../assets/Picture1.png"; 
// // const Base_url = "http://localhost:8080/api/trainstations";
// const ApiData =[
//   {"id": 1, "stationName": "Central Station", "stopNumber": 3, "fareAmount": 155, "travelTime": "35"}, 
//   {"id": 2, "stationName": "West Station", "stopNumber": 4, "fareAmount": 185, "travelTime": "20"}, 
//   {"id": 4, "stationName": "Tokyo", "stopNumber": 3, "fareAmount": 155, "travelTime": "45"}, 
//   {"id": 5, "stationName": "Kamata", "stopNumber": 4, "fareAmount": 185, "travelTime": "34"}, 
//   {"id": 6, "stationName": "Kawasaki", "stopNumber": 5, "fareAmount": 200, "travelTime": "76"}, 
//   {"id": 7, "stationName": "Ojima", "stopNumber": 2, "fareAmount": 236, "travelTime": "87"} 
// ]
// const Home = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     destination: ""
//   });
//   const [error, setError] = useState("");
//   const [stations, setStations] = useState(ApiData); 
//   // useEffect(() => {
//   //   fetch(Base_url)
//   //     .then((response) => response.json())
      
//   //     .then((data) => {
       
//   //       setStations(data); 
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error fetching stations:", error);
//   //       setError("Failed to fetch train stations.");
//   //     });
//   // }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//     setError("");
//   };

//   const handleSubmit = () => {
//     const { firstName, lastName, destination } = formData;
//     if (!firstName || !lastName || !destination) {
//       setError("All fields are required");
//       return;
//     }

    
//     console.log("Form submitted", formData);
//   };

//   return (
//     <div
//       className="min-h-screen flex flex-col bg-cover bg-center"
//       style={{ backgroundImage: `url(${trainBg})` }} 
//     >
     
//       <nav className="fixed top-0 w-full bg-purple-900 text-white flex justify-between items-center px-8 py-4 shadow-md">
//         <div className="flex items-center space-x-3">
//           <img src={logo} alt="Logo" className="h-8" />
//           <span className="text-xl font-bold">SoT Railway Ticketing System</span>
//         </div>
//         <button className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded text-sm font-medium">
//           ADMIN
//         </button>
//       </nav>


//       <main className="flex-grow flex flex-col items-center justify-center mt-20">
//         <h1 className="text-white text-5xl font-bold leading-tight text-center shadow-lg mb-12">
//           Book Your Tickets Now!
//         </h1>

//         <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full">
//           <form className="space-y-6">
//             <div>
//               <label
//                 htmlFor="firstName"
//                 className="block text-sm font-semibold text-gray-700"
//               >
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
//                 placeholder="Enter your first name"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="lastName"
//                 className="block text-sm font-semibold text-gray-700"
//               >
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
//                 placeholder="Enter your last name"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="destination"
//                 className="block text-sm font-semibold text-gray-700"
//               >
//                 Destination
//               </label>
//               <select
//                 id="destination"
//                 name="destination"
//                 value={formData.destination}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
//               >
//                 <option value="">Select your destination</option>
//                 {stations.map((station) => (
//                   <option key={station.id} value={station.stationName}>
//                     {station.stationName}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {error && <p className="text-sm text-red-600">{error}</p>}

//             <button
//               type="button"
//               onClick={handleSubmit}
//               className="w-full bg-purple-700 text-white font-semibold py-3 rounded-md shadow-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             >
//               Book
//             </button>
//           </form>
//         </div>
//       </main>

    
//     </div>
//   );
// };

// export default Home;



  {/* Footer */}
      {/* <footer className="bg-purple-900 text-white py-4 text-center text-sm">
        Railway Ticketing System 2025 | All Rights Reserved
      </footer> */}




      import React, { useState, useEffect } from "react";
      import { useNavigate } from "react-router-dom"; // Importing useNavigate
      import trainBg from "../assets/Background_Image.png"; 
      import logo from "../assets/Picture1.png"; 
      
      const ApiData = [
        { "id": 1, "stationName": "Central Station","source": "Tokyo Station", "stopNumber": 3, "fareAmount": 155, "travelTime": "35" }, 
        { "id": 2, "stationName": "West Station","source": "Tokyo Station", "stopNumber": 4, "fareAmount": 185, "travelTime": "20" }, 
        { "id": 4, "stationName": "Tokyo","source": "Tokyo Station", "stopNumber": 3, "fareAmount": 155, "travelTime": "45" }, 
        { "id": 5, "stationName": "Kamata", "source": "Tokyo Station","stopNumber": 4, "fareAmount": 185, "travelTime": "34" }, 
        { "id": 6, "stationName": "Kawasaki","source": "Tokyo Station", "stopNumber": 5, "fareAmount": 200, "travelTime": "76" }, 
        { "id": 7, "stationName": "Ojima","source": "Tokyo Station", "stopNumber": 2, "fareAmount": 236, "travelTime": "87" }
      ];
      
      const Home = () => {
        const [formData, setFormData] = useState({
          firstName: "",
          lastName: "",
          destination: ""
        });
        const [error, setError] = useState("");
        const [stations, setStations] = useState(ApiData); // Temporary static stations
        const navigate = useNavigate(); // useNavigate for redirecting
      
        // Handle form data change
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value
          });
          setError("");
        };
      
        // Handle form submission
        const handleSubmit = () => {
          const { firstName, lastName, destination } = formData;
          if (!firstName || !lastName || !destination) {
            setError("All fields are required");
            return;
          }
      
          // Find the selected station data
          const selectedStation = stations.find(
            (station) => station.stationName === destination
          );
      
          // Redirect to booking confirmation page with formData and selected station data
          navigate("/booking", {
            state: { ...formData, ...selectedStation }
          });
        };
      
        // Disable Book button until all fields are filled
        const isButtonDisabled = !formData.firstName || !formData.lastName || !formData.destination;
      
        return (
          <div
            className="min-h-screen flex flex-col bg-cover bg-center"
            style={{ backgroundImage: `url(${trainBg})` }}
          >
            <nav className="fixed top-0 w-full bg-purple-900 text-white flex justify-between items-center px-8 py-4 shadow-md">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="Logo" className="h-8" />
                <span className="text-xl font-bold">SoT Railway Ticketing System</span>
              </div>
              <button className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded text-sm font-medium">
                ADMIN
              </button>
            </nav>
      
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
                      {stations.map((station) => (
                        <option key={station.id} value={station.stationName}>
                          {station.stationName}
                        </option>
                      ))}
                    </select>
                  </div>
      
                  {error && <p className="text-sm text-red-600">{error}</p>}
      
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isButtonDisabled} // Disable button if form is incomplete
                    className="w-full bg-purple-700 text-white font-semibold py-3 rounded-md shadow-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    Book
                  </button>
                </form>
              </div>
            </main>
          </div>
        );
      };
      
      export default Home;
      