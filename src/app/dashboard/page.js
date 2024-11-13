"use client"

import { useState } from 'react'
import UserRegistation from '../__components/UserRegistation'
import UserLogin from '../__components/UserLogin';
import { useAuthentication } from '../__components/AuthenticationProvider';
import UserProfile from '../__components/UserProfile';
import UserLogout from '../__components/UserLogout';
import Donations from '../__components/Donations';
import DonationForm from '../__components/DonationForm';
import ReceivingForm from '../__components/ReceivingForm';
import Receivings from '../__components/Receivings';

export default function page() {
  const [option, setOption] = useState(0);
  const { user } = useAuthentication();

  return (
    <div className='min-h-[calc(100vh-70px)] w-full flex items-center justify-center bg-black/20'>
      {
      user ?
          (option == 0 ? <UserProfile setOption={setOption} />
            : option == 1 ? <UserLogout setOption={setOption} />
              : option == 2 ? <Donations donorId={user._id} setOption={setOption} />
                : option === 3 ? <Receivings receiverId={user?._id} setOption={setOption} />
                  : option == 4 ? <DonationForm user={user} setOption={setOption} />
                    : option == 5 && <ReceivingForm user={user} setOption={setOption} />)
          :
          option == 0 ? <UserLogin setOption={setOption} />
            :
            <UserRegistation setOption={e => setOption(0)}/>
      }
    </div>
  )
}
