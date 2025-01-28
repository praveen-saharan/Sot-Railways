import React, {useState} from 'react';
import '../../Booking.css';
import logo from "../../assets/Picture1.png";
import logo1 from "../../assets/account-benefits 1.png"
import Navbar from '../../Components/Navbar.jsx';
import logo2 from "../../assets/add_plus.png";
import logo3 from "../../assets/cash_icon.png";

const Booking = () => {

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const[isPopupVisible1, setIsPopupVisible1] = useState(false);

  const handleCashChange = (e) => {
    if (e.target.checked) {
      setIsPopupVisible(true);
    } else {
      setIsPopupVisible(false);
    }
  };

  const handleCardChange = (e) => {
    if (e.target.checked) {
      setIsPopupVisible1(true);
    } else {
      setIsPopupVisible1(false);
    }
  };


  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const closePopup1 = () => {
    setIsPopupVisible1(false);
  };

  

  return (
    <div>

    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1 className="header-title">SoT Railways Ticketing System</h1>
      <div className="admin-container">
        <p className="admin-text">ADMIN</p>
      </div>
    </header>

    
    <Navbar />

    <div className="main-container">
  <div className="booking-section">
   
    <div className="complete-booking">Complete Your Booking</div>

  <div className="booking-card">
    {/* Date */}
    <div className="booking-date">Friday, January 24, 2025</div>

    {/* Booking Details */}
    <div className="booking-content">
      {/* Station Details */}
      <div className="station-details">
        <div className="station">
          <div className="station-circle"></div>
          <p className="station-name">Tokyo Station</p>
        </div>
        < div className="station-line"></div>
     
        <div className="travel-time">1h 05 mins</div>
        <div className="station">
          <div className="station-circle2"></div>
          <p className="station-name2">Yokohama Station</p>
        </div>
      </div>

      {/* Image */}
      <div className="illustration">
        <img src={logo1} alt="Traveler Illustration" />
      </div>
    </div>
  </div>

  <div className="proceed-to-payment">
  <button className="payment-button">Proceed to Payment</button>
</div>


</div>

<div className="fare-summary">

  <div className="complete-booking">Fare Summary</div>
  <div className="fare-card">
  <div className="fare-item">
  <img className="fare-icon" src={logo2} alt="Plus Icon" />
    <span className="fare-label">Base Fare</span>
    <span className="fare-amount">¥500</span>
  </div>
  <hr></hr>
  <div className="fare-item">
  <img className="fare-icon" src={logo2} alt="Plus Icon" />
    <span className="fare-label">Taxes</span>
    <span className="fare-amount">¥50</span>
  </div>
  <hr></hr>
  <div className="fare-item total">
    <span className="fare-label">Total Amount</span>
    <span className="fare-amount">¥550</span>
  </div>

  <div>
  <div className="payment-method">
        <img className="payment-icon" src={logo3} alt="Payment Icon" />
        <span className="payment-label">Payment Method</span>
      </div>

      <div className="payment-options">
        <div className="payment-option">
          <input type="checkbox" id="cash" name="payment-method" value="cash" onChange={handleCashChange} />
          <label htmlFor="cash">Cash</label>
        </div>
        <div className="payment-option">
          <input type="checkbox" id="card" name="payment-method" value="card" onChange={handleCardChange} />
          <label htmlFor="card">Card</label>
        </div>
      </div>

  </div>



  </div>

 
 


</div>




</div>

{isPopupVisible1 && (
        <div className="popup-overlay">
          <div className="popup">
            <img className="popup-icon" src={logo} alt="Popup Icon" />
            <p>Amount to be paid: ¥ 550</p>
            <label>Enter Card Details</label>
            <div className="input-container">
              {/* <span className="yen-symbol">¥</span> */}
              <input type="text" className="amount-input" />
            </div>
            <button className="popup-submit">Submit</button>
            <button className="popup-cancel" onClick={closePopup1}>Cancel</button>


             </div>
          
        </div>
      )}

{isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <img className="popup-icon" src={logo} alt="Popup Icon" />
            <p>Amount to be paid: ¥ 550</p>
            <label>Enter Amount</label>
            <div className="input-container">
              <span className="yen-symbol">¥</span>
              <input type="text" className="amount-input" />
            </div>
            <button className="popup-submit">Submit</button>
            <button className="popup-cancel" onClick={closePopup}>Cancel</button>


             </div>
          
        </div>
      )}

</div>
  );
};

export default Booking;
