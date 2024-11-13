"use client"
import axios from 'axios';
import { createContext, useContext, useState } from 'react'
const Auth_context = createContext()

export default function AuthenticationProvider({ children , initialUser }) {
  const [user, setUser] = useState(initialUser);

  const logout = () => {    
    setUser();
    axios.delete(`/api/users`)
      .then(res => res.data)
      .then(data => console.log(data.message))
      .catch(error => console.error(error.message));
    // localStorage.removeItem("e-blood-bank");
  }

  const login = ({ email, password }) => {
    axios.put(`/api/users`, { email, password })
      .then(res => res.data)
      .then(data => { 
        setUser(data.user);  
        alert(data.message);
      })
      .catch(error => console.error(error.message));
  }

  const value = { user, logout, login };
  return (
    <Auth_context.Provider value={value}>
      {children}
    </Auth_context.Provider>
  )
}


export const useAuthentication = () => {
  return useContext(Auth_context);
}