import React from "react";
import BookingForm from "./components/BookingForm";
import "./index.css";

function App() {
  return (
    <div className="page-wrapper">
      <div className="card">
        <div className="left">
          <div className="title-block">
            <h4>Contact Us</h4>
            <h2>Make a Reservation</h2>
          </div>
          <BookingForm />
        </div>
        <div className="right">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" // You can replace this later
            alt="restaurant"
          />
        </div>
      </div>

      <footer className="footer">
        <div className="footer-text">
          <strong>Also You Can Call Us & Reserve Table For Any Day</strong>
          <p>Order Delivery Or Takeout +987 654 321</p>
        </div>
        <button className="footer-btn">Contact us</button>
      </footer>
    </div>
  );
}

export default App;
