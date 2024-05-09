// PresentationControls.js
import React, { useEffect } from 'react';

const PresentationControls = () => {
    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'ArrowLeft') {
            setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
          } else if (event.key === 'ArrowRight') {
            setCurrentSlide((prevSlide) => prevSlide + 1);
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [setCurrentSlide]);
    
      return <div>PresentationControls</div>;
      const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      };
    
      return (
        <div>
          <button onClick={toggleFullscreen}>Toggle Fullscreen</button>
          {/* Other controls */}
        </div>
      );
};

export default PresentationControls;