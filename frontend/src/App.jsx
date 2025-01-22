import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import NotExist from "./Components/NotExist";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import TrainSchedule from "./pages/User/TrainSchedule";
import Booking from "./pages/User/Booking";
import BookingSummary from "./pages/User/BookingSummary";
import Payment from "./pages/User/Payment";
import Ticket from "./pages/User/Ticket";

import PassengerList from "./pages/Admin/PassengerList";
import FinancialReports from "./pages/Admin/FinancialReports";
import ScheduleEdit from "./pages/Admin/ScheduleEdit";
import TicketEdit from "./pages/Admin/TicketEdit";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
      <Navbar />

        <div className="flex-1 text-center mt-22">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />

            {/* User pages */}
            {/* <Switch> */}
            <Route path="/train-schedule" element={<TrainSchedule />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking-summary" element={<BookingSummary />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/ticket" element={<Ticket />} />
            {/* </Switch> */}

            {/* Admin pages */}
            <Route path="/admin/passenger-list" element={<PassengerList />} />
            <Route path="/admin/financial-reports" element={<FinancialReports />}/>
            <Route path="/admin/schedule-edit" element={<ScheduleEdit />} />
            <Route path="/admin/ticket-edit" element={<TicketEdit />} />

            <Route path="*" element={<NotExist />} />
          </Routes>

        </div>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
