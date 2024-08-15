import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import Feature1Img from '../../../../public/Images/image.svg'

const Feature1 = () => {
    return (
        <div className='block sm:hidden   md:flex  mt-8 px-4   lg:px-16  md:px-3  h-full'>
            <div className="right w-full  sm:hidden   md:w-[50%] flex justify-end px-0   md:px-32">

                <Image src={Feature1Img} className='h-[100%] w-[100%]' ></Image>
            </div>

            <div className="left px-0 p-2 w-full   md:w-[50%]   md:p-7  lg:px-12  md:px-2 lg:text-[1rem]">
                <p className='text-[#0085FF]   '>Sales Monitoring</p>
                <h1 className='text-2xl mt-2 font-bold'>Simplify your sales <br></br> monitoring</h1>
                <p className='w-full   md:w-[90%] mt-7 '>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.</p>
                <p className='mt-4 '>Lorem ipsum dolor sit amet</p>
                <p className='mt-3  flex space-x-10'> <Check className='mr-3 h-5' /> Consectetur adipiscing elit</p>
                <p className='mt-3  flex space-x-10'> <Check className='mr-3 h-5' />Sed do eiusmod tempor incididunt ut labore</p>
                <p className='mt-3  flex space-x-10'> <Check className='mr-3 h-5' />Sed do eiusmod tempor incididunt ut labore</p>
                <p className='mt-5 text-[#0085FF] '>Learn More</p>
            </div>
            <div className="right w-full hidden sm:block   md:w-[50%] flex justify-end px-0  md:px-10 lg:px-20">

                <Image src={Feature1Img} className='h-[100%] lg:h-[90%] w-[100%]' ></Image>
            </div>
        </div>
    )
}

export default Feature1