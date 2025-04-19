
import { useState, useEffect } from "react";

interface IntroVideoProps {
  onIntroComplete: () => void;
}

export function IntroVideo({ onIntroComplete }: IntroVideoProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onIntroComplete();
      }, 500); // Allow time for fade-out animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onIntroComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative w-full max-w-3xl aspect-video">
        {/* Replace with your actual video or animation */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur-xl opacity-75 animate-pulse-glow"></div>
            <h1 className="relative text-6xl font-bold text-white tracking-wider animate-pulse">
              DICEART
            </h1>
          </div>
          <p className="mt-4 text-xl text-white opacity-80 animate-fade-in">FILMS</p>
          <div className="mt-8 w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin-slow"></div>
        </div>
      </div>
    </div>
  );
}
