import React, { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';

function Admin() {
    const [users, setUser] = useState([]) // Initialize user as null
  
    useEffect(() => {
        axios.get("http://localhost:3001")
          .then(result => {
            console.log(result)
            setUser(result.data)
          })
          .catch(err => console.log(err));
      }, [])

      const handleDelete= (id)=>{

        axios.delete("http://localhost:3001/deleteUser/"+id)
        .then(result=>{
            console.log(result)
            window.location.reload()
        })
        .catch(err=>console.log(err))
      }
      
  
    return (
      <>
        <div>
          {(
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>RegNo</th>
                  <th>Password</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {
                    users.map((user) => {
                            return <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.reg}</td>
                            <td>{user.password}</td>
                            <td>
                            <Link to={`/update/${user._id}`}>Update</Link>
                                <button  
                                onClick={(e)=> handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    })
                }
                {/* {users.map((user)=>(
                        <tr>
                        <td>{user.name}</td>
                        <td>{user.reg}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                        <Link to={`/update/${user._id}`}>Update</Link>
                        <button onClick={(e)=> handleDelete(user._id)}>Delete</button>
                        </td>
                        </tr>
                ))
                } */}
              </tbody>
            </table>
          )}
        </div>
      </>
    );
}

export default Admin
