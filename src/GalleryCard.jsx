import React from 'react';

export default function GalleryCard({ image, title, type, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-200">{type}</p>
        </div>
      </div>
      {type === 'video' && (
        <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2">
          <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
          </svg>
        </div>
      )}
    </div>
  );
}