import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Login from './Pages/Login';

import NotExist from "./Components/NotExist";
import Navbar from "./Components/Navbar";

import TrainSchedule from './Pages/User/TrainSchedule';
import Booking from './Pages/User/Booking';
import BookingSummary from './Pages/User/BookingSummary';
import Payment from './Pages/User/Payment';
import Ticket from './Pages/User/Ticket';

import PassengerList from './Pages/Admin/PassengerList';
import FinancialReports from './Pages/Admin/FinancialReports';
import ScheduleEdit from './Pages/Admin/ScheduleEdit';
import TicketEdit from './Pages/Admin/TicketEdit';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="text-center mt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />

          {/* User Pages */}
          <Route path="/train-schedule" element={<TrainSchedule />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking-summary" element={<BookingSummary />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/ticket" element={<Ticket />} />

          {/* Admin Pages */}
          <Route path="/admin/passenger-list" element={<PassengerList />} />
          <Route path="/admin/financial-reports" element={<FinancialReports />} />
          <Route path="/admin/schedule-edit" element={<ScheduleEdit />} />
          <Route path="/admin/ticket-edit" element={<TicketEdit />} />



          <Route path="*" element={<NotExist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;