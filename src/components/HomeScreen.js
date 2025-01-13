import React from "react";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div>
      <h1>Welcome to the User App</h1>
      <div>
        <Link to="/form">
          <button>Form</button>
        </Link>
      </div>
      <div>
        <Link to="/fetch-user">
          <button>API</button>
        </Link>
      </div>
    </div>
  );
}

export default HomeScreen;
