import React from 'react'
import Image from 'next/image'

const Feature3 = () => {
    return (
        <div className='  md:flex mt-2 md:mt-8 px-0 md:px-16'>
            <div className="left w-full md:w-[50%] p-7 px:6 md:px-12 lg:text-[1rem]">
                <p className='text-[#0085FF]   '>Sales Monitoring</p>
                <h1 className=' text-xl md:text-2xl mt-2 font-bold'>Monitor your site’s new <br></br>subscribers </h1>
                <p className='w-[90%] mt-7 '>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.</p>
                <div className="box flex space-x-6 my-10" >
                    <div className="box-left">
                        <h2 className='font-bold text-[20px]'>100+</h2>
                        <p className=''>Lorem ipsum dolor sit</p>
                    </div>
                    <div className="box-right">
                        <h2 className='font-bold text-[20px]'>800+</h2>
                        <p className=''>Conse adipiscing elit</p>
                    </div>
                </div>
                <p className='mt-5 text-[#0085FF] '>Learn More</p>
            </div>
            <div className="right w-full md:w-[50%] flex justify-end px-0 md:px-32">

                <Image src='/Images/feature3.png' className='h-[100%] w-100%' width={370} height={400}></Image>
            </div>
        </div>
    )
}

export default Feature3