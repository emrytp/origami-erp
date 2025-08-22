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
      { icon: 'ri-stack-line', title: 'Inventory', description: 'Real‑time stock tracking, smart forecasting and optimization.' },
      { icon: 'ri-customer-service-2-line', title: 'CRM', description: 'Stronger relationships that boost sales and customer loyalty.' },
      { icon: 'ri-shopping-cart-line', title: 'Procurement', description: 'Efficient purchasing with supplier management and cost control.' },
      { icon: 'ri-line-chart-line', title: 'Analytics', description: 'Business intelligence with predictive insights and rich reports.' },
      { icon: 'ri-tools-line', title: 'Manufacturing', description: 'Production planning, quality control and operational efficiency.' },
      { icon: 'ri-global-line', title: 'Multi‑Company', description: 'Manage multiple companies from one place with consolidated reports.' }
    ]
  },
  ru: {
    sectionLabel: 'Модули ERP',
    heading: 'Единый пакет модулей',
    sub: 'Мощные интегрированные модули, охватывающие все бизнес‑процессы.',
    modules: [
      { icon: 'ri-coins-line', title: 'Финансы', description: 'Полное управление финансами: автоматическая сверка и соответствие требованиям.' },
      { icon: 'ri-team-line', title: 'HR', description: 'Полный HR‑цикл: найм, эффективность, расчет заработной платы.' },
      { icon: 'ri-stack-line', title: 'Склад', description: 'Отслеживание запасов в реальном времени, прогнозирование и оптимизация.' },
      { icon: 'ri-customer-service-2-line', title: 'CRM', description: 'Укрепление отношений с клиентами и рост продаж/лояльности.' },
      { icon: 'ri-shopping-cart-line', title: 'Закупки', description: 'Эффективные закупки с управлением поставщиками и контролем затрат.' },
      { icon: 'ri-line-chart-line', title: 'Аналитика', description: 'Бизнес‑аналитика с предиктивными инсайтами и отчетами.' },
      { icon: 'ri-tools-line', title: 'Производство', description: 'Планирование, контроль качества и операционная эффективность.' },
      { icon: 'ri-global-line', title: 'Мультикомпания', description: 'Управляйте несколькими компаниями из одного места с консолидированной отчетностью.' }
    ]
  }
};

export default function ProductModules() {
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

  return (
    <section
      id="product-modules"
      className="scroll-mt-28 w-full py-24 relative bg-gradient-to-b from-gray-50 via-white to-gray-50
                 before:content-[''] before:absolute before:inset-0
                 before:bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(200,16,46,0.05),transparent)]
                 before:pointer-events-none"
      aria-label={copy.sectionLabel}
    >
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Başlık */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0D152E] mb-6">
            {copy.heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {copy.sub}
          </p>
        </div>

        {/* Modüller */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {copy.modules.map((module, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                         transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6 
                              bg-gradient-to-br from-[#C8102E] to-[#A00D26] rounded-2xl 
                              group-hover:scale-110 transition-all duration-300 shadow-lg">
                <i className={`${module.icon} text-2xl text-white`} />
              </div>

              <h3 className="text-xl font-bold text-[#0D152E] mb-4 group-hover:text-[#C8102E] transition-colors duration-300">
                {module.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
