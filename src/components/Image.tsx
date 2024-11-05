import { sql } from '@vercel/postgres';
import Image from 'next/image';
import { formatDistance } from 'date-fns';

async function getPhotos() {
  try {
    const { rows } = await sql`
      SELECT url, title, make, model, taken_at_naive
      FROM photos
      ORDER BY taken_at_naive DESC
      LIMIT 50
    `;
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch photos');
  }
}

export default async function PhotoGallery() {
  const photos = await getPhotos();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-64">
              <Image
                src={photo.url}
                alt={photo.title || 'Untitled photo'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {photo.title || 'Untitled'}
              </h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {photo.make && photo.model && (
                  <p>
                    Shot with: {photo.make} {photo.model}
                  </p>
                )}
                {photo.taken_at_naive && (
                  <p>
                    Taken {formatDistance(
                    new Date(photo.taken_at_naive),
                    new Date(),
                    {addSuffix: true}
                  )}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}