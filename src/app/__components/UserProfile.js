import { useAuthentication } from './AuthenticationProvider'

export default function UserProfile({ setOption }) {
  const { user } = useAuthentication();
  const date = new Date(user?.DoB);
  
  return (
    <div className='h-nav w-full flex flex-col gap-4 items-center justify-center overflow-auto py-4'>
      <div className="bg-blue-50 shadow-[0_0_10px_black_inset] w-[98%] max-w-[500px] p-6 rounded-2xl min-h-[280px] text-red-950 flex flex-col gap-2 items-start justify-evenly">
        <div className=""><span className="">Name : </span> <span className="font-bold text-red-950">{user?.name}</span></div>
        <div className=""><span className="">Email : </span><span className="font-bold text-red-950">{user?.email}</span></div>
        <div className=""><span className="">Phone-No. : </span><span className="font-bold text-red-950">{user?.phoneNo}</span></div>
        <div className=""><span className="">Aadhar No. : </span><span className="font-bold text-red-950">{user?.aadharNo}</span></div>
        <div className=""><span className="">Blood-Group : </span><span className="font-bold text-red-950">{user?.bloodGroup}</span></div>
        <div className=""><span className="">Gender : </span><span className="font-bold text-red-950">{user?.gender}</span></div>
        <div className=""><span className="">Date of Birth : </span><span className="font-bold text-red-950">{`${date.toLocaleDateString('en-GB')} ${date.toLocaleTimeString('en-GB')}`}</span></div>
        <div className=""><span className="">Address : </span><span className="font-bold text-red-950">{user?.address}</span></div>
        <div className="flex items-center justify-evenly gap-2 text-sm">
          <button className="text-white bg-green-800 hover:bg-green-600 font-bold px-4 py-[5px] rounded-lg" onClick={() => setOption(2)}>donations record</button>
          <button className="text-white bg-blue-800 hover:bg-blue-600 font-bold px-4 py-[5px] rounded-lg" onClick={() => setOption(3)}>receiving record</button>
          <button className="text-white bg-red-800 hover:bg-red-600 font-bold px-6 py-[5px] rounded-lg" onClick={() => setOption(1)}>logout</button>
        </div>
      </div>
    </div>
  )
}
