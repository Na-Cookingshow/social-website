import React from 'react';

export default function ProfilePage() {
  const userPosts = [
    { id: 1, title: 'Sunset Beach', likes: 234, comments: 45, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400' },
    { id: 2, title: 'Mountain View', likes: 189, comments: 32, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
    { id: 3, title: 'City Lights', likes: 456, comments: 78, image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400' },
    { id: 4, title: 'Forest Path', likes: 321, comments: 56, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    { id: 5, title: 'Ocean Waves', likes: 567, comments: 91, image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400' },
    { id: 6, title: 'Desert Dunes', likes: 298, comments: 43, image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400' },
    { id: 7, title: 'Flower Garden', likes: 412, comments: 67, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400' },
    { id: 8, title: 'Snow Mountain', likes: 523, comments: 82, image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400' },
    { id: 9, title: 'Tropical Paradise', likes: 634, comments: 95, image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
  ];

  return (
    <div className="pt-20 pb-8">
      {/* Cover Photo */}
      <div className="h-48 md:h-64 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Profile Info Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Picture & Basic Info */}
        <div className="relative -mt-20 mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-4xl font-bold text-white">
                JD
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 border-2 border-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>

            {/* Name and Username */}
            <div className="flex-1 text-center sm:text-left sm:mb-4">
              <h1 className="text-3xl font-bold text-gray-800 mb-1">John Doe</h1>
              <p className="text-gray-600 mb-2">@johndoe</p>
              <p className="text-gray-700 max-w-xl">
                📸 Photography enthusiast | 🌍 World traveler | ☕ Coffee lover
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 sm:mb-4">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                Edit Profile
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-3xl font-bold text-gray-800 mb-1">123</div>
            <div className="text-sm text-gray-600">Posts</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-3xl font-bold text-gray-800 mb-1">456</div>
            <div className="text-sm text-gray-600">Followers</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-3xl font-bold text-gray-800 mb-1">789</div>
            <div className="text-sm text-gray-600">Following</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex gap-8">
            <button className="pb-3 border-b-2 border-blue-500 text-blue-500 font-medium flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              Posts
            </button>
            <button className="pb-3 text-gray-600 font-medium hover:text-gray-800 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              Saved
            </button>
            <button className="pb-3 text-gray-600 font-medium hover:text-gray-800 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Liked
            </button>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {userPosts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer aspect-square"
            >
              {/* Image/Emoji Background */}
              <div className="absolute inset-0 bg-gray-200 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                <h3 className="font-semibold text-lg mb-3">{post.title}</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Like Badge */}
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 text-xs font-medium text-gray-700">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                {post.likes}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
}