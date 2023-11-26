import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Update() {
  const [name, setName] = useState('');
  const [reg, setReg] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/getuser/${id}`)
      .then(result => {
        console.log(result);
        setName(result.data.name);
        setReg(result.data.reg);
        setEmail(result.data.email);
        setPass(result.data.pass);
      })
      .catch(err => console.log(err));
  }, [id]);

  const Submit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3001/update/${id}`, { name, reg, email, password })
      .then(res => {
        console.log(res);
        navigate("/adminm");
      })
      .catch(err => console.log(err));
  };

  return (
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={reg}
              onChange={(e) => setReg(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
