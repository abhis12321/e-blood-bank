import React from 'react'

export default function UserLogout({ USER, setOption }) {
    const handleLogout = () => {
        USER.logout();
        setOption(0);
    }

    return (
        <div className='w-full min-h-[calc(100vh-4rem)] flex flex-col gap-4 items-center justify-center overflow-auto py-4'>
            <div className="flex flex-col gap-2 items-center justify-center">
                {USER?.user &&
                    <div className="w-[98%] max-w-[500px] gap-3 flex flex-col justify-center items-center text-center rounded-xl px-2 py-4 xs:px-4 md:px-12 md:py-8 bg-white shadow-[0_0_10px_black_inset] text-red-950 font-semibold">
                        <p className='text-sm font-mono'>You are going to logout from our website</p>
                        <span className='drop-shadow-[0_0_2px_red] font-mono'>Coder&apos;Channel Web App&quot;</span>
                        <h5 className='text-md font-serif font-bold'>You can login-back with your Email and Password later whenever you want</h5>
                        <p className='text-sm font-mono'>Are you sure, You wanna logout?</p>
                        <div className="w-[60%] min-w-[200px] flex items-center justify-evenly font-serif font-semibold text-sm xs:text-base">
                            <button className="text-white bg-red-800 hover:bg-red-600 hover:font-bold py-2 xs:py-[5px] w-[65px] rounded-lg" onClick={handleLogout}>Yes</button>
                            <button className="text-white bg-green-800 hover:bg-green-600 hover:font-bold py-2 xs:py-[5px] w-[65px] rounded-lg" onClick={e => setOption(0)}>No</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}