'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, type Variants } from 'framer-motion';

type Locale = 'tr' | 'en' | 'ru';
type Item = { id: string; title: string; description: string; image: string; alt: string };

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

function IndustryCard({ item }: { item: Item }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      id={item.id}
      className="group relative h-[18rem] md:h-[20rem] rounded-3xl overflow-hidden ring-1 ring-gray-100 bg-white shadow-md hover:shadow-2xl transition-shadow select-none"
      onPointerEnter={() => setOpen(true)}
      onPointerLeave={() => setOpen(false)}
      onClick={() => setOpen((v) => !v)}
      variants={cardVariants}
    >
      <img
        src={item.image}
        alt={item.alt}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/10 pointer-events-none" />

      {/* Başlık */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-500 ${
          open ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <h3
          className={[
            'font-serif font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] text-center leading-tight',
            'px-4',
            // akıllı sarmalama + kelime kırma
            '[text-wrap:balance] break-words [overflow-wrap:anywhere] [hyphens:auto]',
            // ekrana göre otomatik boyut
            'text-[clamp(20px,2.6vw,32px)] md:text-[clamp(22px,2.2vw,36px)]'
          ].join(' ')}
        >
          {item.title}
        </h3>
      </div>

      {/* Açıklama */}
      <div
        className={[
          'absolute inset-0',
          open ? 'translate-x-0' : 'translate-x-full',
          'transition-transform duration-500 ease-out',
          'bg-white/90 supports-[backdrop-filter]:bg-white/60 backdrop-blur-md z-10',
          'flex'
        ].join(' ')}
      >
        <div className="p-6 md:p-8 w-full max-h-full overflow-y-auto">
          <p
            className={[
              'text-[#0D152E] leading-relaxed',
              // ekrana göre otomatik boyut
              'text-[clamp(13px,1.05vw,16px)]',
              // uzun kelimelerde kırma/ayırma
              'break-words [word-break:break-word] [overflow-wrap:anywhere] [hyphens:auto]'
            ].join(' ')}
          >
            {item.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

const TEXTS: Record<
  Locale,
  {
    heading: string;
    subheading: string;
    items: Omit<Item, 'image'>[];
  }
> = {
  tr: {
    heading: 'Sektöre Özel Çözümler',
    subheading:
      'Her sektöre özel geliştirilen ERP çözümlerimizle işinizin tüm ihtiyaçlarına cevap veriyoruz.',
    items: [
      { id: 'manufacturing', title: 'Üretim', description: 'Uçtan uca izlenebilirlik, kalite kontrol, doğru planlama ve tedarik zincirinde gerçek zamanlı koordinasyon. Maliyetleri düşürür, çevrim süresini kısaltır.', alt: 'Üretim tesisi' },
      { id: 'retail', title: 'Perakende ‎‎ & E-Ticaret', description: 'Omnichannel satış, dinamik fiyatlama ve stok optimizasyonu. Mağaza, depo ve e-ticareti tek merkezden yönetin; müşteri deneyimini uçtan uca iyileştirin.', alt: 'Perakende ve e-ticaret ortamı' },
      { id: 'construction', title: 'İnşaat', description: 'Proje bütçeleri, keşif-metraj, hakediş ve saha ekiplerinin koordinasyonu. Şantiyeden merkeze gerçek zamanlı veri akışı ve mevzuata tam uyum.', alt: 'İnşaat sahası' },
      { id: 'defense', title: 'Savunma Sanayi', description: 'Konfigürasyon yönetimi, hassas tedarik ve izlenebilirlik. AR-GE’den seri üretime kadar güvenlik seviyesinde yetkilendirme ve süreç bütünlüğü.', alt: 'Savunma sanayi görseli' },
      { id: 'sports', title: 'Spor', description: 'Salonlar, dövüş sanatları okulları ve kulüpler için üyelik, ders planlama ve ödeme takibi. Eğitmen, öğrenci ve tesis yönetimini tek panelden yönetin.', alt: 'Spor ve tesis yönetimi' }
    ]
  },
  en: {
    heading: 'Industry-Specific Solutions',
    subheading:
      'We deliver ERP tailored for each industry to cover every need of your business end to end.',
    items: [
      { id: 'manufacturing', title: 'Manufacturing', description: 'End-to-end traceability, quality control, accurate planning and real-time supply chain coordination. Reduce costs and cycle times.', alt: 'Manufacturing facility' },
      { id: 'retail', title: 'Retail & E‑commerce', description: 'Omnichannel sales, dynamic pricing and inventory optimization. Manage stores, warehouses and web shop from a single hub and elevate CX.', alt: 'Retail and e-commerce environment' },
      { id: 'construction', title: 'Construction', description: 'Project budgets, BoQ/estimations, progress payments and field coordination. Real-time site‑to‑HQ data flow with full regulatory compliance.', alt: 'Construction site' },
      { id: 'defense', title: 'Defense Industry', description: 'Configuration management, sensitive procurement and traceability. From R&D to mass production with secure authorization and process integrity.', alt: 'Defense industry visual' },
      { id: 'sports', title: 'Sports', description: 'Memberships, class scheduling and payments for gyms, martial arts schools and clubs. Manage coaches, students and facilities in one panel.', alt: 'Sports and facility management' }
    ]
  },
  ru: {
    heading: 'Отраслевые решения',
    subheading:
      'Мы создаём ERP под каждую отрасль — закрываем все потребности бизнеса от начала до конца.',
    items: [
      { id: 'manufacturing', title: 'Производство', description: 'Сквозная прослеживаемость, контроль качества, точное планирование и координация цепочки поставок в реальном времени. Снижение затрат и циклов.', alt: 'Производственная площадка' },
      { id: 'retail', title: 'Розница и E‑commerce', description: 'Омниканальные продажи, динамическое ценообразование и оптимизация запасов. Управляйте магазинами, складом и сайтом из единого центра.', alt: 'Розничная торговля и e-commerce' },
      { id: 'construction', title: 'Строительство', description: 'Бюджеты проектов, ведомости объёмов (BoQ), акты выполненных работ и координация площадок. Онлайн‑данные с объекта и полное соответствие нормам.', alt: 'Строительная площадка' },
      { id: 'defense', title: 'Оборонная промышленность', description: 'Управление конфигурациями, чувствительные закупки и отслеживаемость. От R&D до серийного производства с безопасным разграничением доступа.', alt: 'Оборонная промышленность' },
      { id: 'sports', title: 'Спорт', description: 'Абонементы, расписание занятий и платежи для залов, школ единоборств и клубов. Удобное управление тренерами, учениками и объектами.', alt: 'Спортивное и объектное управление' }
    ]
  }
};

const IMAGE_MAP: Record<Item['id'], string> = {
  manufacturing:
    'https://readdy.ai/api/search-image?query=Modern%20manufacturing%20facility%20with%20automated%20production%20lines%20and%20quality%20control%20systems%2C%20clean%20industrial%20environment%20with%20advanced%20machinery%20and%20technology%20integration&width=300&height=200&seq=manufacturing-industry&orientation=landscape',
  retail:
    'https://readdy.ai/api/search-image?query=Modern%20retail%20store%20environment%20with%20digital%20displays%20and%20point%20of%20sale%20systems%2C%20clean%20contemporary%20retail%20space%20with%20technology%20integration&width=300&height=200&seq=retail-industry&orientation=landscape',
  construction:
    'https://readdy.ai/api/search-image?query=Construction%20site%20with%20modern%20project%20management%20technology%2C%20architectural%20planning%20and%20building%20development%20with%20digital%20tools%20integration&width=300&height=200&seq=construction-industry&orientation=landscape',
  defense: '/army.png',
  sports: '/spor.png'
};

export default function IndustriesServed() {
  const params = useSearchParams();
  const targetId = params.get('industry');
  const [locale, setLocale] = useState<Locale>('tr');

  useEffect(() => {
    const read = () => setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read();
    const handler = () => read();
    window.addEventListener('locale-change', handler);
    return () => window.removeEventListener('locale-change', handler);
  }, []);

  useEffect(() => {
    if (!targetId) return;
    const el = document.getElementById(targetId);
    if (!el) return;

    const t0 = setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-2', 'ring-[#C8102E]', 'ring-offset-2', 'ring-offset-white');
      const t1 = setTimeout(() => {
        el.classList.remove('ring-2', 'ring-[#C8102E]', 'ring-offset-2', 'ring-offset-white');
      }, 1200);
      return () => clearTimeout(t1);
    }, 150);

    return () => clearTimeout(t0);
  }, [targetId]);

  const t = TEXTS[locale];

  const items: Item[] = t.items.map((it) => ({
    ...it,
    image: IMAGE_MAP[it.id as keyof typeof IMAGE_MAP]
  }));

  return (
    <section
      id="industries-served"
      // hyphenation için doğru dil — tarayıcıya ipucu
      lang={locale}
      className="w-full py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Başlık */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-serif font-bold text-[#0D152E] mb-6 [text-wrap:balance]">
            {t.heading}
          </h2>
          <p className="text-[clamp(15px,1.4vw,20px)] text-gray-600 max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
            {t.subheading}
          </p>
        </motion.div>

        {/* Kartlar */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {items.map((item) => (
            <IndustryCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
