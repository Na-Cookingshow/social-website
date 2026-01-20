import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import HeroSection from './Herosection';
import GallerySection from './GallerySection';
import ImageDetail from './ImageDetail'

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  return (
    <div className="min-h-screen bg-gray-50">

       {/* Header Component */}
      <Header onLoginClick={handleLoginClick} />

        {/* Hero Section Component */}
      <HeroSection />

      {/* Gallery Section Component */}
      <GallerySection onImageClick={handleImageClick} />

      {/* Image Detail Page */}
      {selectedImage && (
        <ImageDetail image={selectedImage} onClose={handleCloseDetail} />
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
  );
}

export default App;

