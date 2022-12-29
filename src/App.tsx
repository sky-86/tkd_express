import React from 'react';
//import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import Calendar from './components/calendar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Calendar />
    </div>
  );
}

export default App;
