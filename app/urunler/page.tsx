'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useMemo, useState} from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Locale = 'tr' | 'en' | 'ru';

export type Product = {
  id: string;
  slug: string;
  category: 'ERP' | 'Mobil' | 'Entegrasyon';
  image: string;
  badge?: string;
  i18n: Record<
    Locale,
    {
      title: string;
      summary: string;
      features: string[];
    }
  >;
};

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

const TEXTS: Record<
  Locale,
  {
    heroKicker: string;
    heroTitle: string;
    heroSubtitle: string;
    demoBtn: string;
    trust: {
      sec1Title: string;
      sec1Desc: string;
      sec2Title: string;
      sec2Desc: string;
      sec3Title: string;
      sec3Desc: string;
    };
    categoryLabel: Record<Product['category'], string>;
  }
> = {
  tr: {
    heroKicker: 'Ürün Kataloğu',
    heroTitle: 'Güçlü. Esnek. Entegre.',
    heroSubtitle:
      'Origami Yazılım ürün ailesi: ERP çekirdeği, mobil uygulamalar ve kurumunuza özel entegrasyon çözümleri. Tümü aynı mimaride, aynı kalite çizgisinde.',
    demoBtn: 'Demo Al',
    trust: {
      sec1Title: 'Kurumsal Güvenlik',
      sec1Desc: 'ISO uyumluluğu, rollere göre erişim ve denetim kayıtları.',
      sec2Title: 'Ölçeklenebilir Mimari',
      sec2Desc: 'Bulut/On‑prem dağıtım, yüksek erişilebilirlik.',
      sec3Title: 'Sınırsız Entegrasyon',
      sec3Desc: 'API, webhook ve hazır konektör ekosistemi.'
    },
    categoryLabel: {ERP: 'ERP', Mobil: 'Mobil', Entegrasyon: 'Entegrasyon'}
  },
  en: {
    heroKicker: 'Product Catalog',
    heroTitle: 'Powerful. Flexible. Integrated.',
    heroSubtitle:
      'Origami suite: ERP core, mobile apps and tailor‑made integrations — one architecture, one quality bar.',
    demoBtn: 'Request Demo',
    trust: {
      sec1Title: 'Enterprise Security',
      sec1Desc: 'ISO compliance, role‑based access and audit logs.',
      sec2Title: 'Scalable Architecture',
      sec2Desc: 'Cloud/On‑prem deployments, high availability.',
      sec3Title: 'Unlimited Integrations',
      sec3Desc: 'APIs, webhooks and ready connectors.'
    },
    categoryLabel: {ERP: 'ERP', Mobil: 'Mobile', Entegrasyon: 'Integration'}
  },
  ru: {
    heroKicker: 'Каталог продуктов',
    heroTitle: 'Мощно. Гибко. Интегрировано.',
    heroSubtitle:
      'Линейка Оригами: ERP‑ядро, мобильные приложения и кастомные интеграции — единая архитектура и качество.',
    demoBtn: 'Запросить демо',
    trust: {
      sec1Title: 'Корпоративная безопасность',
      sec1Desc: 'Соответствие ISO, доступ по ролям и журналы аудита.',
      sec2Title: 'Масштабируемая архитектура',
      sec2Desc: 'Облако/On‑prem, высокая доступность.',
      sec3Title: 'Неограниченные интеграции',
      sec3Desc: 'API, вебхуки и готовые коннекторы.'
    },
    categoryLabel: {ERP: 'ERP', Mobil: 'Мобильные', Entegrasyon: 'Интеграции'}
  }
};

const PRODUCTS: Product[] = [
  {
    id: 'mobile',
    slug: '/contact',
    category: 'Mobil',
    image: '/mobilerp.png',
    badge: 'Saha için',
    i18n: {
      tr: {
        title: 'Origami Yazılım Mobil',
        summary:
          'Saha ekipleri ve yöneticiler için iOS/Android uygulaması. Anlık bildirim, çevrimdışı çalışma, hızlı onay akışları.',
        features: ['iOS & Android', 'Çevrimdışı senkron', 'Push bildirimler', 'Onay & Görev akışları']
      },
      en: {
        title: 'Origami Mobile',
        summary:
          'iOS/Android app for field teams & managers. Push notifications, offline mode, fast approval flows.',
        features: ['iOS & Android', 'Offline sync', 'Push notifications', 'Approvals & Tasks']
      },
      ru: {
        title: 'Оригами Мобильный',
        summary:
          'Приложение iOS/Android для полевых команд и менеджмента. Push‑уведомления, офлайн, быстрые согласования.',
        features: ['iOS & Android', 'Офлайн‑синхронизация', 'Push‑уведомления', 'Согласования и задачи']
      }
    }
  },
  {
    id: 'erp',
    slug: '/contact',
    category: 'ERP',
    image: '/hero.png',
    badge: 'Origami ERP',
    i18n: {
      tr: {
        title: 'Origami ERP',
        summary:
          'Modüler mimari, güçlü raporlama ve sınırsız entegrasyon. Büyüyen ekipler için esnek kurumsal altyapı.',
        features: [
          'Modül tabanlı yapı',
          'Gerçek zamanlı raporlama',
          'Rol/Yetki yönetimi',
          'API & Webhook',
          'Web Tabanlı',
          'İşletim Sisteminden Bağımsız'
        ]
      },
      en: {
        title: 'Origami ERP',
        summary:
          'Modular core, powerful reporting and limitless integrations. Flexible enterprise stack for growing teams.',
        features: [
          'Modular design',
          'Real‑time reporting',
          'RBAC',
          'API & Webhook',
          'Web‑based',
          'OS‑agnostic'
        ]
      },
      ru: {
        title: 'Оригами ERP',
        summary:
          'Модульная архитектура, мощная отчётность и безлимитные интеграции. Гибкая платформа для растущих команд.',
        features: ['Модульная структура', 'Отчётность в реальном времени', 'RBAC', 'API и вебхуки', 'Web', 'OS‑agnostic']
      }
    }
  },
  {
    id: 'uao',
    slug: '/contact',
    category: 'Mobil',
    image: '/aik.png',
    badge: 'Özel proje',
    i18n: {
      tr: {
        title: 'UAO Mobil Uygulaması',
        summary:
          'United Aikido Organisation için özelleştirilmiş mobil yönetim uygulaması. ERP entegrasyonlu üyelik & etkinlik yönetimi.',
        features: ['Üyelik yönetimi', 'Etkinlik & ders planı', 'ERP entegrasyonu', 'Rol bazlı erişim']
      },
      en: {
        title: 'UAO Mobile App',
        summary:
          'Custom mobile management for United Aikido Organisation. Membership & events with ERP integration.',
        features: ['Membership', 'Events & class schedule', 'ERP integration', 'Role‑based access']
      },
      ru: {
        title: 'UAO Мобильный',
        summary:
          'Кастомное мобильное управление для United Aikido Organisation. Членство и события с ERP‑интеграцией.',
        features: ['Членство', 'События и расписание', 'ERP‑интеграция', 'Доступ по ролям']
      }
    }
  }
];

