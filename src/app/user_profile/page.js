"use client"

import React, { useState } from 'react'
import UserRegistation from '../__components/UserRegistation'
import UserLogin from '../__components/UserLogin';
import { useAuthentication } from '../__components/AuthenticationProvider';

export default function page() {
  const [option , setOption] = useState(0);
  const USER = useAuthentication();  

  return (
    <>{
      USER?.user ? <h1>{USER?.user?.name}</h1>
      :
      option == 0 ? <UserLogin setOption={setOption} USER={USER}/>
      :
      <UserRegistation setOption={e => setOption(0)} USER={USER}/>
      }

      {/* <button className="p-10 bg-red-600 active:bg-green-600 absolute z-50" onClick={() => console.log(USER)}>click</button> */}
    </>
  )
}
