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
                <div><AnimatedTestimonials testimonials={testimonials} autoplay={true} /></div>
            </div>
        </div >
    )
}

export default about



