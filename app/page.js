"use client"
import React, { useState } from 'react';

import { Navbar, Nav } from 'react-bootstrap';

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarStyle = {
    width: '250px',
    height: '100%',
    backgroundColor: '#356',
    color: 'white',
    position: 'fixed',
     top: '0',
    left: sidebarOpen ? '0' : '-250px',
    transition: 'left 0.3s ease-in-out',
    zIndex: '1000',
    paddingTop: '60px',
  };

  const contentStyle = {
    marginLeft: sidebarOpen ? '250px' : '0',
    transition: 'margin 0.3s ease-in-out',
    padding: '20px',
  };

  return (
    <div><div style={{textAlign:"right"}}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#" ></Navbar.Brand>
      </Navbar></div>
      <div style={sidebarStyle}>
        <Nav className="flex-column">
          <Nav.Link href="./Dashboard" className='navbaar'>Dashboard</Nav.Link><br/>
          <Nav.Link href="./Students" className='navbaar'>Students</Nav.Link><br/>
          <Nav.Link href="Courses" className='navbaar'>Courses</Nav.Link><br/>
          <Nav.Link href="./Attendance" className='navbaar'>Attendance</Nav.Link>
        </Nav>
      </div>
      <div style={contentStyle}>
       
        <button  type="button" class="btn btn-outline-secondary" onClick={toggleSidebar} className='buton' >Open Sidebar</button>
        <h1>Main Content</h1>
        <p>Welcome to the main content area. Click the button to toggle the sidebar.</p>
      </div>
    </div>
  );
};

export default Home;