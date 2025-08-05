import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ textDecoration: "underline", color: "#007bff" }}>
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
