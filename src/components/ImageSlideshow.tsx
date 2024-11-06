// TODO: Add padding between image title and camera make/model
// TODO: Preload images

import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import Image from 'next/image';

import { fetchImages } from '@/photo/FetchImages';

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
    const loadImages = async () => {
      const images = await fetchImages();
      setSlides(images);
    };

    loadImages();
  }, []);

  const animateOut = () => {
    return anime.timeline({
      easing: 'easeInOutQuad',
    }).add({
      targets: [imageRef.current, titleRef.current, cameraRef.current, '.gradient-overlay'],
      opacity: 0,
      translateY: 20,
      duration: 1000,
    });
  };

  const animateIn = () => {
    return anime.timeline({
      easing: 'easeInOutQuad',
    }).add({
      targets: [imageRef.current, titleRef.current, cameraRef.current, '.gradient-overlay'],
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
    return <div className="font-ibm-mono">Loading...</div>;
  }

  return (
    <div className="w-full bg-black">
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto px-12"
      >
        <div className="relative aspect-[16/9] w-full">
          <div className="relative w-full h-full">
            <Image
              ref={imageRef}
              src={slides[currentIndex].url}
              alt={slides[currentIndex].title}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover opacity-0"
            />
            <div
              className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent gradient-overlay"></div>
          </div>
          <h2
            ref={titleRef}
            className="absolute bottom-4 left-4 font-ibm-mono font-bold text-white text-xs sm:text-xs md:text-4xl text-left mt-4 opacity-0 uppercase max-w-[70%]"
          >
            {slides[currentIndex].title}
          </h2>
          <h3
            ref={cameraRef}
            className="absolute bottom-4 right-4 font-ibm-mono font-regular text-gray-400 flex items-center text-right opacity-0 text-xs sm:text-xs md:text-sm"
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