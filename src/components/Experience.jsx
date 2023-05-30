import React, { useState, useEffect } from 'react'

const Experience = () => {

  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    const skillRes = await fetch('https://portfolio-api-159j.onrender.com/user_skills');
    const data = await skillRes.json();
    setSkills(data);
  }

  useEffect( () => {
   fetchSkills();
  }, [])

  return <div name='experience' className='bg-gradient-to-b  from-black via-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    skills.map(({_id, src, title, style})=>(
                        <div key={_id} className={`shadow-md hover:scale-105 duration-500 py-6 rounded-lg shadow-gray-300 ${style}`}>
                        <img src={src} alt='' className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  
}

export default Experience