import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const links = [
    {
        id:1,
        child:(
            <>
            LinkedIN <FaLinkedin size={30}/>
            </> 
        ),
        href:'https://www.linkedin.com/in/ayush-raj74/',
        style:'rounded-tr-md'
    },
    {
        id:2,
        child:(
            <>
            Github <FaGithub size={30}/>
            </> 
        ),
        href:'https://github.com/Arage121',
    },
    {
        id:3,
        child:(
            <>
            Mail <HiOutlineMailOpen size={30}/>
            </> 
        ),
        href:'mailto:rajayush@gmail.com',
    },
    {
        id:4,
        child:(
            <>
            Resume <BsFillPersonLinesFill size={30}/>
            </> 
        ),
        href:'/resume.pdf',
        style:'rounded-br-md',
        download:true,
    }
]

const SocialLinks = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
    <ul> 

        {links.map(({id, child, href, style, download}) => (
            <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-700 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' 
            + ' ' + style}>
            <a rel='noreferrer' href={href} className='flex justify-between items-center w-full text-white '
             download={download}
             target='_blank'>
                {child}
            </a>
        </li>
        ))}
    </ul>
    </div>
  );
}

export default SocialLinks