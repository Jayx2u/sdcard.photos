import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

import { IoMdCamera } from 'react-icons/io';

const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const cameraRef = useRef(null)

  // TODO: Replace with images from db with 'fav' tag
  const slides = [
    {
      image: "../images/img.png",
      title: "title here hahahaahah",
      camera: "Apple",
    },
    {
      image: "../images/img.png",
      title: "City Skyline",
      camera: "SONY",
    },
    {
      image: "../images/img.png",
      title: "Ocean Sunset",
      camera: "Samgsung",
    }
  ];

  const animateOut = () => {
    return anime.timeline({
      easing: 'easeInOutQuad',
    }).add({
      targets: [imageRef.current, titleRef.current, cameraRef.current],
      opacity: 0,
      translateY: 20,
      duration: 1000,
    });
  };

  const animateIn = () => {
    return anime.timeline({
      easing: 'easeInOutQuad',
    }).add({
      targets: [imageRef.current, titleRef.current, cameraRef.current],
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 1000,
    });
  };

  useEffect(() => {
    const animate = async () => {
      await animateIn().finished;
      await new Promise(resolve => setTimeout(resolve, 3000));
      await animateOut().finished;

      setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    animate();
  }, [currentIndex]);

  return (
    <div className="w-full bg-black">
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto px-12"
      >
        <div className="relative aspect-[16/9] w-full">
          <img
            ref={imageRef}
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover opacity-0"
          />
          <h2
            ref={titleRef}
            className="font-ibm-mono font-bold text-white text-xs sm:text-xs md:text-4xl mt-4 opacity-0 uppercase"
          >
            {slides[currentIndex].title}
          </h2>
          <h3
            ref={cameraRef}
            className="font-ibm-mono font-regular text-gray-600"
          >
            <IoMdCamera /> {slides[currentIndex].camera}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ImageSlideshow;