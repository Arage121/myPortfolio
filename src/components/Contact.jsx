import React from 'react';

const Contact = () => {
  return <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>

    <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
            <form action='https://getform.io/f/9e5239ac-5673-4554-9048-461cfafb2ed5' method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type='text' name='name' required placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <input type='email' name='email' required placeholder='Enter your email' className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <textarea name='message' rows='10' required placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                <button className='text-white bg-gradient-to-b from-blue-500 to-purple-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
            </form>
        </div>
    </div>

  </div>

}

export default Contact