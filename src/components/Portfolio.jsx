import React, { useEffect, useState } from 'react'
// import scribbler from '../assets/portfolio/scribbler.png'
// import recipefinder from '../assets/portfolio/recipefinder.png'

const Portfolio = () => {
 

  const [portfolio,setPortfolio] = useState([]);

  const fetchProduct = async()=>{
    const fetchResponse = await fetch('https://api-service2.onrender.com/user_details');
    const data = await fetchResponse.json();
    setPortfolio(data);
  }
  
  useEffect(()=>{
    fetchProduct();
  },[])
 

  return <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0'>
          {
           portfolio.map(({ id, src, dlink, clink }) => (

              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105'>
                    <a href={dlink} target='_blank' rel='noopener noreferrer'>Demo</a>
                  </button>
                  <button className='w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105'>
                    <a href={clink} target='_blank' rel='noopener noreferrer'>Code</a>
                  </button>
                </div>
              </div>
            
            ))
          }
            
        </div>
        </div>
  </div>;
}

export default Portfolio