'use client'

import React from 'react'
import { motion } from "motion/react"
import Button from '@mui/material/Button';
import Sign from '@/app/components/ui/modal'
import Star from '@/app/components/assets/star.svg'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image';

const main = () => {
    return (
        <div className='relative w-screen h-screen flex bg-gradient-to-r from-[#FFFFFF] to-blue-300'>
            <div className='w-[100%] h-full flex items-center justify-start z-10'>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    className='flex flex-col gap-9 ml-36'>
                    <div className='text-[#1976D2] font-bold text-8xl '>
                        <div>Fund your</div>
                        <div>Dream Project</div>
                    </div>
                    <div className='text-[#3BABFF] text-5xl' >connect with the world</div>
                    <Button className='max-w-[200px] rounded-full text-3xl text-center p-3 relative' variant="contained" ><Sign /> </Button>
                    <div className='flex gap-2'>
                        <div className='text-xl' >loved by 1,000,000+ creators</div>
                        <Image src={Star} alt="" width={20} />
                        <Image src={Star} alt="" width={20} />
                        <Image src={Star} alt="" width={20} />
                        <Image src={Star} alt="" width={20} />
                        <Image src={Star} alt="" width={20} />
                    </div>

                </motion.div>
            </div>
            <div className='absolute w-[100%] h-full '>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }}
                    className='absolute w-[50%] h-full right-24' >
                    <DotLottieReact
                        src="https://lottie.host/c1102b2a-3010-487e-8a1d-9b755a9544c4/P3hWjiKOkT.lottie"
                        loop
                        autoplay
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default main