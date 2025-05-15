'use client';

import './shinyText.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const animationDuration = `${speed}s`;

  const handleClick = () => {
    setClicked(true);
    router.push('./blog'); 
  };

  return (
    
    <button 
   onClick={handleClick}
      disabled={disabled || clicked}
    className={`border-[#b5b5b5a4]  border-2 rounded-2xl p-2 w-auto hover:bg-[#2a2a2a] outline-none cursor-pointer ${disabled ? 'pointer-events-none' : ''}`}>
    <div
      className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
    </button>
  );
};

export default ShinyText;
