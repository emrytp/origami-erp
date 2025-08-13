'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const LOGOS = [
  { src: '/entegrasyonlar/entegrasyon1.png', alt: 'Entegrasyon 1' },
  { src: '/entegrasyonlar/entegrasyon2.png', alt: 'Entegrasyon 2' },
  { src: '/entegrasyonlar/entegrasyon3.png', alt: 'Entegrasyon 3' },
  { src: '/entegrasyonlar/entegrasyon4.png', alt: 'Entegrasyon 4' },
  { src: '/entegrasyonlar/entegrasyon5.png', alt: 'Entegrasyon 5' },
];

export default function IntegrationsPage() {
  const track = [...LOGOS, ...LOGOS];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* HERO */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center text-white mt-[88px]">
        <Image
          src="/entegrasyonlar/entegrasyonbanner.png"
          alt="Entegrasyonlarımız"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Başarılarımız, müşterilerimizin bize duyduğu güvenle şekilleniyor.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
            Origami Yazılım olarak, farklı sektörlerdeki iş ortaklarımıza yenilikçi ve kişiselleştirilebilir yazılım çözümleri sunmaktan gurur duyuyoruz.
            İş süreçlerini dönüştürerek verimlilik ve rekabet avantajı sağlayan projelerimiz, iş dünyasında kalıcı değer yaratmaya odaklanmaktadır.
          </p>
        </div>
      </section>

      {/* BAŞLIK + ALT AÇIKLAMA */}
      <section className="relative py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 relative inline-block">
              ENTEGRASYONLARIMIZ
              <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-16 h-1 bg-[#C8102E] rounded-full"></span>
            </h2>
            <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Güçlü iş ortaklıklarıyla kurduğumuz sorunsuz bağlantılar.
            </p>
          </div>

          {/* TEK SIRA MARQUEE */}
          <div className="mt-8 relative overflow-hidden group">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 via-slate-50/60 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 via-slate-50/60 to-transparent" />

            <div className="marquee-track animate-marquee">
              {track.map((l, i) => (
                <LogoCard key={`${i}-${l.src}`} src={l.src} alt={l.alt} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          width: max-content;
          padding-block: 0.5rem;
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="shrink-0 w-[280px] md:w-[320px] rounded-2xl border border-slate-100 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex h-[160px] md:h-[180px] items-center justify-center p-8">
        <Image
          src={src}
          alt={alt}
          width={300}
          height={160}
          className="max-h-24 md:max-h-28 object-contain"
          priority
        />
      </div>
    </div>
  );
}
