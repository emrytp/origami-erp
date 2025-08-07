'use client';

import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Uygulama süreci ne kadar sürer?',
      answer:
        'Uygulama süresi şirketin büyüklüğüne ve sistem karmaşıklığına göre değişir; ancak çoğu kurulum 3-6 ay içinde tamamlanır. Aşamalı yaklaşımımız sayesinde ilk 30 gün içinde fayda sağlamaya başlarsınız ve operasyonlar kesintisiz devam eder.'
    },
    {
      question: 'Origami ERP mevcut sistemlerimizle entegre olabilir mi?',
      answer:
        'Evet, platformumuz sorunsuz entegrasyon için tasarlanmıştır. 50’den fazla hazır bağlantı noktası ve güçlü bir API altyapısıyla sisteminizle tam uyum sağlar. Teknik ekibimiz veri taşıma ve sistem iletişimini problemsiz yönetir.'
    },
    {
      question: 'Ne düzeyde özelleştirme yapılabilir?',
      answer:
        'Origami ERP, sistem bütünlüğünden ödün vermeden geniş özelleştirme olanakları sunar. İş akışlarını yapılandırabilir, özel alanlar ve raporlar oluşturabilir, hatta özel modüller geliştirebilirsiniz. Düşük kod altyapısı sayesinde bu işlemler kolay ve sürdürülebilirdir.'
    },
    {
      question: 'Veri güvenliği ve mevzuata uyumu nasıl sağlanıyor?',
      answer:
        'Çok faktörlü kimlik doğrulama, rol bazlı erişim kontrolü ve uçtan uca şifreleme ile kurumsal düzeyde güvenlik sağlıyoruz. Platformumuz SOC 2, GDPR ve sektör özelinde birçok regülasyona uyumludur. Düzenli güvenlik denetimleri ve 7/24 izleme yapılır.'
    },
    {
      question: 'Destek ve eğitim hizmetleriniz neler içeriyor?',
      answer:
        'Kapsamlı destek hizmetlerimiz; özel müşteri temsilcisi, 7/24 teknik destek, geniş dökümantasyon, video anlatımlar ve canlı eğitim oturumlarını içerir. Ayrıca ROI’nizi artırmanız için sürekli iyileştirme danışmanlığı sağlıyoruz.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0D152E] mb-6">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kurulum, özellikler ve destek hakkında merak ettiklerinizi burada bulabilirsiniz.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-bold text-[#0D152E] pr-8">
                  {faq.question}
                </span>
                <div
                  className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <i className="ri-arrow-down-s-line text-xl text-[#C8102E]"></i>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="h-px bg-gradient-to-r from-[#C8102E]/20 to-transparent mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Hâlâ sorularınız mı var?</p>
          <button className="bg-[#C8102E] hover:bg-[#A00D26] text-white px-10 py-4 font-bold tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1">
            Uzmanımıza Ulaşın
          </button>
        </div>
      </div>
    </section>
  );
}
