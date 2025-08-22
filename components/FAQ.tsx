'use client';

import { useEffect, useState } from 'react';

type Locale = 'tr' | 'en' | 'ru';
function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

type QA = { question: string; answer: string };
type Copy = { heading: string; sub: string; more: string; cta: string; faqs: QA[] };

const TEXTS: Record<Locale, Copy> = {
  tr: {
    heading: 'Sıkça Sorulan Sorular',
    sub: 'Kurulum, özellikler ve destek hakkında merak ettiklerinizi burada bulabilirsiniz.',
    more: 'Hâlâ sorularınız mı var?',
    cta: 'Uzmanımıza Ulaşın',
    faqs: [
      {
        question: 'Uygulama süreci ne kadar sürer?',
        answer:
          'Uygulama süresi şirketin büyüklüğüne ve sistem karmaşıklığına göre değişir; ancak çoğu kurulum 3–6 ay içinde tamamlanır. Aşamalı yaklaşımımız sayesinde ilk 30 gün içinde fayda sağlamaya başlarsınız ve operasyonlar kesintisiz devam eder.',
      },
      {
        question: 'Origami ERP mevcut sistemlerimizle entegre olabilir mi?',
        answer:
          'Evet, platformumuz sorunsuz entegrasyon için tasarlanmıştır. 50’den fazla hazır bağlantı noktası ve güçlü bir API altyapısıyla sisteminizle tam uyum sağlar. Teknik ekibimiz veri taşıma ve sistem iletişimini problemsiz yönetir.',
      },
      {
        question: 'Ne düzeyde özelleştirme yapılabilir?',
        answer:
          'Origami ERP, sistem bütünlüğünden ödün vermeden geniş özelleştirme olanakları sunar. İş akışlarını yapılandırabilir, özel alanlar ve raporlar oluşturabilir, hatta özel modüller geliştirebilirsiniz. Düşük kod altyapısı sayesinde bu işlemler kolay ve sürdürülebilirdir.',
      },
      {
        question: 'Veri güvenliği ve mevzuata uyumu nasıl sağlanıyor?',
        answer:
          'Çok faktörlü kimlik doğrulama, rol bazlı erişim kontrolü ve uçtan uca şifreleme ile kurumsal düzeyde güvenlik sağlıyoruz. Platformumuz SOC 2, GDPR ve sektör özelinde birçok regülasyona uyumludur. Düzenli güvenlik denetimleri ve 7/24 izleme yapılır.',
      },
      {
        question: 'Destek ve eğitim hizmetleriniz neler içeriyor?',
        answer:
          'Kapsamlı destek hizmetlerimiz; özel müşteri temsilcisi, 7/24 teknik destek, geniş dokümantasyon, video anlatımlar ve canlı eğitim oturumlarını içerir. Ayrıca ROI’nizi artırmanız için sürekli iyileştirme danışmanlığı sağlıyoruz.',
      },
    ],
  },
  en: {
    heading: 'Frequently Asked Questions',
    sub: 'Find answers about onboarding, features and support.',
    more: 'Still have questions?',
    cta: 'Talk to an Expert',
    faqs: [
      {
        question: 'How long does the implementation take?',
        answer:
          'Timelines vary by company size and system complexity, but most go‑lives complete in 3–6 months. With our phased approach, you’ll see value within the first 30 days and operations remain uninterrupted.',
      },
      {
        question: 'Can Origami ERP integrate with our existing systems?',
        answer:
          'Yes. The platform is built for seamless integration with 50+ ready connectors and a robust API layer. Our team handles data migration and inter‑system communication without disruption.',
      },
      {
        question: 'What level of customization is possible?',
        answer:
          'Origami ERP offers extensive customization without sacrificing system integrity. Configure workflows, create custom fields and reports, or build dedicated modules. Low‑code foundations keep changes simple and maintainable.',
      },
      {
        question: 'How do you ensure data security and compliance?',
        answer:
          'Enterprise‑grade security with MFA, role‑based access and end‑to‑end encryption. The platform aligns with SOC 2, GDPR and multiple industry regulations, with regular security audits and 24/7 monitoring.',
      },
      {
        question: 'What do your support and training services include?',
        answer:
          'A dedicated account manager, 24/7 technical support, rich documentation, video tutorials and live training sessions. We also provide continuous improvement advisory to maximize your ROI.',
      },
    ],
  },
  ru: {
    heading: 'Часто задаваемые вопросы',
    sub: 'Ответы по внедрению, функционалу и поддержке.',
    more: 'Остались вопросы?',
    cta: 'Связаться с экспертом',
    faqs: [
      {
        question: 'Сколько длится внедрение?',
        answer:
          'Срок зависит от размера компании и сложности ландшафта; большинство проектов завершается за 3–6 месяцев. Благодаря поэтапному подходу ценность появляется уже в первые 30 дней, при этом операции не прерываются.',
      },
      {
        question: 'Интегрируется ли Origami ERP с нашими системами?',
        answer:
          'Да. Платформа поддерживает бесшовную интеграцию: более 50 готовых коннекторов и мощный API. Наша команда берёт на себя перенос данных и взаимодействие систем.',
      },
      {
        question: 'Насколько возможна кастомизация?',
        answer:
          'Origami ERP предлагает широкие возможности настройки без ущерба целостности системы: конфигурирование процессов, пользовательские поля и отчёты, создание модулей. Низкокодовая основа делает изменения простыми и поддерживаемыми.',
      },
      {
        question: 'Как обеспечивается безопасность и соответствие требованиям?',
        answer:
          'Многофакторная аутентификация, ролевой доступ и сквозное шифрование. Соответствие SOC 2, GDPR и отраслевым нормам, регулярные аудиты и мониторинг 24/7.',
      },
      {
        question: 'Какие услуги поддержки и обучения доступны?',
        answer:
          'Персональный менеджер, круглосуточная поддержка, документация, видео‑уроки и живые тренинги. Также — консультации по постоянным улучшениям для роста ROI.',
      },
    ],
  },
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [locale, setLocale] = useState<Locale>('tr');

  useEffect(() => {
    const read = () => setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read();
    const handler = () => read();
    window.addEventListener('locale-change', handler);
    return () => window.removeEventListener('locale-change', handler);
  }, []);

  const t = TEXTS[locale];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0D152E] mb-6">
            {t.heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.sub}
          </p>
        </div>

        <div className="space-y-6">
          {t.faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-bold text-[#0D152E] pr-8">
                  {faq.question}
                </span>
                <div
                  className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <i className="ri-arrow-down-s-line text-xl text-[#C8102E]" />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="h-px bg-gradient-to-r from-[#C8102E]/20 to-transparent mb-4" />
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">{t.more}</p>
          <button className="bg-[#C8102E] hover:bg-[#A00D26] text-white px-10 py-4 font-bold tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1">
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
