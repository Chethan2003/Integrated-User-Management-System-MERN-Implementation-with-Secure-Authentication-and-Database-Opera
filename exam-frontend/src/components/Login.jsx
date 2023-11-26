import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [name, setName] = useState('');
  const [password, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();

    if (name === 'admin') {
      navigate('/adminm');
    } else {
      axios
        .get(`http://localhost:3001/getbyname/${name}`)
        .then((result) => {
          if (result.data.name === name) {
            if (result.data.password === password) {
              navigate(`/success/${name}`);
            } else {
              setErrorMessage('Incorrect password');
              alert('Invalid password !');
            }
          } else {
            setErrorMessage("User doesn't exist");
          }
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage('Error occurred');
        });
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-5">
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
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>

          {errorMessage && (
            <div className="mt-3 text-center">
              <p style={{ color: 'red' }}>{errorMessage}</p>
              <Link to="/">Register here!</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
