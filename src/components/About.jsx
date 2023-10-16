import React from 'react'

const About = () => {
    const FullCircle = () => {
        return <div className="w-4 h-4 bg-[#69369E] rounded-full"></div>;
    };
    const EmptyCircle = () => {
        return <div className="w-4 h-4 border-2 border-[#69369E] rounded-full"></div>;
    };
    return (
        <div name="about" className="w-full bg-gradient-to-b from-[#0B0205] via-[#0B0205] to-[#2C1B47] text-gray-300 pt-36">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col text-center justify-center items-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#724C9D]">
                        About
                    </p>
                </div>
                <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 gap-8">
                    <div className="shadow-md shadow-[#2C1B47] hover:scale-105 duration-300 py-2 px-2 rounded-lg h-60 sm:h-64 w-72 sm:w-80">
                        <p className="pb-4 text-lg font-bold text-[#724C9D]">Languages</p>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-between gap-1 pr-2">
                                <p>LATVIAN (National)</p>
                                <p className="flex flex-row gap-1 items-center">
                                    <FullCircle /><FullCircle /><FullCircle /><FullCircle /><FullCircle />
                                </p>
                            </div>
                            <div className="flex flex-row justify-between gap-1 pr-2">
                                <p>ENGLISH</p>
                                <p className="flex flex-row gap-1 items-center">
                                    <FullCircle /><FullCircle /><FullCircle /><FullCircle /><EmptyCircle />
                                </p>
                            </div>
                            <div className="flex flex-row justify-between gap-1 pr-2">
                                <p>RUSSIAN</p>
                                <p className="flex flex-row gap-1 items-center">
                                    <FullCircle /><FullCircle /><EmptyCircle /><EmptyCircle /><EmptyCircle />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md shadow-[#2C1B47] hover:scale-105 duration-300 py-2 px-2 rounded-lg  h-60 sm:h-64 w-72 sm:w-80">
                        <p className="pb-4 text-lg font-bold text-[#724C9D]">My Achievements</p>
                        <div className="flex flex-col gap-2">
                            <ul className="list-disc list-inside text-left">
                                <li>Vocational Diploma in Programming</li>
                                <li>Finished two internships, webdev and Vendon</li>
                            </ul>
                        </div>
                    </div>
                    <div className="shadow-md shadow-[#0B0205] hover:scale-105 duration-300 py-2 px-2 rounded-lg h-60 sm:h-64 w-72 sm:w-80">
                        <p className="pb-4 text-lg font-bold text-[#724C9D]">Hobbies</p>
                        <div className="flex flex-col gap-2">
                            <ul className="list-disc list-inside text-left">
                                <li>Basketball</li>
                                <li>Video games</li>
                                <li>Weight lifting</li>
                                <li>Traveling</li>
                                <li>Hiking</li>
                                <li>Photographing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="shadow-md shadow-[#0B0205] hover:scale-105 duration-300 py-2 px-2 rounded-lg h-60 sm:h-64 w-72 sm:w-80">
                        <p className="pb-4 text-lg font-bold text-[#724C9D]">My Goals</p>
                        <div className="flex flex-col gap-2">
                            <ul className="list-disc list-inside text-left">
                                <li>Visit more countries</li>
                                <li>Land a Job</li>
                                <li>Achieve a healthy body</li>
                                <li>Develop my front-end skills</li>
                                <li>Visit unique destinations</li>
                                <li>Have fun in life</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
