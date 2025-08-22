'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

// Swiper
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

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// Sayfa metinleri (providersız i18n)
const TEXTS: Record<
  Locale,
  {
    heroTitle: string;
    heroSub: string;
    partnersKicker: string;
    refsHeading: string;
    altPrefix: string;
  }
> = {
  tr: {
    heroTitle: 'Başarılarımız, müşterilerimizin bize duyduğu güvenle şekilleniyor.',
    heroSub:
      'Origami Yazılım olarak, farklı sektörlerdeki iş ortaklarımıza yenilikçi ve kişiselleştirilebilir yazılım çözümleri sunmaktan gurur duyuyoruz. İş süreçlerini dönüştürerek verimlilik ve rekabet avantajı sağlayan projelerimiz, iş dünyasında kalıcı değer yaratmaya odaklanmaktadır.',
    partnersKicker: 'Güvendiğimiz İş Ortaklarımız',
    refsHeading: 'Referanslarımız',
    altPrefix: 'Referans'
  },
  en: {
    heroTitle: 'Our success is shaped by the trust our customers place in us.',
    heroSub:
      'At Origami Software, we proudly deliver innovative and customizable software solutions across industries. Our projects transform operations to drive efficiency and competitive advantage, creating lasting value in business.',
    partnersKicker: 'Trusted Partners',
    refsHeading: 'Our References',
    altPrefix: 'Reference'
  },
  ru: {
    heroTitle: 'Наши успехи формируются доверием наших клиентов.',
    heroSub:
      'В Origami Software мы с гордостью предоставляем инновационные и настраиваемые решения для разных отраслей. Наши проекты повышают эффективность и конкурентные преимущества, создавая долгосрочную ценность для бизнеса.',
    partnersKicker: 'Надёжные партнёры',
    refsHeading: 'Наши референсы',
    altPrefix: 'Референс'
  }
};

export default function IntegrationsPage() {
  const [locale, setLocale] = useState<Locale>('tr');

  // Cookie’dan oku + Header’ın dispatch ettiği 'locale-change'i dinle
  useEffect(() => {
    const read = () => setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read();
    const handler = () => read();
    window.addEventListener('locale-change', handler);
    return () => window.removeEventListener('locale-change', handler);
  }, []);

  const copy = TEXTS[locale];
  const logos = Array.from({ length: 17 }, (_, i) => `/referans/referans${i + 1}.png`);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* HERO */}
      <section className="relative w-full h-[55vh] md:h-[60vh] flex items-center justify-center text-white mt-[88px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/refera.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className={`${poppins.className} text-4xl md:text-5xl font-semibold leading-tight tracking-tight`}>
            {copy.heroTitle}
          </h1>
          <p className={`${poppins.className} mt-5 text-lg md:text-xl text-white/90 leading-relaxed`}>
            {copy.heroSub}
          </p>
        </div>
      </section>

      {/* REFERANSLARIMIZ */}
      <section className="w-full pt-6 pb-16 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="text-[11px] tracking-[6px] text-[#C8102E] uppercase font-semibold">
              {copy.partnersKicker}
            </div>
            <h2
              className={`${poppins.className} mt-1 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0D152E]`}
            >
              <span className="relative inline-block">
                {copy.refsHeading}
                <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 h-[3px] w-16 bg-[#C8102E] rounded-full" />
              </span>
            </h2>
          </div>

          <Swiper
            modules={[Autoplay]}
            loop
            speed={5200}
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
                  {/* İstersen burada next/image da kullanabilirsin */}
                  <img
                    src={src}
                    alt={`${copy.altPrefix} ${idx + 1}`}
                    className="max-h-40 max-w-40 object-contain opacity-95 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  );
}
