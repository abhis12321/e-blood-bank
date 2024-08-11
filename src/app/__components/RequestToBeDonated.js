import React, { useState } from 'react'

export default function RequestToBeDonated({ user, setOption }) {
    const [unitsToDonate, setUnitsToDonate] = useState(0);
    const handleWannaDonate = e => {
        e.preventDefault();
    }

    return (
        <div className='w-full min-h-[calc(100vh-4rem)] flex flex-col gap-4 items-center justify-center overflow-auto py-4'>
            <form onSubmit={handleWannaDonate} className='bg-blue-50 shadow-[0_0_10px_black] w-[98%] max-w-[500px] py-4 px-5 rounded-2xl min-h-[280px] text-gray-700 flex flex-col items-center justify-evenly gap-2' autoComplete='on'>
                <div className=""><span className="">Name : </span> <span className="font-bold text-red-950">{user?.name}</span></div>
                <div className=""><span className="">Email : </span><span className="font-bold text-red-950">{user?.email}</span></div>
                <div className=""><span className="">Blood-Group : </span><span className="font-bold text-red-950">{user?.bloodGroup}</span></div>
                <div className=""><span className="">Gender : </span><span className="font-bold text-red-950">{user?.gender}</span></div>
                <div className=""><span className="">Address : </span><span className="font-bold text-red-950">{user?.address}</span></div>
                {/* <p className="text-center text-yellow-500 font-semibold font-serif">You can donate at max 5 units at a time and the gap between two donations must be atleast 3 months</p> */}

                <div className="flex flex-col justify-center">
                    <label htmlFor="phoneNo" className='text-[10px] font-semibold text-violet-800/70 after:content-["*"] after:ml-0.5 after:text-red-500/90 after:text-[.8rem]'>Units of blood you want to receive</label>
                    <input type="number" value={unitsToDonate} onChange={(e) => setUnitsToDonate(Math.max(0, Math.min(5, e.target.value)))} className='bg-blue-950/10 py-2 px-6 rounded text-center outline-none focus:bg-green-600/15 ring-1 focus:ring-2 ring-violet-700 focus:shadow-[0_0_15px_brown_inset] placeholder:text-gray-600' placeholder='how many units of blood you want to donate' name='blood-units-to-donate' required />
                </div>
                <div className="flex gap-2 items-center justify-evenly font-mono font-bold text-white">
                    <div className='w-[120px] xs:w-[150px] text-center rounded-md bg-orange-900/95 py-[6px] hover:bg-orange-700' onClick={() => setOption(0)}>cancel</div>
                    <button type='submit' className='w-[120px] xs:w-[150px] text-center rounded-md bg-red-900/95 py-[6px] hover:bg-red-700' >request</button>
                </div>
            </form>
        </div>
    )
}
