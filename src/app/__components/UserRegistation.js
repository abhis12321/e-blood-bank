"use client"

import React, { useState } from 'react'

export default function UserRegistation() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [DoB, setDoB] = useState('');
  const [address , setAddress] = useState('');
  const [gender , setGender] = useState('male');
  const [bloodGroup , setBloodGroup] = useState('A+');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name , email , phoneNo , aadharNo , DoB , address , gender , bloodGroup);
  }

  return (
    <div className='fixed top-0 bottom-0 w-[100vw] min-h-[100vh] flex items-center justify-center'>
      <form className="flex flex-wrap gap-2 items-center justify-center py-5 px-3 sm:px-5 lg:px-8 w-[98%] max-w-[800px] bg-green-300/50 rounded-md" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center w-full md:w-[48%] max-w-[300px]">
          <label htmlFor="name" className='text-[10px] font-semibold text-violet-800/70'>name</label>
          <input type="text" className="w-full py-[6px] px-3 font-mono bg-blue-700/15 ring-1 rounded outline-none focus:ring-violet-800 focus:bg-violet-800/15 text-sm" placeholder='enter you name' id='name' value={name} onChange={e => setName(e.target.value)} required/>
        </div>
        <div className="flex flex-col justify-center w-full md:w-[48%] max-w-[300px]">
          <label htmlFor="email" className='text-[10px] font-semibold text-violet-800/70'>email</label>
          <input type="text" className="w-full py-[6px] px-3 font-mono bg-blue-700/15 ring-1 rounded outline-none focus:ring-violet-800 focus:bg-violet-800/15 text-sm" placeholder='enter you email' id='email' value={email} onChange={e => setEmail(e.target.value)} required/>
        </div>

        <div className="flex flex-col justify-center w-full md:w-[48%] max-w-[300px]">
          <label htmlFor="phoneNo" className='text-[10px] font-semibold text-violet-800/70'>mobile</label>
          <input type="number" className="w-full py-[6px] px-3 font-mono bg-blue-700/15 ring-1 rounded outline-none focus:ring-violet-800 focus:bg-violet-800/15 text-sm" placeholder='enter you phone number' id='phoneNo' value={phoneNo} onChange={e => setPhoneNo(e.target.value)} required/>
        </div>
        <div className="flex flex-col justify-center w-full md:w-[48%] max-w-[300px]">
          <label htmlFor="aadharNo" className='text-[10px] font-semibold text-violet-800/70'>aadhar</label>
          <input type="number" className="w-full py-[6px] px-3 font-mono bg-blue-700/15 ring-1 rounded outline-none focus:ring-violet-800 focus:bg-violet-800/15 text-sm" placeholder='enter you Aadhar number' id='aadharNo' value={aadharNo} onChange={e => setAadharNo(e.target.value)} required/>
        </div>
        <div className="flex flex-col justify-center w-full md:w-[48%] max-w-[300px]">
          <label htmlFor="d.o.b." className='text-[10px] font-semibold text-violet-800/70'>D.O.B</label>
          <input type="date" className="w-full py-[6px] px-3 font-mono bg-blue-700/15 ring-1 rounded outline-none focus:ring-violet-800 focus:bg-violet-800/15 text-sm" placeholder='enter you age' id='d.o.b.' value={DoB} onChange={e => setDoB(e.target.value)} required/>
        </div>
        <div className="flex flex-col justify-center w-full md:w-[48%] max-w-[300px]">
          <label htmlFor="address" className='text-[10px] font-semibold text-violet-800/70'>address</label>
          <input type="text" className="w-full py-[6px] px-3 font-mono bg-blue-700/15 ring-1 rounded outline-none focus:ring-violet-800 focus:bg-violet-800/15 text-sm" placeholder='enter you address' id='address' value={address} onChange={e => setAddress(e.target.value)} required/>
        </div>

        <div className="flex flex-col justify-center w-full md:w-[48%] max-w-[300px]">
          <label htmlFor="gender" className='text-[10px] font-semibold text-violet-800/70'>gender</label>
          <select name="status" id="gender" className="w-full py-[6px] px-3 font-mono bg-blue-700/15 ring-1 rounded outline-none focus:ring-violet-800 focus:bg-violet-800/15 text-sm" placeholder='male' value={gender} onChange={e => setGender(e.target.value)}>
            <option value="male" className='bg-slate-950/30'>male</option>
            <option value="female" className='bg-slate-950/30'>female</option>
            <option value="others" className='bg-slate-950/30'>others</option>
          </select>
        </div>
        <div className="flex flex-col justify-center w-full md:w-[48%] max-w-[300px]">
          <label htmlFor="blood-group" className='text-[10px] font-semibold text-violet-800/70'>blood group</label>
          <select name="status" id="blood-group" className="w-full py-[6px] px-3 font-mono bg-blue-700/15 ring-1 rounded outline-none focus:ring-violet-800 focus:bg-violet-800/15 text-sm" placeholder='male' value={bloodGroup} onChange={e => setBloodGroup(e.target.value)}>
            <option value="A+" className='bg-slate-950/30'>A+</option>
            <option value="A-" className='bg-slate-950/30'>A-</option>
            <option value="B+" className='bg-slate-950/30'>B+</option>
            <option value="B-" className='bg-slate-950/30'>B-</option>
            <option value="AB+" className='bg-slate-950/30'>AB+</option>
            <option value="AB-" className='bg-slate-950/30'>AB-</option>
            <option value="O+" className='bg-slate-950/30'>O+</option>
            <option value="O-" className='bg-slate-950/30'>O-</option>
          </select>
        </div>

        <div className="flex flex-col justify-center w-full md:w-[48%] max-w-[300px]">
          <input type="submit" value="register" className='py-[6px] px-8 bg-red-800 hover:bg-red-600 active:bg-violet-700 rounded-lg text-white font-serif' />
        </div>
      </form>
    </div>
  )
}
