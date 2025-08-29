'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Locale = 'tr' | 'en' | 'ru';

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

type Step = {
  number: string;
  title: string;
  description: string;
  icon: string;
  color: string;
};

type Copy = {
  eyebrow: string; // küçük üst başlık (referans sayfası ile aynı stil)
  heading: string;
  sub: string;
  steps: Step[];
  cta: string;
};

const TEXTS: Record<Locale, Copy> = {
  tr: {
    eyebrow: 'Adım Adım ',
    heading: 'Uygulama Yolculuğunuz',
    sub: 'ERP sistemine geçiş sürecinizin sorunsuz, verimli ve hedeflerinize tam uyumlu olması için yapılandırılmış bir yaklaşım.',
    cta: 'Demo Yolculuğuna Başla',
    steps: [
      { number: '01', title: 'İhtiyaç Analizi', description: 'İşletmenizin gereksinimlerini, mevcut sistemlerini ve operasyonel zorluklarını detaylı şekilde analiz ediyoruz.', icon: 'ri-search-eye-line', color: 'from-[#C8102E] to-[#A00D26]' },
      { number: '02', title: 'Özel Sunum', description: 'Sektörünüze ve kullanım senaryonuza özel hazırlanmış bir demoyu adım adım sunuyoruz.', icon: 'ri-presentation-line', color: 'from-[#A00D26] to-[#8B0B23]' },
      { number: '03', title: 'Teknik Uyum', description: 'Teknik ekibimiz entegrasyon ihtiyaçlarını, veri aktarımı ve sistem mimarisi detaylarını inceler.', icon: 'ri-settings-4-line', color: 'from-[#8B0B23] to-[#760920]' },
      { number: '04', title: 'Canlı Test', description: 'Gerçek verilerinizle, güvenli bir demo ortamında sistemi bizzat deneyimleyin.', icon: 'ri-play-circle-line', color: 'from-[#760920] to-[#61071D]' },
    ],
  },
  en: {
    eyebrow: 'Step-by-Step Journey',
    heading: 'Your Implementation Journey',
    sub: 'A structured approach to ensure your ERP transition is smooth, efficient and aligned with your goals.',
    cta: 'Start the Demo Journey',
    steps: [
      { number: '01', title: 'Needs Analysis', description: 'We analyze your business requirements, current systems and operational challenges in detail.', icon: 'ri-search-eye-line', color: 'from-[#C8102E] to-[#A00D26]' },
      { number: '02', title: 'Custom Presentation', description: 'We deliver a tailored demo prepared for your industry and use case, step by step.', icon: 'ri-presentation-line', color: 'from-[#A00D26] to-[#8B0B23]' },
      { number: '03', title: 'Technical Alignment', description: 'Our team examines integration needs, data migration and system architecture details.', icon: 'ri-settings-4-line', color: 'from-[#8B0B23] to-[#760920]' },
      { number: '04', title: 'Live Test', description: 'Experience the system yourself in a secure demo environment with your real data.', icon: 'ri-play-circle-line', color: 'from-[#760920] to-[#61071D]' },
    ],
  },
  ru: {
    eyebrow: 'Пошаговый путь',
    heading: 'Ваш путь внедрения',
    sub: 'Структурированный подход для плавного, эффективного и полностью соответствующего целям перехода на ERP.',
    cta: 'Начать демо-путь',
    steps: [
      { number: '01', title: 'Анализ потребностей', description: 'Мы подробно анализируем требования вашего бизнеса, существующие системы и операционные сложности.', icon: 'ri-search-eye-line', color: 'from-[#C8102E] to-[#A00D26]' },
      { number: '02', title: 'Индивидуальная презентация', description: 'Мы пошагово демонстрируем подготовленное специально для вашей отрасли решение.', icon: 'ri-presentation-line', color: 'from-[#A00D26] to-[#8B0B23]' },
      { number: '03', title: 'Техническое согласование', description: 'Наша команда изучает интеграционные потребности, перенос данных и архитектуру системы.', icon: 'ri-settings-4-line', color: 'from-[#8B0B23] to-[#760920]' },
      { number: '04', title: 'Живое тестирование', description: 'Испытайте систему на собственных данных в безопасной демо-среде.', icon: 'ri-play-circle-line', color: 'from-[#760920] to-[#61071D]' },
    ],
  },
};

export default function DemoProcess() {
  const [locale, setLocale] = useState<Locale>('tr');

  useEffect(() => {
    const read = () => setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read();
    const handler = () => read();
    window.addEventListener('locale-change', handler);
    return () => window.removeEventListener('locale-change', handler);
  }, []);

  const copy = TEXTS[locale];

  return (
    <section className="w-full py-24 bg-[#0D152E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Başlık — Referans sayfası stili */}
        <div className="mb-16 text-center">
          <div className="text-[11px] tracking-[6px] text-[#C8102E] uppercase font-semibold">
            {copy.eyebrow}
          </div>
          <h2 className="mt-1 text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-[Poppins]">
            <span className="relative inline-block">
              {copy.heading}
              <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 h-[3px] w-16 bg-[#C8102E] rounded-full" />
            </span>
          </h2>
          <p className="mt-5 text-[clamp(15px,1.4vw,20px)] text-gray-300 max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
            {copy.sub}
          </p>
        </div>

        {/* Adımlar */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {copy.steps.map((step, index) => (
            <div key={index} className="group relative h-full">
              {index < copy.steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-[#C8102E] to-transparent z-10" />
              )}

              {/* Dış glow */}
              <span
                className="pointer-events-none absolute -inset-6 rounded-[30px] -z-10
                           opacity-0 group-hover:opacity-60
                           blur-3xl transition-opacity duration-500
                           bg-[radial-gradient(80%_80%_at_50%_50%,rgba(200,16,46,0.35),rgba(160,13,38,0.0))]"
              />

              {/* Kutu */}
              <div
                className="h-full flex flex-col justify-between
                           bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl
                           transition-transform duration-500 hover:scale-105 hover:bg-white/10"
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center`}
                  >
                    <i className={`${step.icon} text-2xl text-white`} />
                  </div>

                  <div className="text-3xl font-bold text-[#C8102E] mb-2 font-serif">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/contact">
            <button
              className="px-12 py-4 text-lg font-bold tracking-wide rounded-xl 
                         bg-gradient-to-r from-[#C8102E] to-[#A00D26] 
                         hover:bg-gradient-to-l hover:from-[#C8102E] hover:to-[#A00D26] 
                         shadow-lg hover:shadow-red-900/30 
                         text-white transition-all duration-300 
                         transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              {copy.cta}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
