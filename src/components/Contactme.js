import React from 'react'
import { FaWhatsapp,FaLinkedin,FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';



function Contactme() {
    const links=[
        {
            id:1 ,
            title:'Mail' ,
            style:'shadow-red-500',
            child: <HiOutlineMail size={30} className='w-20 mx-auto' />,
            href:`mailto:kuldeep.codes@gmail.com`,
            info:"kuldeep.codes@gmail.com",
            button:"Send Mail"
        },
        {
            id:2 ,
            title:'GitHub' ,
            style:'shadow-gray-500',
            child: <FaGithub size={30} className='w-20 mx-auto' />,
            href:"https://github.com/kuldeep9870",
            info:"Kuldeep9870",
            button:"Check projects",
        },
        {
            id:3 ,
            title:'LinkedIn' ,
            style:'shadow-blue-500',
            child: <FaLinkedin size={30}  className='w-20 mx-auto' />,
            href: "https://www.linkedin.com/in/kuldeep-a64578207/",
            info:"Connect Here!",
            button:"Connect",
        },
        {
            id:4 ,
            title:'Whatsapp' ,
            style:'shadow-green-500',
            child: <FaWhatsapp size={30} color='green' className='w-20 mx-auto' />,
            href:"http://wa.me/917011087785",
            info:"Message Me!",
            button:"Send Message",
            download:true,
        },
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>

    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
    
        <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
        {links.map(({id,title,style,child,href,info,button,download})=>(
            
            <div key={id} className={`shadow-md text-wrap hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}>
                {child}
                <p className='mt-2'>{title}</p>
                <p className='mt-2 text-wrap'>{info}</p>
                <a href={href} download={download} target='_blank' rel='noreferrer'>
                <button className='mt-3 mb-1 p-2 rounded-md hover:border-2 border-bluescale-105 duration-100 '>
                    {button}
                </button>
                </a>
            </div>
            
        ))}
            
        </div>
    </div>
    </div>
  )
}

export default Contactme;