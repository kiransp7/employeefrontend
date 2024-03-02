import React, { useState } from 'react';
import axios from 'axios';

const RegisterEmployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    department: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://15.207.55.139:8080/addEmp', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      window.location.reload();
      setMessage(response.data.message);

      setFormData({ name: '', location: '', department: '' });
    } catch (error) {
      console.error('Error registering employee:', error);
      setMessage('Error registering employee.');
    }
  };

  return (
    <div className="container">
    <div>
    <h1 className='text-secondary'>Register Employee</h1>
    </div>


      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            className="form-control"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-success">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterEmployee;
