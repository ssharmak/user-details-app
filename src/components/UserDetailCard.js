import React from "react";

function UserDetailCard({ user }) {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}
    >
      <img
        src={user.picture.large}
        alt="User"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h2>
        {user.name.first} {user.name.last}
      </h2>
      <p>Gender: {user.gender}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>
        Address: {user.location.street.name}, {user.location.city},{" "}
        {user.location.country}
      </p>
    </div>
  );
}

export default UserDetailCard;
