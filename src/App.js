import React from 'react';
import './App.css';
import Employee from './Components/Employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Miley",
        role: "Manager",
        img: "https://media.licdn.com/dms/image/C5612AQGQL1yyyml1Wg/article-cover_image-shrink_720_1280/0/1591969726534?e=2147483647&v=beta&t=WDzOKR7KvtLZ1w_eQ6b28cXboE9vMtUTCU0X5qu1p4A"
      },
      {
        id: 2,
        name: "Bailey",
        role: "Assistant Manager",
        img: "https://www.labradoodle.biz/wp-content/uploads/2022/04/Screen-Shot-2022-04-17-at-3.36.40-PM.png"
      },
      {
        id: 3,
        name: "Brooks",
        role: "Associate",
        img: "https://images.squarespace-cdn.com/content/v1/602ad3b63ba5033eb862850e/858cb625-7ca8-4df9-a695-a5bb3b102d25/San+Francisco+Goldendoodle+Puppy?format=750w"
      },
      {
        id: 4,
        name: "Sully",
        role: "Intern",
        img: "https://www.heartlandlabradoodles.com/wp-content/uploads/2022/01/Ava-aka-Lorna-Dune-Oct-2021-768x1024.jpg"
      },
      {
        id: 5,
        name: "Gracie",
        role: "Part-time",
        img: "https://www.purina.co.uk/sites/default/files/styles/crop_breed_ugc_image/public/webform/breed_ugc/161494/24221996-e1c9-48f3-9fea-b44512e4247e.jpeg?h=2f4d5fa7&itok=bRQv0opV"
      }
    ]
  )

  function updateEmployee(id, newName, newRole){
    const updateEmployees = employees.map((employee) => {
      if (id === employee.id){
        return {...employee, name:newName, role:newRole}
      }

      return employee;
    });
    setEmployees(updateEmployees);
  }

  function newEmployee (name, role, img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
      <>
      <input 
        type='text' 
        onChange={(e) => {
          setRole(e.target.value)
        }}
      />
      <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {
            const editEmployee = (
              <EditEmployee 
                name={employee.name} 
                role={employee.role} 
                updateEmployee={updateEmployee} 
                id={employee.id}
        />
            );
            return (
              <Employee 
                key={employee.id}
                id={employee.id}
                name={employee.name} 
                role={employee.role} 
                img={employee.img}
                editEmployee={editEmployee}
              />
            );
          })}
      </div>
      <AddEmployee newEmployee={newEmployee} />
      </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  )
};

export default App;
