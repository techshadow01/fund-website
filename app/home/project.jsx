import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import Alice from './assets/Alice.png'
import Chatbot from './assets/chatbot.png'
import Spotify from './assets/spotify.png'

const varient1 = {
    hidden: {
        opacity: 0,
        x: 30
    },
    hidden1: {
        opacity: 0,
        x: -30
    },
    visible: (index) => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay: index * 0.5
        },
    }),
    touch: {

    }
}

const project = () => {
    return (
        <div className='relative flex w-[80%] mx-auto rounded-xl overflow-hidden border-[#D4E0EC] '>
            <div className='w-[45%]  flex flex-col items-center justify-center uppercase text-7xl font-bold bg-[#D4E0EC]'>
                <div className='flex flex-col gap-3 text-[#FFFFFF]'>
                    <div>Top</div>
                    <div>Funded</div>
                    <div>Projects</div>
                </div>
            </div>
            <motion.div
                className='relative flex flex-col gap-3 w-[55%] h-full p-4 '>
                <div className='flex flex-col items-start justify-center w-full'>
                    <div className='flex gap-10'>
                        <motion.div
                            variants={varient1}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="touch"
                            viewport={{ once: true }}
                        >
                            <Image className='rounded-lg border-4 border-white paper' src={Alice} alt="" width={350} />
                        </motion.div>
                        <motion.div
                            variants={varient1}
                            initial={{ opacity: 0 }}
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={3}

                            className='text-5xl font-bold flex items-center justify-center text-slate-400'>
                            <div>Alice Ai</div>
                        </motion.div>
                    </div>
                </div>
                <div className='flex flex-col items-end justify-center w-full'>
                    <div className='flex gap-10'>
                        <motion.div
                            variants={varient1}
                            initial={{ opacity: 0 }}
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={4}

                            className='text-5xl font-bold flex items-center justify-center text-slate-400 '>
                            <div>Chatbot</div>
                        </motion.div>
                        <motion.div
                            variants={varient1}
                            initial="hidden1"
                            whileInView="visible"
                            whileHover="touch"
                            viewport={{ once: true }}
                            custom={1}
                        >
                            <Image className='rounded-lg border-4 border-white paper' src={Chatbot} alt="" width={350} />
                        </motion.div>

                    </div>
                </div>
                <div className='flex flex-col items-start justify-center w-full'>
                    <div className='flex gap-10'>
                        <motion.div
                            variants={varient1}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="touch"
                            viewport={{ once: true }}
                            custom={2}
                        >
                            <Image className='rounded-lg border-4 border-white paper' src={Spotify} alt="" width={350} />
                        </motion.div>
                        <motion.div
                            variants={varient1}
                            initial={{ opacity: 0 }}
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={5}

                            className='text-5xl font-bold flex items-center justify-center text-slate-400'>
                            <div>Spotify</div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default project