import React from 'react'

const About = () => {
  return (
    <div name="about" 
    className='bg-gradient-to-b from-gray-800 to-black text-white w-full h-full'>

    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
        Greetings! I'm Kuldeep, a Computer Science & Engineering student with a passion for technology and innovation. Proficient in JavaScript, HTML, CSS, React JS, Node.js, and MySQL, I have a strong foundation in web development and backend systems. With a collaborative mindset and a keen eye for detail, I'm eager to contribute to impactful projects and explore new opportunities in the tech industry.
        </p>
        <br/>
        <p className='text-xl'>
        I have a solid foundation in data structures and algorithms. I'm driven by a desire to tackle complex problems, as evidenced by my experience successfully solving  500 DSA problems on platforms like Leetcode, GFG, and Code Studio. This experience has honed my problem-solving skills and equipped me with the ability to approach challenges systematically.
        </p>
    </div>
    </div>
  )
}

export default About