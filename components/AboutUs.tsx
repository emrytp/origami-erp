'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

type Locale = 'tr' | 'en' | 'ru';

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

const TEXTS: Record<
  Locale,
  {
    hero: {
      imageAlt: string;
      kicker: string;
      titleBefore: string;
      titleHighlight: string;
      subtitle: string;
      ctaDemo: string;
      ctaModules: string;
      scroll: string;
    };
    story: {
      title: string;
      text: string;
    };
    mv: {
      kicker: string;
      title: string;
      mission: {
        title: string;
        text: string;
        bullets: { b1: string; b2: string; b3: string };
      };
      vision: {
        title: string;
        text: string;
        bullets: { b1: string; b2: string; b3: string };
      };
    };
  }
> = {
  tr: {
    hero: {
      imageAlt: 'Origami ekibi',
      kicker: 'HAKKIMIZDA',
      titleBefore: 'İşinizi ileri taşıyan',
      titleHighlight: 'yazılım ekibi',
      subtitle:
        'Origami olarak, sade ama güçlü ürünler geliştiriyoruz. İş süreçlerini hızlandıran, verimliliği artıran ve büyümeyi destekleyen çözümler üretiyoruz.',
      ctaDemo: 'İletişime Geç',
      ctaModules: 'Modülleri Gör',
      scroll: 'Aşağı kaydır'
    },
    story: {
      title: 'Hikayemiz',
      text:
        'Kurulduğumuz günden bu yana hedefimiz; karmaşık süreçleri sadeleştirip erişilebilir ve esnek yazılımlar sunmak oldu. Farklı sektörlerde edindiğimiz deneyimi tek bir güçlü platformda birleştirdik.'
    },
    mv: {
      kicker: 'DEĞERLERİMİZ',
      title: 'Misyon & Vizyon',
      mission: {
        title: 'Misyonumuz',
        text:
          'İşletmelerin dijital dönüşümünü hızlandırmak ve onlara sürdürülebilir rekabet avantajı sağlayan yazılımlar sunmak.',
        bullets: {
          b1: 'Sade ve anlaşılır arayüzler',
          b2: 'Özelleştirilebilir modüler yapı',
          b3: 'Hızlı kurulum ve destek'
        }
      },
      vision: {
        title: 'Vizyonumuz',
        text:
          'Bölgesinde lider, global ölçekte güvenilir kurumsal yazılım markalarından biri olmak.',
        bullets: {
          b1: 'Sürekli inovasyon',
          b2: 'Müşteri odaklı geliştirme',
          b3: 'Uzun vadeli iş ortaklıkları'
        }
      }
    }
  },
  en: {
    hero: {
      imageAlt: 'Origami team',
      kicker: 'ABOUT US',
      titleBefore: 'A software team that',
      titleHighlight: 'moves your business forward',
      subtitle:
        'At Origami, we build simple yet powerful products that speed up operations, boost efficiency and support growth.',
      ctaDemo: 'Contact Us',
      ctaModules: 'View Modules',
      scroll: 'Scroll down'
    },
    story: {
      title: 'Our Story',
      text:
        'Since day one, our goal has been to simplify complex workflows and deliver accessible, flexible software. We combined experience from many industries into one robust platform.'
    },
    mv: {
      kicker: 'OUR VALUES',
      title: 'Mission & Vision',
      mission: {
        title: 'Our Mission',
        text:
          'Accelerate digital transformation and deliver software that creates sustainable competitive advantage.',
        bullets: {
          b1: 'Clear, intuitive interfaces',
          b2: 'Customizable modular architecture',
          b3: 'Fast onboarding & support'
        }
      },
      vision: {
        title: 'Our Vision',
        text:
          'Become a trusted enterprise software brand—regional leader with a global footprint.',
        bullets: {
          b1: 'Continuous innovation',
          b2: 'Customer‑driven development',
          b3: 'Long‑term partnerships'
        }
      }
    }
  },
  ru: {
    hero: {
      imageAlt: 'Команда Origami',
      kicker: 'О НАС',
      titleBefore: 'Команда, которая',
      titleHighlight: 'двигает ваш бизнес вперёд',
      subtitle:
        'В Origami мы создаём простые и мощные продукты, ускоряющие процессы, повышающие эффективность и поддерживающие рост.',
      ctaDemo: 'Связаться с нами',
      ctaModules: 'Посмотреть модули',
      scroll: 'Листайте вниз'
    },
    story: {
      title: 'Наша история',
      text:
        'С самого начала наша цель — упростить сложные процессы и предоставить доступные, гибкие решения. Мы объединили опыт из разных отраслей в одной платформе.'
    },
    mv: {
      kicker: 'НАШИ ЦЕННОСТИ',
      title: 'Миссия и Видение',
      mission: {
        title: 'Наша миссия',
        text:
          'Ускорять цифровую трансформацию и давать устойчивое конкурентное преимущество с помощью ПО.',
        bullets: {
          b1: 'Понятные интерфейсы',
          b2: 'Модульная настраиваемость',
          b3: 'Быстрый запуск и поддержка'
        }
      },
      vision: {
        title: 'Наше видение',
        text:
          'Стать надёжным брендом корпоративного ПО: лидер в регионе с глобальными амбициями.',
        bullets: {
          b1: 'Постоянные инновации',
          b2: 'Разработка, ориентированная на клиента',
          b3: 'Долгосрочные партнёрства'
        }
      }
    }
  }
};

