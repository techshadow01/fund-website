'use client'
import { React, useState, useEffect } from 'react'
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/joy';

import { ToastContainer, toast } from 'react-toastify';

import { fetchuser, updateProfile } from '@/actions/useractions';

import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react"


const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;


const Editprofile = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const [profilepic, setprofilepic] = useState()
    const [coverpic, setcoverpic] = useState()
    const [form, setform] = useState([])
    const [projectpic1, setprojectpic1] = useState()
    const [projectpic2, setprojectpic2] = useState()
    const [projectpic3, setprojectpic3] = useState()



    const info = [
        {
            name: 'name',
            value: form.name
        },
        {
            name: 'profession',
            value: form.profession
        },
        {
            name: 'twitter',
            value: form.twitter
        },
        {
            name: 'linkedin',
            value: form.linkedin
        },
        {
            name: 'github',
            value: form.github
        },
        {
            name: 'goal',
            value: form.goal
        },
        {
            name: 'razorpay_id',
            value: form.razorpay_id,
        },
        {
            name: 'razorpay_secret',
            value: form.razorpay_secret,
        },
    ]

    const projectpic = [
        {
            name: 'project_pic1',
            value: projectpic1
        },
        {
            name: 'project_pic2',
            value: projectpic2
        },
        {
            name: 'project_pic3',
            value: projectpic3
        },
    ]

    useEffect(() => {

        // if (!session) {
        //     router.push('../ ')
        // }
        // else {
        getdata()
        //}
    }, [])

    const getdata = async (params) => {
        let dbuser = await fetchuser(session.user.name)
        let result = JSON.parse(dbuser)
        setform(result)
        setprofilepic(result.userpic)
        setcoverpic(result.coverpic)

        setprojectpic1(result.project_pic1)
        setprojectpic2(result.project_pic2)
        setprojectpic3(result.project_pic3)
        console.log(projectpic1)
    }

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSave = async (e) => {
        const data = form;
        await updateProfile(data, session.user.name)
    }

    const urlprovide = (e) => {
        var reader = new FileReader();
        const file = e.target.files[0]
        reader.readAsDataURL(file)

        reader.onload = () => {
            console.log(reader.result)

            const url = reader.result

            if (e.target.name == 'userpic') {
                setprofilepic(url)
            }

            if (e.target.name == 'coverpic') {
                setcoverpic(url)
            }

            if (e.target.name == 'project_pic1') {
                setprojectpic1(url)
            }

            if (e.target.name == 'project_pic2') {
                setprojectpic2(url)
            }

            if (e.target.name == 'project_pic3') {
                setprojectpic3(url)
            }

            setform({ ...form, [e.target.name]: url })
        }
    }

    // snackbar
    const notify = () => {
        toast.success('Data saved succesfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                handleSave()
                notify()
            }}
            className='flex flex-col items-center max-sm:items-start  gap-4 max-sm:gap-0 dark:bg-black min-h-screen max-sm:pb-3' >

            <div className='sticky top-0 h-[50px] w-screen bg-[#D0DDEA] dark:bg-[#222222] shadow-lg' style={{ zIndex: '900' }}></div>

            <div className='w-[60%] max-sm:w-[94vw] max-sm:px-2 flex items-center justify-between '>
                <div className='text-6xl max-sm:text-3xl dark:text-white p-5 '>Edit Profile</div>
                <div className='flex gap-3'>
                    <Button
                        type="submit"
                        color="primary"
                        className='relative'
                    >
                        Save changes
                    </Button>
                    <ToastContainer />
                    <Button color="neutral" onClick={() => router.push(`{${session.user.name} }`)} variant="outlined" className='max-sm:hidden dark:text-gray-500'>cancel</Button>
                </div>
            </div>
            <div className='h-[0.5px] w-[60%] max-sm:w-full bg-slate-300'></div>
            <div className='flex max-sm:flex-col justify-end gap-8 max-sm:gap-0 dark:text-white'>
                {/* left */}
                <div className='flex flex-col max-sm:flex-row justify-center max-sm:justify-start  gap-5 '>
                    <div className='text-3xl max-sm:hidden'>Profile Pic:</div>
                    <div className='relative  rounded-full aspect-square max-sm:mt-[50px] max-sm:ml-[20px]
                     max-sm:border-2 max-sm:border-white max-sm:dark:border-black  z-20'>
                        <img className='rounded-full w-[180px] max-sm:w-[120px] aspect-square object-cover ' src={profilepic} alt="" />
                        <Button
                            component="label"
                            role={undefined}
                            tabIndex={-1}
                            variant="outlined"
                            color="neutral"
                            className='absolute bottom-2 max-sm:bottom-1 right-2 max-sm:right-1 z-20 bg-white  w-12 max-sm:w-10 aspect-square rounded-full shadow-lg flex items-center justify-center'
                        >
                            <EditIcon />
                            <VisuallyHiddenInput name='userpic' type="file" accept='.jpg,.png,.avif' onChange={urlprovide} />

                        </Button>
                    </div>

                    <div className='text-3xl max-sm:hidden'>Cover Pic:</div>
                    <div className='relative max-sm:absolute max-sm:w-full '>
                        <img className='rounded-md max-sm:rounded-none w-[180px] max-sm:w-full aspect-video object-cover max-sm:h-[150px] ' src={coverpic} alt="" />
                        <Button
                            component="label"
                            role={undefined}
                            tabIndex={-1}
                            variant="outlined"
                            color="neutral"
                            className='absolute bottom-2 max-sm:bottom-1 right-2 max-sm:right-1  bg-white  w-12 max-sm:w-10 aspect-square rounded-full shadow-lg flex items-center justify-center'
                        >
                            <EditIcon />
                            <VisuallyHiddenInput name='coverpic' type="file" onChange={urlprovide} />
                        </Button>
                    </div>
                </div>

                {/* middle */}
                <div className='relative flex flex-col max-sm:w-[94vw] gap-7 max-sm:gap-4 max-sm:mx-2'>
                    <div className='text-3xl'>Personal Info</div>

                    {
                        info.map((item, index2) => {
                            return <div key={index2} className='flex max-sm:flex-col items-center max-sm:items-start justify-end gap-3 max-sm:gap-0  '>
                                <div className='font-semibold'>{item.name}:</div>
                                <Input
                                    name={item.name}
                                    value={item.value}
                                    className='w-[500px] max-sm:w-full dark:bg-gray-700 dark:border-gray-400 dark:text-white'
                                    variant="outlined"
                                    onChange={handlechange}
                                    required
                                />
                            </div>
                        })
                    }
                </div>

                {/* right */}
                <div className=' flex flex-col gap-5 max-sm:mx-2 '>
                    <div className='text-3xl'>Project</div>
                    <div className='flex flex-col gap-2'>
                        <div className='font-semibold' >Name :</div>
                        <div>
                            <Input
                                type="text"
                                name='project_name'
                                value={form.project_name}
                                className='max-sm:w-[94vw] dark:bg-gray-700 dark:border-gray-400 dark:text-white'
                                onChange={handlechange}
                                placeholder='name...'
                                variant="outlined"
                                required
                            />

                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='font-semibold' >description :</div>
                        <Textarea
                            placeholder="Type in here…"
                            name='project_desc'
                            value={form.project_desc}
                            className='min-w-[400px] min-h-[130px] max-sm:w-[94vw] dark:bg-gray-700 dark:text-white dark:border-gray-400'
                            onChange={handlechange}
                            maxRows={4}
                        />
                    </div>

                    {/* project_pic */}
                    <div className='flex flex-col gap-2'>
                        <div className='font-semibold ' >Photos :</div>
                        <div className='flex max-sm:flex-col gap-2'>
                            {projectpic.map((item, index) => {
                                return <Button
                                    key={index}
                                    component="label"
                                    role={undefined}
                                    tabIndex={-1}
                                    variant="outlined"
                                    color="neutral"
                                    class="relative items-center justify-center w-[33%] max-sm:w-[94vw] aspect-square max-sm:aspect-video flex flex-col border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span></p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400"> PNG, JPG or GIF</p>
                                    </div>
                                    {
                                        (item.value) && <div className='absolute z-20 w-full h-full '>
                                            <img className=' w-full h-full object-fill rounded-md' src={item.value} alt="" />
                                            <EditIcon className='absolute right-2 bottom-2 text-gray-500' />
                                        </div>
                                    }
                                    <VisuallyHiddenInput
                                        name={item.name}
                                        type="file"
                                        accept='.jpg,.png,.avif,.gif'
                                        onChange={urlprovide} />
                                </Button>
                            })}
                        </div>
                    </div>
                </div>
            </div >
        </form >
    )
}

export default Editprofile
