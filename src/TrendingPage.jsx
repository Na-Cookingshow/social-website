import React, { useState } from 'react';

export default function TrendingPage({ onImageClick }) {
  const [selectedTab, setSelectedTab] = useState('today');

  const trendingPosts = {
    today: [
      { 
        id: 1, 
        title: 'Minimalist Workspace', 
        category: 'design',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600',
        likes: 2847, 
        views: '45K',
        trend: '+234%',
        author: 'Sarah Design',
        avatar: 'SD'
      },
      { 
        id: 2, 
        title: 'Healthy Bowl Recipe', 
        category: 'food',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
        likes: 1923, 
        views: '32K',
        trend: '+189%',
        author: 'Chef Mike',
        avatar: 'CM'
      },
      { 
        id: 3, 
        title: 'Tokyo Street Photography', 
        category: 'travel',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600',
        likes: 3456, 
        views: '58K',
        trend: '+312%',
        author: 'Alex Photos',
        avatar: 'AP'
      },
      { 
        id: 4, 
        title: 'Golden Hour Portrait', 
        category: 'photography',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600',
        likes: 4234, 
        views: '67K',
        trend: '+456%',
        author: 'Emma Lens',
        avatar: 'EL'
      },
      { 
        id: 5, 
        title: 'Modern Architecture', 
        category: 'design',
        image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600',
        likes: 2156, 
        views: '41K',
        trend: '+178%',
        author: 'John Architect',
        avatar: 'JA'
      },
      { 
        id: 6, 
        title: 'Cute Puppy Love', 
        category: 'pets',
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600',
        likes: 5678, 
        views: '89K',
        trend: '+523%',
        author: 'Pet Lover',
        avatar: 'PL'
      },
    ],
    week: [
      { 
        id: 7, 
        title: 'Workout Motivation', 
        category: 'fitness',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600',
        likes: 8934, 
        views: '124K',
        trend: '+789%',
        author: 'Fit Life',
        avatar: 'FL'
      },
      { 
        id: 8, 
        title: 'Cozy Reading Nook', 
        category: 'home',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
        likes: 6234, 
        views: '98K',
        trend: '+634%',
        author: 'Home Decor',
        avatar: 'HD'
      },
      { 
        id: 9, 
        title: 'Mountain Adventure', 
        category: 'travel',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
        likes: 7456, 
        views: '112K',
        trend: '+712%',
        author: 'Explorer Joe',
        avatar: 'EJ'
      },
    ],
    month: [
      { 
        id: 10, 
        title: 'Viral Dance Challenge', 
        category: 'entertainment',
        image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600',
        likes: 15234, 
        views: '234K',
        trend: '+1523%',
        author: 'Dance Pro',
        avatar: 'DP'
      },
      { 
        id: 11, 
        title: 'DIY Home Project', 
        category: 'diy',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600',
        likes: 12456, 
        views: '187K',
        trend: '+1124%',
        author: 'DIY Master',
        avatar: 'DM'
      },
    ],
  };

  const currentPosts = trendingPosts[selectedTab];

  return (
    <div className="pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Trending Now</h1>
              <p className="text-gray-600">See what's hot right now</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-8 border-b border-gray-200">
          <button
            onClick={() => setSelectedTab('today')}
            className={`px-6 py-3 font-semibold transition-all ${
              selectedTab === 'today'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            🔥 Today
          </button>
          <button
            onClick={() => setSelectedTab('week')}
            className={`px-6 py-3 font-semibold transition-all ${
              selectedTab === 'week'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            📈 This Week
          </button>
          <button
            onClick={() => setSelectedTab('month')}
            className={`px-6 py-3 font-semibold transition-all ${
              selectedTab === 'month'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            ⭐ This Month
          </button>
        </div>

        {/* Trending Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((post, index) => (
            <div
              key={post.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all overflow-hidden cursor-pointer"
              onClick={() => onImageClick && onImageClick(post)}
            >
              {/* Rank Badge */}
              <div className="relative">
                <div className="absolute top-3 left-3 z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                    index === 0 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                    index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-400' :
                    index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                    'bg-gradient-to-br from-blue-400 to-purple-500'
                  }`}>
                    #{index + 1}
                  </div>
                </div>

                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Trend Badge */}
                <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {post.trend}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {post.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{post.author}</p>
                    <span className="text-xs text-gray-500 capitalize">{post.category}</span>
                  </div>
                </div>

                <h3 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">{post.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>{post.views}</span>
                    </div>
                  </div>

                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl">
            Load More Trending Posts
          </button>
        </div>
      </div>
    </div>
  );
}