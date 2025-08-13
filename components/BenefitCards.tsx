'use client';

import { useEffect, useState } from 'react';

export default function BenefitCards() {
  const benefits = [
    {
      icon: 'ri-settings-3-line',
      title: 'Esnek ve Özelleştirilebilir Yapı',
      description:
        'Origami ERP, işletmenizin ihtiyaçlarına göre kolayca uyarlanabilir ve özelleştirilebilir bir yapıya sahiptir.',
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Kullanıcı Dostu Arayüz',
      description:
        'Origami ERP, kullanıcı deneyimi odaklı tasarımıyla iş süreçlerinde hızlı adaptasyon ve yüksek verimlilik sağlar.',
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Gerçek Zamanlı Veri Takibi ve Raporlama',
      description:
        'Anlık veri izleme ve kapsamlı raporlama özellikleri ile daha hızlı ve stratejik kararlar almanıza destek olur.',
    },
    {
      icon: 'ri-plug-line',
      title: 'Sistemlerle Entegrasyon Kolaylığı',
      description:
        'Origami ERP, mevcut yazılım ve sistemlerinizle uyum içinde çalışarak tüm süreçlerinizin sorunsuz ilerlemesini sağlar.',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('benefit-section');
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="benefit-section"
      className="relative w-full overflow-hidden -mt-10 lg:-mt-16 py-16 lg:py-20 bg-gradient-to-b from-[#F0F6FF] via-white to-[#FFF5F5]"
    >
      {/* Üstten yumuşak geçiş */}
      <div className="pointer-events-none absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-[#0D152E] to-transparent" />

      {/* Blob efektleri */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 w-[460px] h-[460px] rounded-full bg-[#C8102E]/10 blur-[140px]" />
        <div className="absolute top-10 right-[-140px] w-[520px] h-[520px] rounded-full bg-[#4F7BFF]/15 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Başlık */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0D152E] mb-4">
            Geleceğin İş Dünyası İçin Geliştirildi
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Tüm özellikler tek bir amaç için tasarlandı: İşletmenizi daha verimli, akıllı ve başarılı kılmak.
          </p>

          {/* Renkli rozetler */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="px-3 py-1 rounded-full text-sm bg-[#C8102E]/10 text-[#C8102E] border border-[#C8102E]/20">
              Hızlı Kurulum
            </span>
            <span className="px-3 py-1 rounded-full text-sm bg-[#4F7BFF]/10 text-[#4F7BFF] border border-[#4F7BFF]/20">
              Bulut & On-Prem
            </span>
            <span className="px-3 py-1 rounded-full text-sm bg-[#FF9800]/10 text-[#FF9800] border border-[#FF9800]/20">
              Rol Bazlı Erişim
            </span>
            <span className="px-3 py-1 rounded-full text-sm bg-[#28A745]/10 text-[#28A745] border border-[#28A745]/20">
              Detaylı Loglama
            </span>
          </div>
        </div>

        {/* Kartlar */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden border border-gray-100`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover efekti */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 flex items-center justify-center mb-8 bg-gradient-to-br from-[#C8102E] to-[#A00D26] rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <i className={`${benefit.icon} text-2xl text-white`} />
                </div>

                <h3 className="text-xl font-bold mb-3 tracking-wide text-[#0D152E] group-hover:text-[#C8102E] transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
