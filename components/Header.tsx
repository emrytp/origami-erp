'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="w-full px-8 py-5">
        <div className="w-full flex items-center justify-start px-0">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center cursor-pointer">
              <Image
                src="/origami.png"
                alt="Origami Logo"
                width={64}
                height={64}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Menü */}
          <div className="hidden lg:flex items-center space-x-10 mx-auto">
            <Link href="/" className="text-[#0D152E] hover:text-[#C8102E] text-sm font-semibold uppercase tracking-wider transition">
              Anasayfa
            </Link>
            <Link href="/about" className="text-[#0D152E] hover:text-[#C8102E] text-sm font-semibold uppercase tracking-wider transition">
              Hakkımızda
            </Link>

            {/* Zarif DropDown */}
            <div className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer text-[#0D152E] hover:text-[#C8102E] text-sm font-semibold uppercase tracking-wider transition">
                <span>Hizmetlerimiz</span>
                <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180 mt-[2px]" size={14} />
              </div>
              <div className="absolute left-0 mt-3 w-48 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 scale-95 group-hover:scale-100 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50 origin-top">
                <Link
                  href="/products"
                  className="block px-5 py-3 text-sm text-[#0D152E] hover:text-[#C8102E] hover:bg-gray-50 font-semibold rounded-b-lg transition"
                >
                  Ürünlerimiz
                </Link>
              </div>
            </div>

            <Link href="/integrations" className="text-[#0D152E] hover:text-[#C8102E] text-sm font-semibold uppercase tracking-wider transition">
              Entegrasyonlarımız
            </Link>
            <Link href="/references" className="text-[#0D152E] hover:text-[#C8102E] text-sm font-semibold uppercase tracking-wider transition">
              Referanslarımız
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="bg-[#C8102E] hover:bg-[#A00D26] text-white px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                İletişim
              </button>
            </Link>
          </div>

          {/* Mobil Menü Butonu */}
          <button 
            className="lg:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-5 h-0.5 bg-[#0D152E] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-[#0D152E] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-[#0D152E] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>

        {/* Mobil Menü */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-6 pb-4 border-t border-gray-100 mt-4">
            <div className="flex flex-col space-y-5">
              <Link href="/" className="text-[#0D152E] hover:text-[#C8102E] text-sm font-semibold uppercase tracking-wider transition">
                Anasayfa
              </Link>
              <Link href="/about" className="text-[#0D152E] hover:text-[#C8102E] text-sm font-semibold uppercase tracking-wider transition">
                Hakkımızda
              </Link>
              <Link href="/services" className="text-[#0D152E] hover:text-[#C8102E] text-sm font-semibold uppercase tracking-wider transition">
                Hizmetlerimiz
              </Link>
              <Link href="/products" className="pl-4 text-[#0D152E] hover:text-[#C8102E] text-sm font-semibold tracking-wider transition">
                • Ürünlerimiz
              </Link>
              <Link href="/integrations" className="text-[#0D152E] hover:text-[#C8102E] text-sm font-semibold uppercase tracking-wider transition">
                Entegrasyonlarımız
              </Link>
              <Link href="/references" className="text-[#0D152E] hover:text-[#C8102E] text-sm font-semibold uppercase tracking-wider transition">
                Referanslarımız
              </Link>
              <Link href="/contact">
                <button className="bg-[#C8102E] hover:bg-[#A00D26] text-white px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer mt-6 w-fit rounded-lg">
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
