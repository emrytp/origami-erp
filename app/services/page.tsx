'use client';

import {useEffect, useMemo, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  FiCpu,
  FiLayers,
  FiSettings,
  FiHeadphones,
  FiSmartphone,
  FiBarChart2
} from 'react-icons/fi';
import type {IconType} from 'react-icons';

type Locale = 'tr' | 'en' | 'ru';

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

/* ---------- Metinler (providersız i18n) ---------- */

type ServiceBase = { Icon: IconType; color: string };
type ServiceI18n = { title: string; desc: string; bullets: string[] };
type Service = ServiceBase & { i18n: Record<Locale, ServiceI18n> };

const SERVICES: Service[] = [
  {
    Icon: FiCpu,
    color: 'from-[#C8102E] to-[#A00D26]',
    i18n: {
      tr: {
        title: 'Özel Yazılım Geliştirme',
        desc: 'İhtiyacınıza %100 uyumlu, ölçeklenebilir ve güvenli kurumsal uygulamalar.',
        bullets: ['Modüler mimari', 'Bulut + On‑prem']
      },
      en: {
        title: 'Custom Software Development',
        desc: 'Enterprise apps tailored 1:1 to your needs—scalable and secure.',
        bullets: ['Modular architecture', 'Cloud + On‑prem']
      },
      ru: {
        title: 'Индивидуальная разработка ПО',
        desc: 'Корпоративные приложения под ваши задачи: масштабируемые и безопасные.',
        bullets: ['Модульная архитектура', 'Облако + On‑prem']
      }
    }
  },
  {
    Icon: FiLayers,
    color: 'from-[#A00D26] to-[#8B0B23]',
    i18n: {
      tr: {
        title: 'Proje Yönetimi & Uygulama',
        desc: 'Analizden canlıya geçişe, kurulum ve eğitim dahil uçtan uca teslim.',
        bullets: ['Agile', 'KPI odaklı ilerleme', 'Risk & kapsam kontrolü']
      },
      en: {
        title: 'Project Management & Delivery',
        desc: 'End‑to‑end from analysis to go‑live, incl. setup and training.',
        bullets: ['Agile', 'KPI‑driven progress', 'Risk & scope control']
      },
      ru: {
        title: 'Управление проектами и внедрение',
        desc: 'От анализа до запуска, включая установку и обучение.',
        bullets: ['Agile', 'Прогресс по KPI', 'Контроль рисков и объёма']
      }
    }
  },
  {
    Icon: FiSettings,
    color: 'from-[#8B0B23] to-[#760920]',
    i18n: {
      tr: {
        title: 'Özelleştirme & Entegrasyon',
        desc: 'Mevcut sistemlerinize sorunsuz bağlanan API tabanlı entegrasyonlar.',
        bullets: ['ERP/Muhasebe', 'E‑ticaret & pazar yerleri', 'e‑Belge & lojistik']
      },
      en: {
        title: 'Customization & Integration',
        desc: 'API‑first integrations that plug into your current stack.',
        bullets: ['ERP/Accounting', 'E‑commerce & marketplaces', 'e‑Docs & logistics']
      },
      ru: {
        title: 'Кастомизация и интеграции',
        desc: 'API‑интеграции с вашей текущей системой без боли.',
        bullets: ['ERP/бухучёт', 'E‑commerce и маркетплейсы', 'Электронные документы и логистика']
      }
    }
  },
  {
    Icon: FiHeadphones,
    color: 'from-[#6BA5FF] to-[#3B6BFF]',
    i18n: {
      tr: {
        title: 'Proje Sonrası Destek',
        desc: 'SLA’lı bakım, versiyon güncelleme ve sürekli performans izleme.',
        bullets: ['7/24 izleme', 'Sürüm planı', 'Eğitim & dokümantasyon']
      },
      en: {
        title: 'Post‑Go‑Live Support',
        desc: 'SLA maintenance, release planning and continuous monitoring.',
        bullets: ['24/7 monitoring', 'Release roadmap', 'Training & docs']
      },
      ru: {
        title: 'Поддержка после запуска',
        desc: 'SLA‑сопровождение, план релизов и постоянный мониторинг.',
        bullets: ['Мониторинг 24/7', 'Дорожная карта релизов', 'Обучение и документация']
      }
    }
  },
  {
    Icon: FiSmartphone,
    color: 'from-[#00B894] to-[#0984E3]',
    i18n: {
      tr: {
        title: 'Mobil Uygulamalar',
        desc: 'iOS/Android için ERP süreçlerinizi cepten yönetin.',
        bullets: ['Sahadan anlık veri girişi', 'Mobil görev ve onay akışları', 'Müşteri ve ekip anında senkron']
      },
      en: {
        title: 'Mobile Apps',
        desc: 'Run your ERP processes on iOS/Android.',
        bullets: ['Real‑time field input', 'Mobile tasks & approvals', 'Instant sync with team & clients']
      },
      ru: {
        title: 'Мобильные приложения',
        desc: 'ERP‑процессы на iOS/Android.',
        bullets: ['Данные с поля в реальном времени', 'Мобильные задачи/согласования', 'Мгновенная синхронизация']
      }
    }
  },
  {
    Icon: FiBarChart2,
    color: 'from-[#FF8A00] to-[#FF2D55]',
    i18n: {
      tr: {
        title: 'Danışmanlık & Analitik',
        desc: 'Veri odaklı kararlar, raporlama ve gösterge panelleri.',
        bullets: ['Gerçek zamanlı performans takibi', 'Güncel raporlar']
      },
      en: {
        title: 'Advisory & Analytics',
        desc: 'Data‑driven decisions, reporting and dashboards.',
        bullets: ['Real‑time performance', 'Always‑fresh reports']
      },
      ru: {
        title: 'Консалтинг и аналитика',
        desc: 'Решения на основе данных, отчёты и дашборды.',
        bullets: ['Показатели в реальном времени', 'Актуальные отчёты']
      }
    }
  }
];

