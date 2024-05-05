import React from 'react';

import  crypto from '../assets/portfolio/crypto.jpg';
import  ecommerce from '../assets/portfolio/ecommerce.jpg';
import   todo from '../assets/portfolio/todo.jpg'; 
import   secrets from '../assets/portfolio/secrets.jpg'; 
import restapi from '../assets/portfolio/restapi.png'
import portfolio from '../assets/portfolio/portfolio.jpg'


const Portfolio = () => {

    const portfolios=[
        {
            id:1,
            src:crypto,
            demo:'https://crypto-chain-by-kuldeep.netlify.app/',
            code:'https://github.com/Kuldeep9870/react-crypto-app',

        },
        {
            id:2,
            src:todo,
            demo:'https://todo-list-react-kd.netlify.app/',
            code:'https://github.com/Kuldeep9870/To-Do-List-React',

        },
        {
            id:3,
            src:secrets,
            demo:'',
            code:'',

        },
        {
            id:4,
            src:ecommerce,
            demo:'https://kuldeep9870.github.io/E-Commerce-site/',
            code:'https://github.com/Kuldeep9870/E-Commerce-site',

        },
        {
            id:5,
            src:restapi,
            demo:'https://jokes-api-9kqg.onrender.com/',
            code:'https://github.com/Kuldeep9870/Jokes-API',

        },
        {
            id:6,
            src:portfolio,
            demo:'',
            code:'https://github.com/Kuldeep9870/portfolio',

        },
    ]






  return (
    <div name ='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white h-full'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-ful h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            
        

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolios.map(({id,src,demo,code})=>(
                    <div  key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} 
                    alt="" 
                    className='rounded-md duration-200 hover:scale-105'
                    />
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                        <a href={demo} target='_blank' rel='noreferrer'>Demo</a>
                        </button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                        <a href={code} target='_blank' rel='noreferrer'>
                        Code</a>
                        </button>
                    </div>
                </div>
                ))
            }
            </div>
        </div>

    </div>
  )
}

export default Portfolio;



// import  from '../assets/portfolio/';
// import  from '../assets/portfolio/';
// import  from '../assets/portfolio/';
// import  from '../assets/portfolio/'; 