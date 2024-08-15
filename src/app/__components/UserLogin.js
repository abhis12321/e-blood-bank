import React, { useState } from 'react'

export default function UserLogin({ setOption , USER }) {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleLogin = e => {
      e.preventDefault();
      const data = { email , password };
      USER.login(data);
      // console.log(USER);      
    }

  return (
    <div className='w-full min-h-[calc(100vh-70px)] flex flex-col gap-4 items-center justify-center overflow-auto py-4'>      
      <h2 className="font-extrabold text-4xl text-center rounded-md text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600 w-fit pb-2 leading-12 drop-shadow-[0_0_1px_black]">Login Page</h2>
      <form onSubmit={handleLogin} className='bg-blue-50 shadow-[0_0_10px_black] w-[98%] max-w-[500px] py-4 px-5 rounded-2xl min-h-[280px] text-red-950 flex flex-col items-center justify-evenly' autoComplete='on'>

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='bg-blue-950/10 px-2 py-[10px] rounded text-center w-[96%] max-w-[550px] outline-none focus:bg-green-600/15 ring-1 focus:ring-2 ring-violet-700 focus:shadow-[0_0_15px_brown_inset] placeholder:text-gray-600' placeholder='email' name='email' required />

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='bg-blue-950/10 px-2 py-[10px] rounded text-center w-[96%] max-w-[550px] outline-none focus:bg-green-600/15 ring-1 focus:ring-2 ring-violet-700 focus:shadow-[0_0_15px_brown_inset] placeholder:text-gray-600' placeholder='password' name='password' required />

        <div className="flex items-center justify-evenly w-[98%] max-w-[550px] text-xs xs:text-sm" >
          <div onClick={() => setOption(2)} className="text-blue-700 font-semibold underline hover:text-blue-600 hover:scale-110 cursor-pointer">Resend verification link</div>
          <div onClick={() => setOption(1)} className="text-blue-700 font-semibold underline hover:text-blue-600 hover:scale-110 cursor-pointer">Forgot password</div>
        </div>

        <div className="w-[96%] flex justify-between text-white">
          <div onClick={() => setOption(3)} className='w-[120px] xs:w-[150px] text-center rounded-md bg-red-900/95 py-2 hover:bg-red-700 font-mono' >Register New</div>
          <button type='submit' className='w-[120px] xs:w-[150px] text-center rounded-md bg-red-900/95 py-2 hover:bg-red-700 font-mono' >Login</button>
        </div>
      </form>
    </div>
  )
}