export default function ProductsPage() {
  const [locale, setLocale] = useState<Locale>('tr');

  useEffect(() => {
    const read = () => setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read();
    const handler = () => read();
    window.addEventListener('locale-change', handler);
    return () => window.removeEventListener('locale-change', handler);
  }, []);

  const t = TEXTS[locale];

  const localizedProducts = useMemo(() => {
    return PRODUCTS.map((p) => {
      const li = p.i18n[locale];
      return {
        ...p,
        title: li.title,
        summary: li.summary,
        features: li.features,
        categoryLabel: t.categoryLabel[p.category]
      };
    });
  }, [locale, t]);

  return (
    <main className="min-h-screen w-full bg-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <Image
          src="/urunlerheroo.png"
          alt={t.heroKicker}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 sm:pt-44">
          <div className="flex flex-col items-center text-center text-white">
            <span className="rounded-full border border-white/30 px-4 py-1.5 text-sm font-medium tracking-wide">
              {t.heroKicker}
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-lg sm:text-xl text-balance">{t.heroSubtitle}</p>
          </div>
        </div>
      </section>

      {/* ÜRÜN KARTLARI */}
      <section className="mx-auto max-w-7xl px-6 pb-12 mt-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 items-stretch">
          {localizedProducts.map((p, i) => {
            // Yalnızca XL (3 kolon) düzeninde soldaki ve en sağdakini yer değiştir.
            const orderClass =
              i === 0 ? 'xl:order-3' : i === 1 ? 'xl:order-2' : i === 2 ? 'xl:order-1' : '';

            return (
              <article
                key={p.id}
                className={`group relative flex flex-col h-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${orderClass}`}
              >
                {/* Görsel */}
                <div className="relative">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      priority={p.id === 'erp'}
                    />
                  </div>
                  {p.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-rose-600/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow">
                      {p.badge}
                    </span>
                  )}
                </div>

                {/* İçerik + Buton */}
                <div className="flex-1 flex flex-col justify-between p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600">
                        {p.categoryLabel}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      <Link href={p.slug} className="after:absolute after:inset-0">
                        {p.title}
                      </Link>
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600">{p.summary}</p>

                    <ul className="mt-1 grid grid-cols-1 gap-2 text-sm text-slate-700">
                      {p.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="mt-[2px] h-4 w-4 flex-none"
                            aria-hidden="true"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                    >
                      {t.demoBtn}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Güven şeridi */}
      <section className="border-y border-slate-100 bg-slate-50/60">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6 text-center bg-gradient-to-br from-rose-50 to-white hover:from-rose-100 hover:to-white transition shadow-sm hover:shadow-md">
            <div className="flex justify-center mb-3 text-rose-600 text-3xl">
              <i className="ri-shield-check-line" aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold text-slate-900">{t.trust.sec1Title}</p>
            <p className="mt-1 text-sm text-slate-600">{t.trust.sec1Desc}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 text-center bg-gradient-to-br from-blue-50 to-white hover:from-blue-100 hover:to-white transition shadow-sm hover:shadow-md">
            <div className="flex justify-center mb-3 text-blue-600 text-3xl">
              <i className="ri-server-line" aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold text-slate-900">{t.trust.sec2Title}</p>
            <p className="mt-1 text-sm text-slate-600">{t.trust.sec2Desc}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 text-center bg-gradient-to-br from-green-50 to-white hover:from-green-100 hover:to-white transition shadow-sm hover:shadow-md">
            <div className="flex justify-center mb-3 text-green-600 text-3xl">
              <i className="ri-plug-line" aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold text-slate-900">{t.trust.sec3Title}</p>
            <p className="mt-1 text-sm text-slate-600">{t.trust.sec3Desc}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
