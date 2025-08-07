'use client';

export default function ClientSuccess() {
  const clients = [
    { name: 'Microsoft', logo: 'https://readdy.ai/api/search-image?query=Microsoft%20company%20logo%20in%20grayscale%2C%20clean%20professional%20corporate%20branding%2C%20simple%20minimalist%20design%20on%20white%20background&width=200&height=100&seq=microsoft-logo&orientation=landscape' },
    { name: 'Amazon', logo: 'https://readdy.ai/api/search-image?query=Amazon%20company%20logo%20in%20grayscale%2C%20corporate%20branding%20design%2C%20professional%20minimalist%20logo%20on%20clean%20white%20background&width=200&height=100&seq=amazon-logo&orientation=landscape' },
    { name: 'Google', logo: 'https://readdy.ai/api/search-image?query=Google%20company%20logo%20in%20grayscale%2C%20corporate%20branding%2C%20professional%20minimalist%20design%20on%20white%20background&width=200&height=100&seq=google-logo&orientation=landscape' },
    { name: 'IBM', logo: 'https://readdy.ai/api/search-image?query=IBM%20company%20logo%20in%20grayscale%2C%20corporate%20professional%20branding%2C%20clean%20minimalist%20design%20on%20white%20background&width=200&height=100&seq=ibm-logo&orientation=landscape' },
    { name: 'Oracle', logo: 'https://readdy.ai/api/search-image?query=Oracle%20company%20logo%20in%20grayscale%2C%20professional%20corporate%20branding%2C%20minimalist%20design%20on%20clean%20white%20background&width=200&height=100&seq=oracle-logo&orientation=landscape' },
    { name: 'Salesforce', logo: 'https://readdy.ai/api/search-image?query=Salesforce%20company%20logo%20in%20grayscale%2C%20clean%20corporate%20branding%20design%2C%20professional%20minimalist%20logo%20on%20white%20background&width=200&height=100&seq=salesforce-logo&orientation=landscape' }
  ];

  const stats = [
    { value: '500+', label: 'Kurumsal Müşteri' },
    { value: '99.9%', label: 'Sistem Uptime Oranı' },
    { value: '2M+', label: 'Küresel Kullanıcı' },
    { value: '15+', label: 'Yıllık Deneyim' }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#F5F3F0] to-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#7B1E1E] mb-6">
            Liderlerin Tercihi
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed">
            En kritik operasyonlarında mükemmellik arayan kurumlar bizi tercih ediyor.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img 
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-serif font-bold text-[#C1440E] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#6B6B6B] font-medium uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story Highlight */}
        <div className="mt-20 bg-gradient-to-r from-[#7B1E1E] to-[#5A1515] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
                %45 Verimlilik Artışı
              </h3>
              <p className="text-[#E8D5D5] mb-6 leading-relaxed">
                Küresel bir üretim lideri, ilk yıl içerisinde operasyonel optimizasyon ve maliyet düşüşünde rekor seviyelere ulaştı.
              </p>
              <button className="bg-transparent border-2 border-[#E8D5D5] text-white px-6 py-3 font-semibold uppercase tracking-wide hover:bg-white hover:text-[#7B1E1E] transition-all duration-300 cursor-pointer whitespace-nowrap">
                Hikayeyi Oku
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Corporate%20executives%20in%20a%20sophisticated%20boardroom%20reviewing%20business%20performance%20metrics%2C%20professional%20business%20meeting%20with%20elegant%20interior%20design%2C%20success%20metrics%20dashboard%20on%20wall%20screens%2C%20warm%20professional%20lighting%20with%20burgundy%20and%20cream%20color%20tones&width=600&height=400&seq=success-story-burgundy&orientation=landscape"
                alt="Başarı Hikayesi"
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
