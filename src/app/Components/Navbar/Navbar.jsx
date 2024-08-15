// "use client"
// import Logo from '../../../../public/Images/Logo (1).png'
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';

// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// const Navbar = () => {
//     // State to manage the navbar's visibility
//     const [nav, setNav] = useState(false);

//     // Toggle function to handle the navbar's display
//     const handleNav = () => {
//         setNav(!nav);
//     };

//     // Array containing navigation items
//     const navItems = [
//         { id: 1, text: 'Features' },
//         { id: 2, text: 'Company' },
//         { id: 3, text: 'Resources' },
//         { id: 4, text: 'Enterprise' },
//         { id: 5, text: 'Careers' },
//     ];

//     const navItems2 = [
//         { id: 2, text: 'Open an Account' },
//         { id: 1, text: 'Sign In' },
//     ];

//     return (
//         <div className=' sticky flex justify-center items-center mt-3 w-full mx-auto px-10 text-black'>
//             {/* Logo */}
//             <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
//                 <Image src={Logo}></Image>
//             </h1>

//             {/* Desktop Navigation */}
//             <div className='flex'>

//                 <ul className='hidden md:flex'>
//                     {navItems.map(item => (
//                         <li
//                             key={item.id}
//                             className='p-4 hover:bg-[#fbfdfc] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
//                         >
//                             {item.text}
//                         </li>
//                     ))}
//                 </ul>

//                 {/* right */}

//             </div>


//             {/* Mobile Navigation Icon */}
//             <div onClick={handleNav} className='block md:hidden'>
//                 {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//             </div>

//             {/* Mobile Navigation Menu */}
//             <ul
//                 className={
//                     nav
//                         ? 'fixed z-50 md:hidden bg-black text-white left-0 top-0 w-[60%] h-full border-r border-r-gray-900  ease-in-out duration-500'
//                         : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
//                 }
//             >
//                 {/* Mobile Logo */}
//                 <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>
//                 </h1>

//                 {/* Mobile Navigation Items */}
//                 {navItems.map(item => (
//                     <li
//                         key={item.id}
//                         className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer '
//                     >
//                         {item.text}
//                     </li>
//                 ))}

//                 {navItems2.map(item2 => (
//                     <li
//                         key={item2.id}
//                         className='p-4 border-b rounded-xl  hover:bg-[#dcdfde] duration-300 hover:text-black cursor-pointer border-gray-600'
//                     >
//                         <Link href={item2.link || '/'}>
//                             {item2.text}
//                         </Link>
//                     </li>
//                 ))}

//             </ul>
//         </div>
//     );
// };

// export default Navbar;
// // Integrating the Navbar into Your App
// // With our Navbar component ready, let's seamlessly integrate it into our main App component.

"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../../public/Images/Logo (1).png'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    if (nav) {
        document.body.style.overflow = "hidden"
    }
    else {
        document.body.style.overflow = "auto"
    }

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'About' },
        { id: 2, text: 'Services', link: "/Services" },
        { id: 3, text: 'Projects', link: "/R-Project" },
        { id: 4, text: 'Team', link: "/History" },
        { id: 5, text: 'Blog', link: "/Blog" },
        { id: 5, text: 'Contact Us', link: "/Contact" },
    ];

    return (
        <div className=' flex  bg-white py-0  justify-between items-center  relative  w-full mx-auto px-4 text-black'>
            {/* Logo */}
            <Image src={Logo}></Image>
            {/* <h1 className=' bg-black p-3 text-white font-bold  tracking-[.-25em]' >ARK <br/> House</h1> */}
            {/* Desktop Navigation */}
            <ul className='hidden md:flex '>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 hover:bg-[#fdfdfd]  rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                    >
                        <Link href={item.link || '/'}>
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden py-5 '>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed z-50 md:hidden bg-black text-white left-0 top-0 w-[60%] h-full border-r border-r-gray-900  ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                {/* Mobile Logo */}
                {/* <Image src={Logo}></Image> */}



                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 border-b rounded-xl  hover:bg-[#dcdfde] duration-300 hover:text-black cursor-pointer border-gray-600'
                    >
                        <Link href={item.link || '/'}>
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;