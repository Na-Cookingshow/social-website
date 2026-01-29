import React from 'react';
import GalleryCard from './GalleryCard';

export default function GallerySection({ galleryItems, onImageClick }) {
  return (
    <section className="flex-1 px-6 py-8">
      <div className="max-w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Gallery</h2>
        
        {/* Masonry grid layout - cards follow image dimensions */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="break-inside-avoid">
              <GalleryCard
                {...item} 
                onClick={() => onImageClick(item)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


