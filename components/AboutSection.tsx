'use client';

export default function AboutSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Sol - İçerik */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-[#C8102E] font-bold uppercase tracking-wider text-sm">
                Origami ERP Hakkında
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-serif font-bold text-[#0D152E] leading-tight">
                Biz Sadece Yazılım Geliştirmiyoruz.
                <span className="block text-[#C8102E]">Başarı İnşa Ediyoruz.</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                On yılı aşkın süredir, iddialı işletmelerle ortaklık kurarak operasyonlarını dönüştürüyoruz.
                ERP platformumuz sadece bir yazılım değil — sürdürülebilir büyümenin temelidir.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Her özellik, her entegrasyon, her satır kod; tek bir amaçla tasarlandı:
                işletmenizin daha hızlı hareket etmesini, daha net düşünmesini ve hayal ettiğinden fazlasını başarmasını sağlamak.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C8102E] mb-2">15+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Yıllık Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C8102E] mb-2">800+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Uygulama</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C8102E] mb-2">50+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Ülke</div>
              </div>
            </div>
            
            <div className="pt-6">
              <button className="bg-[#C8102E] hover:bg-[#A00D26] text-white px-10 py-4 font-bold tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1">
                Hikayemizi Öğrenin
              </button>
            </div>
          </div>
          
          {/* Sağ - Görsel */}
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20modern%20office%20workspace%20with%20diverse%20business%20team%20collaborating%20on%20enterprise%20software%2C%20elegant%20corporate%20environment%20with%20sophisticated%20lighting%2C%20clean%20contemporary%20workspace%20design%20with%20multiple%20monitors%20and%20premium%20aesthetics%2C%20structured%20business%20meeting%20atmosphere&width=700&height=600&seq=about-workspace-professional&orientation=landscape"
              alt="Profesyonel Ekibimiz"
              className="w-full rounded-2xl shadow-2xl object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
