'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Locale = 'tr' | 'en' | 'ru';

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

const TEXTS: Record<
  Locale,
  {
    h1_line1: string;
    h1_highlight: string;
    h1_line2: string;
    paragraph: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1: string;
    stat2: string;
    badge: string;
    panelTitle: string;
    panelAlt: string;
  }
> = {
  tr: {
    h1_line1: 'İşinizi Geleceğe Taşıyacak',
    h1_highlight: 'Akıllı Yazılım',
    h1_line2: 'Çözümleri',
    paragraph:
      'Origami Yazılım, ERP teknolojisini sadeleştirerek iş süreçlerinizi hızlandırır. Yalnızca bir yazılım değil, sürdürülebilir dijital dönüşüm ortağınız.',
    ctaPrimary: 'Teklif Al',
    ctaSecondary: 'Ürünü İncele',
    stat1: '✅ Profesyonel Hizmet',
    stat2: '💡 Her Zaman Yanınızda',
    badge: '',
    panelTitle: 'Origami Erp',
    panelAlt: 'ERP Panel Arayüzü'
  },
  en: {
    h1_line1: 'Future-Proof',
    h1_highlight: 'Smart Software',
    h1_line2: 'Solutions for Your Business',
    paragraph:
      'Origami simplifies ERP and accelerates your operations. Not just software — a sustainable digital transformation partner.',
    ctaPrimary: 'Get a Quote',
    ctaSecondary: 'View Product',
    stat1: '✅ Professional Service',
    stat2: '💡 Always by Your Side',
    badge: '',
    panelTitle: 'Origami Erp',
    panelAlt: 'ERP Panel UI'
  },
  ru: {
    h1_line1: 'Решения',
    h1_highlight: 'Умного ПО',
    h1_line2: 'для будущего вашего бизнеса',
    paragraph:
      'Оригами упрощает ERP и ускоряет процессы. Не просто софт — устойчивый партнёр по цифровой трансформации.',
    ctaPrimary: 'Получить предложение',
    ctaSecondary: 'Посмотреть продукт',
    stat1: '✅ Профессиональный сервис',
    stat2: '💡 Всегда рядом с вами',
    badge: '',
    panelTitle: 'Оригами Erp',
    panelAlt: 'Интерфейс ERP панели'
  }
};

export default function FutureSys() {
  const [locale, setLocale] = useState<Locale>('tr');

  useEffect(() => {
    const read = () => setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read();
    const handler = () => read();
    window.addEventListener('locale-change', handler);
    return () => window.removeEventListener('locale-change', handler);
  }, []);

  const t = TEXTS[locale];

  return (
    <section className="relative w-full bg-gradient-to-br from-[#F7F7F8] to-[#ECEEF2] overflow-hidden flex items-center">
      {/* Arka plan blur (daha yumuşak) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#C8102E] opacity-5 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#0D152E] opacity-5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-[clamp(4rem,7vw,6rem)] pb-[clamp(1.25rem,3.5vw,2.5rem)]">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* Sol Metin */}
          <motion.div
            className="space-y-8 pt-2 z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D152E] leading-tight tracking-tight">
              {t.h1_line1} <br className="hidden lg:block" />
              <span className="text-[#C8102E]">{t.h1_highlight}</span> {t.h1_line2}
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 max-w-xl font-normal leading-relaxed">
              {t.paragraph}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-[#C8102E] hover:bg-[#A00D26] text-white px-10 py-4 text-base font-semibold rounded-lg shadow-md transition"
                >
                  {t.ctaPrimary}
                </motion.button>
              </Link>

              <Link href="/urunler">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="border border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white px-10 py-4 text-base font-semibold rounded-lg transition"
                >
                  {t.ctaSecondary}
                </motion.button>
              </Link>
            </div>

            <div className="text-sm text-gray-500 flex items-center gap-6 pt-4">
              <span>{t.stat1}</span>
              <span>{t.stat2}</span>
            </div>
          </motion.div>

          {/* Sağ Görsel + Glow */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: 50, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="absolute inset-0 w-full h-full bg-[#C8102E] opacity-15 blur-[90px] rounded-3xl -z-10" />
            <motion.div
              whileHover={{ rotate: 5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden p-3"
            >
              <div className="bg-[#0D152E] py-4 px-5 rounded-t-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#C8102E]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-6 text-sm text-white font-semibold tracking-wide">{t.panelTitle}</div>
                </div>
              </div>
              <img src="/hero.png" alt={t.panelAlt} className="w-full rounded-b-2xl object-cover object-top" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
