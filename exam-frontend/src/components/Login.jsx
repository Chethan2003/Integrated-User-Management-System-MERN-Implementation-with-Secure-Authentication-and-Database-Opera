import React,{useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from "axios";

function Login() {

  const [name,setName] = useState()
  const [password,setPass] = useState()
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();

    if(name === "admin"){
      navigate("/adminm")
    }
    else{
      axios.get(`http://localhost:3001/${name}`)
      .then(result => {
        if (result.data.name === name) {
          if (result.data.password === password) {
            navigate(`/success/${name}`);
          } else {
            setErrorMessage("Incorrect password");
            alert("Invalid password !")
          }
        } else {
          setErrorMessage("User doesn't exists");
        }
      })
      .catch(err => {
        console.log(err);
        setErrorMessage("Error occurred");
      });
    }
  };
  

  return (
    <>
      <div>
        <form onSubmit={Submit}>
        <label htmlFor="">Name:</label>
        <input type="text" placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor="">Password:</label>
        <input type="password" placeholder='Enter your Password' onChange={(e)=>setPass(e.target.value)}/>

        <button>Login</button>
        </form>

        {errorMessage && (
          <div>
            <p style={{ color: 'red' }}>{errorMessage}</p>
            <Link to="/">Register here !</Link>
          </div>
        )}

      </div>
    </>
  )
}

export default Login
