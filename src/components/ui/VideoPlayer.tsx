'use client';

import { useRef, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  poster: string;
  alt: string;
  className?: string;
}

export function VideoPlayer({
  src,
  poster,
  alt,
  className = '',
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }

  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-sm ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={isPlaying}
        playsInline
        preload="none"
        aria-label={alt}
        className="h-full w-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40"
          aria-label={`Play video: ${alt}`}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform hover:scale-110">
            <svg
              className="text-navy-950 ml-1 h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
