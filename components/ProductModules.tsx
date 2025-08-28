'use client';

import { useEffect, useState } from 'react';

type Locale = 'tr' | 'en' | 'ru';

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

type ModuleItem = { icon: string; title: string; description: string };

const TEXTS: Record<
  Locale,
  {
    sectionLabel: string;
    heading: string;
    sub: string;
    modules: ModuleItem[];
  }
> = {
  tr: {
    sectionLabel: 'ERP Modülleri',
    heading: 'Tümleşik Modül Paketi',
    sub: 'Tüm iş süreçlerinizi kapsayan, entegre çalışan güçlü modüller.',
    modules: [
      { icon: 'ri-coins-line', title: 'Finans', description: 'Otomatik mutabakat ve mevzuat uyumu ile kapsamlı finans yönetimi.' },
      { icon: 'ri-team-line', title: 'İnsan Kaynakları', description: 'İşe alımdan performans ve bordroya kadar eksiksiz İK yönetimi.' },
      { icon: 'ri-stack-line', title: 'Stok Yönetimi', description: 'Gerçek zamanlı envanter takibi, akıllı tahmin ve optimizasyon.' },
      { icon: 'ri-customer-service-2-line', title: 'CRM', description: 'Satış ve müşteri sadakatini artıran güçlü ilişki yönetimi.' },
      { icon: 'ri-shopping-cart-line', title: 'Satın Alma', description: 'Tedarikçi yönetimi ve maliyet kontrolü ile verimli satın alma süreçleri.' },
      { icon: 'ri-line-chart-line', title: 'Analitik', description: 'Tahmine dayalı içgörüler ve güçlü raporlamalarla iş zekâsı.' },
      { icon: 'ri-tools-line', title: 'Üretim', description: 'Üretim planlama, kalite kontrol ve operasyonel verimlilik.' },
      { icon: 'ri-global-line', title: 'Çoklu Şirket', description: 'Birden fazla şirketi tek yerden yönetin, birleşik raporlama ile.' }
    ]
  },
  en: {
    sectionLabel: 'ERP Modules',
    heading: 'Unified Module Suite',
    sub: 'Powerful, integrated modules that cover all your business processes.',
    modules: [
      { icon: 'ri-coins-line', title: 'Finance', description: 'Comprehensive finance with automatic reconciliation and regulatory compliance.' },
      { icon: 'ri-team-line', title: 'Human Resources', description: 'Complete HR from hiring to performance and payroll.' },
      { icon: 'ri-stack-line', title: 'Inventory', description: 'Real-time stock tracking, smart forecasting and optimization.' },
      { icon: 'ri-customer-service-2-line', title: 'CRM', description: 'Stronger relationships that boost sales and customer loyalty.' },
      { icon: 'ri-shopping-cart-line', title: 'Procurement', description: 'Efficient purchasing with supplier management and cost control.' },
      { icon: 'ri-line-chart-line', title: 'Analytics', description: 'Business intelligence with predictive insights and rich reports.' },
      { icon: 'ri-tools-line', title: 'Manufacturing', description: 'Production planning, quality control and operational efficiency.' },
      { icon: 'ri-global-line', title: 'Multi-Company', description: 'Manage multiple companies from one place with consolidated reports.' }
    ]
  },
  ru: {
    sectionLabel: 'Модули ERP',
    heading: 'Единый пакет модулей',
    sub: 'Мощные интегрированные модули, охватывающие все бизнес-процессы.',
    modules: [
      { icon: 'ri-coins-line', title: 'Финансы', description: 'Полное управление финансами: автоматическая сверка и соответствие требованиям.' },
      { icon: 'ri-team-line', title: 'Человеческих ресурсов', description: 'Полный HR-цикл: найм, эффективность, расчет заработной платы.' },
      { icon: 'ri-stack-line', title: 'Управление запасами', description: 'Отслеживание запасов в реальном времени, прогнозирование и оптимизация.' },
      { icon: 'ri-customer-service-2-line', title: 'CRM', description: 'Укрепление отношений с клиентами и рост продаж/лояльности.' },
      { icon: 'ri-shopping-cart-line', title: 'Закупки', description: 'Эффективные закупки с управлением поставщиками и контролем затрат.' },
      { icon: 'ri-line-chart-line', title: 'Аналитика', description: 'Бизнес-аналитика с предиктивными инсайтами и отчетами.' },
      { icon: 'ri-tools-line', title: 'Производство', description: 'Планирование, контроль качества и операционная эффективность.' },
      { icon: 'ri-global-line', title: 'Мультикомпания', description: 'Управляйте несколькими компаниями из одного места с консолидированной отчетностью.' }
    ]
  }
};

// background seçenekleri
const BG_AURORA = `
 bg-white
 [background:
   radial-gradient(55rem_30rem_at_15%_0%,#fff0f2_0%,transparent_60%),
   radial-gradient(50rem_35rem_at_85%_10%,#eef2ff_0%,transparent_65%),
   radial-gradient(45rem_28rem_at_50%_120%,#f0f9ff_0%,transparent_60%)
 ]
`;
const NOISE = "url(\"data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>\
<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/></filter>\
<rect width='100%' height='100%' filter='url(%23n)' opacity='0.035'/></svg>\")";
const BG_NOISE = `
 bg-[rgb(250,251,253)]
 before:content-[''] before:absolute before:inset-0 before:pointer-events-none
 before:bg-[radial-gradient(80rem_40rem_at_50%_-10%,rgba(0,0,0,.05),transparent_60%)]
 after:content-[''] after:absolute after:inset-0 after:pointer-events-none
 after:bg-[${NOISE}]
`;
const BG_DARK = `
 bg-[#0D152E]
 [background-image:
   radial-gradient(80rem_40rem_at_50%_-10%,rgba(255,255,255,.06),transparent_60%)
 ]
`;

// istediğini seç
const BG = BG_AURORA;

export default function ProductModules() {
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
    <section
      id="product-modules"
      aria-label={copy.sectionLabel}
      className={`relative scroll-mt-28 w-full py-20 lg:py-24 ${BG}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Başlık */}
        <div className="text-center mb-14 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider
                           bg-rose-50 text-rose-700 border border-rose-100">
            {copy.sectionLabel}
          </span>
          <h2 className="mt-4 text-3xl lg:text-5xl font-serif font-bold text-[#0D152E]">
            {copy.heading}
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#C8102E] to-[#FFB3BF]" />
          <p className="mt-6 text-base lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {copy.sub}
          </p>
        </div>

        {/* Modüller */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
          {copy.modules.map((module, i) => (
            <div
              key={i}
              className="
                group relative rounded-2xl border border-gray-100
                bg-white/80 backdrop-blur-sm p-6 lg:p-7
                shadow-md hover:shadow-[0_12px_40px_-10px_rgba(200,16,46,0.25)]
                transition-all duration-300 hover:-translate-y-1.5
              "
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 mb-5 grid place-items-center rounded-xl
                              bg-gradient-to-br from-[#C8102E] to-[#A00D26]
                              shadow-lg shadow-rose-900/10
                              group-hover:scale-105 transition-transform">
                <i className={`${module.icon} text-white text-xl`} />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-[#0D152E] mb-2.5
                             group-hover:text-[#C8102E] transition-colors">
                {module.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
