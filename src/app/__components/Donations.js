import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Donations({ setOption }) {
    const [donations, setDonations] = useState();

    useEffect(() => {
        axios.get("/api/donor")
        .then(res => res.data)
        .then(data => console.log(data))
        .catch(error => console.log(error.message))
    })
    return (
        <div className='w-full min-h-[calc(100vh-70px)] flex flex-col gap-4 items-center justify-center overflow-auto py-4'>
            <table className="">
                {
                    donations &&
                    <>
                        <thead>
                            <tr className="">
                                <th className="">No</th>
                                <th className="">donation units</th>
                                <th className="">apply date</th>
                                <th className="">status</th>
                                <th className="">receiver</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                donations?.map((donation , index) =>
                                    <tr className="" key={donation._id}>
                                        <td className="">{index+1}</td>
                                        <td className="">{donation.donatedUnits}</td>
                                        <td className="">{(new Date(donation.date).toLocaleString())}</td>
                                        <td className="">{donation?.status ? "completed" : "pending"}</td>
                                        <td className="">{donation?.receiverId || "NA"}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </>
                }
            </table>
        </div>
    )
}
