import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    address: "",
  });
  const [error, setError] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    const { name, phone, email, dob, address } = formData;
    if (!name || !phone || !email || !dob || !address) {
      setError("All fields are required.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be 10 digits.");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(name) || name.length > 15) {
      setError("Name should contain only text and be at most 15 characters.");
      return;
    }
    setError("");

    // Redirect to the display page with data
    history.push({
      pathname: "/form-display",
      state: { formData },
    });
  };

  return (
    <div>
      <h1>Fill out the form</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
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
