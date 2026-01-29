import React, { useState } from 'react';

/* ================= ICONS ================= */

const HomeIcon = ({ size = 24 }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 12l2-2 7-7 7 7v10a1 1 0 01-1 1h-3v-4a1 1 0 00-1-1h-2a1 1 0 00-1 1v4H6a1 1 0 01-1-1V10z"
    />
  </svg>
);

const CompassIcon = ({ size = 24 }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M14 10l-4 4 1 3 3-1 4-4-4-2z"
    />
  </svg>
);

const PlusSquareIcon = ({ size = 24 }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 8v8M8 12h8"
    />
  </svg>
);

const TrendingIcon = ({ size = 24 }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 17l6-6 4 4 7-7"
    />
  </svg>
);

const BookmarkIcon = ({ size = 24 }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3-7 3V5z"
    />
  </svg>
);

const BellIcon = ({ size = 24 }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M15 17h5l-1.4-1.4A2 2 0 0118 14v-3a6 6 0 10-12 0v3a2 2 0 01-.6 1.4L4 17h5"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9 17a3 3 0 006 0"
    />
  </svg>
);

const UserIcon = ({ size = 24 }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="7" r="4" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M5 21a7 7 0 0114 0"
    />
  </svg>
);

const SettingsIcon = ({ size = 24 }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 15a3 3 0 100-6 3 3 0 000 6z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 01-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3
         1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.2a1.7 1.7 0 00-1-1.5
         1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 01-2.8-2.8l.1-.1
         a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.2
         a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.8l-.1-.1
         a2 2 0 012.8-2.8l.1.1a1.7 1.7 0 001.8.3
         1.7 1.7 0 001-1.5V3a2 2 0 014 0v.2
         a1.7 1.7 0 001 1.5"
    />
  </svg>
);

/* ================= SIDEBAR ================= */

export default function Sidebar({
  isMobileOpen,
  onClose,
  activeItem,
  setActiveItem,
  onCategorySelect,
}) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showExploreMenu, setShowExploreMenu] = useState(false);

  const menuItems = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'explore', icon: CompassIcon, label: 'Explore', hasDropdown: true },
    { id: 'create', icon: PlusSquareIcon, label: 'Create' },
    { id: 'trending', icon: TrendingIcon, label: 'Trending' },
    { id: 'saved', icon: BookmarkIcon, label: 'Saved' },
    { id: 'notifications', icon: BellIcon, label: 'Notifications' },
    { id: 'profile', icon: UserIcon, label: 'Profile' },
    { id: 'settings', icon: SettingsIcon, label: 'Settings' },
  ];

  // ✅ Corrected category IDs to match galleryItems
  const exploreCategories = [
    { id: 'dog', name: 'Dogs' },
    { id: 'cat', name: 'Cats' },
    { id: 'books', name: 'Books' },
    { id: 'nature', name: 'Nature' },
    { id: 'food', name: 'Food' },
    { id: 'travel', name: 'Travel' },
  ];

  const handleItemClick = (id, hasDropdown) => {
    if (hasDropdown) {
      setShowExploreMenu((prev) => !prev);
    } else {
      setActiveItem(id);
      setShowExploreMenu(false);
    }
  };

  return (
    <>
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      )}

      <div className={`w-20 bg-white border-r h-screen fixed left-0 top-0 pt-20 z-40
        transition-transform ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>

        <div className="flex-1 px-3 py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <div key={item.id} className="relative">
                <button
                  onClick={() => handleItemClick(item.id, item.hasDropdown)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`w-full h-14 mb-2 rounded-xl flex items-center justify-center
                    ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <Icon />
                </button>

                {/* Tooltip */}
                {hoveredItem === item.id && !showExploreMenu && (
                  <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2
                    bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg z-50">
                    {item.label}
                  </div>
                )}

                {/* Explore Dropdown */}
                {item.id === 'explore' && showExploreMenu && (
                  <div className="absolute left-full ml-2 top-0 bg-white w-48 rounded-lg shadow border py-2 z-50">
                    {exploreCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          onCategorySelect(cat);
                          setShowExploreMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
