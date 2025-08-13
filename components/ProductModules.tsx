'use client';

export default function ProductModules() {
  const modules = [
    { icon: 'ri-coins-line', title: 'Finans', description: 'Otomatik mutabakat ve mevzuat uyumu ile kapsamlı finans yönetimi.' },
    { icon: 'ri-team-line', title: 'İnsan Kaynakları', description: 'İşe alımdan performans ve bordroya kadar eksiksiz İK yönetimi.' },
    { icon: 'ri-stack-line', title: 'Stok Yönetimi', description: 'Gerçek zamanlı envanter takibi, akıllı tahmin ve optimizasyon.' },
    { icon: 'ri-customer-service-2-line', title: 'CRM', description: 'Satış ve müşteri sadakatini artıran güçlü ilişki yönetimi.' },
    { icon: 'ri-shopping-cart-line', title: 'Satın Alma', description: 'Tedarikçi yönetimi ve maliyet kontrolü ile verimli satın alma süreçleri.' },
    { icon: 'ri-line-chart-line', title: 'Analitik', description: 'Tahmine dayalı içgörüler ve güçlü raporlamalarla iş zekâsı.' },
    { icon: 'ri-tools-line', title: 'Üretim', description: 'Üretim planlama, kalite kontrol ve operasyonel verimlilik.' },
    { icon: 'ri-global-line', title: 'Çoklu Şirket', description: 'Birden fazla şirketi tek yerden yönetin, birleşik raporlama ile.' }
  ];

  return (
    <section
      className="w-full py-24 relative bg-gradient-to-b from-gray-50 via-white to-gray-50
                 before:content-[''] before:absolute before:inset-0
                 before:bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(200,16,46,0.05),transparent)]
                 before:pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Başlık */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0D152E] mb-6">
            Tümleşik Modül Paketi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tüm iş süreçlerinizi kapsayan, entegre çalışan güçlü modüller.
          </p>
        </div>

        {/* Modüller */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                         transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6 
                              bg-gradient-to-br from-[#C8102E] to-[#A00D26] rounded-2xl 
                              group-hover:scale-110 transition-all duration-300 shadow-lg">
                <i className={`${module.icon} text-2xl text-white`}></i>
              </div>

              <h3 className="text-xl font-bold text-[#0D152E] mb-4 group-hover:text-[#C8102E] transition-colors duration-300">
                {module.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
