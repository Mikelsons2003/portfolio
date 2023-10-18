import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Contact = () => {
    const links = [
        {
            id:1,
            child: (
                <>
                    <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://linkedin.com',
        },
        {
            id:2,
            child: (
                <>
                    <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/Mikelsons2003',
        },
        {
            id:3,
            child: (
                <>
                    <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:miks.mikelsons11@gmail.com',
        },
        {
            id:4,
            child: (
                <>
                    <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/resume.pdf',
            download: true,
        }
    ]
    return (
        <div name="contact" className="w-full h-screen bg-gradient-to-b from-[#0B0205] via-[#0B0205] to-[#2C1B47] text-gray-300 p-4">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8 text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-[#724C9D]">Contact</p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>
                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/02242e13-485a-4074-8c5a-5981f39bfc7e" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 border-[#724C9D] rounded-md text-gray-300 focus:outline-none"/>
                        <input type="text" name="email" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 border-[#724C9D] rounded-md text-gray-300 focus:outline-none"/>
                        <textarea name="message" rows="10" placeholder="Enter your message" className="p-2 bg-transparent border-2 border-[#724C9D] rounded-md text-gray-300 focus:outline-none"/>
                        <button className="text-gray-300 bg-gradient-to-b from-[#724C9D] to-[#9356A0] px-6 py-3 my-8 mx-auto flex items0center rounded-md hover:scale-110 duration-300">Let's Talk</button>
                    </form>
                </div>
                <div>
                    <ul className="pt-8 flex flex-row items-center justify-center gap-2">
                        {links.map(({ id, child, href, download }) => (
                            <li
                                key={id}
                                className="flex justify-center items-center w-14 h-14 bg-[#724C9D] rounded-full hover:scale-105 duration-200"
                            >
                                <a
                                    href={href}
                                    className="flex justify-center items-center w-full h-full text-gray-300"
                                    download={download}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {child}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Contact
