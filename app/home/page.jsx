import React from 'react'
import { motion } from 'framer-motion'
import Main from './main'
import About from './about'
import Price from './price'
import Projects from './project'
import Footer from './footer'
import Info from './info'
import Journey from './journey'

const page = () => {
    return (
        <div className='flex flex-col gap-5'>
            <Main />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                viewport={{ once: true, amount: 0.3 }}
            ><About /></motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                viewport={{ once: true, amount: 0.3 }}
            ><Journey /></motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                viewport={{ once: true, amount: 0.3 }}
            ><Info /></motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                viewport={{ once: true, amount: 0.3 }}
            ><Projects /></motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                viewport={{ once: true, amount: 0.3 }}
            ><Price /></motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                viewport={{ once: true, amount: 0.3 }}
            ><Footer /></motion.div>
        </div>
    )
}

export default page