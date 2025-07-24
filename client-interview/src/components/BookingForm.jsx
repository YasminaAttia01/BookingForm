import React, { useState, useEffect } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    date: "",
    guests: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { fullName, email, date } = formData;
    const newErrors = {};

    if (!fullName.trim()) newErrors.fullName = "Full name is required.";

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    
    if (date) {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0); 
      if (selectedDate < today) {
        newErrors.date = "Booking date cannot be in the past.";
      }
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log("Booking Submitted:", formData);
    setIsSubmitted(true);
    setFormData({ fullName: "", email: "", date: "", guests: "" });
  };

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Booking Form">
      <div className="form-group">
        <label htmlFor="fullName">Full Name*</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.fullName ? "true" : "false"}
        />
        {errors.fullName && <span className="error">{errors.fullName}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="date">Booking Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date && <span className="error">{errors.date}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          value={formData.guests}
          onChange={handleChange}
        />
      </div>

      <button type="submit" disabled={!isFormValid}>Submit Booking</button>

      {isSubmitted && <p className="success">Booking submitted successfully!</p>}
    </form>
  );
}

export default BookingForm;
