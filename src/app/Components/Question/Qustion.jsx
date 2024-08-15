import React from 'react'
import Image from 'next/image'
import { Minus } from 'lucide-react';
import { Plus } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Question = () => {
    return (
        <div className=' md:flex mt-6 md:mt-32 px-0 md:px-28 '>
            <div className="left w-full md:w-[50%] p-7 px-12">
                <p className='text-[#EB2891] text-[13px] mb-10 '>Frequently Asked Questions</p>
                <h1 className='text-2xl md:text-4xl mt-2 font-bold mb-3'>Let’s clarify some <br /> of  your questions</h1>
                <p className='w-full md:w-[90%] mt-2 md:mt-7 text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>

                <p className='mt-5 text-[#0085FF] text-[13px]'>Learn More</p>
            </div>


            <div className="right w-full sm:w-[50%] flex  text-[11.5px] md:text-[14px] px-0 sm:px-[60px] text-[14px]">

                <Accordion type="single" collapsible className="w-full text-[13px] md:text-[15px]">
                    <AccordionItem value="item-1" className='bg-[#E3F1FF] mb-2 md:mb-6 px-4'>
                        <AccordionTrigger>IUt enim ad minima, quis nostrum  ullam?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className='bg-[#E3F1FF] mb-2 md:mb-6 px-4'>
                        <AccordionTrigger>Lorem ipsum dolor amet,  adipiscing elit?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles  matches the other aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className='bg-[#E3F1FF] mb-2 md:mb-6 px-4'>
                        <AccordionTrigger>Ut enim ad  veniam, quis nostrum  ullam?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It's animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className='bg-[#E3F1FF] mb-2 md:mb-6 px-4'>
                        <AccordionTrigger>Ut enim ad  veniam, quis nostrum ullam?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It's animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </div>
    )
}

export default Question