const COPY: Record<
  Locale,
  {
    heroKicker: string;
    heroTitleA: string;
    heroTitleB: string;
    heroSub: string;
    heroCta: string;
    allServices: string;
    allServicesSub: string;
    ctaKicker: string;
    ctaTitle: string;
    ctaSub: string;
    ctaBtn: string;
    faqTitle: string;
    faqs: { q: string; a: string }[];
  }
> = {
  tr: {
    heroKicker: 'Hizmetlerimiz',
    heroTitleA: 'İş Süreçlerinizi',
    heroTitleB: 'Akıllı Yazılımla',
    heroSub:
      'Modüler ERP, entegre çözümler ve butik danışmanlıkla işletmenizi çevik, ölçülebilir ve sürdürülebilir hale getiriyoruz.',
    heroCta: 'Hızlı Teklif Al',
    allServices: 'Tüm Hizmetlerimiz',
    allServicesSub: 'İhtiyaca göre şekillenen, birbirine bağlı akıllı çözümler.',
    ctaKicker: 'Başlayalım',
    ctaTitle: 'Origami ile Dijital Geleceğe Taşının',
    ctaSub: 'Süreçlerinizi sadeleştirin, görünürlüğü artırın ve büyümeyi hızlandırın.',
    ctaBtn: 'Hemen Görüşelim',
    faqTitle: 'Sıkça Sorulan Sorular',
    faqs: [
      {
        q: 'Origami ERP mevcut sistemlerimle uyumlu mu?',
        a: 'Evet. API’ler, webhooks ve hazır konektörlerle muhasebe, e‑ticaret, depo, CRM, üretim ve lojistik sistemleriyle sorunsuz çalışır.'
      },
      {
        q: 'Kurulum ve canlıya geçiş ne kadar sürer?',
        a: 'Şirketin ihtiyaçları doğrultusunda Keşif → Kurulum → Veri aktarımı → Eğitim → Canlı geçiş adımlarıyla ilerler.'
      },
      {
        q: 'Özelleştirme yapılıyor mu?',
        a: 'Evet. Modüler mimari sayesinde ekranlar, raporlar, iş akışları ve otomasyonlar süreçlerinize göre uyarlanır.'
      },
      {
        q: 'Destek modeli nasıl?',
        a: 'SLA kapsamında 7/24 izleme, sürüm planı, hata giderme ve eğitim/dokümantasyon desteği sunuyoruz.'
      }
    ]
  },
  en: {
    heroKicker: 'Our Services',
    heroTitleA: 'Accelerate Your',
    heroTitleB: 'Operations with Smart Software',
    heroSub:
      'With modular ERP, integrated solutions and boutique consulting, we make your business agile, measurable and sustainable.',
    heroCta: 'Get a Quick Quote',
    allServices: 'All Services',
    allServicesSub: 'Connected, intelligent solutions tailored to your needs.',
    ctaKicker: 'Let’s start',
    ctaTitle: 'Move to the Digital Future with Origami',
    ctaSub: 'Simplify processes, gain visibility and speed up growth.',
    ctaBtn: 'Talk Now',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Is Origami ERP compatible with my existing systems?',
        a: 'Yes. With APIs, webhooks and ready connectors it works seamlessly with accounting, e‑commerce, WMS, CRM, manufacturing and logistics.'
      },
      {
        q: 'How long does implementation take?',
        a: 'Based on company needs: Discovery → Setup → Data migration → Training → Go‑live.'
      },
      {
        q: 'Do you customize?',
        a: 'Yes. Modular architecture enables custom screens, reports, workflows and automations tailored to your processes.'
      },
      {
        q: 'What does support look like?',
        a: 'Under SLA: 24/7 monitoring, release planning, bug fixes and training/documentation.'
      }
    ]
  },
  ru: {
    heroKicker: 'Наши услуги',
    heroTitleA: 'Ускорьте процессы',
    heroTitleB: 'умным софтом',
    heroSub:
      'Модульная ERP, интегрированные решения и консалтинг делают бизнес гибким, измеримым и устойчивым.',
    heroCta: 'Быстрый расчёт',
    allServices: 'Все услуги',
    allServicesSub: 'Связанные интеллектуальные решения под ваши задачи.',
    ctaKicker: 'Начнём',
    ctaTitle: 'Вместе с Origami — в цифровое будущее',
    ctaSub: 'Упростите процессы, повысьте видимость и ускорьте рост.',
    ctaBtn: 'Обсудить сейчас',
    faqTitle: 'Часто задаваемые вопросы',
    faqs: [
      {
        q: 'Совместима ли Origami ERP с моими системами?',
        a: 'Да. Через API, webhooks и готовые коннекторы — с бухучётом, e‑commerce, складом, CRM, производством и логистикой.'
      },
      {
        q: 'Сколько длится внедрение?',
        a: 'В зависимости от нужд компании: Дискавери → Установка → Миграция данных → Обучение → Запуск.'
      },
      {
        q: 'Делаете кастомизацию?',
        a: 'Да. Модульная архитектура позволяет настраивать экраны, отчёты, процессы и автоматизации под ваши задачи.'
      },
      {
        q: 'Как устроена поддержка?',
        a: 'По SLA: мониторинг 24/7, план релизов, исправления и обучение/документация.'
      }
    ]
  }
};

