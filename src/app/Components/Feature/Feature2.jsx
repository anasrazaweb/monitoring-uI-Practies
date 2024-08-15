import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'


const Feature2 = () => {
    return (
        <div className=' md:flex  mt-8 px-0 md:px-2 lg:px-16'>
        
            <div className="left w-full md:w-[50%] flex justify-start px-0 md:px-2 lg:px-10">

                <Image src='/Images/feature2.png'  className='h-[100%] w-100%' width={400} height={400}></Image>
            </div>

            <div className="right w-full md:w-[50%] p-7 pl-4 md:px-2 lg:px-12 lg:text-[1rem]"> 
            <p className='text-[#0085FF]   '>Sales Monitoring</p>
            <h1 className='text-2xl mt-2 font-bold'>Get in touch with your <br></br> customers</h1>
            <p className='w-[90%] mt-7 '>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard</p>
            <p className='mt-3  flex space-x-10'> <Check className='mr-3 h-5' />Lorem ipsum dolor sit amet</p>
            <p className='mt-3  flex space-x-10'> <Check className='mr-3 h-5' />Consectetur adipiscing elit</p>
            <p className='mt-3  flex space-x-10'> <Check className='mr-3 h-5' />Sed do eiusmod tempor incididunt ut labore</p>
            <p className='mt-3  flex space-x-10'> <Check className='mr-3 h-5' />Sed do eiusmod tempor incididunt ut labore</p>
            <p className='mt-5 text-[#0085FF] '>Learn More</p>
            </div>
        </div>
    )
}

export default Feature2