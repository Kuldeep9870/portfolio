import React from "react";
import HeroImage from "../assets/img.png";
import { MdKeyboardArrowRight, MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { FaGithub, FaLinkedin,FaInstagram  } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/kuldeep-a64578207/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/kuldeep9870",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: `mailto:${"kuldeep.codes@gmail.com"}`,
    },
    {
      id: 4,
      child: (
        <>
          <FaInstagram size={30} />
        </>
      ),
      href: 'https://www.instagram.com/imkuldeep22/',
      style: "rounded-br-md",
      download: true,
    },
  ];
  const resumelink = "https://drive.google.com/file/d/18tYHHnwhoN-LYyEK3JRPnwyVeqVNCDqM/view?usp=drive_link";
  const [text] = useTypewriter({
    words: ["Coder", "Developer", "Programmer", "Innovator"],
    loop: Infinity,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a</h2>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            {text}
            <Cursor cursorColor="#4287f5" />
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have good knowledge of building and designing web application.
            Currently, I love to work on web application using technologies like
            React, Tailwind and Nodejs.
          </p>
            <ul className="flex flex-row gap-5 p-3 lg:hidden">
              {links.map(({ id, child, href, style, download }) => (
                <li
                  key={id} className="hover:scale-150 duration-200"
                >
                  <a
                    href={href}
                    className="flex justify-between items-center w-full text-white "
                    download={download}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>

          <div className="flex flex-row">
            <Link to="portfolio" smooth duration={300}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300 ">
                  <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </Link>
            <a
              href={resumelink}
              download={true}
              target="_blank"
              rel="noreferrer"
            >
              <button className="group text-white w-fit px-6 py-3  my-2 mx-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Resume
                <span className="group-hover:rotate-90 duration-300 ">
                  <MdOutlineFileDownload size={25} className="ml-1" />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="pl-12 ">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-72"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
