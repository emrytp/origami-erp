'use client';
import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[120vh] overflow-hidden text-white flex items-center justify-center">
      
      {/* Arka plan video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/heroo.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        Tarayıcınız video etiketini desteklemiyor.
      </video>

      {/* Karartma katmanı */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

      {/* İçerik */}
      <div className="relative z-10 text-center px-6 max-w-4xl space-y-6">
        <h1 className="glow-text text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Origami Yazılım İle Birlikte Büyüyen İşletmeler
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 font-light">
          Yenilikçi çözümlerimizle teknolojiye uyum sağlamak artık çok daha kolay. <br />
          Origami Yazılım olarak, hızlı ve esnek bir geliştirme süreciyle iş süreçlerinizi daha verimli ve etkili hale getiriyoruz.
        </p>
      </div>

      <style jsx>{`
        .glow-text {
          animation: glow 3s ease-in-out infinite;
        }
        @keyframes glow {
          0% {
            text-shadow: 0 0 5px rgba(255,255,255,0.4), 0 0 10px rgba(255,255,255,0.3);
          }
          50% {
            text-shadow: 0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.6);
          }
          100% {
            text-shadow: 0 0 5px rgba(255,255,255,0.4), 0 0 10px rgba(255,255,255,0.3);
          }
        }
      `}</style>
    </section>
  );
}
