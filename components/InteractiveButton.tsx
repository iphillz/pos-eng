"use client";

import React from "react";

export default function InteractiveButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="inline-block max-w-full relative rounded-[10px] mt-4 mb-4 pt-[10px] pb-[10px] px-10 text-black font-bold text-base leading-5 antialiased"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% -100%, #176344 24%, #89ffd0 55%)',
        border: '2px solid #74ca8b',
        boxShadow: 'inset 0 2px 20px #196138b3, 0 0 40px #5dd39099',
        opacity: 1,
        transition: 'opacity 0.3s ease-in-out',
      }}
      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
    >
      {children}
    </button>
  );
} 