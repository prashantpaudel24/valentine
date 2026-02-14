"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import FloatingHearts from "./components/FloatingHearts";

export default function Home() {
  const router = useRouter();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const moveNo = () => {
    setPos({
      x: Math.random() * 300 - 150,
      y: Math.random() * 200 - 100,
    });
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 to-rose-300 text-center overflow-hidden">
      <FloatingHearts />
      <div className="w-52 h-52 mb-4">
        <img
          src="/hello.gif"
          alt="Valentine GIF"
          width={208}
          height={208}
          className="object-contain rounded-xl"
          
        />
      </div>
      <h1 className="text-4xl font-bold text-pink-700 mb-6 z-10">
        Will you be my Valentine? 💖
      </h1>

      <div className="relative flex gap-8 z-10">
        {/* YES */}
        <button
          onClick={() => router.push("/yes")}
          className="px-10 py-4 bg-pink-600 text-white text-xl rounded-full hover:scale-110 transition"
        >
          YES 💕
        </button>

        {/* NO (MOVES) */}
        <button
          onMouseEnter={moveNo}
          onClick={() => router.push("/again/1")}
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`,
          }}
          className="px-10 py-4 bg-gray-500 text-white text-xl rounded-full transition-all duration-200"
        >
          NO 🙈
        </button>
      </div>
    </main>
  );
}
