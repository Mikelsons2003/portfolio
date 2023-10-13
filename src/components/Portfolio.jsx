import React from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';

const Portfolio = () => {

    const projects = [
        {
            id:1,
            src: image1,
            string: 'This website is a user-friendly online clothing store. Catering to women, men, and kids. It has a very simplified design, making it easy for visitors to navigate and find the perfect outfit. With five distinct clothing categories to explore. Each product on the website is fully interactive, allowing users to click and view detailed descriptions, prices, and other essential information. In addition, a functional register and login system enhances the shopping experience by providing a personalized and secure platform for customers. This website was created for my last school exam'
        },
        {
            id:2,
            src: image2,
            string: 'I created this portfolio to showcase my skills, accomplishments, and experiences. It serves as a digital reflection of my journey, allowing me to highlight my talents, projects, and personal growth. And I wanted to put my react and tailwind skills to use'
        }
    ]

    return (
        <div name="portfolio" className="bg-gradient-to-b from-[#2C1B47] via-[#2C1B47] to-[#0B0205] w-full text-gray-300 md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 justify-center items-center text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-[#724C9D]">Portfolio</p>
                    <p className="py-6">Check out some of my work</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        projects.map(({id, src, string}) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img src={src} alt="" className="rounded-tl-md rounded-tr-md duration-200 w-full h-40"/>
                                <div className="flex items-center justify-center">
                                    <p className="hidden w-full px-2 py-2">{string}</p>
                                    <button className="h-12 w-full rounded-bl-md rounded-br-md bg-gradient-to-r from-[#724C9D] to-[#9356A0] cursor-pointer">Read More</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Portfolio
