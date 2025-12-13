import React from 'react';

interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  href?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image) => {
        const Card = (
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white">
            <div className="relative aspect-video overflow-hidden bg-gray-200">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 flex items-end">
                <div className="w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm font-semibold truncate">{image.caption}</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-sm">{image.caption}</p>
            </div>
          </div>
        )

        return image.href ? (
          <a
            key={image.id}
            href={image.href}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            {Card}
          </a>
        ) : (
          <div key={image.id}>{Card}</div>
        )
      })}
    </div>
  )
}

export default GalleryGrid
