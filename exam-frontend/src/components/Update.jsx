import React, { useState, useEffect } from 'react';
import { Link,useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Update() {

  const [name,setName] = useState()
  const [reg,setReg] = useState()
  const [email,setEmail] = useState()
  const [password,setPass] = useState()
  const {id} =  useParams()
  const navigate= useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:3001/getuser/"+id)
    .then(result=>{
        console.log(result)

        setName(result.data.name)
        setReg(result.data.reg)
        setEmail(result.data.email)
        setPass(result.data.pass)
    })
    .catch(err=>console.log(err))
  },[])

  const Submit=(e)=>{
    e.preventDefault();

    axios.put("http://localhost:3001/update/"+id,{name,reg,email,password})
    .then(res=>{
        console.log(res)
        navigate("/adminm")
    })
    .catch(err=>console.log(err))
  }

  return (
    <div>
      <form onSubmit={Submit}>
        <div>
        <label htmlFor="">Name:</label>
        <input type="text" placeholder='Enter your Name' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
        <label htmlFor="">Reg Number:</label>
        <input type="text" placeholder='Enter your Reg Number' value={reg} onChange={(e)=>setReg(e.target.value)} />
        </div>
        <div>
        <label htmlFor="">Email:</label>
        <input type="email" placeholder='Enter your Email' value={email}  onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
        <label htmlFor="">Password:</label>
        <input type="password" placeholder='Enter your Password' value={password} onChange={(e)=>setPass(e.target.value)} />
        </div>
        <button>Update</button>
      </form>
    </div>
  )
}

export default Update
