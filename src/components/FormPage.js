import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormPage.css"; // Make sure to import the CSS file

function FormPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: "",
    address: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, middleName, lastName, phone, email, dob, address } =
      formData;

    // Check if any required field is missing
    if (
      !firstName ||
      !middleName ||
      !lastName ||
      !phone ||
      !email ||
      !dob ||
      !address
    ) {
      setError("All fields are required.");
      return;
    }

    // Validate name fields (no numbers, max 15 characters)
    if (
      !/^[a-zA-Z\s]+$/.test(firstName) ||
      !/^[a-zA-Z\s]+$/.test(middleName) ||
      !/^[a-zA-Z\s]+$/.test(lastName) ||
      firstName.length > 15 ||
      middleName.length > 15 ||
      lastName.length > 15
    ) {
      setError(
        "Names should contain only letters and spaces, and be at most 15 characters."
      );
      return;
    }

    // Validate phone number (should be 10 digits)
    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be 10 digits.");
      return;
    }

    // Validate email format (restricts any characters after .com)
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/i.test(email)) {
      setError("Please enter a valid email address with .com domain only.");
      return;
    }

    // Reset error message if all validations pass
    setError("");
    navigate("/form-display", { state: { formData } }); // Navigate to FormDisplayPage
  };

  return (
    <div className="form-container">
      <h1>Fill out the form</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="middleName"
          placeholder="Middle Name"
          value={formData.middleName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={formData.dob}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
