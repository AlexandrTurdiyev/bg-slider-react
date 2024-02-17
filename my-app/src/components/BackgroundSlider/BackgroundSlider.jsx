import React, { useState, useEffect } from 'react';

const imageUrls = [
  'url(background-image-1.webp)',
  'url(background-image-2.webp)',
  'url(background-image-3.webp)',
  'url(background-image-4.webp)', 
];

const BackgroundSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const preloadImages = () => {
    preloadImages(); 
    imageUrls.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl.replace(/url\(['"]?(.*?)['"]?\)/, '$1');
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const bodyStyle = {
    backgroundImage: imageUrls[currentImageIndex],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    transition: 'background-image 1s ease-in-out',
  };

  return <div style={bodyStyle}></div>;
};

export default BackgroundSlider;