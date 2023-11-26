import React,{useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from "axios";

function Register() {

  const [name,setName] = useState()
  const [reg,setReg] = useState()
  const [email,setEmail] = useState()
  const [password,setPass] = useState()
  const navigate=useNavigate()

  const Submit=(e)=>{
    e.preventDefault();

    axios.post("http://localhost:3001/register",{name,reg,email,password})
    .then(result=>{
      console.log(result)
      navigate("/login")
    })
    .catch(err=>console.log(err))
  }

  return (
    <>
    <div>
      <h2> Welcome Participents ^-^</h2>
      <div>
      <form onSubmit={Submit}>
        <div>
        <label htmlFor="">Name:</label>
        <input type="text" placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="">Reg Number:</label>
        <input type="text" placeholder='Enter your Reg Number' onChange={(e)=>setReg(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="">Email:</label>
        <input type="email" placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="">Password:</label>
        <input type="password" placeholder='Enter your Password' onChange={(e)=>setPass(e.target.value)}/>
        </div>
        <button>Sign Up</button>
      </form>
      </div>
      <div>
        <p>Already Registered! <Link to='/login'> Login </Link></p>
      </div>
    </div>
    </>
  )
}

export default Register
