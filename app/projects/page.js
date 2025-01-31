'use client'
import { React, useState, useEffect } from 'react'
import { fetchcards } from '@/actions/useractions';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/joy';
import { Projectskell } from '../skeletions/page';

const page = () => {

    const router = useRouter()
    const [cards, setcards] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        getdata()
        setTimeout(() => {
            setloading(false)
        }, 2000)
    }, [])

    const getdata = async (params) => {
        let dbcards = await fetchcards()
        setcards(JSON.parse(dbcards))
        console.log(dbcards)
    }

    return (
        <div className='dark:bg-black min-h-screen'>
            <div className='sticky top-0 h-[50px] w-screen bg-[#D0DDEA] dark:bg-[#222222] shadow-lg' style={{ zIndex: '900' }}></div>
            <div class="w-[80%] max-lg:w-[80%] relative flex flex-wrap max-sm:items-center max-sm:justify-center p-8 gap-5 h-auto mx-auto ">
                {cards.map((item, index) => {

                    const carduserhandle = () => {
                        router.push(`{${item.username}}`)
                    };

                    {
                        return loading ? (
                            item.name && <Projectskell key={index} />
                        )
                            : (
                                item.name && (
                                    <div key={index} className=" relative flex items-center justify-center h-auto">
                                        <div className="bg-white dark:bg-[#222222] shadow-lg shadow-gray-200 dark:shadow-none rounded-xl p-2.5 transition-all duration-500 w-80 hover:shadow-gray-300">
                                            <div className="rounded-3xl">
                                                <img className="rounded-xl w-full h-44 object-cover" src={item.project_pic1} alt="image" />
                                            </div>
                                            <div className="flex flex-col items-start justify-center py-2 gap-2">
                                                <h4 className="font-manrope font-bold text-xl text-gray-900 dark:text-white text-center">{item.project_name}</h4>
                                                <p className="text-base font-medium text-gray-500 dark:text-white break-all mb-4">{`${item.project_desc.substring(0, 80)}...`}</p>
                                                <Button className="px-4 py-2 rounded-full" onClick={carduserhandle}>
                                                    Visit Page
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                    }
                })}
            </div>



        </div>
    )
}

export default page