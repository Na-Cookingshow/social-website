import React from 'react';
import logo_ocail_web from '../src/assets/logo_ocail_web.png'

export default function Header({ onLoginClick }) {
  return (
    <header className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 shadow-2xl">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400flex items-center justify-center transform rotate-45">
            <div className="w-10 h-10 transform -rotate-45">
              <img src={logo_ocail_web} alt="" />
            </div>
          </div>
          <span className="text-gray-800 text-3xl font-bold">Social Website</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
            Home
          </a>
          
          <a href="#solution" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
            Solution
          </a>
         
          <a href="#about" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
            About us
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
            Videos
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
            Create
          </a>
        </nav>

        {/* Login Button */}
        <button 
          onClick={onLoginClick}
          className="bg-blue-500 text-white px-8 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors duration-200 shadow-md"
        >
          Login
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}