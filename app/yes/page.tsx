"use client";
import { useRef, useState } from "react";

import FloatingHearts from "../components/FloatingHearts";

export default function YesPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-pink-300 text-center overflow-hidden">
      <FloatingHearts />
      <div className="z-10 mb-6">
        <video
          ref={videoRef}
          src="/pras.mp4"
          autoPlay
          loop
          playsInline
          muted={isMuted}
          onClick={toggleMute}
          className="w-72 md:w-96 rounded-2xl shadow-lg"
        />
      </div>
      <h1 className="text-5xl font-bold text-pink-800 mb-6 z-10">
        💖 YAYYYYY!! 💖
      </h1>

      <p className="text-2xl mb-4 z-10">Best decision ever 😍</p>

      <p className="text-lg z-10">
        I love you Ashi❤️💐. <br />
        This is not my way to make things go as it is kt, you know it!!
        <br /> But trying my best to make you feel special at the last
        moment🥹❤️..
        <br /> Love you pukuli🐼😘
      </p>
    </main>
  );
}
