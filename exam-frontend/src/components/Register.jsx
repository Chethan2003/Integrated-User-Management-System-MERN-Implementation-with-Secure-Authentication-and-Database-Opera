import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  const [name, setName] = useState('');
  const [reg, setReg] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/register', { name, reg, email, password })
      .then((result) => {
        console.log(result);
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-5">
          <h2 className="text-center mb-4">Welcome Participants ^-^</h2>
          <form onSubmit={Submit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="reg" className="form-label">
                Reg Number:
              </label>
              <input
                type="text"
                className="form-control"
                id="reg"
                placeholder="Enter your Reg Number"
                onChange={(e) => setReg(e.target.value)}
                pattern="^[0-9]+$"
                minLength="10"
                maxLength="10"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your Password"
                onChange={(e) => setPass(e.target.value)}
                pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[!@#])[A-Za-z\d!@#]{6,20}$"
                minLength="6"
                maxLength="20"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>
          <div className="mt-3 text-center">
            <p>
              Already Registered! <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
