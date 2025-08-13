'use client';

import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="relative w-full h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/team.jpg"
          alt="Origami Yazılım Ekibi"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/40" />

        <div className="relative text-center px-6 max-w-3xl">
          <p className="uppercase tracking-[0.35em] text-[#FFCFD6] text-[11px] font-semibold mb-3">
            Hakkımızda
          </p>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight font-serif">
            Dijital Dönüşümde{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8102E] to-[#A00D26]">
              Güvenilir Ortağınız
            </span>
          </h1>
          <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed">
            Origami Yazılım; ölçeklenebilir ERP çözümleriyle süreçlerinizi sadeleştirir, verimliliği artırır ve
            büyümenize hız katar. Teknolojiyi iş hedeflerinize hizalayarak uzun vadeli değer üretiriz.
          </p>
          <div className="mt-7 flex items-center justify-center gap-3 sm:gap-4">
            <Link
              href="#demo"
              className="inline-flex items-center rounded-xl px-5 py-3 text-sm sm:text-base font-semibold bg-gradient-to-r from-[#C8102E] to-[#A00D26] hover:opacity-95 active:opacity-90 shadow-lg shadow-red-900/20 transition"
            >
              Demo Talep Et
            </Link>
            <Link
              href="#moduller"
              className="inline-flex items-center rounded-xl px-5 py-3 text-sm sm:text-base font-semibold border border-white/25 hover:border-white/45 bg-white/5 hover:bg-white/10 transition backdrop-blur-[2px]"
            >
              Modülleri Gör
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest">
          AŞAĞI KAYDIR
          <div className="mx-auto mt-1 h-6 w-px bg-white/50 animate-pulse" />
        </div>
      </section>

      {/* HİKAYEMİZ */}
      <section
        className="w-full relative bg-gradient-to-b from-gray-50 to-white
                   before:content-[''] before:absolute before:inset-0
                   before:bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(200,16,46,0.06),transparent)]
                   before:pointer-events-none"
      >
        <div className="max-w-3xl mx-auto px-8 py-16 lg:py-20 text-center">
          <h2 className="relative inline-block text-3xl lg:text-4xl font-serif font-bold text-[#0D152E] tracking-wide">
            Hikayemiz
            <span className="absolute left-1/2 -bottom-2 w-16 h-[3px] bg-gradient-to-r from-[#C8102E] to-[#FFB3BF] -translate-x-1/2 rounded-full" />
          </h2>
          <p className="mt-8 text-gray-700 leading-loose text-lg font-light">
            Kurulduğumuz günden bu yana odağımız net: işletmelerin karmaşık iş süreçlerini yalın, anlaşılır ve
            ölçülebilir hale getirmek. Modüler mimari, hızlı kurulum ve sektör uyumlu paketlerle ekiplerin günlük
            işlerini kolaylaştırıyoruz.
          </p>
          <p className="mt-5 text-gray-700 leading-loose text-lg font-light">
            Gerçek zamanlı raporlama ve kullanıcı dostu arayüzlerle karar alma hızını artırıyor; uzun vadeli
            sürdürülebilirlik için sağlam bir veri omurgası kuruyoruz.
          </p>
        </div>
      </section>

      {/* MİSYON & VİZYON */}
      <section className="relative w-full py-16 lg:py-20 overflow-hidden bg-[#0D152E]">
        <div className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#C8102E] opacity-20 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 -right-32 h-[360px] w-[360px] rounded-full bg-[#3B4A87] opacity-30 blur-[120px]" />
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[6px] text-[#FFCFD6] text-sm font-semibold font-serif">
              Kurum Felsefemiz
            </p>
            <h3 className="mt-3 text-4xl lg:text-5xl font-extrabold text-white relative inline-block font-serif">
              Misyon & Vizyon
              <span className="block w-24 h-[3px] bg-gradient-to-r from-[#C8102E] to-[#FFB3BF] mx-auto mt-3 rounded-full"></span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Misyon */}
            <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C8102E] to-[#A00D26] grid place-items-center shadow-lg">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div>
                  <h4 className="text-3xl lg:text-4xl font-bold text-white font-serif">Misyonumuz</h4>
                  <p className="mt-2 text-white/85 leading-relaxed">
                    Müşterilerimizin iş süreçlerini hızlandırmak, verimliliğini artırmak ve karmaşık iş problemlerini
                    çözmek amacıyla yüksek kaliteli ve özelleştirilebilir yazılım çözümleri sunuyoruz.
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li className="flex gap-2"><span className="text-[#FFB3BF]">•</span> Yüksek kalite standartları</li>
                <li className="flex gap-2"><span className="text-[#FFB3BF]">•</span> Tamamen özelleştirilebilir yapılar</li>
                <li className="flex gap-2"><span className="text-[#FFB3BF]">•</span> Hızlı entegrasyon ve destek</li>
              </ul>
            </div>

            {/* Vizyon */}
            <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6BA5FF] to-[#3B6BFF] grid place-items-center shadow-lg">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <div>
                  <h4 className="text-3xl lg:text-4xl font-bold text-white font-serif">Vizyonumuz</h4>
                  <p className="mt-2 text-white/85 leading-relaxed">
                    Teknoloji çözümleriyle iş dünyasını dönüştürerek, müşterilerimize sürdürülebilir ve rekabetçi bir
                    gelecek sunmak. Her sektöre uygun, esnek ve inovatif yazılımlar geliştirerek dijital dönüşümde
                    öncü bir rol üstlenmeyi hedefliyoruz.
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li className="flex gap-2"><span className="text-[#FFB3BF]">•</span> Her sektöre uyumlu çözümler</li>
                <li className="flex gap-2"><span className="text-[#FFB3BF]">•</span> İnovasyon odaklı geliştirme</li>
                <li className="flex gap-2"><span className="text-[#FFB3BF]">•</span> Sürdürülebilir dijital dönüşüm</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div id="moduller" />
      <div id="demo" />
    </div>
  );
}
