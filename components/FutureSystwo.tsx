'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
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
    panelTitle: string;
    panelAlt: string;
  }
> = {
  tr: {
    h1_line1: 'Her Adımda Yanınızda Olan',
    h1_highlight: 'Güçlü ve Esnek ERP Altyapısı',
    h1_line2: '',
    paragraph:
      'Origami ERP ile iş süreçlerinizi merkezi bir sistemde birleştirin. Esnek yapısı sayesinde her sektöre uyum sağlar, büyümenize destek olur.',
    ctaPrimary: 'Teklif Al',
    ctaSecondary: 'Ürünü İncele',
    panelTitle: 'Origami Erp',
    panelAlt: 'ERP Panel Arayüzü'
  },
  en: {
    h1_line1: 'A',
    h1_highlight: 'Powerful and Flexible ERP',
    h1_line2: 'that supports you at every step',
    paragraph:
      'Unify your operations in a central system with Origami ERP. Its flexible architecture adapts to any industry and scales with your growth.',
    ctaPrimary: 'Get a Quote',
    ctaSecondary: 'View Product',
    panelTitle: 'Enterprise Panel',
    panelAlt: 'ERP Panel UI'
  },
  ru: {
    h1_line1: 'Надёжная и гибкая',
    h1_highlight: 'ERP-платформа',
    h1_line2: 'рядом с вами на каждом этапе',
    paragraph:
      'Объединяйте процессы в единой системе с Оригами ERP. Гибкая архитектура адаптируется к любой отрасли и растёт вместе с бизнесом.',
    ctaPrimary: 'Получить предложение',
    ctaSecondary: 'Посмотреть продукт',
    panelTitle: 'Корпоративная панель',
    panelAlt: 'Интерфейс ERP панели'
  }
};

export default function FutureSysTwo() {
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
    <section className="relative w-full bg-gradient-to-br from-[#F7F7F8] to-[#ECEEF2] overflow-hidden -mt-6 lg:-mt-8">
      {/* Arka plan blur */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#C8102E] opacity-5 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0D152E] opacity-5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-[clamp(0.75rem,2vw,1.25rem)] pb-[clamp(2rem,5vw,3rem)]">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* Sol Görsel + Glow */}
          <motion.div
            className="relative z-10 order-1 lg:order-none pr-0 lg:pr-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="absolute inset-0 w-full h-full bg-[#C8102E] opacity-15 blur-[100px] rounded-3xl -z-10" />
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden p-3 rotate-[-6deg] hover:rotate-[-3deg] transition-transform duration-500">
              <div className="bg-[#0D152E] py-4 px-5 rounded-t-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#C8102E]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-6 text-sm text-white font-semibold tracking-wide">{t.panelTitle}</div>
                </div>
              </div>
              <img
                src="/foto2.png"
                alt={t.panelAlt}
                className="w-full rounded-b-2xl object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Sağ Metin */}
          <motion.div
            className="space-y-6 pt-0 z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D152E] leading-tight tracking-tight">
              {t.h1_line1} <br className="hidden lg:block" />
              <span className="text-[#C8102E]">{t.h1_highlight}</span> {t.h1_line2}
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 max-w-xl font-normal leading-relaxed">
              {t.paragraph}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-1">
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

            <div className="text-sm text-gray-500 flex items-center gap-6 pt-2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
