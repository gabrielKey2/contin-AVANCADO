import { useState } from 'react';  

function AddClient(props) { 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  function salvarCliente() {
    fetch('http://localhost:3000/api/auth/client/registration', {
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.employee.token}`
      },
      body: JSON.stringify({ name, email, password })
    }).then(res => {
      if (res.ok) {
        alert('cliente salvo com sucesso');
        res.json().then(json => {
          props.clientCreated(json.clienteID)
        });
      } else {
        alert('falha ao salvar cliente');
        props.cancelCreateClient();
      }
    })
  }
  return (
    <div>
      <h2>Novo cliente</h2>
      <div>
        Nome: <input name="name" value={name} onInput={(e) => {
          setName(e.target.value);
        }}/><br/>
        E-Mail: <input name="email" value={email} onInput={(e) => {
          setEmail(e.target.value);
        }}/><br/>
        Senha: <input name="password" type="password" value={password} onInput={(e) => {
          setPassword(e.target.value);
        }}/><br/>
        <button onClick={salvarCliente}>
          Salvar cliente
        </button>
        <button onClick={() => {
          props.cancelCreateClient()
        }}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default AddClient;