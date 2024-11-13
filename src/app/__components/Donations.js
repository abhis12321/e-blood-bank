import axios from 'axios';
import { useEffect, useState } from 'react'

export default function Donations({ setOption, donorId }) {
    const [donations, setDonations] = useState();

    useEffect(() => {
        loadDonations();
    }, [])

    const loadDonations = () => {        
        axios.get(`/api/donor/${donorId}`)
            .then(res => res.data)
            .then(data => data.success ? setDonations(data?.donations) : setDonations([]))
            .catch(error => console.log(error.message))
    }

    return (
        <div className='w-full min-h-[calc(100vh-70px)] flex flex-col gap-4 items-center justify-center overflow-auto py-4 bg-green-50'>
            <div className="flex gap-4 text-sm">
                <button className="ring-2 ring-red-700 bg-red-700/40 text-red-700 w-[130px] text-center py-[3px] rounded-lg font-semibold hover:bg-red-700 hover:text-white" onClick={() => setOption(0)}>back</button>
                <button className="ring-2 ring-blue-700 bg-blue-700/40 text-blue-700 w-[130px] text-center py-[3px] rounded-lg font-semibold hover:bg-blue-700 hover:text-white" onClick={() => setOption(4)}>donate</button>
            </div>
            {
                donations ? donations?.length > 0 ?
                    <table className="border-2 border-black">
                        <thead>
                            <tr className="bg-slate-900/20">
                                <th className="text-center px-1 md:px-2 border-2 border-black">No</th>
                                <th className="text-center px-1 md:px-2 border-2 border-black">donation units</th>
                                <th className="text-center px-1 md:px-2 border-2 border-black">date</th>
                                <th className="text-center px-1 md:px-2 border-2 border-black">status</th>
                                <th className="text-center px-1 md:px-2 border-2 border-black">receiver</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                donations?.map((donation, index) =>
                                    <tr className="hover:bg-violet-800/15 cursor-pointer" key={donation._id}>
                                        <td className="text-center px-1 md:px-2 border-2 border-black">{index + 1}</td>
                                        <td className="text-center px-1 md:px-2 border-2 border-black">{donation.donatedUnits}</td>
                                        <td className="text-center px-1 md:px-2 border-2 border-black">{(new Date(donation.date).toLocaleString())}</td>
                                        <td className="text-center px-1 md:px-2 border-2 border-black">{donation?.status ? "completed" : "pending"}</td>
                                        <td className="text-center px-1 md:px-2 border-2 border-black">{donation?.receiverName || "NA"}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    :
                    <div className="text-4xl font-bold text-gray-500">No records found</div>
                    :
                    <div className='h-20 w-20 rounded-full border-t-4 border-gray-800 animate-spin'></div>
            }
        </div>
    )
}
