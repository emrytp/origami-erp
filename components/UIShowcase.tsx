'use client';

export default function UIShowcase() {
  const features = [
    {
      title: 'Sezgisel Kontrol Paneli',
      description: 'En çok ihtiyacınız olan bilgileri ön plana çıkaran sade ve işlevsel arayüz tasarımı.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20ERP%20dashboard%20interface%20with%20burgundy%20and%20clay%20red%20color%20scheme%2C%20sophisticated%20data%20visualization%2C%20clean%20business%20analytics%20with%20warm%20color%20palette%2C%20elegant%20charts%20and%20graphs%20in%20burgundy%20tones%2C%20professional%20interface%20design&width=600&height=400&seq=dashboard-burgundy&orientation=landscape'
    },
    {
      title: 'Gelişmiş Analitik',
      description: 'Derinlemesine analizler net ve anlaşılır şekilde sunulur, böylece kararlar daha güvenli alınır.',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20business%20analytics%20interface%20with%20burgundy%20color%20scheme%2C%20sophisticated%20data%20visualization%20charts%2C%20professional%20reporting%20dashboard%20with%20warm%20red%20accents%2C%20elegant%20business%20intelligence%20interface&width=600&height=400&seq=analytics-burgundy&orientation=landscape'
    },
    {
      title: 'İş Akışı Yönetimi',
      description: 'Karmaşık süreçleri sadeleştiren görsel iş akışı oluşturucuları ile kontrol sizde.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20workflow%20management%20interface%20with%20burgundy%20and%20clay%20red%20design%2C%20sophisticated%20process%20flow%20visualization%2C%20professional%20business%20process%20interface%20with%20warm%20color%20palette%2C%20elegant%20workflow%20designer&width=600&height=400&seq=workflow-burgundy&orientation=landscape'
    }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#F5F3F0] to-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#7B1E1E] mb-6">
            Kusursuz Deneyimi Yaşayın
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed">
            Her arayüz öğesi; netlik, verimlilik ve aynı anda hem güçlü hem de erişilebilir bir deneyim sunmak için özenle tasarlandı.
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h3 className="text-3xl font-serif font-bold text-[#2D2D2D] mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-[#6B6B6B] leading-relaxed mb-6">
                  {feature.description}
                </p>
                <button className="text-[#C1440E] hover:text-[#7B1E1E] font-semibold uppercase tracking-wide transition-colors duration-200 cursor-pointer whitespace-nowrap">
                  Özelliği İncele →
                </button>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden p-4">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-[#7B1E1E] hover:bg-[#5A1515] text-white px-10 py-4 text-lg font-semibold uppercase tracking-wide transition-colors duration-200 cursor-pointer whitespace-nowrap">
            Tam Demosu Görüntüle
          </button>
        </div>
      </div>
    </section>
  );
}
