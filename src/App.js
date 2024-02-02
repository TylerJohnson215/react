import './App.css';
import Employee from './Components/Employee';

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
      <>
          <Employee name='Miley' role='Manager'/>
          <Employee name='Bailey'/>
      </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  )
};

export default App;
