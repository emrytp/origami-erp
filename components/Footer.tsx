'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D152E] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Marka */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/origami.png"
                  alt="Origami Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold">Origami ERP</span>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6">
              İşletmenizin ritmine uyum sağlayan ve hedeflerinizle büyüyen akıllı kurumsal yazılım.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#C8102E] rounded-xl flex items-center justify-center transition-colors duration-300 cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#C8102E] rounded-xl flex items-center justify-center transition-colors duration-300 cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#C8102E] rounded-xl flex items-center justify-center transition-colors duration-300 cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Çözümler */}
          <div>
            <h4 className="text-lg font-bold mb-6">Çözümler</h4>
            <ul className="space-y-4">
              <li><Link href="/manufacturing" className="text-gray-300 hover:text-white">Üretim</Link></li>
              <li><Link href="/retail" className="text-gray-300 hover:text-white">Perakende & E-Ticaret</Link></li>
              <li><Link href="/construction" className="text-gray-300 hover:text-white">İnşaat</Link></li>
              <li><Link href="/education" className="text-gray-300 hover:text-white">Eğitim</Link></li>
            </ul>
          </div>

          {/* Ürün */}
          <div>
            <h4 className="text-lg font-bold mb-6">Ürün</h4>
            <ul className="space-y-4">
              <li><Link href="/features" className="text-gray-300 hover:text-white">Özellikler</Link></li>
              <li><Link href="/integrations" className="text-gray-300 hover:text-white">Entegrasyonlar</Link></li>
              <li><Link href="/security" className="text-gray-300 hover:text-white">Güvenlik</Link></li>
              <li><Link href="/api" className="text-gray-300 hover:text-white">API Dökümanları</Link></li>
            </ul>
          </div>

          {/* Destek */}
          <div>
            <h4 className="text-lg font-bold mb-6">Destek</h4>
            <ul className="space-y-4">
              <li><Link href="/support" className="text-gray-300 hover:text-white">Yardım Merkezi</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">İletişim</Link></li>
              <li><Link href="/training" className="text-gray-300 hover:text-white">Eğitim & Kaynaklar</Link></li>
              <li><Link href="/status" className="text-gray-300 hover:text-white">Sistem Durumu</Link></li>
            </ul>
          </div>
        </div>

        {/* Alt Çubuk */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2025 Origami ERP. Tüm hakları saklıdır.
            </div>
            <div className="flex space-x-8">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm">Gizlilik Politikası</Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm">Kullanım Şartları</Link>
              <Link href="/kvkk" className="text-gray-300 hover:text-white text-sm">KVKK</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
