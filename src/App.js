import React from 'react';
import './App.css';
import Employee from './Components/Employee';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App bg-red-300">
      {showEmployees ? (
      <>
      <input type='text' onChange={(e) => {
          setRole(e.target.value)
      }}
        />
          <Employee name='Miley' role='Manager'/>
          <Employee name='Bailey' role={role}/>
      </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  )
};

export default App;
