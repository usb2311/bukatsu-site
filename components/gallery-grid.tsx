import { ImageWithFallback } from './figma/ImageWithFallback';

interface GalleryImage {
  id: string;
  url: string;
  caption: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
          <div className="aspect-video overflow-hidden">
            <ImageWithFallback
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white text-sm">{image.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
