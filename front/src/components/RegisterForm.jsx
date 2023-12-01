import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { crearCuenta } from '../services/auth.service';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await crearCuenta({ userName, password });

      console.log('Cuenta creada con éxito');

      setUserName('');
      setPassword('');
      setError('');

      navigate('/'); 
    } catch (err) {

      setError(err?.error?.message || 'Error al crear la cuenta');
    }
  };

  return (
<form onSubmit={handleSubmit} class="container-sm">
  <div class="mb-3">
    <label for="inputUsername" class="form-label">Nombre de Usuario:</label>
    <input
      type="text"
      class="form-control"
      id="inputUsername"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
    />
  </div>
  <div class="mb-3">
    <label for="inputPassword" class="form-label">Contraseña:</label>
    <input
      type="password"
      class="form-control"
      id="inputPassword"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <button type="submit" class="btn btn-primary btn-sm">Crear Cuenta</button>
  {error && <p class="text-danger">{error}</p>}
</form>
  );
};


export default RegisterForm;
