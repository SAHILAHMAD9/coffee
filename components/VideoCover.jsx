import React from 'react';

const VideoCover = ({ 
  videoSrc, 
  fallbackImage,
  className = '',
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
  objectFit = 'cover'
}) => {
  return (
    <div className={`${className} w-full min-h-[40vh] relative top-0 left-0 overflow-hidden`}>
      {fallbackImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={fallbackImage}
          alt="Video fallback"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
      
      <video
        className={`absolute top-0 left-0 w-full h-full ${className}`}
        style={{ 
          objectFit,
          zIndex: 0
        }}
        playsInline
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        poster={fallbackImage}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Semi-transparent overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
    </div>
  );
};

export default VideoCover;