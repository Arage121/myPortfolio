import React from 'react'

const About = () => {
  return <div name='about' className='w-full h-screen bg-gradient-to-b from-black via-green-900 to-black text-white'>
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-200'>About</p>
        </div>
        <p className='text-xl mt-20'>
        My name is Ayush Raj. I am a 4th year student pursuing Batchelor of Computer Science and Engineering from Lovely Professional University.
        </p>
        <br />
        <p className='text-xl'>
        Coming towards my technical skills, I have explored more on HTML, CSS, JavaScript, ReactJs, and Java. 
        I have also done projects in development site using these languages. You can see them below in the portfolio part
        </p>
     </div>
     
    </div>;
};

export default About