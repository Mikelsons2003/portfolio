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
        <div name="journey" className="h-max w-full bg-gradient-to-b from-[#2C1B47] via-[#2C1B47] to-[#0B0205] text-gray-300 pt-36">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col text-center justify-center items-center w-full h-full">
                <div className="pb-8 justify-center items-center text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-[#724C9D]">My Journey</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex flex-col">
                        <div className="pb-4">
                            <p className="text-gray-300 font-bold text-2xl text-left">Journey</p>
                        </div>
                        {journey.map(({ id, year, school, degree}) => (
                            <div key={id} className="border-2 border-[#69369E] w-full h-[160px] p-2 text-left">
                            <p><span className="font-bold">Year: </span>{year}</p>
                            <p><span className="font-bold">School - </span>{school}</p>
                            <p><span className="font-bold">Degree: </span>{degree}</p>
                            </div>
                        ))}

                    </div>
                    <div className="flex flex-col">
                        <div className="pb-4">
                            <p className="text-gray-300 font-bold text-2xl text-left">Experience</p>
                        </div>
                        {experience.map(({ id, year, company, role}) => (
                            <div key={id} className="border-2 border-[#69369E] w-full h-[160px] p-2 text-left">
                                <p><span className="font-bold">Year: </span>{year}</p>
                                <p><span className="font-bold">Company's name: </span>{company}</p>
                                <p><span className="font-bold">My Role: </span>{role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Journey
