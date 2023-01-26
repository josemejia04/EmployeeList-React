import React from "react";
import image from "./profile-picture.png";

function EmployeePage() {
  return (
    <div className="employee-page">
      <div className="employee-page-header">
        <h1>Employee</h1>
      </div>
      <div className="employee-page-profile">
        <img src={image} className="profile-picture-employee" />
        <div>
          <h2>John Doe</h2>
          <p>VP of Marketing</p>
        </div>
      </div>

      <div className="employee-info">
        <h2>Call Office</h2>
        <p>781-000-0002</p>
      </div>

      <div className="employee-info">
        <h2>Call Mobile</h2>
        <p>617-000-0002</p>
      </div>

      <div className="employee-info">
        <h2>Call Office</h2>
        <p>617-000-0002</p>
      </div>

      <div className="employee-info">
        <h2>Email</h2>
        <p>jtaylor@fakemail.com</p>
      </div>
    </div>
  );
}

export default EmployeePage;
