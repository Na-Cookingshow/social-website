import React from 'react';
import GalleryCard from './GalleryCard';
import { galleryItems } from './GalleryData';

export default function GallerySection({onImageClick}) {
    
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Featured Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        {galleryItems.map((item) => (
          <GalleryCard
           key={item.id} 
           {...item} 
           onClick={() => onImageClick(item)}
          />
        ))}
      </div>
    </section>
  );
};

