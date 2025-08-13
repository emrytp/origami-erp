'use client'; 

import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D152E] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Marka */}
        <div>
          <Link href="/" className="flex items-center space-x-3 mb-6">
            <img src="/origami.png" alt="Origami Logo" className="w-15 h-12" />
          </Link>
          <p className="text-gray-300 text-sm leading-relaxed">
            Origami Yazılım olarak, işletmelerin dijital dönüşümünü hızlandıran modern ERP çözümleri sunuyoruz.
          </p>
        </div>

        {/* Ürünler */}
        <div>
          <h3 className="text-lg font-bold mb-4">Ürünler</h3>
          <ul className="space-y-2">
            <li><Link href="/products" className="hover:underline">ERP Modülleri</Link></li>
            <li><Link href="/products" className="hover:underline">Entegrasyonlar</Link></li>
            <li><Link href="/products" className="hover:underline">Endüstri Çözümleri</Link></li>
            <li><Link href="/products" className="hover:underline">Mobil Uygulamalar</Link></li>
          </ul>
        </div>

        {/* Çözümler */}
        <div>
          <h3 className="text-lg font-bold mb-4">Çözümler</h3>
          <ul className="space-y-2">
            <li><Link href="/solutions" className="hover:underline">Üretim</Link></li>
            <li><Link href="/solutions" className="hover:underline">Perakende & E-Ticaret</Link></li>
            <li><Link href="/solutions" className="hover:underline">İnşaat</Link></li>
            <li><Link href="/solutions" className="hover:underline">Savunma Sanayi</Link></li>
          </ul>
        </div>

        {/* İletişim + Sosyal Medya */}
        <div>
          <h3 className="text-lg font-bold mb-4">İletişim</h3>
          <ul className="space-y-2 text-sm text-gray-300 mb-4">
            <li>📍 Armada İş Merkezi Dumlupınar Bulvarı 6A/14 Beştepe, Ankara 06560</li>
            <li>📞 +90 312 000 00 00</li>
            <li>✉️ origami@origamierp.com</li>
          </ul>

          <h3 className="text-lg font-bold mb-4">Sosyal Medya</h3>
          <div className="flex space-x-4">
            <Link
              href="https://www.instagram.com/origami_yazilim/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="border-t border-gray-700 text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Origami Yazılım. Tüm Hakları Saklıdır. |{' '}
        <Link href="/kvkk" className="hover:underline">
          KVKK Aydınlatma Metni
        </Link>
      </div>
    </footer>
  );
}
