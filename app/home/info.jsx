import React from 'react'
import Image from 'next/image'
import Correct from './assets/correct.svg'

const lines = [
    "We don't call them customers or transactions. They are your supporters.",
    "You have 100% ownership of your supporters. We never email them, and you can export the list any time you like.",
    "You get to talk to a human for help, or if you just like some advice to hit the ground running.",
    "You get paid instantly to your bank account. No more 30-day delays."
]

const info = () => {
    return (
        <div className='relative w-[70%] mx-auto flex flex-col gap-9 m-14 '>
            <div className='text-7xl font-bold flex flex-col items-center justify-center'>
                <div>Designed for creators,</div>
                <div>not for businesses.</div>
            </div>
            <div className='flex flex-wrap text-2xl font-semibold'>
                {lines.map((item, index) => {
                    return <div key={index}
                        className='w-[50%] flex items-start justify-center gap-3 mb-12'
                    >
                        <div className='size-[40px] mt-3'>
                            <Image src={Correct} width={40} />
                        </div>
                        <div className='max-w-[400px]'>
                            {item}
                        </div>

                    </div>
                })}
            </div>
        </div>
    )
}

export default info