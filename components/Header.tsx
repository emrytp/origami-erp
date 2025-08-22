'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiChevronDown } from 'react-icons/fi';

type Locale = 'tr' | 'en' | 'ru';

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

const FLAGS: Record<Locale, { src: string; alt: string }> = {
  tr: { src: '/flags/turkey.png', alt: 'Türkçe' },
  en: { src: '/flags/united-kingdom.png', alt: 'English' },
  ru: { src: '/flags/russia.png', alt: 'Русский' },
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>('tr');
  const pathname = usePathname();
  const langRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target as Node)) setIsLangOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLangOpen(false);
    };
    window.addEventListener('click', onClick);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('click', onClick);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    setIsLangOpen(false);
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const c = (getCookie('NEXT_LOCALE') as Locale) || 'tr';
    setLocale(c);
  }, []);

  const changeLang = (code: Locale) => {
    setLocale(code);
    document.cookie = `NEXT_LOCALE=${code}; Path=/; Max-Age=31536000; SameSite=Lax`;
    window.dispatchEvent(new Event('locale-change'));
  };

  const navItem =
    'relative text-[14px] lg:text-[15px] font-medium tracking-wide uppercase transition-all duration-300 pb-1.5 ' +
    'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] ' +
    'after:bg-[#C8102E]/80 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100';

  const baseColor = 'text-[#0D152E]/90 hover:text-[#C8102E]';
  const activeColor = 'text-[#C8102E] after:scale-x-100 after:bg-[#C8102E]';

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')
      ? `${navItem} ${activeColor}`
      : `${navItem} ${baseColor}`;

  const texts = {
    tr: {
      home: 'Anasayfa',
      about: 'Hakkımızda',
      products: 'Ürünler',
      services: 'Hizmetler',
      integrations: 'Entegrasyonlar',
      references: 'Referanslar',
      contact: 'İletişim',
    },
    en: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      services: 'Services',
      integrations: 'Integrations',
      references: 'References',
      contact: 'Contact',
    },
    ru: {
      home: 'Главная',
      about: 'О нас',
      products: 'Продукты',
      services: 'Услуги',
      integrations: 'Интеграции',
      references: 'Референсы',
      contact: 'Контакт',
    },
  }[locale];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/70 shadow-sm">
      <nav className="w-full px-8 py-3" aria-label="Main">
        <div className="w-full flex items-center justify-start px-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center cursor-pointer">
              <Image
                src="/origami.png"
                alt="Origami Logo"
                width={256}
                height={256}
                className="w-auto h-11 sm:h-12 lg:h-[52px]"
                sizes="(max-width: 640px) 44px, (max-width: 1024px) 48px, 52px"
                priority
              />
            </Link>
          </div>

          {/* Menü */}
          <div className="hidden lg:flex items-center space-x-7 mx-auto">
            <Link href="/" className={isActive('/')}>{texts.home}</Link>
            <Link href="/about" className={isActive('/about')}>{texts.about}</Link>
            <Link href="/urunler" className={isActive('/urunler')}>{texts.products}</Link>
            <Link href="/services" className={isActive('/services')}>{texts.services}</Link>
            <Link href="/integrations" className={isActive('/integrations')}>{texts.integrations}</Link>
            <Link href="/references" className={isActive('/references')}>{texts.references}</Link>
          </div>

          {/* Sağ: İletişim + Dil */}
          <div className="hidden lg:flex items-center gap-1.5 relative" ref={langRef}>
            <Link
              href="/contact"
              className="bg-[#C8102E] hover:bg-[#A00D26] text-white px-6 py-2.5 text-[13px] font-semibold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer rounded-md shadow-sm hover:shadow-md uppercase"
            >
              {texts.contact}
            </Link>

            {/* sadece bayrak + ok */}
            <button
              aria-haspopup="menu"
              aria-expanded={isLangOpen}
              aria-label="Dil seç"
              onClick={(e) => {
                e.stopPropagation();
                setIsLangOpen((p) => !p);
              }}
              className="pl-2 pr-1 py-1 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-1.5"
            >
              <Image
                src={FLAGS[locale].src}
                alt={FLAGS[locale].alt}
                width={28}
                height={20}
                className="rounded-[2px] ring-1 ring-gray-200"
              />
              <FiChevronDown
                className={`w-5 h-5 text-[#0D152E]/90 hover:text-[#C8102E] transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isLangOpen && (
              <div
                role="menu"
                className="absolute right-0 top-[110%] w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2 flex flex-col space-y-1"
              >
                <button onClick={() => changeLang('tr')} className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100">
                  <Image src="/flags/turkey.png" alt="Türkçe" width={28} height={20} className="rounded-[2px] ring-1 ring-gray-200" />
                  Türkçe
                </button>
                <button onClick={() => changeLang('en')} className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100">
                  <Image src="/flags/united-kingdom.png" alt="English" width={28} height={20} className="rounded-[2px] ring-1 ring-gray-200" />
                  English
                </button>
                <button onClick={() => changeLang('ru')} className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100">
                  <Image src="/flags/russia.png" alt="Русский" width={28} height={20} className="rounded-[2px] ring-1 ring-gray-200" />
                  Русский
                </button>
              </div>
            )}
          </div>

          {/* Mobil Menü Butonu */}
          <button
            className="lg:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            <div className={`w-6 h-0.5 bg-[#0D152E] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-[#0D152E] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-[#0D152E] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobil Menü */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 pb-3 border-t border-gray-100 mt-3">
            <div className="flex flex-col space-y-4">
              <Link href="/" className={isActive('/')}>{texts.home}</Link>
              <Link href="/about" className={isActive('/about')}>{texts.about}</Link>
              <Link href="/urunler" className={isActive('/urunler')}>{texts.products}</Link>
              <Link href="/services" className={isActive('/services')}>{texts.services}</Link>
              <Link href="/integrations" className={isActive('/integrations')}>{texts.integrations}</Link>
              <Link href="/references" className={isActive('/references')}>{texts.references}</Link>

              <Link href="/contact">
                <button className="bg-[#C8102E] hover:bg-[#A00D26] text-white px-8 py-2.5 text-[13px] font-semibold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer mt-4 w-fit rounded-md uppercase">
                  {texts.contact}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
