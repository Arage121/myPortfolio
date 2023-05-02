import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { TbArrowRightCircle } from 'react-icons/tb'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-green-900 to-black text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Frontend Developer</h2>
                <p className='text-white py-4 max-w-md'>
                Creator, Developer, Innovator. Believe in practically developed things rather than theoritical. 
                Aiming to become a full stack developer so that I can help others in many ways.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-green-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <TbArrowRightCircle size={22} className='ml-1'/>
                        </span> 
                    </Link>
                </div>
            </div>
            <div className='mb-4'>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto sm:w-1/3 w-2/3'/>
            </div>
        </div>
    </div>
  )
}

export default Home