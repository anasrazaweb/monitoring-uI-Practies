import Image from 'next/image'
import Link from 'next/link'
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Github } from 'lucide-react'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Footer = () => {
    return (
        <div className=' mt-10 px-2 md:px-10 flex flex-col justify-center w-full' >

            <div className=' '>

                <div className="flex space-x-4 md:hidden justify-center pb-5">
                    <Image src='/Images/Logo (1).png' className="h-7 sx:h-10 w-7 md:w-8" height={50} width={30} ></Image>
                    <h1 >YOUR SITE</h1>
                </div>

                <div className=' justify-between px-8 hidden md:flex '>

                    {/* logo */}
                    <div className="flex space-x-4  md:">
                        <Image src='/Images/Logo (1).png' className="h-8 sx:h-10  flex w-6 md:w-8" height={50} width={30} ></Image>
                        <h1 >YOUR SITE</h1>
                    </div>


                    <ul className='flex   flex-col space-y-4 font-medium'>
                        <li><Link href=''>Features</Link></li>
                        <li><Link href=''>Growth</Link></li>
                        <li><Link href=''>Sales</Link></li>
                        <li><Link href=''> Chat</Link></li>
                    </ul>



                    <ul className='flex flex-col space-y-4 font-medium'>
                        <li><Link href=''>Pricing</Link></li>
                        <li><Link href=''>Free Trial</Link></li>
                        <li><Link href=''>Standard</Link></li>
                        <li><Link href=''>Busnis</Link></li>
                        <li><Link href=''></Link></li>
                    </ul>



                    <ul className='flex flex-col space-y-4 font-medium'>
                        <li><Link href=''>Enterprise</Link></li>
                        <li><Link href=''>Personalize</Link></li>
                        <li><Link href=''>Automation</Link></li>
                        <li><Link href=''>Invoicing</Link></li>
                        <li><Link href=''> 24/7 Support</Link></li>
                    </ul>



                    <ul className='flex flex-col space-y-4 font-medium'>
                        <li><Link href=''>Careers</Link></li>
                        <li><Link href=''>Open Positions</Link></li>
                        <li><Link href=''>Contractual</Link></li>
                        <li><Link href=''> Part-Time</Link></li>
                        <li><Link href=''>Contact Us</Link></li>
                    </ul>


                </div>

            </div>


            <div className="mobile  md:hidden text-[15px]">

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className='bg-[#E3F1FF] mb-2 md:mb-6 px-4'>
                        <AccordionTrigger>Features</AccordionTrigger>
                        <AccordionContent>Growth</AccordionContent>
                        <AccordionContent>Sales</AccordionContent>
                        <AccordionContent>Chat</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className='bg-[#E3F1FF] mb-2 md:mb-6 px-4'>
                        <AccordionTrigger>Pricing</AccordionTrigger>
                        <AccordionContent>Standard</AccordionContent>
                        <AccordionContent>Free Trial</AccordionContent>
                        <AccordionContent>Business</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className='bg-[#E3F1FF] mb-2 md:mb-6 px-4'>
                        <AccordionTrigger>Enterprise</AccordionTrigger>
                        <AccordionContent>Personalize</AccordionContent>
                        <AccordionContent>Automation</AccordionContent>
                        <AccordionContent>Invoicing</AccordionContent>
                        <AccordionContent>24/7 Support</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className='bg-[#E3F1FF] mb-2 md:mb-6 px-4'>
                        <AccordionTrigger>Careers</AccordionTrigger>
                        <AccordionContent>Open Positions</AccordionContent>
                        <AccordionContent>Part-Time</AccordionContent>
                        <AccordionContent>Invoicing</AccordionContent>
                        <AccordionContent>Contact Us</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>


            <div className=" px:0 w-full md:px-20  md:flex justify-between mb-0 md:mb-8 mt-6 md:mt-10 md:mt-16 bg-slate-100  py-3 text-center">

                <p className='text-[13px] md:text-[17px]'>© Copyright 2024. Your Site. All rights reserved. made by Anas Raza</p>

                <div className='flex justify-center mt-2 md:mt-0 space-x-10'>
                    <Facebook />
                    <Twitter />
                    < Github />
                </div>
            </div>


        </div>
    )
}

export default Footer