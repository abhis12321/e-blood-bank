"use client"
import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
const Auth_context = createContext()

export default function AuthenticationProvider( {children} ) {
    const [user , setUser] = useState();

    const logout = () => {
        setUser();
    }

    const login = (data) => {        
      axios.put(`/api/users` , data)
      .then(res => res.data)
      .then(data => data.success ? setUser(data.user) : alert(data.message))
      .catch(error => console.log(error.message));
    }

    const value = { user , logout , login };

  return (
    <Auth_context.Provider value={value}>
      {children}
    </Auth_context.Provider>
  )
}


export const useAuthentication = () => {
    return useContext(Auth_context);
}