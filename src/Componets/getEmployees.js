import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function GetEmployees() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await axios.get('http://15.207.55.139:8080/getAllEmployee', {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
          setEmployees(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    const handleRefresh = () => {
      window.location.reload(); 
    };


  return (
    <>
    <div className="container" style={{marginLeft:"0px"}} >
      <button className="btn btn-primary   btn-sm" onClick={handleRefresh}>Refresh Page</button>
    </div>

    <div className="container">
    <h1 className='text-secondary'> Employee List</h1>
    <hr></hr>
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Location</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.location}</td>
            <td>{employee.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
</div>
  </>
  )
}

export default GetEmployees
