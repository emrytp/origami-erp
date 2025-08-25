'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { useEffect, useState } from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

/* --------- Providersız i18n (cookie: NEXT_LOCALE) --------- */

type Locale = 'tr' | 'en' | 'ru';

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

const COPY: Record<
  Locale,
  {
    heroTitle: string;
    sectionTitle: string;
    sectionSubtitle: string;
  }
> = {
  tr: {
    heroTitle: 'Tüm Entegrasyonlar Tek Çatıda',
    sectionTitle: 'Entegrasyonlar',
    sectionSubtitle:
      'ERP, e‑ticaret, ödeme, lojistik ve daha fazlası. Origami mimarisi ile sistemleriniz tek noktadan konuşur.'
  },
  en: {
    heroTitle: 'All Integrations Under One Roof',
    sectionTitle: 'Integrations',
    sectionSubtitle:
      'ERP, e‑commerce, payments, logistics and more. With Origami, your systems speak from a single hub.'
  },
  ru: {
    heroTitle: 'Все интеграции в одном месте',
    sectionTitle: 'Интеграции',
    sectionSubtitle:
      'ERP, э-Коммерция, платежи, логистика и другое. С Origami ваши системы работают как единое целое.'
  }
};

const LOGOS = [
  { src: '/entegrasyonlar/entegrasyon1.png', alt: 'Logo 1' },
  { src: '/entegrasyonlar/entegrasyon2.png', alt: 'Logo 2' },
  { src: '/entegrasyonlar/entegrasyon3.png', alt: 'Logo 3' },
  { src: '/entegrasyonlar/entegrasyon4.png', alt: 'Logo 4' },
  { src: '/entegrasyonlar/entegrasyon5.png', alt: 'Logo 5' },
];

export default function IntegrationsPage() {
  const [locale, setLocale] = useState<Locale>('tr');

  useEffect(() => {
    const read = () => setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read();
    const handler = () => read();
    window.addEventListener('locale-change', handler);
    return () => window.removeEventListener('locale-change', handler);
  }, []);

  const t = COPY[locale];
  const track = [...LOGOS, ...LOGOS]; // kesintisiz marquee

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* HERO */}
      <section className="relative w-full h-[55vh] md:h-[60vh] flex items-center justify-center text-white mt-[88px]">
        <Image
          src="/entegrasyonlar/entegrasyonbanner.png"
          alt="Integrations Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1
            className={`${poppins.className} text-4xl md:text-5xl font-semibold leading-tight tracking-tight`}
          >
            {t.heroTitle}
          </h1>
        </div>
      </section>

      {/* BAŞLIK + ALT AÇIKLAMA */}
      <section className="relative py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 relative inline-block">
              {t.sectionTitle}
              <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-16 h-1 bg-[#C8102E] rounded-full"></span>
            </h2>
            <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t.sectionSubtitle}
            </p>
          </div>

          {/* SWIPER MARQUEE */}
          <Swiper
            modules={[Autoplay]}
            loop
            speed={6500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            slidesPerView="auto"
            spaceBetween={24}
            grabCursor
            allowTouchMove
            simulateTouch
            followFinger
            className="select-none"
          >
            {track.map((l, i) => (
              <SwiperSlide key={`${i}-${l.src}`} style={{ width: 'auto' }}>
                <LogoCard src={l.src} alt={l.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="shrink-0 w-[240px] md:w-[280px] rounded-2xl border border-slate-100 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex h-[140px] md:h-[160px] items-center justify-center p-6">
        <Image
          src={src}
          alt={alt}
          width={260}
          height={140}
          className="max-h-20 md:max-h-24 object-contain"
          priority
        />
      </div>
    </div>
  );
}