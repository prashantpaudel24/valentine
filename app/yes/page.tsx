"use client";

import FloatingHearts from "../components/FloatingHearts";

export default function YesPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-pink-300 text-center overflow-hidden">
      <FloatingHearts />
 <div className="w-52 h-52 mb-4">
        <img
          src="/peachcat-cat.gif"
          alt="Valentine GIF"
          width={208}
          height={208}
          className="object-contain rounded-xl"
          
        />
      </div>
      <h1 className="text-5xl font-bold text-pink-800 mb-6 z-10">
        💖 YAYYYYY!! 💖
      </h1>

      <p className="text-2xl mb-4 z-10">
        Best decision ever 😍
      </p>

      <p className="text-lg z-10">
         I love you Ashi❤️💐. <br/>This is not my way to make things go as it is kt, you know it!!<br/> But trying my
         best to make you feel special at the last moment🥹❤️..<br/> Love you pukuli🐼😘
      </p>
    </main>
  );
}
