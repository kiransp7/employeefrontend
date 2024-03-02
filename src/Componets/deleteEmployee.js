import React, { useState } from 'react';
import axios from 'axios';

const DeleteEmployee = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://15.207.55.139:8080/deleteById/${employeeId}`);
      setMessage(response.data.message);
      window.location.reload();
      setEmployeeId('');
    } catch (error) {
      console.error('Error deleting employee:', error);
      setMessage('Error deleting employee.');
    }
  };


  return (
    <div className="container">
      <h1 className='text-secondary'>Delete Employee</h1>
      <div className="form-group">
        <label htmlFor="employeeId">Employee ID:</label>
        <input
          type="number"
          className="form-control"
          id="employeeId"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
      </div>
      &nbsp;  &nbsp;
  <div>
  <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      {message && <p>{message}</p>}
  </div>
      
    </div>
  );
};

export default DeleteEmployee;
