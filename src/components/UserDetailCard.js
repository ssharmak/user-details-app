import React from "react";

function UserDetailCard({ user }) {
  const fullName = `${user.name.first} ${user.name.middle || ""} ${
    user.name.last
  }`;

  // Basic styles for the card and sections
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "8px",
    marginTop: "20px",
    width: "300px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "15px",
  };

  const nameStyle = {
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#4CAF50", // Green color for name
  };

  const sectionStyle = {
    margin: "10px 0",
    fontSize: "1em",
    color: "#333",
  };

  const sectionLabelStyle = {
    color: "#888", // Light color for section labels
    fontWeight: "bold",
  };

  const sectionValueStyle = {
    color: "#555", // Darker color for section values
  };

  return (
    <div style={cardStyle}>
      <img src={user.picture.large} alt="User" style={imageStyle} />
      <h2 style={nameStyle}>{fullName}</h2>

      <div style={sectionStyle}>
        <span style={sectionLabelStyle}>Gender: </span>
        <span style={sectionValueStyle}>{user.gender}</span>
      </div>

      <div style={sectionStyle}>
        <span style={sectionLabelStyle}>Email: </span>
        <span style={sectionValueStyle}>{user.email}</span>
      </div>

      <div style={sectionStyle}>
        <span style={sectionLabelStyle}>Phone: </span>
        <span style={sectionValueStyle}>{user.phone}</span>
      </div>

      <div style={sectionStyle}>
        <span style={sectionLabelStyle}>Address: </span>
        <span style={sectionValueStyle}>
          {user.location.street.name}, {user.location.city},{" "}
          {user.location.country}
        </span>
      </div>
    </div>
  );
}

export default UserDetailCard;
