'use client'; 

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, type Variants } from 'framer-motion';

type Item = { id: string; title: string; description: string; image: string };

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

function IndustryCard({ item }: { item: Item }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      id={item.id}
      className="group relative h-72 md:h-80 rounded-3xl overflow-hidden ring-1 ring-gray-100 bg-white shadow-md hover:shadow-2xl transition-shadow select-none"
      onPointerEnter={() => setOpen(true)}
      onPointerLeave={() => setOpen(false)}
      onClick={() => setOpen((v) => !v)}
      variants={cardVariants}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/10 pointer-events-none" />

      <div
        className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-500 ${
          open ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <h3 className="font-serif font-bold text-white text-3xl md:text-4xl tracking-tight text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
          {item.title}
        </h3>
      </div>

      <div
        className={`absolute inset-y-0 right-0 w-full md:w-[65%] ${
          open ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-out bg-white/90 supports-[backdrop-filter]:bg-white/60 backdrop-blur-md border-l border-white/50 z-10 flex items-center`}
      >
        <div className="p-6 md:p-8">
          <p className="text-[#0D152E] text-sm md:text-[15px] leading-relaxed">{item.description}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function IndustriesServed() {
  const params = useSearchParams();
  const targetId = params.get('industry'); // manufacturing | retail | construction | defense

  const items: Item[] = [
    {
      id: 'manufacturing',
      title: 'Üretim',
      image:
        'https://readdy.ai/api/search-image?query=Modern%20manufacturing%20facility%20with%20automated%20production%20lines%20and%20quality%20control%20systems%2C%20clean%20industrial%20environment%20with%20advanced%20machinery%20and%20technology%20integration&width=300&height=200&seq=manufacturing-industry&orientation=landscape',
      description:
        'Uçtan uca izlenebilirlik, kalite kontrol, doğru planlama ve tedarik zincirinde gerçek zamanlı koordinasyon. Maliyetleri düşürür, çevrim süresini kısaltır.',
    },
    {
      id: 'retail',
      title: 'Perakende ‎‎ & E-Ticaret',
      image:
        'https://readdy.ai/api/search-image?query=Modern%20retail%20store%20environment%20with%20digital%20displays%20and%20point%20of%20sale%20systems%2C%20clean%20contemporary%20retail%20space%20with%20technology%20integration&width=300&height=200&seq=retail-industry&orientation=landscape',
      description:
        'Omnichannel satış, dinamik fiyatlama ve stok optimizasyonu. Mağaza, depo ve e-ticareti tek merkezden yönetin; müşteri deneyimini uçtan uca iyileştirin.',
    },
    {
      id: 'construction',
      title: 'İnşaat',
      image:
        'https://readdy.ai/api/search-image?query=Construction%20site%20with%20modern%20project%20management%20technology%2C%20architectural%20planning%20and%20building%20development%20with%20digital%20tools%20integration&width=300&height=200&seq=construction-industry&orientation=landscape',
      description:
        'Proje bütçeleri, keşif-metraj, hakediş ve saha ekiplerinin koordinasyonu. Şantiyeden merkeze gerçek zamanlı veri akışı ve mevzuata tam uyum.',
    },
    {
      id: 'defense',
      title: 'Savunma Sanayi',
      image: '/army.png',
      description:
        'Konfigürasyon yönetimi, hassas tedarik ve izlenebilirlik. AR-GE’den seri üretime kadar güvenlik seviyesinde yetkilendirme ve süreç bütünlüğü.',
    },
  ];

  // URL'den gelen industry parametresine göre ilgili karta kaydır + kısa vurgu
  useEffect(() => {
    if (!targetId) return;
    const el = document.getElementById(targetId);
    if (!el) return;

    // görünürlük/animasyonlar için ufak bir gecikme iyi olur
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

  return (
    <section id="industries-served" className="w-full py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Başlık */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0D152E] mb-6">
            Sektöre Özel Çözümler
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Her sektöre özel geliştirilen ERP çözümlerimizle işinizin tüm ihtiyaçlarına cevap veriyoruz.
          </p>
        </motion.div>

        {/* Kartlar */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {items.map((item, i) => (
            <IndustryCard key={i} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
