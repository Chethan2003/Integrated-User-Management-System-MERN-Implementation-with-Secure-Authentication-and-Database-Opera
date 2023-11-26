import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Success() {
  const [user, setUser] = useState(null); // Initialize user as null

  const { name } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3001/"+name)
      .then(result => {
        console.log(result);
        setUser(result.data);
      })
      .catch(err => console.log(err));
  }, [name]); // Include name as a dependency for useEffect

  return (
    <>
      <div>
        {user && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>RegNo</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.name}</td>
                <td>{user.reg}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Success;
