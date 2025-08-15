'use client';

import { useState } from 'react';
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
  FiBarChart2,
  FiSearch,
  FiPlayCircle,
} from 'react-icons/fi';

export default function ServicesPage() {
  const services = [
    {
      Icon: FiCpu,
      title: 'Özel Yazılım Geliştirme',
      desc: 'İhtiyacınıza %100 uyumlu, ölçeklenebilir ve güvenli kurumsal uygulamalar.',
      bullets: ['Modüler mimari', 'Bulut + On‑prem', 'CI/CD & test otomasyonu'],
      color: 'from-[#C8102E] to-[#A00D26]',
    },
    {
      Icon: FiLayers,
      title: 'Proje Yönetimi & Uygulama',
      desc: 'Analizden canlıya geçişe, kurulum ve eğitim dahil uçtan uca teslim.',
      bullets: ['Agile/Scrum', 'Risk & kapsam kontrolü', 'KPI odaklı ilerleme'],
      color: 'from-[#A00D26] to-[#8B0B23]',
    },
    {
      Icon: FiSettings,
      title: 'Özelleştirme & Entegrasyon',
      desc: 'Mevcut sistemlerinize sorunsuz bağlanan API tabanlı entegrasyonlar.',
      bullets: ['ERP/Muhasebe', 'E‑ticaret & pazar yerleri', 'e‑Belge & lojistik'],
      color: 'from-[#8B0B23] to-[#760920]',
    },
    {
      Icon: FiHeadphones,
      title: 'Proje Sonrası Destek',
      desc: 'SLA’lı bakım, versiyon güncelleme ve sürekli performans izleme.',
      bullets: ['7/24 izleme', 'Sürüm planı', 'Eğitim & dokümantasyon'],
      color: 'from-[#6BA5FF] to-[#3B6BFF]',
    },
    {
      Icon: FiSmartphone,
      title: 'Mobil Uygulamalar',
      desc: 'iOS/Android için ERP süreçlerinizi cepten yönetin.',
      bullets: ['Sahadan anlık veri girişi', 'Mobil görev ve onay akışları', 'Müşteri ve ekip anında senkron'],
      color: 'from-[#00B894] to-[#0984E3]',
    },
    {
      Icon: FiBarChart2,
      title: 'Danışmanlık & Analitik',
      desc: 'Veri odaklı kararlar, raporlama ve gösterge panelleri.',
      bullets: ['Gerçek zamanlı performans takibi', 'Her an güncel raporlar elinizin altında', 'İşletmenizin tüm departmanlarını tek panelden izleyin'],
      color: 'from-[#FF8A00] to-[#FF2D55]',
    },
  ];

  const steps = [
    { Icon: FiSearch, title: 'İhtiyaç Analizi', desc: 'Süreç keşfi ve hedef belirleme.' },
    { Icon: FiPlayCircle, title: 'Özel Demo', desc: 'Sektörünüze uygun senaryolar.' },
    { Icon: FiSettings, title: 'Teknik Uyum', desc: 'Entegrasyon ve veri akışı.' },
    { Icon: FiPlayCircle, title: 'Canlı Test', desc: 'Gerçek veriyle deneme.' },
  ];

const faqs = [
  {
    q: 'Origami ERP mevcut sistemlerimle uyumlu mu?',
    a: 'Evet. Origami ERP, API’ler, webhooks ve hazır entegrasyon konektörleri sayesinde muhasebe, e-ticaret, depo yönetimi, CRM, üretim takip ve lojistik gibi birçok farklı sistemle sorunsuz şekilde çalışır. Mevcut altyapınızı değiştirmeden, tüm veri akışınızı tek merkezden yönetmenizi sağlar.',
  },
  {
    q: 'Kurulum ve canlıya geçiş ne kadar sürer?',
    a: 'Kurulum süresi, projenin kapsamına ve entegrasyon gereksinimlerine bağlıdır. Tipik bir kurulum süreci 4–10 hafta arasında tamamlanır. Bu süre içerisinde keşif ve ihtiyaç analizi, yazılım kurulumu, veri aktarımı, kullanıcı eğitimleri ve canlıya geçiş testleri adım adım uygulanır. Böylece işletmenizin faaliyetleri kesintiye uğramadan sistem devreye alınır.',
  },
  {
    q: 'Özelleştirme yapılıyor mu?',
    a: 'Evet. Origami ERP, modüler bir mimariye sahiptir. Bu sayede süreçlerinize özel ekranlar, raporlama panelleri, iş akışları ve otomasyonlar geliştirilir. İster küçük bir modifikasyon ister kapsamlı bir modül geliştirme olsun, yazılım tamamen sizin iş yapınıza uyarlanır.',
  },
  {
    q: 'Destek modeli nasıl?',
    a: 'Projeyi teslim ettikten sonra da yanınızdayız. SLA kapsamında 7/24 teknik destek, sürüm güncellemeleri, düzenli performans kontrolleri, hata giderme ve yeni özellik ekleme gibi hizmetler sunuyoruz. Ayrıca talebinize göre kullanıcı eğitimleri ve ayrıntılı dokümantasyon desteği de sağlanır.',
  },
];
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
            Hizmetlerimiz
          </p>
          <h1 className="text-4xl lg:text-6xl font-extrabold font-serif leading-tight">
            İş Süreçlerinizi{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB3BF] to-white">
              Akıllı Yazılımla
            </span>{' '}
            Hızlandırın
          </h1>
          <p className="mt-4 text-white/90 text-base sm:text-lg">
            Modüler ERP, entegre çözümler ve butik danışmanlıkla işletmenizi çevik,
            ölçülebilir ve sürdürülebilir hale getiriyoruz.
          </p>
          <div className="mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold bg-gradient-to-r from-[#C8102E] to-[#A00D26] shadow-lg shadow-red-900/20 hover:opacity-95 transition"
            >
              Hızlı Teklif Al
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
              Tüm Hizmetlerimiz
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              İhtiyaca göre şekillenen, birbirine bağlı akıllı çözümler.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ Icon, title, desc, bullets, color }, i) => (
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
          <div className="uppercase tracking-[0.3em] text-white/70 text-xs">Başlayalım</div>
          <h3 className="mt-2 text-3xl lg:text-5xl font-serif font-extrabold">
            Origami ile Dijital Geleceğe Taşının
          </h3>
          <p className="mt-4 text-white/85 max-w-3xl mx-auto">
            Süreçlerinizi sadeleştirin, görünürlüğü artırın ve büyümeyi hızlandırın.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl px-8 py-4 font-bold bg-white text-[#0D152E] hover:bg-white/90 transition"
          >
            Hemen Görüşelim
          </Link>
        </div>
      </section>

{/* SSS */}
<section className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-8">
    <div className="text-center mb-10">
<p className="text-[#0D152E] text-4xl lg:text-5xl font-serif font-extrabold tracking-wide drop-shadow-sm">
  Sıkça Sorulan Sorular
</p>
    </div>
    <div className="space-y-4">
      {faqs.map((f, i) => (
        <div
          key={i}
          className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
        >
          <button
            className="w-full text-left px-6 py-5 flex items-center justify-between"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-[#0D152E]">{f.q}</span>
            <i
              className={`ri-add-line transition-transform ${
                open === i ? 'rotate-45' : ''
              }`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-6 -mt-2 text-gray-600 leading-relaxed">
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
}
