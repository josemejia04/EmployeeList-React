import React from "react";
import image from "./profile-picture.png";

function Employeelistitem() {
  return (
    <div className="employee-list-item">
      <div>
        <img src={image} className="profile-picture" />
      </div>
      <div>
        <h2>John Doe</h2>
        <p>VP of Marketing</p>
      </div>
    </div>
  );
}

export default Employeelistitem;
