import './Login.css';
import { useState } from "react";

function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function do_login() {
    fetch('http://localhost:3000/api/auth/employee/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then((res) => {
        if (res.ok) {
          res.json().then(json => {
            props.setEmployee(json.employee);
          })
        } else {
          alert('E-mail/senha iválidos');
        }
      })
  }

  return (
    <div className="Login">
      <h1>PetTopStore</h1>
      <h2>PDV - Autenticação</h2>
      <div className="LoginBox">
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onInput={e => setEmail(e.target.value)}
        /><br />
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onInput={e => setPassword(e.target.value)}
        /><br />
        <button
          onClick={do_login}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;