import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Receivings({ setOption, receiverId }) {
    const [receivers, setReceivers] = useState();
    return (
        <div className='w-full min-h-[calc(100vh-70px)] flex flex-col gap-4 items-center justify-center overflow-auto py-4 bg-green-50'>
            <div className="flex gap-4">
                <button className="ring-2 ring-red-700 bg-red-700/40 text-red-700 px-8 py-[2px] rounded-lg font-semibold hover:bg-red-700 hover:text-white" onClick={() => setOption(0)}>back</button>
                <button className="ring-2 ring-blue-700 bg-blue-700/40 text-blue-700 px-8 py-[2px] rounded-lg font-semibold hover:bg-blue-700 hover:text-white" onClick={() => setOption(4)}>donate</button>
            </div>
            {
                receivers ?
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
                                receivers?.map((receiver, index) =>
                                    <tr className="hover:bg-violet-800/15 cursor-pointer" key={receiver._id}>
                                        <td className="text-center px-1 md:px-2 border-2 border-black">{index + 1}</td>
                                        <td className="text-center px-1 md:px-2 border-2 border-black">{receiver.donatedUnits}</td>
                                        <td className="text-center px-1 md:px-2 border-2 border-black">{(new Date(receiver.date).toLocaleString())}</td>
                                        <td className="text-center px-1 md:px-2 border-2 border-black">{receiver?.status ? "completed" : "pending"}</td>
                                        <td className="text-center px-1 md:px-2 border-2 border-black">{receiver?.receiverName || "NA"}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    :
                    <div className=""></div>
            }
        </div>
    )
}