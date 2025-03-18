// app/components/FullscreenImage.jsx
"use client";

import { useState } from "react";
import ModalBackdrop from './modal-backdrop';  // Adjusted to lowercase



const FullscreenImage = ({ src, alt }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev); // Toggle fullscreen
  };

  const closeModal = () => {
    setIsFullscreen(false); // Close the fullscreen
  };

  return (
    <div>
      {/* Image thumbnail */}
      <img
        src={src}
        alt={alt}
        className="image-thumbnail"
        onClick={toggleFullscreen}
      />

      {/* Conditionally render fullscreen mode */}
      {isFullscreen && (
        <>
          <div className="fullscreen-modal">
            <img
              src={src}
              alt={alt}
              className="fullscreen-image"
            />
          </div>
          <ModalBackdrop onClose={closeModal} /> {/* Backdrop for closing */}
        </>
      )}
    </div>
  );
};

export default FullscreenImage;
