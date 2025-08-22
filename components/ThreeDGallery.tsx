'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Highlighter } from '@/components/magicui/highlighter';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

type Locale = 'tr' | 'en' | 'ru';
type Img = { src: string };

const IMAGES: Img[] = [
  { src: '/foto1.png' },
  { src: '/foto2.png' },
  { src: '/foto3.png' },
  { src: '/foto4.png' },
  { src: '/foto5.png' }
];

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

const TEXTS: Record<
  Locale,
  {
    h2_part1: string; // underline
    h2_part2: string; // highlight
    sub_lead_before: string;
    sub_highlight: string;
    sub_lead_after: string;
    badge: string;
    panelLabel: string;
    alt: (i: number) => string;
  }
> = {
  tr: {
    h2_part1: 'Sektörünüze Özel',
    h2_part2: 'Çözümleri Keşfedin',
    sub_lead_before: 'Gerçek ekran görüntüleriyle',
    sub_highlight: 'ürün deneyimine göz atın',
    sub_lead_after: '.',
    badge: 'Origami ERP',
    panelLabel: 'Kurumsal Panel',
    alt: (i) => `Ekran Görüntüsü ${i + 1}`
  },
  en: {
    h2_part1: 'Tailored to Your Industry',
    h2_part2: 'Explore the Solutions',
    sub_lead_before: 'See the real UI with',
    sub_highlight: 'live product screenshots',
    sub_lead_after: '.',
    badge: 'Origami ERP',
    panelLabel: 'Enterprise Panel',
    alt: (i) => `Screenshot ${i + 1}`
  },
  ru: {
    h2_part1: 'Решения для вашей отрасли',
    h2_part2: 'Ознакомьтесь с возможностями',
    sub_lead_before: 'Реальные снимки интерфейса —',
    sub_highlight: 'посмотрите продукт в деле',
    sub_lead_after: '.',
    badge: 'Origami ERP',
    panelLabel: 'Корпоративная панель',
    alt: (i) => `Скриншот ${i + 1}`
  }
};

function FrameWrapper({
  children,
  badge = 'Origami ERP'
}: {
  children: React.ReactNode;
  badge?: string;
}) {
  return (
    <div className="w-full h-full rounded-3xl shadow-2xl border border-gray-100 overflow-hidden bg-white">
      <div className="relative bg-[#0D152E] h-12 flex items-center px-5">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#C8102E]" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#C8102E] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          💡 {badge}
        </div>
      </div>
      <div className="relative w-full h-[calc(100%-3rem)] bg-white">{children}</div>
    </div>
  );
}

export default function ThreeDGalleryFullWidth() {
  const [locale, setLocale] = useState<Locale>('tr');

  // Cookie'den oku + Header'ın fırlattığı `locale-change` event’ini dinle
  useEffect(() => {
    const read = () => setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read();
    const handler = () => read();
    window.addEventListener('locale-change', handler);
    return () => window.removeEventListener('locale-change', handler);
  }, []);

  const t = TEXTS[locale];

  const Card = (img: Img, i: number) => (
    <div
      className="
        w-[480px] md:w-[640px] h-[280px] md:h-[360px]
        rounded-3xl overflow-hidden bg-white
        shadow-[0_16px_32px_rgba(0,0,0,0.3)]
        transition-all duration-200 ease-out
        hover:shadow-[0_28px_64px_rgba(0,0,0,0.45)]
        hover:-translate-y-1 hover:scale-[1.02]
      "
      style={{ transformOrigin: 'center bottom' }}
      aria-label={t.panelLabel}
    >
      <FrameWrapper badge={t.badge}>
        <Image
          src={img.src}
          alt={t.alt(i)}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 480px, 640px"
          priority={i < 2}
        />
      </FrameWrapper>
    </div>
  );

  return (
    <section
      className="w-full relative py-16 overflow-hidden"
      // heceleme için tarayıcıya doğru dil ipucu
      lang={locale}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, #ffffff 0%, #0D152E 22%, #0D152E 78%, #ffffff 100%)'
        }}
        aria-hidden
      />

      {/* Başlık */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 mb-10 text-center">
        <h2
          className={[
            'font-bold text-white/95 leading-tight',
            // daha esnek tipografi
            'text-[clamp(20px,5vw,40px)] md:text-[clamp(24px,3.8vw,48px)]',
            // akıllı sarmalama + kelime kırma
            '[text-wrap:balance] break-words [overflow-wrap:anywhere] [hyphens:auto]'
          ].join(' ')}
        >
          <Highlighter
            action="underline"
            color="#FF9800"
            animationDuration={700}
            iterations={2}
            triggerInView
          >
            {t.h2_part1}
          </Highlighter>{' '}
          <Highlighter
            action="highlight"
            color="#e31f1f"
            animationDuration={700}
            iterations={2}
            triggerInView
          >
            {t.h2_part2}
          </Highlighter>
        </h2>

        <p
          className={[
            'mt-3 text-white/80',
            'text-[clamp(13px,2.8vw,16px)] sm:text-[clamp(14px,2vw,18px)]',
            '[text-wrap:balance] break-words [overflow-wrap:anywhere] [hyphens:auto]'
          ].join(' ')}
        >
          {t.sub_lead_before}{' '}
          <Highlighter
            action="underline"
            color="#FFDD57"
            animationDuration={600}
            iterations={1}
            triggerInView
            replayOnHover
          >
            {t.sub_highlight}
          </Highlighter>
          {t.sub_lead_after}
        </p>
      </div>

      {/* Swiper */}
      <div className="relative z-10 px-8">
        <Swiper
          modules={[Autoplay]}
          loop
          speed={7000}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
          slidesPerView="auto"
          spaceBetween={32}
          allowTouchMove
          simulateTouch
          followFinger
          grabCursor
          className="select-none"
        >
          {[...IMAGES, ...IMAGES].map((img, idx) => (
            <SwiperSlide key={`${img.src}-${idx}`} style={{ width: 'auto' }}>
              {Card(img, idx)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
