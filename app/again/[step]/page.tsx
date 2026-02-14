"use client";

import { useParams, useRouter } from "next/navigation";
import FloatingHearts from "../../components/FloatingHearts";

export default function AskAgain() {
  const router = useRouter();
  const { step } = useParams();
  const count = Number(step) || 1;

  const yesScale = 1 + count * 0.4;
  const noScale = Math.max(0.4, 1 - count * 0.25);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 to-rose-400 text-center overflow-hidden">
      <FloatingHearts />
 <div className="w-52 h-52 mb-4">
        <img
          src="/cute-love.gif"
          alt="Valentine GIF"
          width={208}
          height={208}
          className="object-contain rounded-xl"
          
        />
      </div>
      <h1 className="text-4xl font-bold text-pink-800 mb-6 z-10">
        Will you be my Valentine? 💖
      </h1>

      <p className="mb-8 text-lg z-10">
        You know the answer already 😏
      </p>

      <div className="flex gap-8 items-center z-10">
        <button
          onClick={() => router.push("/yes")}
          style={{ transform: `scale(${yesScale})` }}
          className="px-10 py-4 bg-pink-600 text-white text-xl rounded-full transition-transform duration-300"
        >
          YES 💕
        </button>

        <button
          onClick={() => router.push(`/again/${count + 1}`)}
          style={{ transform: `scale(${noScale})` }}
          className="px-10 py-4 bg-gray-500 text-white text-xl rounded-full transition-transform duration-300"
        >
          NO 🙈
        </button>
      </div>
    </main>
  );
}