export default function AboutPage() {
  const [locale, setLocale] = useState<Locale>('tr');

  // Cookie’dan oku + Header’ın dispatch ettiği 'locale-change'i dinle
  useEffect(() => {
    const read = () => setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read();
    const handler = () => read();
    window.addEventListener('locale-change', handler);
    return () => window.removeEventListener('locale-change', handler);
  }, []);

  const t = TEXTS[locale];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO (full screen) */}
      <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/team.jpg"
          alt={t.hero.imageAlt}
          fill
          className="object-cover object-center scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/40" />

        <div className="relative text-center px-6 max-w-3xl">
          <p className="uppercase tracking-[0.35em] text-[#FFCFD6] text-[11px] font-semibold mb-3">
            {t.hero.kicker}
          </p>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight font-serif">
            {t.hero.titleBefore}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8102E] to-[#A00D26]">
              {t.hero.titleHighlight}
            </span>
          </h1>
          <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="mt-7 flex items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-5 py-3 text-sm sm:text-base font-semibold bg-gradient-to-r from-[#C8102E] to-[#A00D26] hover:opacity-95 active:opacity-90 shadow-lg shadow-red-900/20 transition"
            >
              {t.hero.ctaDemo}
            </Link>

            <Link
              href="#moduller"
              className="inline-flex items-center rounded-xl px-5 py-3 text-sm sm:text-base font-semibold border border-white/25 hover:border-white/45 bg-white/5 hover:bg-white/10 transition backdrop-blur-[2px]"
            >
              {t.hero.ctaModules}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest">
          {t.hero.scroll}
          <div className="mx-auto mt-1 h-6 w-px bg-white/50 animate-pulse" />
        </div>
      </section>

      {/* HİKAYEMİZ */}
      <section className="max-w-6xl mx-auto px-8 py-16 lg:py-20 text-center">
        <h2 className="relative inline-block text-3xl lg:text-4xl font-serif font-bold text-[#0D152E] tracking-wide">
          {t.story.title}
          <span className="absolute left-1/2 -bottom-2 w-16 h-[3px] bg-gradient-to-r from-[#C8102E] to-[#FFB3BF] -translate-x-1/2 rounded-full" />
        </h2>
        <p className="mt-8 text-gray-700 leading-loose text-lg font-light">
          {t.story.text}
        </p>
      </section>

      {/* MİSYON & VİZYON */}
      <section className="relative w-full py-16 lg:py-20 overflow-hidden bg-[#0D152E]">
        <div className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#C8102E] opacity-20 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 -right-32 h-[360px] w-[360px] rounded-full bg-[#3B4A87] opacity-30 blur-[120px]" />
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[6px] text-[#FFCFD6] text-sm font-semibold font-serif">
              {t.mv.kicker}
            </p>
            <h3 className="mt-3 text-4xl lg:text-5xl font-extrabold text-white relative inline-block font-serif">
              {t.mv.title}
              <span className="block w-24 h-[3px] bg-gradient-to-r from-[#C8102E] to-[#FFB3BF] mx-auto mt-3 rounded-full" />
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Misyon */}
            <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C8102E] to-[#A00D26] grid place-items-center shadow-lg">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div>
                  <h4 className="text-3xl lg:text-4xl font-bold text-white font-serif">
                    {t.mv.mission.title}
                  </h4>
                  <p className="mt-2 text-white/85 leading-relaxed">
                    {t.mv.mission.text}
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li className="flex gap-2"><span className="text-[#FFB3BF]">•</span> {t.mv.mission.bullets.b1}</li>
                <li className="flex gap-2"><span className="text-[#FFB3BF]">•</span> {t.mv.mission.bullets.b2}</li>
                <li className="flex gap-2"><span className="text-[#FFB3BF]">•</span> {t.mv.mission.bullets.b3}</li>
              </ul>
            </div>

            {/* Vizyon */}
            <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg白/10 transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6BA5FF] to-[#3B6BFF] grid place-items-center shadow-lg">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <div>
                  <h4 className="text-3xl lg:text-4xl font-bold text-white font-serif">
                    {t.mv.vision.title}
                  </h4>
                  <p className="mt-2 text-white/85 leading-relaxed">
                    {t.mv.vision.text}
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li className="flex gap-2"><span className="text-[#FFB3BF]">•</span> {t.mv.vision.bullets.b1}</li>
                <li className="flex gap-2"><span className="text-[#FFB3BF]">•</span> {t.mv.vision.bullets.b2}</li>
                <li className="flex gap-2"><span className="text-[#FFB3BF]">•</span> {t.mv.vision.bullets.b3}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div id="moduller" />
      <div id="demo" />
    </div>
  );
}
