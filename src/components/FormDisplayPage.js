import React from "react";
import { useLocation } from "react-router-dom";

function FormDisplayPage() {
  const location = useLocation();
  const { formData } = location.state || {}; // Get the form data from location state

  // If formData is not available, display a message
  if (!formData) {
    return <p>No data available.</p>;
  }

  // Full name and other details
  const fullName = `${formData.firstName} ${formData.middleName} ${formData.lastName}`;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Details</h1>
      <p>
        <strong>Name:</strong> {fullName}
      </p>
      <p>
        <strong>Phone:</strong> {formData.phone}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>DOB:</strong> {formData.dob}
      </p>
      <p>
        <strong>Address:</strong> {formData.address}
      </p>
    </div>
  );
}

export default FormDisplayPage;
