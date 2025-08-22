'use client';

import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';

type Locale = 'tr' | 'en' | 'ru';
function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

const TEXTS: Record<Locale, any> = {
  tr: {
    about:
      'Origami Yazılım olarak, işletmelerin dijital dönüşümünü hızlandıran modern ERP çözümleri sunuyoruz.',
    products: 'Ürünler',
    modules: 'ERP Modülleri',
    integrations: 'Entegrasyonlar',
    services: 'Hizmetlerimiz',
    solutions: 'Çözümler',
    industries: {
      manufacturing: 'Üretim',
      retail: 'Perakende & E-Ticaret',
      construction: 'İnşaat',
      defense: 'Savunma Sanayi',
    },
    contact: 'İletişim',
    address:
      '📍 Armada İş Merkezi Dumlupınar Bulvarı 6A/14 Beştepe, Ankara 06560',
    phone: '📞 +90 (312) 222 23 20',
    mail: '✉️ origami@origamierp.com',
    social: 'Sosyal Medya',
    rights: 'Tüm Hakları Saklıdır.',
    kvkk: 'KVKK Aydınlatma Metni',
  },
  en: {
    about:
      'At Origami Software, we provide modern ERP solutions accelerating digital transformation.',
    products: 'Products',
    modules: 'ERP Modules',
    integrations: 'Integrations',
    services: 'Our Services',
    solutions: 'Solutions',
    industries: {
      manufacturing: 'Manufacturing',
      retail: 'Retail & E-Commerce',
      construction: 'Construction',
      defense: 'Defense Industry',
    },
    contact: 'Contact',
    address: '📍 Armada Business Center, Beştepe, Ankara 06560',
    phone: '📞 +90 (312) 222 23 20',
    mail: '✉️ origami@origamierp.com',
    social: 'Social Media',
    rights: 'All Rights Reserved.',
    kvkk: 'Privacy Notice',
  },
  ru: {
    about:
      'Origami Software предлагает современные ERP-решения, ускоряющие цифровую трансформацию бизнеса.',
    products: 'Продукты',
    modules: 'ERP-модули',
    integrations: 'Интеграции',
    services: 'Наши услуги',
    solutions: 'Решения',
    industries: {
      manufacturing: 'Производство',
      retail: 'Розница и e-commerce',
      construction: 'Строительство',
      defense: 'Оборонная промышленность',
    },
    contact: 'Контакты',
    address:
      '📍 Armada Business Center Dumlupınar Bulvarı 6A/14 Beştepe, Анкара',
    phone: '📞 +90 (312) 222 23 20',
    mail: '✉️ origami@origamierp.com',
    social: 'Соцсети',
    rights: 'Все права защищены.',
    kvkk: 'Уведомление о конфиденциальности',
  },
};

export default function Footer() {
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
    <footer className="w-full bg-[#0D152E] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Marka */}
        <div>
          <Link href="/" className="flex items-center space-x-3 mb-4">
            <img src="/beyazorigami.png" alt="Origami Logo" className="w-15 h-12" />
          </Link>
          <p className="text-gray-300 text-sm leading-relaxed">{t.about}</p>
        </div>

        {/* Ürünler */}
        <div>
          <h3 className="text-lg font-bold mb-3">{t.products}</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about#product-modules" className="hover:underline">{t.modules}</Link></li>
            <li><Link href="/integrations" className="hover:underline">{t.integrations}</Link></li>
            <li><Link href="/services" className="hover:underline">{t.services}</Link></li>
          </ul>
        </div>

        {/* Çözümler */}
        <div>
          <h3 className="text-lg font-bold mb-3">{t.solutions}</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/?industry=manufacturing" className="hover:underline">{t.industries.manufacturing}</Link></li>
            <li><Link href="/?industry=retail" className="hover:underline">{t.industries.retail}</Link></li>
            <li><Link href="/?industry=construction" className="hover:underline">{t.industries.construction}</Link></li>
            <li><Link href="/?industry=defense" className="hover:underline">{t.industries.defense}</Link></li>
          </ul>
        </div>

        {/* İletişim + Sosyal Medya */}
        <div>
          <h3 className="text-lg font-bold mb-3">{t.contact}</h3>
          <ul className="space-y-1 text-sm text-gray-300 mb-3">
            <li>{t.address}</li>
            <li>{t.phone}</li>
            <li>{t.mail}</li>
          </ul>

          <h3 className="text-lg font-bold mb-3">{t.social}</h3>
          <div className="flex space-x-3">
            <Link
              href="https://www.instagram.com/origami_yazilim/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-400">
        © {new Date().getFullYear()} Origami Yazılım. {t.rights} |{' '}
        <Link href="/kvkk" className="hover:underline">
          {t.kvkk}
        </Link>
      </div>
    </footer>
  );
}
