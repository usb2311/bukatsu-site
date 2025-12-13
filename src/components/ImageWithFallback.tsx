import React from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = ''
}) => {
  const [hasError, setHasError] = React.useState(false);

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`bg-gray-300 flex items-center justify-center ${className}`}>
        <span className="text-gray-500">画像を読み込めません</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};
