import React, { useState } from 'react';

interface SSLogoProps {
  className?: string;
  variant?: 'navbar' | 'hero' | 'footer' | 'emblem';
}

/**
 * SS Logo Component
 * Loads the official Struggle of Student logo image directly from /assets/logo.png.
 * Preserves original aspect ratio using object-fit: contain without any text/SVG recreations.
 */
export const SSLogo: React.FC<SSLogoProps> = ({ 
  className = "", 
  variant = "navbar" 
}) => {
  const [imgError, setImgError] = useState(false);
  const [imgSrc, setImgSrc] = useState('/assets/logo.png');

  const handleImageError = () => {
    if (imgSrc === '/assets/logo.png') {
      setImgSrc('/assets/logo.jpg');
    } else if (imgSrc === '/assets/logo.jpg') {
      setImgSrc('/assets/logo.svg');
    } else if (imgSrc === '/assets/logo.svg') {
      setImgSrc('/assets/ss-logo.png');
    } else {
      setImgError(true);
    }
  };

  // Select optimal height bounds based on placement variant while maintaining original aspect ratio
  const getVariantStyles = () => {
    switch (variant) {
      case 'navbar':
        // Navbar: crisp recognizable size (h-12 / h-14) that doesn't crowd navigation
        return 'h-11 sm:h-13 md:h-14 w-auto object-contain max-w-[220px] rounded-lg';
      case 'footer':
        // Footer: larger prominent display
        return 'h-24 sm:h-32 md:h-36 w-auto object-contain max-w-full rounded-2xl';
      case 'hero':
        // Hero: large statement artwork
        return 'h-48 sm:h-64 md:h-80 w-auto object-contain max-w-full rounded-3xl';
      default:
        return 'h-16 md:h-24 w-auto object-contain max-w-full rounded-xl';
    }
  };

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      {!imgError ? (
        <img 
          src={imgSrc} 
          alt="Struggle of Student Official Logo" 
          onError={handleImageError}
          className={`${getVariantStyles()} transition-all filter drop-shadow-lg`}
        />
      ) : (
        // Fallback display if logo image file is missing or being replaced
        <div className="px-4 py-2 rounded-xl bg-black border border-brand-red/40 flex items-center justify-center text-center">
          <span className="text-lg font-extrabold text-brand-red font-display tracking-wider uppercase">
            STRUGGLE OF STUDENT
          </span>
        </div>
      )}
    </div>
  );
};
