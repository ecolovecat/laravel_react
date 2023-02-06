import React, { useState, useEffect } from 'react';
import EmployeeTableRow from "./EmployeeTableRow";
import axios from 'axios';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployeeList = async () => {
      const res = await axios.get('/get/employee/list');
      setEmployees(res.data);
    };
    getEmployeeList();
  }, []);

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">####</th>
              <th scope="col">Name</th>
              <th scope="col">Salary</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <EmployeeTableRow index={index + 1} data={employee} key={employee.id} />
            ))}
            <EmployeeTableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
