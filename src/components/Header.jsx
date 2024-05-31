import React from 'react'
import { useState,useEffect } from 'react';
const Header = () => {
    const [contentIndex, setContentIndex] = useState(0);
  const contents = [
    'With this shop homepage template',
    'Discover amazing deals every day',
    'Shop the latest trends with ease',
    'Explore unique products for your lifestyle',
    'Find exclusive items you can’t resist',
    'Upgrade your style with our curated selection',
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 2000);
  
    return () => clearInterval(interval);
  }, [contents.length]);
  

  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">{contents[contentIndex]}</p>
        </div>
      </div>
    </header>
  );
}

export default Header