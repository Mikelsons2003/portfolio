import React from 'react';
import HeroImage from '../assets/HeroImage.jpg';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-[#2C1B47] via-[#2C1B47] to-[#0B0205] text-gray-300">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center items-center text-center h-full pl-12">
                    <h2 className="text-5xl sm:text-5xl font-bold">I'm a Front-End Developer</h2>
                    <p className="text-gray-300 py-4 max-w-md">
                        Graduate of a vocational school specializing in front-end programming.
                        Currently working with technologies like React JS and Tailwind CSS.
                    </p>
                    <div>
                        <button className="group text-gray-300 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#724C9D] to-[#9356A0] cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight />
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="my profile" className="rounded-3xl mx-auto w-2/3 md:w-2/3"/>
                </div>
            </div>
        </div>
    )
}
export default Home
