import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactimage from "../assets/reactimage.png";
import tailwind from "../assets/tailwind.png";
import php from "../assets/php.png";
import sql from "../assets/sql.png";
import mysql from "../assets/mysql.jpg";
import github from "../assets/github.png";

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactimage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: php,
            title: 'PHP',
            style: 'shadow-[#6181b6]'
        },
        {
            id: 7,
            src: sql,
            title: 'SQL',
            style: 'shadow-[#0079d6]'
        },
        {
            id: 8,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-[#00618b]'
        },
        {
            id: 9,
            src: github,
            title: 'GitHub',
            style: 'shadow-[#000000]'
        }
    ]

    return (
        <div name='experience' className="bg-gradient-to-b from-[#0B0205] via-[#0B0205] to-[#2C1B47] w-full h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300">
                <div className="pb-8 justify-center items-center text-center">
                    <p className="text-4xl font-bold border-b-4 border-[#724C9D] p-2 inline">Experience</p>
                    <p className="py-6">These are all the technologies I have worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8">

                    {techs.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-20 mx-auto"/>
                            <p className="mt-4">{title}</p>
                        </div>
                        ))}

                </div>
            </div>
        </div>
    )
}
export default Experience
