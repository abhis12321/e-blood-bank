"use client"
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
const Auth_context = createContext()

export default function AuthenticationProvider({ children }) {
  const [user, setUser] = useState();

  const logout = () => {    
    setUser();
    localStorage.removeItem("e-blood-bank");
  }

  const login = ({ email, password }) => {
    axios.put(`/api/users`, { email, password })
      .then(res => res.data)
      .then(data => data.success ? (setUser(data.user) | localStorage.setItem('e-blood-bank', JSON.stringify({email , password}))) : alert(data.message))
      .catch(error => console.log(error.message));
  }

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("e-blood-bank"));
    data && login(data);
  }, []);

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