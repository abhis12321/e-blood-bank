"use client"

import React, { useState } from 'react'
import UserRegistation from '../__components/UserRegistation'
import UserLogin from '../__components/UserLogin';
import { useAuthentication } from '../__components/AuthenticationProvider';
import UserProfile from '../__components/UserProfile';
import UserLogout from '../__components/UserLogout';
import RequestToDonate from '../__components/RequestToDonate';

export default function page() {
  const [option, setOption] = useState(0);
  const USER = useAuthentication();

  return (
    <>
      {
        USER?.user ?
          (option == 3 ? <UserLogout USER={USER} setOption={setOption} />
            : option == 4 ? <RequestToDonate user={USER?.user} setOption={setOption} />
            : <UserProfile user={USER?.user} setOption={setOption} />)
          :
          option == 0 ? <UserLogin setOption={setOption} USER={USER} />
            :
            <UserRegistation setOption={e => setOption(0)} USER={USER} />
      }
    </>
  )
}
