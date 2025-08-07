'use client';

export default function IndustriesServed() {
  const industries = [
    {
      title: 'Üretim',
      icon: 'ri-tools-line',
      description: 'Üretim optimizasyonu, kalite kontrolü ve tedarik zinciri yönetimi.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20manufacturing%20facility%20with%20automated%20production%20lines%20and%20quality%20control%20systems%2C%20clean%20industrial%20environment%20with%20advanced%20machinery%20and%20technology%20integration&width=300&height=200&seq=manufacturing-industry&orientation=landscape'
    },
    {
      title: 'Perakende',
      icon: 'ri-store-2-line',
      description: 'Çok kanallı satış, stok yönetimi ve müşteri deneyimi optimizasyonu.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20retail%20store%20environment%20with%20digital%20displays%20and%20point%20of%20sale%20systems%2C%20clean%20contemporary%20retail%20space%20with%20technology%20integration&width=300&height=200&seq=retail-industry&orientation=landscape'
    },
    {
      title: 'İnşaat',
      icon: 'ri-building-line',
      description: 'Proje yönetimi, kaynak planlaması ve mevzuat takibi çözümleri.',
      image: 'https://readdy.ai/api/search-image?query=Construction%20site%20with%20modern%20project%20management%20technology%2C%20architectural%20planning%20and%20building%20development%20with%20digital%20tools%20integration&width=300&height=200&seq=construction-industry&orientation=landscape'
    },
    {
      title: 'Eğitim',
      icon: 'ri-graduation-cap-line',
      description: 'Öğrenci bilgi sistemleri, akademik yönetim ve kaynak planlaması.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20educational%20institution%20with%20digital%20learning%20technology%2C%20contemporary%20classroom%20with%20interactive%20systems%20and%20student%20management%20tools&width=300&height=200&seq=education-industry&orientation=landscape'
    }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0D152E] mb-6">
            Sektöre Özel Çözümler
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Her sektöre özel geliştirilen ERP çözümlerimizle işinizin tüm ihtiyaçlarına cevap veriyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-3 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={industry.image}
                  alt={`${industry.title} Sektörü`}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D152E]/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-[#C8102E] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className={`${industry.icon} text-xl text-white`}></i>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-[#0D152E] mb-4 group-hover:text-[#C8102E] transition-colors duration-300">
                  {industry.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {industry.description}
                </p>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-[#C8102E] hover:text-[#A00D26] font-semibold text-sm uppercase tracking-wide transition-colors duration-200 cursor-pointer whitespace-nowrap">
                    Detayları Gör →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
