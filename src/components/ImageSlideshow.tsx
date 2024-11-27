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
  const [nextImageUrl, setNextImageUrl] = useState<string | null>(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      const images = await fetchImages();
      setSlides(images);
      setNextImageUrl(images[1]?.url || null);
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

        const nextIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(nextIndex);
      };

      animate();
    }
  }, [currentIndex, slides]);

  useEffect(() => {
    if (slides.length > 0) {
      const nextIndex = (currentIndex + 1) % slides.length;
      setNextImageUrl(slides[nextIndex]?.url || null);
    }
  }, [currentIndex, slides]);

  if (slides.length === 0) {
    return <div className="font-ibm-mono animate-pulse">Loading...</div>;
  }

  return (
    <div className="w-full">
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
              sizes="(min-width: 1200px) 1200px, 100vw"
              fill={true}
              style={{ objectFit: 'cover' }}
              priority={true}
              className="w-full h-full object-cover opacity-0"
            />
            {nextImageUrl && (
              <Image
                src={nextImageUrl}
                alt="Next image"
                sizes="(min-width: 1200px) 1200px, 100vw"
                fill={true}
                style={{ objectFit: 'cover' }}
                priority={true}
                className="hidden"
              />
            )}
            <div
              className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent gradient-overlay"></div>
          </div>
          <div
            className="absolute bottom-0 left-0 w-full p-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <h2
              ref={titleRef}
              className="font-ibm-mono font-bold text-white text-sm sm:text-base md:text-2xl lg:text-4xl uppercase max-w-full sm:max-w-[70%] opacity-0 leading-tight"
            >
              {slides[currentIndex].title}
            </h2>
            <h3
              ref={cameraRef}
              className="font-ibm-mono font-regular text-gray-400 flex items-center text-xs sm:text-sm opacity-0 whitespace-nowrap"
            >
              {slides[currentIndex].make === 'Apple' ? (
                <AiFillApple className="mr-2 flex-shrink-0"/>
              ) : (
                <IoMdCamera className="mr-2 flex-shrink-0"/>
              )}
              <span className="uppercase truncate">
            {slides[currentIndex].make} {slides[currentIndex].model}
          </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlideshow;