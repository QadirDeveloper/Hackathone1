// import React, { useState } from 'react';
"use client"
import { useState } from 'react';
const AttendanceForm = () => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(`Date: ${date}, Name: ${name}, Status: ${status}`);
  };

  return (
    <form onSubmit={handleSubmit}>
    
      <fieldset className='fieldset'>
      <h2> Students Attendance</h2>
      <div>
        <label>Date:</label><br/>
        <input className='atten' style={{width:"200px",height:"30px"}} type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Name:</label><br/>
        <input className='atten' style={{width:"200px",height:"30px"}} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder=' Name'/>
      </div>
      <div>
        <label>Status:</label><br/>
        <select style={{width:"200px",height:"30px"}} value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="present">Present</option>
          <option value="absent">Absent</option>
        
        </select>
      </div>
      <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default AttendanceForm;