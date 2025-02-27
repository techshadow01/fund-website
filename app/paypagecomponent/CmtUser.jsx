'use client'

import { React, useState, useEffect } from 'react'
import { fetchuser } from '@/actions/useractions'

const CmtUser = (props) => {

    const [cmtuser, setcmtuser] = useState('')
    //fetch comment user data
    const fetchUserData = async () => {
        const cmtuser1 = await fetchuser(props.item.username);
        setcmtuser(JSON.parse(cmtuser1))
    }
    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <div className='py-2 flex items-center hover:bg-slate-100 dark:hover:bg-[#404040]' >
            <div className='relative size-10 rounded-full mx-2 overflow-hidden'>
                <img className='w-full h-full object-cover' src={cmtuser.userpic} alt="" />
            </div>
            <div className=''>
                <div className='flex gap-3'>
                    <div>{props.item.name}</div>
                    <div className='bg-[#DADFE1] dark:bg-[#6B7280] px-1 rounded-full flex items-center justify-center text-white'>{`₹${props.item.amount}`}</div>
                </div>
                <div>{props.item.msg}</div>
            </div>
        </div>
    )
}

export default CmtUser
