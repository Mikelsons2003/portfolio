import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'journey',
        },
        {
            id: 4,
            link: 'portfolio',
        },
        {
            id: 5,
            link: 'experience',
        },
        {
            id: 6,
            link: 'contact',
        },
    ];

    const closeNav = () => {
        setNav(false);
    };

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 bg-[#2C1B47] text-gray-300 fixed border-b-2 border-[#724C9D] z-10">
            <div>
                <h1 className="text-5xl font-signature ml-2">Miks</h1>
            </div>

            <ul className="hidden sm:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"
                    >
                        <Link
                            to={link}
                            smooth
                            duration={500}
                            onClick={closeNav} // Close the mobile menu on link click
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-300 sm:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#2C1B47] to-[#724C9D] text-gray-300">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link
                                to={link}
                                smooth
                                duration={500}
                                onClick={closeNav} // Close the mobile menu on link click
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;