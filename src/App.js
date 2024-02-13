import React from 'react';
import './App.css';
import Employee from './Components/Employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import Header from './Components/Header';
import Employees from './Pages/Employees'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Team from './Pages/Team';

function App() {
  return (
  <BrowserRouter>
    <Header>
      <Routes>
        <Route path='/employees' element={<Employees/>}/>

        <Route path='/team' element={<Team/>}/>
      </Routes>
    </Header>
  </BrowserRouter>
  )
};

export default App;
