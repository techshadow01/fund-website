import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const modal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [form, setform] = useState({ name: "", email: "", password: "" })
    const [formArray, setformArray] = useState([])

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }

    const submit = (e) => {
        setformArray([...formArray, form])
        setform({ name: "", email: "", password: "" });
    }

    return (
        <div className='relative h-full w-full'>
            <div className='capitalize h-full w-full' onClick={handleOpen}>Sign up</div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white rounded-lg shadow-xl p-4 flex flex-col gap-2">
                    <div className='text-4xl font-bold text-center uppercase text-blue-400' >Sign Up</div>
                    <div>Name :</div>
                    <input className='w-full border-2 border-black rounded-lg p-1' type="text" name="name" value={form.name} onChange={handlechange} />
                    <div>Email :</div>
                    <input className='w-full border-2 border-black rounded-lg p-1' type="email" name="email" value={form.email} onChange={handlechange} />
                    <div>Password :</div>
                    <input className='w-full border-2 border-black rounded-lg p-1' type="password" name="password" value={form.password} onChange={handlechange} />
                    <button className='p-2 px-3 bg-blue-500 m-auto text-white rounded-full shadow-xl border border-blue-700 text-center' onClick={submit}>sign up</button>
                </Box>
            </Modal>
        </div>
    );
}

export default modal