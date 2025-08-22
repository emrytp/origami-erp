'use client';

import { useEffect, useState } from 'react';

type Locale = 'tr' | 'en' | 'ru';

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

type Benefit = { icon: string; title: string; description: string };

const TEXTS: Record<
  Locale,
  {
    heading: string;
    subheading: string;
    badges: { text: string; className: string }[];
    benefits: Benefit[];
  }
> = {
  tr: {
    heading: 'Geleceğin İş Dünyası İçin Geliştirildi',
    subheading:
      'Tüm özellikler tek bir amaç için tasarlandı: İşletmenizi daha verimli, akıllı ve başarılı kılmak.',
    badges: [
      { text: 'Hızlı Kurulum', className: 'bg-[#C8102E]/10 text-[#C8102E] border-[#C8102E]/20' },
      { text: 'Bulut & On-Prem', className: 'bg-[#4F7BFF]/10 text-[#4F7BFF] border-[#4F7BFF]/20' },
      { text: 'Rol Bazlı Erişim', className: 'bg-[#FF9800]/10 text-[#FF9800] border-[#FF9800]/20' },
      { text: 'Detaylı Loglama', className: 'bg-[#28A745]/10 text-[#28A745] border-[#28A745]/20' }
    ],
    benefits: [
      {
        icon: 'ri-settings-3-line',
        title: 'Esnek ve Özelleştirilebilir Yapı',
        description:
          'Origami ERP, işletmenizin ihtiyaçlarına göre kolayca uyarlanabilir ve özelleştirilebilir bir yapıya sahiptir.'
      },
      {
        icon: 'ri-user-heart-line',
        title: 'Kullanıcı Dostu Arayüz',
        description:
          'Kullanıcı deneyimi odaklı tasarım sayesinde hızlı adaptasyon ve yüksek verimlilik sağlar.'
      },
      {
        icon: 'ri-bar-chart-line',
        title: 'Gerçek Zamanlı Veri ve Raporlama',
        description:
          'Anlık veri izleme ve kapsamlı raporlarla daha hızlı ve stratejik kararlar alın.'
      },
      {
        icon: 'ri-plug-line',
        title: 'Entegrasyon Kolaylığı',
        description:
          'Mevcut yazılım ve sistemlerinizle uyum içinde çalışarak süreçlerinizi kesintisiz hale getirir.'
      }
    ]
  },
  en: {
    heading: 'Built for the Future of Business',
    subheading:
      'Every feature is designed with one goal: to make your company more efficient, smarter and more successful.',
    badges: [
      { text: 'Fast Setup', className: 'bg-[#C8102E]/10 text-[#C8102E] border-[#C8102E]/20' },
      { text: 'Cloud & On‑Prem', className: 'bg-[#4F7BFF]/10 text-[#4F7BFF] border-[#4F7BFF]/20' },
      { text: 'Role‑Based Access', className: 'bg-[#FF9800]/10 text-[#FF9800] border-[#FF9800]/20' },
      { text: 'Detailed Logging', className: 'bg-[#28A745]/10 text-[#28A745] border-[#28A745]/20' }
    ],
    benefits: [
      {
        icon: 'ri-settings-3-line',
        title: 'Flexible & Customizable',
        description:
          'Origami ERP adapts to your needs and can be tailored to your specific business processes.'
      },
      {
        icon: 'ri-user-heart-line',
        title: 'User‑Friendly Interface',
        description:
          'UX‑driven design delivers quick adoption and high productivity across teams.'
      },
      {
        icon: 'ri-bar-chart-line',
        title: 'Real‑Time Data & Reporting',
        description:
          'Monitor live data and build comprehensive reports to make faster, strategic decisions.'
      },
      {
        icon: 'ri-plug-line',
        title: 'Easy Integrations',
        description:
          'Works seamlessly with your existing software and systems to keep operations flowing.'
      }
    ]
  },
  ru: {
    heading: 'Создано для будущего бизнеса',
    subheading:
      'Все функции разработаны с одной целью: сделать ваш бизнес эффективнее, умнее и успешнее.',
    badges: [
      { text: 'Быстрый запуск', className: 'bg-[#C8102E]/10 text-[#C8102E] border-[#C8102E]/20' },
      { text: 'Облако и On‑Prem', className: 'bg-[#4F7BFF]/10 text-[#4F7BFF] border-[#4F7BFF]/20' },
      { text: 'Доступ по ролям', className: 'bg-[#FF9800]/10 text-[#FF9800] border-[#FF9800]/20' },
      { text: 'Подробное логирование', className: 'bg-[#28A745]/10 text-[#28A745] border-[#28A745]/20' }
    ],
    benefits: [
      {
        icon: 'ri-settings-3-line',
        title: 'Гибкость и кастомизация',
        description:
          'Origami ERP легко адаптируется под потребности компании и настраивается под ваши процессы.'
      },
      {
        icon: 'ri-user-heart-line',
        title: 'Дружелюбный интерфейс',
        description:
          'Дизайн, ориентированный на пользователя, обеспечивает быструю адаптацию и высокую продуктивность.'
      },
      {
        icon: 'ri-bar-chart-line',
        title: 'Данные и отчёты в реальном времени',
        description:
          'Отслеживайте метрики и формируйте отчёты, чтобы принимать быстрые стратегические решения.'
      },
      {
        icon: 'ri-plug-line',
        title: 'Лёгкая интеграция',
        description:
          'Бесшовно работает с существующими системами, обеспечивая непрерывность процессов.'
      }
    ]
  }
};

export default function BenefitCards() {
  const [locale, setLocale] = useState<Locale>('tr');
  const [isVisible, setIsVisible] = useState(false);

  // locale: cookie'den oku + Header'ın yayınladığı event'i dinle
  useEffect(() => {
    const read = () => setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read();
    const handler = () => read();
    window.addEventListener('locale-change', handler);
    return () => window.removeEventListener('locale-change', handler);
  }, []);

  // görünürlük animasyonu
  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('benefit-section');
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) setIsVisible(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const t = TEXTS[locale];

  return (
    <section
      id="benefit-section"
      className="relative w-full overflow-hidden -mt-10 lg:-mt-16 py-16 lg:py-20 bg-gradient-to-b from-[#F0F6FF] via-white to-[#FFF5F5]"
    >
      {/* Üstten yumuşak geçiş */}
      <div className="pointer-events-none absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-[#0D152E] to-transparent" />

      {/* Blob efektleri */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 w-[460px] h-[460px] rounded-full bg-[#C8102E]/10 blur-[140px]" />
        <div className="absolute top-10 right-[-140px] w-[520px] h-[520px] rounded-full bg-[#4F7BFF]/15 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Başlık */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0D152E] mb-4">
            {t.heading}
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t.subheading}
          </p>

          {/* Renkli rozetler */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {t.badges.map((b, i) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-full text-sm border ${b.className}`}
              >
                {b.text}
              </span>
            ))}
          </div>
        </div>

        {/* Kartlar */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.benefits.map((benefit, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden border border-gray-100`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover efekti */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 flex items-center justify-center mb-8 bg-gradient-to-br from-[#C8102E] to-[#A00D26] rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <i className={`${benefit.icon} text-2xl text-white`} />
                </div>

                <h3 className="text-xl font-bold mb-3 tracking-wide text-[#0D152E] group-hover:text-[#C8102E] transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
