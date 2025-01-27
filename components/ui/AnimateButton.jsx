import React from 'react';
import { Zap } from 'lucide-react';

const AnimatedButton = () => {
  return (
    <button 
      className="
        relative
        group
        bg-black 
        hover:bg-zinc-800
        text-white 
        px-8 
        py-6 
        inline-flex 
        items-center 
        justify-center 
        text-lg 
        rounded-full
        transition-all 
        duration-300 
        ease-in-out
        hover:scale-105
        hover:shadow-lg
        active:scale-95
        overflow-hidden
      "
    >
      <span className="relative z-10 flex items-center">
        Start Creating
        <Zap 
          className="
            ml-2 
            w-5 
            h-5 
            transform 
            transition-transform 
            duration-300 
            group-hover:rotate-12 
            group-hover:scale-110
          " 
        />
      </span>
      <div className="
        absolute 
        inset-0 
        h-full 
        w-full 
        bg-white 
        opacity-0 
        group-hover:opacity-10 
        transition-opacity 
        duration-300 
        rounded-full
      "/>
    </button>
  );
};

export default AnimatedButton;