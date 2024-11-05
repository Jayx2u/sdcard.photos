'use client';
import { Suspense } from 'react';
import Image from './Image';

export default function PhotoGalleryWrapper() {
  return (
    <Suspense fallback={<LoadingGallery />}>
      <Image />
    </Suspense>
  );
}

// Simple loading component
function LoadingGallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg animate-pulse">
            <div className="relative h-64 bg-gray-300 dark:bg-gray-700" />
            <div className="p-6">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4" />
              <div className="space-y-2">
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}