'use client'; 
import React, {useEffect, useState} from 'react';

type Locale = 'tr' | 'en' | 'ru';

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

const TEXTS: Record<Locale, {title: string; subtitle1: string; subtitle2: string}> = {
  tr: {
    title: 'Origami ERP İle Birlikte Büyüyen İşletmeler',
    subtitle1: 'Yenilikçi çözümlerimizle teknolojiye uyum sağlamak artık çok daha kolay.',
    subtitle2:
      'Origami Yazılım olarak, hızlı ve esnek bir geliştirme süreciyle iş süreçlerinizi daha verimli ve etkili hale getiriyoruz.'
  },
  en: {
    title: 'Businesses Growing with Origami ERP',
    subtitle1: 'With our innovative solutions, adapting to technology is now much easier.',
    subtitle2:
      'At Origami Software, we make your processes more efficient and effective with a fast and flexible development cycle.'
  },
  ru: {
    title: 'Бизнес, растущий вместе с Оригами ERP',
    subtitle1: 'С нашими инновационными решениями адаптация к технологиям стала проще.',
    subtitle2:
      'Мы делаем ваши бизнес‑процессы более эффективными благодаря быстрому и гибкому циклу разработки.'
  }
};

export default function Hero() {
  const [locale, setLocale] = useState<Locale>('tr');

  // ilk mount: cookie'den çek + butondan gelecek event'i dinle
  useEffect(() => {
    const read = () => setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read(); // initial
    const handler = () => read();
    window.addEventListener('locale-change', handler);
    return () => window.removeEventListener('locale-change', handler);
  }, []);

  const t = TEXTS[locale];

  return (
    <section className="relative w-full h-screen overflow-hidden text-white flex items-center justify-center">
      {/* Arka plan video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/heroo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

      {/* İçerik */}
      <div className="relative z-10 text-center px-6 max-w-4xl space-y-6">
        <h1 className="glow-text text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          {t.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 font-light">
          {t.subtitle1} <br /> {t.subtitle2}
        </p>
      </div>

      <style jsx>{`
        .glow-text { animation: glow 3s ease-in-out infinite; }
        @keyframes glow {
          0% { text-shadow: 0 0 5px rgba(255,255,255,0.4), 0 0 10px rgba(255,255,255,0.3); }
          50% { text-shadow: 0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.6); }
          100% { text-shadow: 0 0 5px rgba(255,255,255,0.4), 0 0 10px rgba(255,255,255,0.3); }
        }
      `}</style>
    </section>
  );
}
