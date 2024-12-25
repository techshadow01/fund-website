import React from 'react'
import Photo from './assets/Photo.avif'
import Photo1 from './assets/Photo2.avif'
import Photo2 from './assets/Photo3.avif'
import Photo3 from './assets/Photo4.avif'
import Photo4 from './assets/Photo5.avif'
import { AnimatedTestimonials } from "@/app/ui/testimonial";

const testimonials = [
    {
        quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
        name: "Sarah Chen",
        designation: "Product Manager at TechFlow",
        src: Photo,
    },
    {
        quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Michael Rodriguez",
        designation: "CTO at InnovateSphere",
        src: Photo1,
    },
    {
        quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
        name: "Emily Watson",
        designation: "Operations Director at CloudScale",
        src: Photo2,
    },
    {
        quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
        name: "James Kim",
        designation: "Engineering Lead at DataPro",
        src: Photo3,
    },
    {
        quote:
            "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
        name: "Lisa Thompson",
        designation: "VP of Technology at FutureNet",
        src: Photo4,
    },
];

const about = () => {
    return (
        <div className='mx-auto relative w-[70%] h-[70vh] p-4 flex flex-col items-center justify-center gap-3'>
            <div className='text-center text-white bg-[#D0DDEA] text-6xl font-bold rounded-xl p-3 shadow-xl'>Support your favarite Creator</div>
            <div className='flex items-center justify-center w-[100%] h-full'>
                {/* <div className='flex flex-col items-center justify-center gap-4 text-2xl px-4 font-semibold w-[50%] h-full pl-[10%]'>
                    <div className='relative text-center'>support people by buying them a coffee. In just a couple of taps, your fans can make the payment and leave a message.
                        <motion.div
                            initial={{ rotate: 20 }}
                            className='absolute -left-10 -top-10'
                        ><Image src={Coffee1} alt="" width={60} /></motion.div>
                    </div>
                    <div className='relative text-center'>support people by buying them a coffee. In just a couple of taps, your fans can make the payment and leave a message.
                        <motion.div
                            initial={{ rotate: -20 }}
                            className='absolute -right-10 -top-10 -z-10'
                        ><Image src={Coffee2} alt="" width={60} />
                        </motion.div>
                        <motion.div
                            initial={{ rotate: 10 }}
                            className='absolute -left-10 top-[50%]'
                        ><Image src={Coffee2} alt="" width={60} /></motion.div>
                    </div>
                </div>
                <div className='w-[50%] h-full'>
                    <DotLottieReact
                        src="https://lottie.host/434ae11f-39d1-4664-939b-b9b8ba611416/4OWn8nRbWG.lottie"
                        loop
                        autoplay
                    />
                </div> */}
                <div><AnimatedTestimonials testimonials={testimonials} autoplay={true} /></div>
            </div>
        </div >
    )
}

export default about



