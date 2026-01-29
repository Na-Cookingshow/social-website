import React from 'react';

export default function NotificationsPage() {
  const notifications = [
    { 
      id: 1, 
      type: 'like',
      user: 'Sarah Johnson',
      avatar: 'SJ',
      text: 'liked your post',
      post: 'Beautiful Sunset Photo',
      time: '2 hours ago',
      read: false,
      color: 'from-pink-500 to-rose-500'
    },
    { 
      id: 2, 
      type: 'follow',
      user: 'John Doe',
      avatar: 'JD',
      text: 'started following you',
      time: '5 hours ago',
      read: false,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 3, 
      type: 'milestone',
      user: null,
      avatar: '🎉',
      text: 'Your post reached 100 likes',
      post: 'Golden Retriever',
      time: '1 day ago',
      read: true,
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      id: 4, 
      type: 'comment',
      user: 'Emily Chen',
      avatar: 'EC',
      text: 'commented on your post',
      post: 'Travel Photography',
      comment: 'Amazing shot! Where was this taken?',
      time: '2 days ago',
      read: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      id: 5, 
      type: 'like',
      user: 'Michael Brown',
      avatar: 'MB',
      text: 'liked your comment',
      time: '3 days ago',
      read: true,
      color: 'from-orange-500 to-amber-500'
    },
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'like':
        return (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        );
      case 'follow':
        return (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
          </svg>
        );
      case 'comment':
        return (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        );
      case 'milestone':
        return (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-20 p-8 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Notifications</h1>
        <p className="text-gray-600">Stay updated with your latest activity</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium whitespace-nowrap">
          All
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-200">
          Unread
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-200">
          Mentions
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {notifications.map((notif) => (
          <div 
            key={notif.id} 
            className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden ${
              !notif.read ? 'border-l-4 border-blue-500' : ''
            }`}
          >
            <div className="p-4 flex gap-4">
              {/* Avatar with Icon Badge */}
              <div className="relative flex-shrink-0">
                {notif.avatar.length > 2 ? (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-2xl">
                    {notif.avatar}
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                    {notif.avatar}
                  </div>
                )}
                {/* Icon Badge */}
                <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br ${notif.color} flex items-center justify-center shadow-lg`}>
                  {getIcon(notif.type)}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="text-gray-800">
                      {notif.user && (
                        <span className="font-semibold">{notif.user}</span>
                      )}
                      {notif.user && ' '}
                      <span className="text-gray-600">{notif.text}</span>
                      {notif.post && (
                        <span className="font-medium text-gray-800"> "{notif.post}"</span>
                      )}
                    </p>
                    {notif.comment && (
                      <p className="mt-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3 italic">
                        "{notif.comment}"
                      </p>
                    )}
                    <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {notif.time}
                    </p>
                  </div>

                  {/* Unread Indicator */}
                  {!notif.read && (
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  )}
                </div>

                {/* Action Buttons for certain types */}
                {notif.type === 'follow' && (
                  <div className="mt-3 flex gap-2">
                    <button className="px-4 py-1.5 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600">
                      Follow Back
                    </button>
                    <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
                      View Profile
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-6 text-center">
        <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
          Load More Notifications
        </button>
      </div>
    </div>
  );
}