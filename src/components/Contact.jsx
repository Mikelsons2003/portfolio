import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill, BsBank} from 'react-icons/bs';
import {AiOutlinePhone} from 'react-icons/ai';
import {BiHome} from 'react-icons/bi';

const Contact = () => {
    const links = [
        {
            id:1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md rounded-tl-md'
        },
        {
            id:2,
            child: (
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/Mikelsons2003',
        },
        {
            id:3,
            child: (
                <>
                    Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:miks.mikelsons11@gmail.com',
        },
        {
            id:4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/resume.pdf',
            style: ' rounded-br-md rounded-bl-md',
            download: true,
        }
    ]
    return (
        <div name="contact" className="w-full h-screen bg-gradient-to-b from-[#0B0205] via-[#0B0205] to-[#2C1B47] text-gray-300 flex flex-col justify-center items-center pt-36">
            <div className="pb-8">
                <p className="text-4xl font-bold border-b-4 border-[#724C9D] p-2 inline">Contact</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 text-center items-center gap-12 mb-20 pl-8">
                <div className="flex flex-col gap-2 mx-auto text-left">
                    <p className="flex items-center"><HiOutlineMail size={22} className="mr-2"/> Email: miks.mikelsons11@gmail.com</p>
                    <p className="flex items-center"><AiOutlinePhone size={22} className="mr-2"/>Phone: +371 26997008</p>
                    <p className="flex items-center"><BiHome size={22} className="mr-2"/>Location: Cēsis, Cēsu novads, Latvia</p>
                    <p className="flex items-center"><BsBank size={22} className="mr-2"/>Bank: SEB Banka</p>
                    <p className="flex items-center"><BsBank size={22} className="mr-2"/>Bank Number: XXXX-XXXX-XXXX-XXXX</p>
                    <p className="flex items-center"><BsBank size={22} className="mr-2"/>SWIFT: XXXXLVXX</p>
                </div>
                <div className="flex flex-col gap-2 mx-auto text-center">
                    <ul className="pt-8">
                        {links.map(({ id, child, href, style, download }) => (
                            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-[#724C9D] border-b-2 border-[#2C1B47] hover:scale-105 duration-200 " + style}>
                                <a href={href} className="flex justify-between items-center w-full text-gray-300" download={download} target="_blank" rel="noreferrer">{child}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Contact
