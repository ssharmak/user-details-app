import React from "react";
import { useLocation } from "react-router-dom";

function FormDisplayPage() {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div>
      <h1>Your Details</h1>
      <p>Name: {formData.name}</p>
      <p>Phone: {formData.phone}</p>
      <p>Email: {formData.email}</p>
      <p>DOB: {formData.dob}</p>
      <p>Address: {formData.address}</p>
    </div>
  );
}

export default FormDisplayPage;
