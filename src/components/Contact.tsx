import React from 'react';
import "../App.css"

const Contact: React.FC = () => {
  return (
    <div className="page-container">
      <h2 className="page-title">Contact</h2>
      <p className="page-content">
        Feel free to contact us with any questions or inquiries.
      </p>
      <p className="page-content">
        Email: contact@example.com
      </p>
      <p className="page-content">
        Phone: +1 123-456-7890
      </p>
    </div>
  );
};

export default Contact;