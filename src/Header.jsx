import React, { useState } from 'react';
import logo_ocail_web from '../src/assets/logo_ocail_web.png';

export default function Header({ onLoginClick, onMenuClick, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 shadow-2xl sticky top-0 z-30">
      <div className="flex items-center justify-between max-w-full mx-auto gap-4">
        
        {/* Mobile Menu Button */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden text-gray-800"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 flex items-center justify-center transform rotate-45">
            <div className="w-10 h-10 transform -rotate-45">
              <img src={logo_ocail_web} alt="Logo" />
            </div>
          </div>
          <span className="text-gray-800 text-xl md:text-3xl font-bold whitespace-nowrap">Social Website</span>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-2xl hidden md:block">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for images, people, or keywords..."
              className="w-full px-4 py-3 pl-12 pr-4 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm"
            />
            <svg 
              className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </form>

        {/* Login Button */}
        <button 
          onClick={onLoginClick}
          className="bg-blue-500 text-white px-6 md:px-8 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors duration-200 shadow-md flex-shrink-0"
        >
          Login
        </button>
      </div>

      {/* Mobile Search Bar */}
      <form onSubmit={handleSearch} className="md:hidden mt-3">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full px-4 py-2 pl-10 pr-4 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm"
          />
          <svg 
            className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </form>
    </header>
  ); 
}