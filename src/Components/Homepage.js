import React from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import EmployeeList from "./EmployeeList";

function Homepage() {
  return (
    <div className="homepage">
      <div>
        <Header />
      </div>
      <div>
        <Searchbar />
      </div>
      <div>
        <EmployeeList />
      </div>
    </div>
  );
}

export default Homepage;
