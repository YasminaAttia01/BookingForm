/* eslint-disable no-undef */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  it("displays validation errors on empty required fields", () => {
    render(<BookingForm />);
    
    const submitButton = screen.getByRole("button", { name: /submit booking/i });
    fireEvent.click(submitButton);

    expect(screen.getByText(/Full name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });

  it("submits form when required fields are valid", () => {
    render(<BookingForm />);
    
    const fullNameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    
    fireEvent.change(fullNameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });

    const submitButton = screen.getByRole("button", { name: /submit booking/i });
    fireEvent.click(submitButton);

    expect(screen.getByText(/Booking submitted successfully/i)).toBeInTheDocument();
  });
});
