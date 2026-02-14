"use client";

import { useEffect, useState } from "react";

type Heart = {
  id: number;
  left: number;
  size: number;
  duration: number;
};

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 100,
          size: 20 + Math.random() * 30,
          duration: 6 + Math.random() * 4,
        },
      ]);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute bottom-0 text-pink-400 animate-float"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
