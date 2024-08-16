"use client"

import React, { useEffect, useState } from 'react'
import UserRegistation from '../__components/UserRegistation'
import UserLogin from '../__components/UserLogin';
import { useAuthentication } from '../__components/AuthenticationProvider';
import UserProfile from '../__components/UserProfile';
import UserLogout from '../__components/UserLogout';
import RequestToDonate from '../__components/DonationForm';
import RequestToBeDonated from '../__components/ReceivingForm';

export default function page() {
  const [option, setOption] = useState(-1);
  const USER = useAuthentication();
  useEffect(() => {
    let timer = setTimeout(() => {
      setOption(0);
    }, 1000);

    return () => {
      clearTimeout(timer);
    }
  }, [])

  return (
    <div className='min-h-[calc(100vh-70px)] w-full flex items-center justify-center'>
      {option === -1 ?
        <div className="mx-auto h-40 w-40 rounded-full animate-spin border-t-4 border-slate-950 flex items-center justify-center">
          <div className="h-24 w-24 rounded-full border-r-4 border-slate-900"> </div>
        </div>
        :
        USER?.user ?
          (option == 3 ? <UserLogout USER={USER} setOption={setOption} />
            : option == 0 ? <UserProfile user={USER?.user} setOption={setOption} />
              : option == 4 ? <RequestToDonate user={USER?.user} setOption={setOption} />
                : <RequestToBeDonated user={USER?.user} setOption={setOption} />)
          :
          option == 0 ? <UserLogin setOption={setOption} USER={USER} />
            :
            <UserRegistation setOption={e => setOption(0)} USER={USER} />
      }
    </div>
  )
}
