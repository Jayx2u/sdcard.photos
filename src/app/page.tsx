'use client';
import { useEffect } from 'react';
import anime from 'animejs';

import ImageSlideshow from '../components/ImageSlideshow';
import Title from '../components/Title';
import SubdomainList from '../components/SubdomainList';

import { FaHeart } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function Home() {
  useEffect(() => {
    const timeline = anime.timeline({
      easing: 'easeOutExpo'
    });

    // Animate text content
    timeline.add({
      targets: '.text-content',
      opacity: [0, 1],
      duration: 2000,
      easing: 'easeOutExpo',
      delay: 300,
    }, '') // Start slightly before title animation ends
    // Reveal slideshow by transforming down
    .add({
      targets: '.slideshow-container',
      translateY: ['-100%', 0],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutExpo',
      delay: 300,
    }, '-=2000');
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-start min-h-screen bg-black text-white mt-16 overflow-hidden">
      {/* Slideshow Section */}
      <div className="slideshow-container opacity-0 transform -translate-y-full pt-8 md:w-1/2 order-1 md:order-2 mb-6">
        <ImageSlideshow/>
      </div>

      {/* Text Content Section */}
      <div className="text-content max-w-6xl mx-auto px-12 md:w-1/2 order-2 md:order-1">
        <Title/>
        <p className="subtitle font-ibm-mono text-lg sm:text-2xl md:text-4xl mt-2">
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
            <p className="font-ibm-mono text-gray-600 flex items-center gap-2">
              Star this project on
              <a
                href="https://github.com/Jayx2u/sdcard.photos"
                className="hover:text-gray-400 transition-colors hover:font-bold flex items-center gap-2 underline"
              >
              <IoLogoGithub />Github!</a>
            </p>
              <p className="font-ibm-mono text-gray-600 flex items-center gap-2">
                Maintained with
                <FaHeart className="hover:animate-spin hover:text-red-600"/>
                by
                <a
                  href="https://github.com/Jayx2u"
                  className="hover:text-gray-400 transition-colors hover:font-bold underline"
                >
                  Jayx2u
                </a>
                &
                <a
                  href="https://github.com/s1072489"
                  className="hover:text-gray-400 transition-colors hover:font-bold underline"
                >
                  Deadhello
                </a>
              </p>
          </footer>
        </div>
      </div>
    </div>
  );
}