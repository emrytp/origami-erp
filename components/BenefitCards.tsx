'use client';

import { useEffect, useState } from 'react';

export default function BenefitCards() {
  const benefits = [
    {
      icon: 'ri-settings-3-line',
      title: 'Özel Modüller',
      description: 'İş süreçlerinize tam uyum sağlayan, size özel geliştirilmiş fonksiyonlar.'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Kullanıcı Dostu Arayüz',
      description: 'Ekibinizin her gün kullanmaktan keyif alacağı sezgisel bir arayüz.'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Anlık Veri Erişimi',
      description: 'Gerçek zamanlı rapor ve içgörülerle daha akıllı kararlar alın.'
    },
    {
      icon: 'ri-plug-line',
      title: 'Hazır Entegrasyon',
      description: 'Mevcut sistemlerinizle sorunsuz bağlantı ve 3. parti uyumluluğu.'
    }
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
    onScroll(); // ilk yüklemede de tetiklenmesi için
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="benefit-section" className="relative w-full py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Başlık */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0D152E] mb-6">
            Modern İşletmeler İçin Tasarlandı
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tüm özellikler tek bir amaç için tasarlandı: İşletmenizi daha verimli, akıllı ve başarılı kılmak.
          </p>
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 flex items-center justify-center mb-8 bg-gradient-to-br from-[#C8102E] to-[#A00D26] rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <i className={`${benefit.icon} text-2xl text-white`}></i>
                </div>

                <h3 className="text-xl font-bold mb-4 tracking-wide text-[#0D152E] group-hover:text-[#C8102E] transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
