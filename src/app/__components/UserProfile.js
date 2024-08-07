import React from 'react'

export default function UserProfile( { user } ) {
    // let age = user?.DoB;
    // console.log(age);
    
  return (
    <div className='fixed top-0 bottom-0 w-[100vw] min-h-[100vh] flex flex-col items-center justify-center'>
        <div className="bg-blue-50 shadow-[0_0_10px_black_inset] w-[98%] max-w-[500px] py-4 px-5 rounded-2xl min-h-[280px] text-red-950 flex flex-col items-start justify-evenly">
            <div className=""><span className="">Name : </span> <span className="font-bold text-red-950">{user?.name}</span></div>
            <div className=""><span className="">Email : </span><span className="font-bold text-red-950">{user?.email}</span></div>
            <div className=""><span className="">Phone-No. : </span><span className="font-bold text-red-950">{user?.phoneNo}</span></div>
            <div className=""><span className="">Aadhar No. : </span><span className="font-bold text-red-950">{user?.aadharNo}</span></div>
            <div className=""><span className="">Blood-Group : </span><span className="font-bold text-red-950">{user?.bloodGroup}</span></div>
            <div className=""><span className="">Gender : </span><span className="font-bold text-red-950">{user?.gender}</span></div>
            <div className=""><span className="">Date of Birth : </span><span className="font-bold text-red-950">{(new Date(user?.DoB)).toLocaleString()}</span></div>
            <div className=""><span className="">Address : </span><span className="font-bold text-red-950">{user?.address}</span></div>
        </div>      
    </div>
  )
}
