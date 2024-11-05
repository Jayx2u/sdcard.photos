'use client';
import { useEffect } from 'react';
import anime from 'animejs';

import ImageSlideshow from '../components/ImageSlideshow';
import Title from '../components/Title';
import SubdomainList from '../components/SubdomainList';

import { FaHeart } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    const timeline = anime.timeline({
      easing: 'easeOutExpo'
    });

    // Animate subtitle
    timeline.add({
      targets: '.subtitle',
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo',
    }, '') // Start slightly before title animation ends
    // Reveal slideshow by transforming down
    .add({
      targets: '.slideshow-container',
      translateY: ['-100%', 0],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutExpo'
    }, '-=2000'); // Start before subtitle animation ends
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-start min-h-screen bg-black text-white mt-16 overflow-hidden">
      {/* Text Content Section */}
      <div className="text-content max-w-6xl mx-auto px-12 md:w-1/2">
        <Title/>
        <p className="subtitle opacity-0 font-ibm-mono text-lg sm:text-2xl md:text-4xl mt-2">
          A photo blog for a group of friends passionate about photography.
        </p>
        <hr className="my-8 border-gray-600"/>
        <div className="info mt-8 pb-8">
          <p className="font-ibm-mono text-gray-400">An invite-only website where each member gets their own photo blog
            on a unique subdomain. If you have connections to the maintainers, contact us and we&apos;ll set you up with
            a photo blog :)</p>
          <SubdomainList />
          <hr className="my-8 border-gray-600"/>
          <footer className="w-full text-left">
            <p className="font-ibm-mono text-gray-600 inline-flex">Maintained with <FaHeart className="m-2"/> by Jayx2u & Deadhello</p>
          </footer>
        </div>
      </div>

      {/* Slideshow Section */}
      <div className="slideshow-container opacity-0 transform -translate-y-full pt-8 md:w-1/2">
        <ImageSlideshow/>
      </div>
    </div>
  );
}