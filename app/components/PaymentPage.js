'use client'
import Script from 'next/script'
import { React, useState, useRef, useEffect } from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

import Carousel from './Carousel'
import { Skell } from '../skeletions/page';
import CmtUser from '../paypagecomponent/cmtUser'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import CheckIcon from '@mui/icons-material/Check';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/joy/Tooltip';

import Social1 from './assets/email1.svg'
import Social2 from './assets/linkedin1.svg'
import Social3 from './assets/twitter.svg'
import Social4 from './assets/github1.svg'

import { useRouter } from 'next/navigation';
import { initiate, fetchuser, fetchpayments, createPayments } from '@/actions/useractions'
import { useSession } from 'next-auth/react'

const Paymentpage = ({ username }) => {
    const router = useRouter()
    const { data: session } = useSession();
    const username1 = username.replace('%7B', '').replace('%7D', '').replace('%20', '')

    const [text, setText] = useState('');
    const addEmoji = (emoji) => () => setText(`${text}${emoji}`);

    const [check, setcheck] = useState(true)
    const [currentuser, setcurrentuser] = useState([])
    const [Payments, setPayments] = useState([])
    const [paymentform, setpaymentform] = useState([])
    const [loading, setloading] = useState(true)
    const [isVisible, setisVisible] = useState(false)

    const totalAmount = Payments.reduce((sum, item) => sum + item.amount, 0);
    const progressmoney = (parseInt((totalAmount / currentuser.goal) * 100))

    useEffect(() => {
        getdata()

        setTimeout(() => {
            setloading(false)
        }, 1000)

    }, [])

    const social = [
        {
            src: Social1,
            link: currentuser.email
        },
        {
            src: Social2,
            link: currentuser.linkedin
        },
        {
            src: Social3,
            link: currentuser.twitter
        },
        {
            src: Social4,
            link: currentuser.github
        },
    ]


    // handle pay button
    const pay = (amount) => {
        if (!session) {
            alert('sign in for payment')
        }
        else if (!(currentuser.razorpay_id && currentuser.razorpay_secret)) {
            alert('Razorpay id not available')
        }
        else {
            paymentform.msg = text;
            paymentform.to_user = username1
            paymentform.username = session.user.name
            createPayments(paymentform)
            setText('')
            setpaymentform('')
            setisVisible(true)
            { document.body.style.overflow = "hidden" }
            setTimeout(() => {
                window.location.reload();
            }, 3000);

            //get the orderid
            // let a = initiate(amount, username.replace('%7B', '').replace('%7D', ''), paymentform)
            // var orderId = a.id;

            // var options = {
            //     "key": currentuser.razorpay_id, // Enter the Key ID generated from the Dashboard
            //     "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            //     "currency": "INR",
            //     "name": "Swing", //your business name
            //     "description": "Test Transaction",
            //     "image": "https://example.com/your_logo",
            //     "order_id": orderId, //This is a sample Order ID. Pass the id obtained in the response of Step 1
            //     "callback_url": `{${process.env.NEXT_PUBLIC_URL}api / razorpay}`,
            //     "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            //         "name": "Gaurav Kumar", //your customer's name
            //         "email": "gaurav.kumar@example.com",
            //         "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            //     },
            //     "notes": {
            //         "address": "Razorpay Corporate Office"
            //     },
            //     "theme": {
            //         "color": "#3399cc"
            //     }
            // }
            // var rzp1 = new Razorpay(options);
            // rzp1.open();

            //reset payment
        }
    }

    // setting form
    const handlechange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
        handlecheck()
    }

    // handle custom pay button
    const handlepay = (e) => {
        paymentform.amount = e;
        payamt.value = e;
    }

    // checking for values in form
    function handlecheck(params) {

        const a = (paymentform.name.length < 2) ? true : false;

        const b = ((paymentform.amount.length) < 2) ? true : false;

        const c = ((paymentform.amount) < 1) ? true : false;

        if (a || b || c)
            setcheck(true)
        else
            setcheck(false)
    }

    // getting data on enter
    const getdata = async (params) => {
        let dbuser = await fetchuser(username1)
        setcurrentuser(JSON.parse(dbuser))
        let dbpayments = await fetchpayments(username1)
        setPayments(JSON.parse(dbpayments))
    }



    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='bg-[#F4F4F4] dark:bg-black'>

                {/* celebrate */}
                {
                    isVisible && <div className='absolute w-screen h-screen bg-transparent z-50 '>
                        <DotLottieReact
                            className=''
                            src="https://lottie.host/f5803760-0bf1-4361-b2d7-7b7825c7ab5b/mMK83tztiC.lottie"
                            loop
                            autoplay
                        />
                    </div>
                }


                <div className=' fixed top-0 h-[50px] w-screen bg-[#D0DDEA] dark:bg-[#222222] shadow-lg' style={{ zIndex: '900' }}></div>

                {/* banner */}
                <div className='relative sm:h-[300px] w-screen '>

                    {/* editicon */}
                    {((session) && (currentuser.username == session.user.name)) && <Tooltip title="Edit" variant="solid">
                        <EditIcon className='absolute right-[30px] top-[60px] z-10 cursor-pointer text-slate-500' onClick={() => router.push("../editprofile")} />
                    </Tooltip >}

                    {/* banner pic */}
                    <div className='overflow-hidden relative w-full h-full max-sm:h-[200px]'>
                        {loading ? <Skell /> : <img className='w-full h-full object-cover' src={currentuser.coverpic} alt="" />}
                    </div>

                    {/* avatar pic */}
                    <div className='absolute z-20 left-5 -bottom-10 size-40 max-sm:size-32  rounded-full border-4 border-[#D0DDEA] dark:border-black overflow-hidden'>
                        {loading ? <Skell /> : <img className='w-full h-full object-cover' src={currentuser.userpic} alt="" />}
                    </div>

                    {/* banner name */}
                    <div className='absolute right-[10%] top-[50%] z-10 text-center text-white'>
                        <div className=' text-6xl max-sm:text-4xl'>{currentuser.name}</div>
                        <div className='text-3xl max-sm:text-xl'>{currentuser.profession}</div>
                    </div>
                </div>
                <div className='bg-white dark:bg-[#222222] shadow-sm h-[50px] w-screen'></div>


                <div className='flex max-sm:flex-col gap-3 p-3'>
                    {/* section 1 */}
                    <div className='w-[20%] max-sm:w-full flex flex-col gap-3'>

                        {/* Followers */}
                        <div className=' bg-white dark:bg-[#222222] p-3 rounded-lg flex flex-col gap-3'>
                            <div className='flex items-center gap-2 dark:text-white'>
                                <div className='text-xl font-bold '>{Payments.length}</div>
                                <div>Followers</div>
                            </div>

                            <div className='flex gap-2 dark:text-white'>
                                <div className='flex  gap-1 bg-[#E5EDEE] dark:bg-[#404040] p-1 pr-2 rounded-sm font-semibold items-center justify-center' color="neutral" >
                                    <CheckIcon className='size-5' />
                                    <div>following</div>
                                </div>
                                <div className='flex  gap-1 bg-[#E5EDEE] dark:bg-[#404040]  p-1 pr-2 rounded-sm font-semibold items-center justify-center' color="neutral" >
                                    <IosShareOutlinedIcon sx={{ color: "disabled" }} className='size-4' />
                                    <div>Share</div>
                                </div>
                            </div>

                            <div className='flex gap-1'>
                                {
                                    social.map((item, index) => {
                                        return <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.2 }}
                                            className='cursor-pointer'
                                        >
                                            <a href={item.link} target='_blank'>
                                                <Image src={item.src} alt="" width={25} />
                                            </a>
                                        </motion.div>
                                    })
                                }

                            </div>
                        </div>

                        {/* goal */}
                        <div className='bg-white dark:bg-[#222222] rounded-lg'>
                            <div className='bg-slate-300 dark:bg-[#404040] p-2 overflow-hidden rounded-t-lg font-semibold  text-2xl text-gray-500 '>Goal :</div>

                            <div className='p-2 '>
                                <div className='text-slate-500 font-bold'>
                                    {`${totalAmount} of ${currentuser.goal}`}
                                </div>
                                <div className=' relative w-full h-2 bg-slate-300 rounded-full my-2 overflow-hidden'>
                                    <div style={{ width: `${progressmoney}%` }} className={`h-full rounded-full bg-blue-400`}></div>
                                </div>
                                <div className='dark:text-white'>Thanks for all your support</div>
                            </div>
                        </div>

                        {/* comments */}
                        <div className='max-h-[400px] bg-white dark:bg-[#222222] rounded-lg'>
                            <div className='bg-slate-300 dark:bg-[#404040] p-2 overflow-hidden rounded-t-lg font-semibold  text-2xl text-gray-500 '>Supporters :</div>

                            <div className='p-2 max-h-[300px] overflow-y-auto dark:text-white'>
                                {Payments.length == 0 && <div>no messages</div>}
                                {Payments.map((item, index) => {
                                    return <CmtUser key={index} item={item} />
                                })}
                            </div>
                        </div>
                    </div>

                    {/* section 2 */}

                    <div className='w-[50%] max-sm:w-full  p-3 bg-white dark:bg-[#222222] flex flex-col gap-3 rounded-lg'>
                        <div className='text-4xl font-bold text-[#1976D2]'>
                            Projects :
                        </div>
                        <div className='flex flex-col ml-[5%] max-sm:ml-0 gap-3'>
                            <div className='text-4xl font-bold text-blue-400'>
                                {currentuser.project_name}
                            </div>
                            <div className=' dark:text-white break-all max-w-[95%] max-sm:max-w-full '>
                                {currentuser.project_desc}
                            </div>
                            <Carousel
                                pic1={currentuser.project_pic1}
                                pic2={currentuser.project_pic2}
                                pic3={currentuser.project_pic3}
                            />
                        </div>
                    </div>

                    {/* section 3 */}

                    <div className='w-[30%] max-sm:w-full  bg-white dark:bg-[#222222] p-3 flex flex-col gap-3 rounded-lg'>
                        <span className='text-[#1976D2] text-xl font-bold rounded-xl'>Make a payment</span>
                        <div className='flex flex-col gap-2'>
                            <Input id="payname" className='dark:bg-gray-700 dark:border-gray-400 dark:text-white' placeholder="Name" onChange={handlechange} name='name' value={paymentform.name} />
                            <Input id="payamt" className='dark:bg-gray-700 dark:border-gray-400 dark:text-white' placeholder="Amount (rupees)" onChange={handlechange} name='amount' value={paymentform.amount} type="number" />

                            <Textarea
                                placeholder="Message (Optional)"
                                id="paymsg"
                                className='dark:bg-gray-700 dark:border-gray-400 dark:text-white'
                                value={text}
                                onChange={(event) => setText(event.target.value)}
                                minRows={2}
                                maxRows={4}
                                startDecorator={
                                    <Box sx={{ display: 'flex', gap: 0.5, flex: 1 }}>
                                        <IconButton
                                            className='bg-transparent '
                                            variant="outlined" color="neutral" onClick={addEmoji('👍')}>
                                            👍
                                        </IconButton>
                                        <IconButton
                                            className='bg-transparent '
                                            variant="outlined" color="neutral" onClick={addEmoji('🏖')}>
                                            🏖
                                        </IconButton>
                                        <IconButton
                                            className='bg-transparent '
                                            variant="outlined" color="neutral" onClick={addEmoji('😍')}>
                                            😍
                                        </IconButton>
                                        <Button
                                            className='bg-transparent dark:border-gray-400 dark:text-white'
                                            variant="outlined" color="neutral" sx={{ ml: 'auto' }}>
                                            See all
                                        </Button>
                                    </Box>
                                }
                                endDecorator={
                                    <Typography level="body-xs" className='ml-auto dark:text-white'>
                                        {text.length} character(s)
                                    </Typography>
                                }
                                sx={{ minWidth: 300 }}
                            />

                            <div className='flex items-center justify-center'>
                                <Button id="payref" className='relative w-[100px]' disabled={check} onClick={pay}>
                                    Pay
                                </Button>
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-around  gap-2'>
                            <Button className='rounded-full' onClick={() => handlepay(5)}>Pay ₹5</Button>
                            <Button className='rounded-full' onClick={() => handlepay(10)}>Pay ₹10</Button>
                            <Button className='rounded-full' onClick={() => handlepay(20)}>Pay ₹20</Button>
                            <Button className='rounded-full' onClick={() => handlepay(30)}>Pay ₹30</Button>
                            <Button className='rounded-full' onClick={() => handlepay(50)}>Pay ₹50</Button>

                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Paymentpage
