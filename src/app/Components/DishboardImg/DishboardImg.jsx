import React from 'react'
import Image from 'next/image'
const DishboardImg = () => {
    return (
        <div className='h-[1200px]  relative pt-32'>


            <div className="img">

                <Image src={'/Images/Gradient2.png'} height={800} width={10000} className='h-[150vh]'></Image>

            </div>

            <div className="deashBoard absolute   left-1/2 top-0  w-[80vw] transform -translate-x-1/2 ">
                <Image src={'/Images/Dash.png'} className='relative' width={2700} height={200}/>
            </div>

            <div className="deashBoard absolute right-5 top-64  w-[80vw] transform -translate-x-1/2 ">
                <Image src={'/Images/Mobile.png'} className='bg-red-300' width={200} height={800}/>
            </div>
        </div>

    )
}

export default DishboardImg