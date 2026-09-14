import React from 'react';

const Banner = () => {
  return (
    <aside
      aria-label="Announcement"
      className="w-full bg-neutral-900 border-b border-neutral-800 py-2.5 px-4 text-center font-ibm-mono text-xs sm:text-sm text-gray-300 z-10"
    >
      Looking for the Haileybury graduation video? Check it out{' '}
      <a
        href="https://haileybury.sdcard.photos"
        className="underline font-semibold text-white hover:text-gray-300 transition-colors"
      >
        here
      </a>
    </aside>
  );
};

export default Banner;
