import React from 'react'

const Journey = () => {

    const journey = [
        {
            id: 1,
            year: '2010 - 2019',
            school: 'Middle school/Primary school: Cēsu Pilsētas Vidusskola',
            degree: 'None'
        },
        {
            id: 2,
            year: '2019 - 2023',
            school: 'Vocational school: Vidzemes Tehnoloģijas un Dizaina tehnikums',
            degree: 'Computer Science'
        },
        {
            id: 3,
            year: '2023 - 2027',
            school: 'Bachelor\'s Degree: Vidzemes Augstskola',
            degree: 'Computer Science'
        },
    ]

    const experience = [
        {
            id: 1,
            year: '03/2022 - 06/2022',
            company: 'Vendon',
            role: 'Programmer Internship'
        },
        {
            id: 2,
            year: '01/2023 - 05/2023',
            company: 'WebDev',
            role: 'Programmer Internship'
        }
    ]
    return (
        <div name="journey" className="h-screen w-full bg-gradient-to-b from-[#2C1B47] via-[#2C1B47] to-[#0B0205] text-gray-300 pt-20">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
                <div className="pb-8 text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-[#724C9D]">My Journey</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <div className="pb-4">
                            <p className="text-gray-300 font-bold text-2xl text-left">Journey</p>
                        </div>
                        {journey.map(({ id, year, school, degree }) => (
                            <div key={id} className="shadow-md shadow-[#724C9D] p-4 mb-4 rounded-lg hover:scale-105 duration-500">
                                <p className="font-bold">Year: {year}</p>
                                <p className="font-bold">School: {school}</p>
                                <p className="font-bold">Degree: {degree}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <div className="pb-4">
                            <p className="text-gray-300 font-bold text-2xl text-left">Experience</p>
                        </div>
                        {experience.map(({ id, year, company, role }) => (
                            <div key={id} className="shadow-md shadow-[#724C9D] p-4 mb-4 rounded-lg hover:scale-105 duration-500">
                                <p className="font-bold">Year: {year}</p>
                                <p className="font-bold">Company's name: {company}</p>
                                <p className="font-bold">My Role: {role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Journey
