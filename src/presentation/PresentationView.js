// PresentationView.js
import React, { useState } from 'react';
import PresentationControls from './PresentationControls';
import AllSlidesView from './AllSlidesView';
import './PresentationView.css';

const PresentationView = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllSlides, setShowAllSlides] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="presentation-view">
      <div className="main-slide">
        <Slide slide={slides[currentSlide]} />
      </div>
      <AllSlidesView
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );

  const toggleFullscreen = () => {
    // Implement fullscreen toggling logic here
  };

  return (
    <div>
      {showAllSlides ? (
        <AllSlidesView />
      ) : (
        <>
          {/* Render the current slide component */}
          <PresentationControls
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            toggleFullscreen={toggleFullscreen}
            isFullscreen={isFullscreen}
          />
        </>
      )}
      {/* Add a button or keyboard shortcut to toggle showAllSlides */}
    </div>
  );
};

export default PresentationView;