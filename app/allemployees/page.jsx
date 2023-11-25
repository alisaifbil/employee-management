import EmployeesList from "@/components/EmployeesList";
import React from "react";

const AllEmployees = () => {
  return (
    <div className="m-4"> 
      <EmployeesList showPagination={true} />
    </div>
  );
};

export default AllEmployees;
