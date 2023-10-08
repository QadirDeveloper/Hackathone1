"use client"
import React, { useState } from 'react';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../config/firebase';

const CourseDropdown = () => {
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleSelectChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleAddCourse = async () => {
    try {
      const docRef = await addDoc(collection(db, 'class'), {
        courseName: selectedCourse,
      });
      console.log('Document written with ID: ',);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className='courses'>
      <h2>Select a Course:</h2>
      <input className="corinput" type="text" placeholder="Enter name" onChange={(e) => setUserName(e.target.value)} /><br />
      <input className="corinput" type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} /><br />
      <input className="corinput" type="text" placeholder="Enter phone" onChange={(e) => setphone(e.target.value)} /><br />

      <select
        value={selectedCourse}
        onChange={handleSelectChange}
        style={{ width: '800px', height: '40px', fontSize: '30px' }}>


        <option className='value' value="">Select a course</option>
        <option value="Web and Mobile Application">
          Web and Mobile Application
        </option>
        <option value="AI & Chatbot">AI & Chatbot</option>
        <option value="Graphic desining">Graphic desining</option>
        <option value="Video Animation">Video Animation</option>
        <option value="3d Animation">3d Animation</option>
        <option value="CCNA">CCNA</option>
        {/* Add more course options as needed */}
      </select>
      <button
        style={{ marginBottom: '15px' }}
        type="button"
        className="btn btn-outline-info"
        onClick={handleAddCourse}
      >
        Submit
      </button>

      {selectedCourse && <p>You selected: {selectedCourse}</p>}
    </div>
  );
};

const Home = () => {
  return (
    <div>

      <CourseDropdown />
    </div>
  );
};

export default Home;

