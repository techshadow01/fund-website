'use client'

import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import Sign from './ui/modal'
import Logo from './assets/slogo.png'
import Social1 from './assets/email1.svg'
import Social2 from './assets/linkedin1.svg'
import Social3 from './assets/twitter.svg'
import Social4 from './assets/github1.svg'
import Button from '@mui/material/Button';

const navbar = () => {
    return (
        <div className='fixed top-0 w-screen h-[50px] bg-transparent' style={{ zIndex: '2000' }}>
            <div className='relative z-40 w-[90%] h-full m-auto flex items-center justify-between p-2'>
                <div className='flex gap-3' >
                    <div className='pt-2'><Image src={Logo} alt="" width={50} /></div>
                    <div className='text-3xl font-bold text-[#1976D2] text-center mb-2' >Swing</div>
                    <div><input className='text-white w-[250px] h-8 rounded-lg px-2 mt-2' type="text" placeholder='search' /></div>
                    <div className='flex mt-2 gap-3'>
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}><Image src={Social1} alt="" width={30} /></motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}><Image src={Social2} alt="" width={30} /></motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}><Image src={Social3} alt="" width={30} /></motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}><Image src={Social4} alt="" width={28} /></motion.div>
                    </div>

                </div>
                <Button variant="contained" className='relative z-10'>
                    <Sign className="h-full w-full" />
                </Button>
            </div>
        </div >
    )
}

export default navbar

