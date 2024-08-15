import React from 'react'
import { Check } from 'lucide-react';


const Plan = () => {
    return (
        <div className='mt-4 sm:mt-24'>
            <h1 className='text-center text-3xl font-bold px-6'>Flexible  plans for you</h1>
            <p className='text-center text-[12px] mt-6'>No hidden fees!</p>

            <div className="card-box  flex-wrap  md:flex   justify-center md:justify-evenly px-2   sm:px-10">

                <div className="card mt-6 p-5 bg-[#F5F4FF] w-full sm:w-[270px]">

                    <p className='mb-4 text-[#4328EB]'>Free Trial</p>
                    <p>Perfect for testing the waters</p>
                    <h1 className='text-2xl my-4  flex'>$0 <span className='text-[#5F7896]'>/mo</span></h1>
                    <p className='mt-3 text-[13px] items-center flex space-x-10'> <Check className='mr-3 h-5' />Sed do eiusmod tempor incididunt ut labore</p>
                    <p className='mt-3 text-[13px] items-center flex space-x-10'> <Check className='mr-3 h-5' />Sed do eiusmod tempor incididunt</p>
                    <p className='mt-3 text-[13px] items-center flex space-x-10'> <Check className='mr-3 h-5' />Consectetur adipiscing elit</p>
                    <button className='w-full bg-white mt-6 sm:mt-14 rounded-xl py-2'>Start Trial</button>
                </div>



                <div className="card mt-6 p-5 bg-[#4328EB] text-white w-full sm:w-[270px]">
                    <p className='mb-4 '>Business</p>
                    <p className=''>Perfect for testing the waters</p>
                    <h1 className='text-2xl my-4 flex'>$0 <span >/mo</span></h1>
                    <p className='mt-3 text-[13px] items-center flex space-x-10'> <Check className='mr-3 h-5' />Lorem ipsum dolor sit amet</p>
                    <p className='mt-3 text-[13px] items-center flex space-x-10'> <Check className='mr-3 h-5' />Consectetur adipiscing elit</p>
                    <p className='mt-3 text-[13px] items-center flex space-x-10'> <Check className='mr-3 h-5' />Lorem ipsum dolor sit amet</p>
                    <p className='mt-3 text-[13px] items-center flex space-x-10'> <Check className='mr-3 h-5' />Sed do eiusmod tempor incididunt</p>
                    <p className='mt-3 text-[13px] items-center flex space-x-10'> <Check className='mr-3 h-5' />Consectetur adipiscing elit</p>
                    <button className='w-full bg-white mt-3 text-[#4328EB] rounded-xl py-2'>Get Started</button>
                </div>


                <div className="card mt-6 p-5  bg-[#F5F4FF] w-full sm:w-[270px]">

                    <p className='mb-4  text-blue-600 '>Enterprise</p>
                    <p>Perfect for testing the waters</p>
                    <h1 className='text-2xl my-4  flex'>Custom</h1>

                    <p className='text-[13px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. <br></br> <br></br>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className='w-full bg-white mt-6  rounded-xl py-2'>Contact Us</button>

                </div>





            </div>
        </div>
    )
}

export default Plan