// src/presentation/Slide/index.js
import React from 'react';
import './Slide.css';

const Slide = ({ slide, isActive, onClick }) => {
  return (
    <div
      className={`slide ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <h2>{slide.title}</h2>
      <p>{slide.content}</p>
    </div>
  );
};

export default Slide;