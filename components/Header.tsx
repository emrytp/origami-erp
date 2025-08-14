'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItem =
    'relative text-sm font-semibold uppercase tracking-wider transition-all duration-300 pb-1 after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#C8102E] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100';
  const baseColor = 'text-[#0D152E] hover:text-[#C8102E]';
  const activeColor =
    'text-[#C8102E] after:scale-x-100 after:origin-center after:bg-[#C8102E]';

  const isActive = (href: string) =>
    pathname === href ? `${navItem} ${activeColor}` : `${navItem} ${baseColor}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="w-full px-8 py-4">
        <div className="w-full flex items-center justify-start px-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center cursor-pointer" aria-label="Anasayfa">
              <Image
                src="/origami.png"
                alt="Origami Logo"
                width={68}
                height={68}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Menü */}
          <div className="hidden lg:flex items-center space-x-6 mx-auto">
            <Link href="/" className={isActive('/')}>
              Anasayfa
            </Link>
            <Link href="/about" className={isActive('/about')}>
              Hakkımızda
            </Link>
            <Link href="/urunler" className={isActive('/urunler')}>
              Ürünler
            </Link>
            <Link href="/services" className={isActive('/services')}>
              Hizmetlerimiz
            </Link>
            <Link href="/integrations" className={isActive('/integrations')}>
              Entegrasyonlarımız
            </Link>
            <Link href="/references" className={isActive('/references')}>
              Referanslarımız
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-[#C8102E] hover:bg-[#A00D26] text-white px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              İletişim
            </Link>
          </div>

          {/* Mobil Menü Butonu */}
          <button
            className="lg:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            <div
              className={`w-6 h-0.5 bg-[#0D152E] transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-[#0D152E] transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-[#0D152E] transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobil Menü */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-5 pb-4 border-t border-gray-100 mt-4">
            <div className="flex flex-col space-y-5">
              <Link href="/" className={isActive('/')}>
                Anasayfa
              </Link>
              <Link href="/about" className={isActive('/about')}>
                Hakkımızda
              </Link>
              <Link href="/urunler" className={isActive('/urunler')}>
                Ürünler
              </Link>
              <Link href="/services" className={isActive('/services')}>
                Hizmetlerimiz
              </Link>
              <Link href="/integrations" className={isActive('/integrations')}>
                Entegrasyonlarımız
              </Link>
              <Link href="/references" className={isActive('/references')}>
                Referanslarımız
              </Link>

              <Link href="/contact">
                <button className="bg-[#C8102E] hover:bg-[#A00D26] text-white px-10 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer mt-6 w-fit rounded-lg">
                  İletişim
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
