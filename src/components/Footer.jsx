import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#100319] text-gray-400 py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <span className="text-4xl font-extrabold cursor-pointer text-white hover:text-purple-300 transition duration-500 ease-in-out">
            <span className=" text-purple-900 ">Mantık</span>Yolu
          </span>
        </div>
        <p className="text-lg mb-2">
          <span className="font-semibold text-gray-300">
            All Rights Belong To Respective Creators
          </span>
        </p>
        <p className="text-lg">
          <span className="font-semibold text-purple-400">
            Developed by Saif Sultan
          </span>
        </p>
        <p className="text-lg mt-6 font-semibold text-gray-300">
          Let's connect on social media!
        </p>
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/saif._sultan/profilecard/?igsh=N3FieDQ5OGZhbGY4"
            target="_blank"
            className="text-4xl text-[#9b4dff] transition-colors duration-500 ease-in-out hover:text-[#100319] hover:shadow-lg hover:shadow-[#9b4dff] p-2 hover:bg-[#9b4dff] rounded-full"
          >
            <RiInstagramFill />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100076558403410&mibextid=ZbWKwL"
            target="_blank"
            className="text-4xl text-[#9b4dff] transition-colors duration-500 ease-in-out hover:text-[#100319] hover:shadow-lg hover:shadow-[#9b4dff] hover:bg-[#9b4dff] p-2 rounded-full"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/saif-sultan-ba3171297/"
            target="_blank"
            className="text-4xl text-[#9b4dff] transition-colors duration-500 ease-in-out hover:text-[#100319] hover:shadow-lg hover:shadow-[#9b4dff] p-2 rounded-full hover:bg-[#9b4dff]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/saifkilic"
            target="_blank"
            className="text-4xl text-[#9b4dff] transition-colors duration-500 ease-in-out hover:text-[#100319] hover:shadow-lg hover:shadow-[#9b4dff] p-2 rounded-full hover:bg-[#9b4dff]"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
