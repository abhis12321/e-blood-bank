"use client"

import axios from 'axios';
import { useState } from 'react'

export default function UserRegistation({ setOption }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [DoB, setDoB] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('male');
  const [bloodGroup, setBloodGroup] = useState('A+');
  const [coordinates, setcoordinates] = useState({ latitude: null, longitude: null });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(postion => {
        setcoordinates({ latitude: postion.coords.latitude, longitude: postion.coords.longitude })
      }, error => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
          default:
            console.log("An unknown error occurred.");
            break;
        }
      })
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    let body = { name, email, phoneNo, aadharNo, DoB: new Date(DoB), address, gender, bloodGroup, password, coordinates }

    axios.post('/api/users', body)
      .then(response => response.data)
      .then(data => alert(data.message) | (data.success && setOption(0)))
      .catch(error => console.log(error.message))
  }

  return (
    <div className='h-nav w-full flex items-center justify-center overflow-auto py-4'>
      <form className="flex flex-wrap sm:gap-2 items-center justify-center sm:justify-between pt-4 pb-6 px-3 sm:px-5 lg:px-8 w-[98%] xs:w-[80%] sm:w-full max-w-[645px] bg-white rounded-md shadow-[1px_1px_5px_black]" onSubmit={handleSubmit}>
        <div className="w-full text-2xl font-mono font-extrabold text-center text-red-950">Enter your details</div>
        <div className="flex flex-col justify-center w-full sm:w-[48%] max-w-[300px]">
          <label htmlFor="name" className='text-[10px] font-semibold text-violet-800/70 after:content-["*"] after:ml-0.5 after:text-red-500/90 after:text-[.8rem]'>name</label>
          <input type="text" className="w-full font-mono bg-blue-700/15 ring-1 rounded outline-none focus:ring-violet-800 focus:bg-violet-800/15 focus:shadow-[0_0_8px_black_inset] text-sm py-[6px] px-3" placeholder='enter you name' id='name' value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="flex flex-col justify-center w-full sm:w-[48%] max-w-[300px]">
          <label htmlFor="email" className='text-[10px] font-semibold text-violet-800/70 after:content-["*"] after:ml-0.5 after:text-red-500/90 after:text-[.8rem]'>email</label>
          <input type="text" className="w-full font-mono bg-blue-700/15 ring-1 rounded outline-none focus:ring-violet-800 focus:bg-violet-800/15 focus:shadow-[0_0_8px_black_inset] text-sm py-[6px] px-3" placeholder='enter you email' id='email' value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="flex flex-col justify-center w-full sm:w-[48%] max-w-[300px]">
          <label htmlFor="password" className='text-[10px] font-semibold text-violet-800/70 after:content-["*"] after:ml-0.5 after:text-red-500/90 after:text-[.8rem]'>password</label>
          <input type="password" className="w-full font-mono bg-blue-700/15 ring-1 rounded outline-none focus:ring-violet-800 focus:bg-violet-800/15 focus:shadow-[0_0_8px_black_inset] text-sm py-[6px] px-3" placeholder='password' id='password' value={password} onChange={e => setPassword(e.target.value)} required />
        </div>

        <div className="flex flex-col justify-center w-full sm:w-[48%] max-w-[300px]">
          <label htmlFor="phoneNo" className='text-[10px] font-semibold text-violet-800/70 after:content-["*"] after:ml-0.5 after:text-red-500/90 after:text-[.8rem]'>mobile</label>
          <input type="number" className="w-full font-mono bg-blue-700/15 ring-1 rounded outline-none focus:ring-violet-800 focus:bg-violet-800/15 focus:shadow-[0_0_8px_black_inset] text-sm py-[6px] px-3" placeholder='enter you phone number' id='phoneNo' value={phoneNo} onChange={e => setPhoneNo(e.target.value)} required />
        </div>
        <div className="flex flex-col justify-center w-full sm:w-[48%] max-w-[300px]">
          <label htmlFor="aadharNo" className='text-[10px] font-semibold text-violet-800/70 after:content-["*"] after:ml-0.5 after:text-red-500/90 after:text-[.8rem]'>aadhar</label>
          <input type="number" className="w-full font-mono bg-blue-700/15 ring-1 rounded outline-none focus:ring-violet-800 focus:bg-violet-800/15 focus:shadow-[0_0_8px_black_inset] text-sm py-[6px] px-3" placeholder='enter you Aadhar number' id='aadharNo' value={aadharNo} onChange={e => setAadharNo(e.target.value)} required />
        </div>
        <div className="flex flex-col justify-center w-full sm:w-[48%] max-w-[300px]">
          <label htmlFor="d.o.b." className='text-[10px] font-semibold text-violet-800/70 after:content-["*"] after:ml-0.5 after:text-red-500/90 after:text-[.8rem]'>D.O.B</label>
          <input type="date" className="w-full font-mono bg-blue-700/15 ring-1 rounded outline-none focus:ring-violet-800 focus:bg-violet-800/15 focus:shadow-[0_0_8px_black_inset] text-sm py-[5px] px-3" placeholder='enter you age' id='d.o.b.' value={DoB} onChange={e => setDoB(e.target.value)} required />
        </div>
        <div className="flex flex-col justify-center w-full sm:w-[48%] max-w-[300px]">
          <label htmlFor="address" className='text-[10px] font-semibold text-violet-800/70 after:content-["*"] after:ml-0.5 after:text-red-500/90 after:text-[.8rem]'>address</label>
          <input type="text" className="w-full font-mono bg-blue-700/15 ring-1 rounded outline-none focus:ring-violet-800 focus:bg-violet-800/15 focus:shadow-[0_0_8px_black_inset] text-sm py-[6px] px-3" placeholder='enter you address' id='address' value={address} onChange={e => setAddress(e.target.value)} required />
        </div>
        <div className="flex flex-col justify-center w-full sm:w-[48%] max-w-[300px]" onClick={getLocation}>
          <label className='text-[10px] font-semibold text-violet-800/70 after:content-["*"] after:ml-0.5 after:text-red-500/90 after:text-[.8rem]'>location</label>
          <div className='w-full font-mono bg-blue-700/15 ring-1 rounded outline-none active:ring-violet-800 active:bg-violet-800/15 active:shadow-[0_0_8px_black_inset] text-[14px] py-[5px] flex items-center justify-around text-gray-700 cursor-pointer'>
            <div className="flex">latitude:<span className='text-red-950'>{coordinates.latitude}</span></div>
            <div className="flex">longitude:<span className='text-red-950'>{coordinates.longitude}</span></div>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full sm:w-[48%] max-w-[300px]">
          <label htmlFor="gender" className='text-[10px] font-semibold text-violet-800/70 after:content-["*"] after:ml-0.5 after:text-red-500/90 after:text-[.8rem]'>gender</label>
          <select name="status" id="gender" className="w-full font-mono bg-blue-700/15 ring-1 rounded outline-none focus:ring-violet-800 focus:bg-violet-800/15 focus:shadow-[0_0_8px_black_inset] text-sm py-[7px] px-3" placeholder='male' value={gender} onChange={e => setGender(e.target.value)}>
            <option value="male" className='bg-slate-950/30'>male</option>
            <option value="female" className='bg-slate-950/30'>female</option>
            <option value="others" className='bg-slate-950/30'>others</option>
          </select>
        </div>
        <div className="flex flex-col justify-center w-full sm:w-[48%] max-w-[300px]">
          <label htmlFor="blood-group" className='text-[10px] font-semibold text-violet-800/70 after:content-["*"] after:ml-0.5 after:text-red-500/90 after:text-[.8rem]'>blood group</label>
          <select name="status" id="blood-group" className="w-full font-mono bg-blue-700/15 ring-1 rounded outline-none focus:ring-violet-800 focus:bg-violet-800/15 focus:shadow-[0_0_8px_black_inset] text-sm py-[7px] px-3" placeholder='male' value={bloodGroup} onChange={e => setBloodGroup(e.target.value)}>
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

        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-2 mt-[10px] sm:mt-0">
          <div className='w-full sm:w-[48%] max-w-[300px] py-[6px] px-8 text-center ring-2 ring-orange-800 bg-orange-800 hover:bg-orange-600 active:bg-violet-700 rounded text-white font-serif text-sm cursor-pointer' onClick={setOption}>cancel</div>
          <input type="submit" value="register" className='w-full sm:w-[48%] max-w-[300px] py-[6px] px-8 text-center ring-2 ring-red-800 bg-red-800 hover:bg-red-600 active:bg-violet-700 rounded text-white font-serif text-sm cursor-pointer' />
        </div>
      </form>
    </div>
  )
}
