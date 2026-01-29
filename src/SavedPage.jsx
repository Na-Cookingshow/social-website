import React from 'react';

export default function SavedPage() {
  const savedItems = [
    { 
      id: 1, 
      title: 'Beautiful Sunset', 
      category: 'nature', 
      image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400',
      likes: 234, 
      savedDate: '2 days ago' 
    },
    { 
      id: 2, 
      title: 'Golden Retriever', 
      category: 'dogs', 
      image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400',
      likes: 189, 
      savedDate: '5 days ago' 
    },
    { 
      id: 3, 
      title: 'Classic Novel', 
      category: 'books', 
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
      likes: 156, 
      savedDate: '1 week ago' 
    },
    { 
      id: 4, 
      title: 'Mountain Peak', 
      category: 'nature', 
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      likes: 412, 
      savedDate: '2 weeks ago' 
    },
    { 
      id: 5, 
      title: 'Cute Cat', 
      category: 'cats', 
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400',
      likes: 523, 
      savedDate: '3 weeks ago' 
    },
    { 
      id: 6, 
      title: 'Tropical Beach', 
      category: 'travel', 
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
      likes: 678, 
      savedDate: '1 month ago' 
    },
  ];

  return (
    <div className="pt-20 p-8 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Saved Items</h1>
          <p className="text-gray-600">Your collection of favorite posts</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          <button className="px-5 py-2 bg-blue-500 text-white rounded-full text-sm font-medium whitespace-nowrap shadow-md">
            All ({savedItems.length})
          </button>
          <button className="px-5 py-2 bg-white text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-100 shadow-sm">
            Nature
          </button>
          <button className="px-5 py-2 bg-white text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-100 shadow-sm">
            Dogs
          </button>
          <button className="px-5 py-2 bg-white text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-100 shadow-sm">
            Books
          </button>
          <button className="px-5 py-2 bg-white text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-100 shadow-sm">
            Travel
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden cursor-pointer"
            >
              {/* Image Area */}
              <div className="relative aspect-square bg-gray-200 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>

                {/* Unsave Button */}
                <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </button>
              </div>

              {/* Content Area */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-500 transition-colors">
                    {item.title}
                  </h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full capitalize">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Saved {item.savedDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no items) */}
        {savedItems.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📌</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No saved items yet</h3>
            <p className="text-gray-600">Start saving posts you love to see them here</p>
          </div>
        )}
      </div>
    </div>
  );
}