export default function ServicesPage() {
  const [locale, setLocale] = useState<Locale>('tr');

  useEffect(() => {
    const read = () => setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read();
    const handler = () => read();
    window.addEventListener('locale-change', handler);
    return () => window.removeEventListener('locale-change', handler);
  }, []);

  const copy = COPY[locale];

  // Seçili dile göre hizmet metinlerini hazırla
  const localizedServices = useMemo(() => {
    return SERVICES.map(s => ({
      Icon: s.Icon,
      color: s.color,
      ...s.i18n[locale]
    }));
  }, [locale]);

  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="relative w-full h-[72vh] md:h-[76vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/hizmetbanner.png"
          alt="Hizmetlerimiz"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        <div className="relative text-center px-6 max-w-3xl">
          <p className="uppercase tracking-[0.35em] text-[#FFCFD6] text-[11px] font-semibold mb-2">
            {copy.heroKicker}
          </p>
          <h1 className="text-4xl lg:text-6xl font-extrabold font-serif leading-tight">
            {copy.heroTitleA}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB3BF] to-white">
              {copy.heroTitleB}
            </span>
          </h1>
          <p className="mt-4 text-white/90 text-base sm:text-lg">{copy.heroSub}</p>
          <div className="mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold bg-gradient-to-r from-[#C8102E] to-[#A00D26] shadow-lg shadow-red-900/20 hover:opacity-95 transition"
            >
              {copy.heroCta}
            </Link>
          </div>
        </div>
      </section>

      {/* HİZMET KARTLARI */}
      <section
        id="hizmetler"
        className="relative w-full py-20 bg-white
        before:content-[''] before:absolute before:inset-0
        before:bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(200,16,46,0.06),transparent)]
        before:pointer-events-none"
      >
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-serif font-extrabold text-[#0D152E]">
              {copy.allServices}
            </h2>
            <p className="mt-4 text-gray-600 text-lg">{copy.allServicesSub}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {localizedServices.map(({Icon, title, desc, bullets, color}, i) => (
              <div
                key={i}
                className="group relative rounded-3xl border border-gray-100/70 bg-white/80 backdrop-blur-sm p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl grid place-items-center bg-gradient-to-br ${color} text-white shadow-md`}>
                  <Icon className="text-2xl" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#0D152E] group-hover:text-[#C8102E] transition-colors">
                  {title}
                </h3>
                <p className="mt-2.5 text-gray-600 text-sm leading-relaxed">{desc}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
                  {bullets.map((b, k) => (
                    <li key={k} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C8102E]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#C8102E]/5 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden">
        <Image
          src="/bannerr2.png"
          alt="cta"
          width={1920}
          height={720}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="max-w-7xl mx-auto px-8 py-20 relative z-10 text-center text-white">
          <div className="uppercase tracking-[0.3em] text-white/70 text-xs">{copy.ctaKicker}</div>
          <h3 className="mt-2 text-3xl lg:text-5xl font-serif font-extrabold">{copy.ctaTitle}</h3>
          <p className="mt-4 text-white/85 max-w-3xl mx-auto">{copy.ctaSub}</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl px-8 py-4 font-bold bg-white text-[#0D152E] hover:bg-white/90 transition"
          >
            {copy.ctaBtn}
          </Link>
        </div>
      </section>

      {/* SSS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-10">
            <p className="text-[#0D152E] text-4xl lg:text-5xl font-serif font-extrabold tracking-wide drop-shadow-sm">
              {copy.faqTitle}
            </p>
          </div>
          <div className="space-y-4">
            {copy.faqs.map((f, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-semibold text-[#0D152E]">{f.q}</span>
                  <i className={`ri-add-line transition-transform ${open === i ? 'rotate-45' : ''}`} />
                </button>
                {open === i && <div className="px-6 pb-6 -mt-2 text-gray-600 leading-relaxed">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
