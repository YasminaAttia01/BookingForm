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
    <p>
      Order Delivery Or Takeout:{" "}
      <a href="tel:+987654321">+216 53209679</a>
    </p>
  </div>
  <a href="mailto:attiayasmina01@gmail.com">
    <button className="footer-btn">Contact us via Email</button>
  </a>
</footer>

    </div>
  );
}

export default App;
