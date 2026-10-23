'use client';

import { useEffect, useRef, useState } from 'react';

export function DemoVideo({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncPlayback = () => {
      if (motion.matches) {
        video.pause();
        setShowControls(true);
        return;
      }

      video.muted = true;
      const playback = video.play();
      if (playback) {
        playback
          .then(() => setShowControls(false))
          .catch(() => setShowControls(true));
      }
    };

    syncPlayback();
    motion.addEventListener('change', syncPlayback);

    return () => {
      motion.removeEventListener('change', syncPlayback);
      video.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="demo-video"
      muted
      loop
      playsInline
      preload="metadata"
      controls={showControls}
      onError={() => setShowControls(true)}
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
