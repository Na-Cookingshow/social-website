import { useState } from 'react';

export default function ExplorePage({ galleryItems, onImageClick }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // IDs must match the galleryItems.category values
  const exploreCategories = [
    { id: 'dog', name: 'Dogs' },
    { id: 'cat', name: 'Cats' },
    { id: 'books', name: 'Books' },
    { id: 'nature', name: 'Nature' },
    { id: 'food', name: 'Food' },
    { id: 'travel', name: 'Travel' },
  ];

  const filteredItems = selectedCategory
    ? galleryItems.filter(item => item.category === selectedCategory.id)
    : [];

  return (
    <div className="pt-20 p-8">
      {!selectedCategory ? (
        <>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Explore Categories
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {exploreCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => setSelectedCategory(null)}
            className="mb-4 text-blue-500 hover:text-blue-600"
          >
            ← Back to Categories
          </button>

          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {selectedCategory.name}
          </h1>

          {filteredItems.length === 0 ? (
            <p className="text-gray-500">No images found for this category.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  onClick={() => onImageClick(item)}
                  className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
