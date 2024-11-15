import axios from 'axios';
import React, { useState } from 'react'

export default function ReceivingForm({ user, setOption }) {
    const [receivedUnits, setReceivedUnits] = useState(1);
    const [prescribedBy, setPrescribedBy] = useState('');
    const [hospitalName, setHospitalName] = useState('');

    const handleWannaDonate = e => {
        e.preventDefault();
        if (receivedUnits) {
            axios.post("/api/receiver", { receiverId: user._id, receivedUnits, prescribedBy, hospitalName, prescription: "prescription" })
                .then(res => res.data)
                .then(data => alert(data.message))
                .catch(error => console.log(error.message))
            setOption(0)
        }
    }

    return (
        <div className='h-nav w-full flex flex-col gap-4 items-center justify-center overflow-auto py-4'>
            <form onSubmit={handleWannaDonate} className='bg-blue-50 shadow-[0_0_10px_black] w-[98%] max-w-[560px] py-4 px-5 rounded-2xl min-h-[280px] text-gray-700 flex flex-col items-center justify-evenly gap-2' autoComplete='on'>
                <div className=""><span className="">Name : </span> <span className="font-bold text-red-950">{user?.name}</span></div>
                <div className=""><span className="">Email : </span><span className="font-bold text-red-950">{user?.email}</span></div>
                <div className=""><span className="">Blood-Group : </span><span className="font-bold text-red-950">{user?.bloodGroup}</span></div>
                <div className=""><span className="">Gender : </span><span className="font-bold text-red-950">{user?.gender}</span></div>
                <div className=""><span className="">Address : </span><span className="font-bold text-red-950">{user?.address}</span></div>
                <div className="w-full flex flex-col justify-center">
                    <div className="flex flex-col justify-center w-[96%]">
                        <label htmlFor="phoneNo" className='text-[10px] font-semibold text-violet-800/70 after:content-["*"] after:ml-0.5 after:text-red-500/90 after:text-[.8rem]'>Units of blood you want to receive</label>
                        <input type="number" value={receivedUnits} onChange={(e) => setReceivedUnits(Math.max(0, Math.min(5, e.target.value)))} className='bg-blue-950/10 py-2 px-6 rounded text-center outline-none focus:bg-green-600/15 ring-1 focus:ring-2 ring-violet-700 focus:shadow-[0_0_15px_brown_inset] placeholder:text-gray-600' placeholder='how many units of blood you want to donate' name='blood-units-to-donate' required />
                    </div>
                    <div className="flex flex-col justify-center w-[96%]">
                        <label htmlFor="phoneNo" className='text-[10px] font-semibold text-violet-800/70 after:content-["*"] after:ml-0.5 after:text-red-500/90 after:text-[.8rem]'>hospital name you are admit in</label>
                        <input type="text" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} className='bg-blue-950/10 py-2 px-6 rounded text-center outline-none focus:bg-green-600/15 ring-1 focus:ring-2 ring-violet-700 focus:shadow-[0_0_15px_brown_inset] placeholder:text-gray-600' placeholder='enter hospital name' name='hospital-name' required />
                    </div>
                    <div className="flex flex-col justify-center w-[96%]">
                        <label htmlFor="phoneNo" className='text-[10px] font-semibold text-violet-800/70 after:content-["*"] after:ml-0.5 after:text-red-500/90 after:text-[.8rem]'>enter your doctor name</label>
                        <input type="text" value={prescribedBy} onChange={(e) => setPrescribedBy(e.target.value)} className='bg-blue-950/10 py-2 px-6 rounded text-center outline-none focus:bg-green-600/15 ring-1 focus:ring-2 ring-violet-700 focus:shadow-[0_0_15px_brown_inset] placeholder:text-gray-600' placeholder='enter doctor name' name='doctor-name' required />
                    </div>
                </div>
                <div className="flex gap-2 items-center justify-evenly font-mono font-bold text-white">
                    <button className='w-[128px] text-center rounded-md bg-orange-900 py-[6px] hover:bg-orange-700' onClick={() => setOption(0)}>cancel</button>
                    <button type='submit' className='w-[128px] text-center rounded-md bg-red-900 py-[6px] hover:bg-red-700' >request</button>
                </div>
            </form>
        </div>
    )
}
