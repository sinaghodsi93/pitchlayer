// AllSlidesView.js
import React from 'react';
import Slide from './Slide';
import './AllSlidesView.css';

const AllSlidesView = () => {
    return (
        <div className="all-slides-view">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide-thumbnail ${
                index === currentSlide ? 'active' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <Slide slide={slide} />
            </div>
          ))}
        </div>
      );  
};

export default AllSlidesView;