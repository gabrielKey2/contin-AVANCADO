import './App.css';
import Sale from './Sale';
import Login from './Login';
import { useState, useEffect } from 'react';
import { Buffer } from 'buffer';

function isTokenOld(jwt_token) {
  const payload = JSON.parse(Buffer.from(jwt_token.split(".")[1], 'base64').toString('binary'));
  const expiration = new Date(payload.exp * 1000);
  const now = new Date();
  const oneHour = 1000 * 60 * 60;

  if (expiration.getTime() - now.getTime() < oneHour) {
    return true;
  } else {
    return false;
  }
}

function App() {

  const [employee, setEmployee] = useState(() => {
    const saved = localStorage.getItem("employee");
    const employeeJSON = JSON.parse(saved);

    if (employeeJSON) {
      if (isTokenOld(employeeJSON.token)) {
        return '';
      }
    }

    return employeeJSON;
  });

  useEffect(() => {
    localStorage.setItem("employee", JSON.stringify(employee));
  }, [employee]);

  if (employee) {
    return <Sale employee={employee} setEmployee={setEmployee} />
  } else {
    return <Login employee={employee} setEmployee={setEmployee} />
  }

}

export default App;
