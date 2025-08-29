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
      className="group relative h-[20rem] rounded-3xl overflow-hidden
                 ring-1 ring-gray-100 bg-white shadow-md hover:shadow-2xl
                 transition-shadow select-none"
      onPointerEnter={() => setOpen(true)}
      onPointerLeave={() => setOpen(false)}
      onClick={() => setOpen((v) => !v)}
      variants={cardVariants}
    >
      <img
        src={item.image}
        alt={item.alt}
        className="absolute inset-0 w-full h-full object-cover object-center
                   transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/10 pointer-events-none" />

      {/* Başlık */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center
                    transition-opacity duration-500 ${open ? 'opacity-0' : 'opacity-100'}`}
      >
        <h3
          className="font-serif font-bold text-white text-center leading-tight px-4
                     drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]
                     [text-wrap:balance] break-words [overflow-wrap:anywhere] [hyphens:auto]
                     text-[clamp(20px,2.4vw,32px)] md:text-[clamp(22px,2.1vw,36px)]"
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
            className="text-[#0D152E] leading-relaxed
                       text-[clamp(14px,1.05vw,16px)]
                       break-words [word-break:break-word] [overflow-wrap:anywhere] [hyphens:auto]"
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
    eyebrow: string;   // küçük üst başlık (referans sayfasıyla aynı stil)
    heading: string;   // büyük başlık
    subheading: string;
    items: Omit<Item, 'image'>[];
  }
> = {
  tr: {
    eyebrow: 'Hizmet Verdiğimiz Sektörler',
    heading: 'Sektöre Özel Çözümler',
    subheading:
      '',
    items: [
      { id: 'manufacturing', title: 'Üretim', description: 'Uçtan uca izlenebilirlik, kalite kontrol, doğru planlama ve tedarik zincirinde gerçek zamanlı koordinasyon. Maliyetleri düşürür, çevrim süresini kısaltır.', alt: 'Üretim tesisi' },
      { id: 'retail', title: 'Perakende ‎‎ & E-Ticaret', description: 'Omnichannel satış, dinamik fiyatlama ve stok optimizasyonu. Mağaza, depo ve e-ticareti tek merkezden yönetin; müşteri deneyimini uçtan uca iyileştirin.', alt: 'Perakende ve e-ticaret ortamı' },
      { id: 'construction', title: 'İnşaat', description: 'Proje bütçeleri, keşif-metraj, hakediş ve saha ekiplerinin koordinasyonu. Şantiyeden merkeze gerçek zamanlı veri akışı ve mevzuata tam uyum.', alt: 'İnşaat sahası' },
      { id: 'defense', title: 'Savunma Sanayi', description: 'Konfigürasyon yönetimi, hassas tedarik ve izlenebilirlik. AR-GE’den seri üretime kadar güvenlik seviyesinde yetkilendirme ve süreç bütünlüğü.', alt: 'Savunma sanayi görseli' },
      { id: 'sports', title: 'Spor', description: 'Salonlar, dövüş sanatları okulları ve kulüpler için üyelik, ders planlama ve ödeme takibi. Eğitmen, öğrenci ve tesis yönetimini tek panelden yönetin.', alt: 'Spor ve tesis yönetimi' }
    ]
  },
  en: {
    eyebrow: 'Industries We Serve',
    heading: 'Industry-Specific Solutions',
    subheading:
      'We deliver ERP tailored for each industry to cover every need of your business end to end.',
    items: [
      { id: 'manufacturing', title: 'Manufacturing', description: 'End-to-end traceability, quality control, accurate planning and real-time supply chain coordination. Reduce costs and cycle times.', alt: 'Manufacturing facility' },
      { id: 'retail', title: 'Retail & E-commerce', description: 'Omnichannel sales, dynamic pricing and inventory optimization. Manage stores, warehouses and web shop from a single hub and elevate CX.', alt: 'Retail and e-commerce environment' },
      { id: 'construction', title: 'Construction', description: 'Project budgets, BoQ/estimations, progress payments and field coordination. Real-time site-to-HQ data flow with full regulatory compliance.', alt: 'Construction site' },
      { id: 'defense', title: 'Defense Industry', description: 'Configuration management, sensitive procurement and traceability. From R&D to mass production with secure authorization and process integrity.', alt: 'Defense industry visual' },
      { id: 'sports', title: 'Sports', description: 'Memberships, class scheduling and payments for gyms, martial arts schools and clubs. Manage coaches, students and facilities in one panel.', alt: 'Sports and facility management' }
    ]
  },
  ru: {
    eyebrow: 'Отрасли',
    heading: 'Отраслевые решения',
    subheading:
      'Мы создаём ERP под каждую отрасль — закрываем все потребности бизнеса от начала до конца.',
    items: [
      { id: 'manufacturing', title: 'Производство', description: 'Сквозная прослеживаемость, контроль качества, точное планирование и координация цепочки поставок в реальном времени. Снижение затрат и циклов.', alt: 'Производственная площадка' },
      { id: 'retail', title: 'Розница и E-commerce', description: 'Омниканальные продажи, динамическое ценообразование и оптимизация запасов. Управляйте магазинами, складом и сайтом из единого центра.', alt: 'Розничная торговля и e-commerce' },
      { id: 'construction', title: 'Строительство', description: 'Бюджеты проектов, ведомости объёмов (BoQ), акты выполненных работ и координация площадок. Онлайн-данные с объекта и полное соответствие нормам.', alt: 'Строительная площадка' },
      { id: 'defense', title: 'Оборонная промышленность', description: 'Управление конфигурациями, чувствительные закупки и отслеживаемость. От R&D до серийного производства с безопасным разграничением доступа.', alt: 'Оборонная промышленность' },
      { id: 'sports', title: 'Спорт', description: 'Абонементы, расписание занятий и платежи для залов, школ единоборств и клубов. Удобное управление тренерами, учениками и объектами.', alt: 'Спортивное и объектное управление' }
    ]
  }
};

const IMAGE_MAP: Record<Item['id'], string> = {
  manufacturing: '/manufacturing.png',
  retail: '/retail.png',
  construction: '/construction.png',
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
      lang={locale}
      className="w-full py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Başlık — Referans sayfası stili */}
        <div className="mb-16 text-center">
          <div className="text-[11px] tracking-[6px] text-[#C8102E] uppercase font-semibold">
            {t.eyebrow}
          </div>
          <h2 className="mt-1 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0D152E] font-[Poppins]">
            <span className="relative inline-block">
              {t.heading}
              <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 h-[3px] w-16 bg-[#C8102E] rounded-full" />
            </span>
          </h2>

          {/* alt açıklama */}
          <p className="mt-5 text-[clamp(15px,1.4vw,20px)] text-gray-600 max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
            {t.subheading}
          </p>
        </div>

        {/* Kartlar — hepsi tek satır (5 adet), scroll yok */}
        <motion.div
          className="grid grid-cols-5 gap-8"
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
