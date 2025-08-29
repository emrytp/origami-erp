'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type Locale = 'tr' | 'en' | 'ru';

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

const TEXTS: Record<
  Locale,
  {
    eyebrow: string;
    heading: string;
    sub: string;
    btn: string;
  }
> = {
  tr: {
    eyebrow: 'Bir Sonraki Adım',
    heading: 'Dijital Yolculuğunuza Origami ile Devam Edin',
    sub: 'Birlikte iş süreçlerinizi sadeleştirelim, hızlandıralım ve büyütelim.',
    btn: 'Hemen Görüşelim',
  },
  en: {
    eyebrow: 'Next Step',
    heading: 'Continue Your Digital Journey with Origami',
    sub: 'Let’s simplify, accelerate and grow your processes together.',
    btn: 'Talk Now',
  },
  ru: {
    eyebrow: 'Следующий шаг',
    heading: 'Продолжайте цифровое путешествие с Origami',
    sub: 'Давайте упростим, ускорим и расширим ваши процессы вместе.',
    btn: 'Связаться сейчас',
  },
};

export default function CTASection() {
  const [locale, setLocale] = useState<Locale>('tr');

  useEffect(() => {
    const read = () =>
      setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read();
    const handler = () => read();
    window.addEventListener('locale-change', handler);
    return () => window.removeEventListener('locale-change', handler);
  }, []);

  const t = TEXTS[locale];

  return (
    <section className="relative overflow-hidden py-20 bg-[#0D152E]">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/cta.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <div className="text-[11px] tracking-[6px] text-[#FFCFD6] uppercase font-semibold">
          {t.eyebrow}
        </div>
        <h2 className="mt-1 text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-[Poppins]">
          <span className="relative inline-block">
            {t.heading}
            <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 h-[3px] w-16 bg-[#C8102E] rounded-full" />
          </span>
        </h2>
        <p className="mt-5 text-white/85 max-w-2xl mx-auto leading-relaxed">
          {t.sub}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-xl px-8 py-4 font-bold bg-white text-[#0D152E] hover:bg-white/90 transition"
        >
          {t.btn}
        </Link>
      </div>
    </section>
  );
}
