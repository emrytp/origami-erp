'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

type Locale = 'tr' | 'en' | 'ru';

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

const TEXTS: Record<
  Locale,
  {
    eyebrow: string;   // küçük üst başlık
    heading: string;   // büyük başlık
    alt: (i: number) => string;
  }
> = {
  tr: {
    eyebrow: 'Güvendiğimiz İş Ortaklarımız',
    heading: 'Referanslarımız',
    alt: (i) => `Referans ${i + 1}`
  },
  en: {
    eyebrow: 'Trusted Partners',
    heading: 'Our References',
    alt: (i) => `Reference ${i + 1}`
  },
  ru: {
    eyebrow: '',
    heading: 'Наши референсы',
    alt: (i) => `Референс ${i + 1}`
  }
};

export default function References() {
  const [locale, setLocale] = useState<Locale>('tr');

  // Cookie'den oku + Header'ın yaydığı `locale-change` event'ini dinle
  useEffect(() => {
    const read = () => setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read(); // initial
    const handler = () => read();
    window.addEventListener('locale-change', handler);
    return () => window.removeEventListener('locale-change', handler);
  }, []);

  const t = TEXTS[locale];
  const logos = Array.from({ length: 23 }, (_, i) => `/referans/referans${i + 1}.png`);

  return (
    <section className="w-full pt-6 pb-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Başlık */}
        <div className="mb-12 text-center">
          <div className="text-[11px] tracking-[6px] text-[#C8102E] uppercase font-semibold">
            {t.eyebrow}
          </div>
          <h2 className="mt-1 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0D152E] font-[Poppins]">
            <span className="relative inline-block">
              {t.heading}
              <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 h-[3px] w-16 bg-[#C8102E] rounded-full" />
            </span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop
          speed={3200}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
          slidesPerView={4}
          spaceBetween={36}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 16 },
            640: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 36 },
            1440: { slidesPerView: 5, spaceBetween: 40 }
          }}
          className="select-none"
        >
          {logos.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex items-center justify-center w-48 h-48 md:w-52 md:h-52 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={src}
                  alt={t.alt(idx)}
                  className="max-h-40 max-w-40 object-contain opacity-95 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
