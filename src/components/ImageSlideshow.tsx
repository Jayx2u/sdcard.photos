import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import Image from 'next/image';

import { IoMdCamera } from 'react-icons/io';
import { AiFillApple } from 'react-icons/ai';

interface Slide {
  url: string;
  title: string;
  make: string;
  model: string;
}

const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState<Slide[]>([]);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/photos');
        const data = await response.json();
        setSlides(data.images);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };

    fetchImages();
  }, []);

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
    if (slides.length > 0) {
      const animate = async () => {
        await animateIn().finished;
        await new Promise(resolve => setTimeout(resolve, 5000));
        await animateOut().finished;

        setCurrentIndex((prev) => (prev + 1) % slides.length);
      };

      animate();
    }
  }, [currentIndex, slides]);

  if (slides.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full bg-black">
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto px-12"
      >
        <div className="relative aspect-[16/9] w-full">
          <Image
            ref={imageRef}
            src={slides[currentIndex].url}
            alt={slides[currentIndex].title}
            layout="fill"
            objectFit="cover"
            className="opacity-0"
          />
          <h2
            ref={titleRef}
            className="font-ibm-mono font-bold text-white text-xs sm:text-xs md:text-4xl mt-4 opacity-0 uppercase"
          >
            {slides[currentIndex].title}
          </h2>
          <h3
            ref={cameraRef}
            className="font-ibm-mono font-regular text-gray-400 flex items-center text-right"
          >
            {slides[currentIndex].make === 'Apple' ? (
              <AiFillApple className="mr-2"/>
            ) : (
              <IoMdCamera className="mr-2"/>
            )}
            <span className="uppercase">{slides[currentIndex].make} {slides[currentIndex].model}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ImageSlideshow;