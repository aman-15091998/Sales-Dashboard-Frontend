import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({error, message}) => {
  return (
    <div className="error-container">
      <h1 className="error-title">{error || "Error 404"}</h1>
      <p className="error-message">{message || "Page not found!"}</p>
      <Link to="/" className="error-link">Go to Home</Link>
    </div>
  );
};

export default ErrorPage;