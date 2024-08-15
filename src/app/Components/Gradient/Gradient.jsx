import React from 'react'
import { ArrowRight } from 'lucide-react'
const Gradient = () => {
    return (
        <div className=' px-0 w-full md:px-20 mt-10 md:mt-20 text-white '>
            <div className='p-10 bg-gradient-to-l  from-blue-900 via-pink-300 via-purple-700 to-purple-500 '>

                <h1 className=' text-[1.3rem] sm:text-3xl font-bold text-center'>Monitor your website <br/> like a pro</h1>

                <p className=' text-center w-full mt-4 text-[13px] sm:mt-10'>Join over 800+ happy site owners boosting productivity and efficiency!</p>


                <div className="button flex space-x-10  justify-center mt-10">
                    <button className='bg-white  text-[#EB2891] px-2 rounded-md text-[10px]  sm:text-[14px] sm:px-6 py-2 '> Try for free</button>
                    <button className='flex items-center text-[14px] md:'> Contact Sales <ArrowRight className='ml-3'/></button>
                </div>

            </div>

        </div>
    )
}

export default Gradient

