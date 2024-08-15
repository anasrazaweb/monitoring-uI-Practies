import React from 'react'
import { ArrowRightToLine } from 'lucide-react'
import DishboardImg from '../DishboardImg/DishboardImg'

const MainPage = () => {
    return (
        <div className='  relative'>
            <div className= 'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-100 h-full w-full blur-[90px] z-[-10] flex items-center justify-center '></div>
            <div className="main-top text-center gap-3 flex-col flex justify-center  ">
                <h1 className='item-center text-[1.7rem]  md:text-[3rem] mt-7  font-bold'>Start monitoring your <br></br>website like a pro</h1>


                <div className="main-p flex mt-6 mb-6 justify-center  ">
                    <p className='w-full md:w-[39rem] '>Get a bird's eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!</p>
                </div>

                <div className="main-btn flex justify-center  space-x-7">
                    <button className='bg-[#4328EB] p-1 px-3 sm:p-3 sm:px-7 text-white font-madium rounded-lg' >Try for free </button>
                    <button className='flex  items-center gap-3 text-[#4328EB]'>View Pricing  <ArrowRightToLine className='bg-gray-200 h-10 p-2 rounded-full w-10' /></button>
                </div>

            </div>



          


        </div>
    )
}

export default MainPage