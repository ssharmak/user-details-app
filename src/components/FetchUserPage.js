import React, { useState } from "react";
import axios from "axios";
import UserDetailCard from "./UserDetailCard";

function FetchUserPage() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      setUserDetails(response.data.results[0]);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  return (
    <div>
      <h1>Fetch User Details</h1>
      <button onClick={fetchUserDetails}>Fetch User Details</button>
      {userDetails && <UserDetailCard user={userDetails} />}
    </div>
  );
}

export default FetchUserPage;
