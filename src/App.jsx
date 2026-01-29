import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Sidebar from "./Sidebar";
import Header from "./Header";
import HeroSection from './Herosection';
import GallerySection from './GallerySection';
import ImageDetail from './ImageDetail';
import CreatePage from './CreatePage';
import TrendingPage from './TrendingPage';
import ProfilePage from './ProfilePage';
import SettingsPage from './SettingsPage';
import NotificationsPage from './NotificationsPage';
import SavedPage from './SavedPage';
import { galleryItems as initialGalleryItems } from './GalleryData';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [galleryItems, setGalleryItems] = useState(initialGalleryItems);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleLoginClick = () => setShowLogin(true);
  
  const handleCloseModal = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleGoRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleGoLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const handleImageClick = (image) => setSelectedImage(image);

  const handleCloseDetail = () => setSelectedImage(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setActiveItem('home');
  };

  const handleClearCategory = () => {
    setSelectedCategory(null);
  };

  const handleAddPost = (newPost) => {
    setGalleryItems([newPost, ...galleryItems]);
    setActiveItem('home');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const searchTerm = query.toLowerCase().trim();
    const results = galleryItems.filter(item => {
      const title = (item.title || '').toLowerCase();
      const category = (item.category || '').toLowerCase();
      const description = (item.description || '').toLowerCase();
      
      return title.includes(searchTerm) || 
             category.includes(searchTerm) || 
             description.includes(searchTerm);
    });
    setSearchResults(results);
    setActiveItem('home');
    setSelectedCategory(null);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        isMobileOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        onCategorySelect={handleCategorySelect}
      />

      {/* Main Content */}
      <div className="lg:ml-20">
        {/* Header */}
        <Header 
          onLoginClick={handleLoginClick}
          onMenuClick={() => setIsSidebarOpen(true)}
          onSearch={handleSearch}
        />

        {/* Search Results Badge */}
        {searchResults && activeItem === 'home' && (
          <div className="pt-20 px-8 pb-4">
            <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm p-3 w-fit">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="font-semibold text-gray-800">
                Found {searchResults.length} results for "{searchQuery}"
              </span>
              <button 
                onClick={handleClearSearch}
                className="ml-2 text-gray-400 hover:text-gray-600 text-xl"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Selected Category Badge */}
        {selectedCategory && activeItem === 'home' && (
          <div className="pt-20 px-8 pb-4">
            <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm p-3 w-fit">
              <span className="text-2xl">{selectedCategory.emoji}</span>
              <span className="font-semibold text-gray-800">{selectedCategory.name}</span>
              <button 
                onClick={handleClearCategory}
                className="ml-2 text-gray-400 hover:text-gray-600 text-xl"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* HOME PAGE */}
        {activeItem === 'home' && (
          <>
            {!selectedCategory && !searchResults && <HeroSection />}
            <GallerySection 
              galleryItems={
                searchResults ? searchResults :
                selectedCategory 
                  ? galleryItems.filter(item => item.category === selectedCategory.id)
                  : galleryItems
              }
              onImageClick={handleImageClick} 
            />
          </>
        )}

        {/* CREATE PAGE */}
        {activeItem === 'create' && (
          <CreatePage onAddPost={handleAddPost} />
        )}

        {/* TRENDING PAGE */}
        {activeItem === 'trending' && (
          <TrendingPage onImageClick={handleImageClick} />
        )}

        {/* SAVED PAGE */}
        {activeItem === 'saved' && <SavedPage />}

        {/* NOTIFICATIONS PAGE */}
        {activeItem === 'notifications' && <NotificationsPage />}

        {/* PROFILE PAGE */}
        {activeItem === 'profile' && <ProfilePage />}

        {/* SETTINGS PAGE */}
        {activeItem === 'settings' && <SettingsPage />}

        {/* Image Detail Modal */}
        {selectedImage && (
          <ImageDetail 
            image={selectedImage} 
            onClose={handleCloseDetail}
            allImages={galleryItems}
            onImageSelect={handleImageClick}
          />
        )}

        {/* Login Modal */}
        {showLogin && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={handleCloseModal}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <Login goRegister={handleGoRegister} onClose={handleCloseModal} />
            </div>
          </div>
        )}

        {/* Register Modal */}
        {showRegister && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={handleCloseModal}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <Register goLogin={handleGoLogin} onClose={handleCloseModal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;