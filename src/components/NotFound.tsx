import React from 'react';
import "../App.css"

const NotFound: React.FC = () => {
  return (
    <div className="page-container">
      <h2 className="page-title">404 - Not Found</h2>
      <p className="page-content">
        Oops! The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;