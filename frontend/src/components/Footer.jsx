import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* <footer className="border py-10"> */}
        {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Products</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Flutter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  React
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Android
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  iOS
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Design to code</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Figma plugin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Templates
                </a>
              </li>
            </ul>
          </div>

          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Comparison</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  DhiWise vs Anima
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  DhiWise vs Appsmith
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  DhiWise vs FlutterFlow
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  DhiWise vs Monday Hero
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  DhiWise vs Retool
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  DhiWise vs Bubble
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  DhiWise vs Figma Dev Mode
                </a>
              </li>
            </ul>
          </div> */}
          {/* <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer> */}
      {/* <div className="min-h-screen flex flex-col">
  
  <div className="flex-grow">
   
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Welcome to the Blog App</h1>
      <p className="text-lg">Some content about the blog app...</p>
      
    </div>
  </div> */}

  
  <div className="bg-gray-800 text-white py-4">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="text-xl font-semibold hidden md:flex">
        Style<span className="text-blue-500 font-bold">Cue</span>
      </div>
      <div className="text-gray-400 text-sm hidden md:flex">
        <p>&copy; 2024</p>
      </div>
      <div className="mt-4 md:mt-0 flex space-x-4">
        <a href="#" className="text-white hover:text-blue-500">
          <FaGithub className="h-6" />
        </a>
        <a href="#" className="text-white hover:text-red-500">
          <BsYoutube className="h-6" />
        </a>
        <a href="#" className="text-white hover:text-blue-700">
          <FaLinkedin className="h-6" />
        </a>
      </div>
    </div>
  </div>
{/* </div> */}

    </>
  );
};

export default Footer;
