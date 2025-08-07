'use client';

import { useState } from 'react';

export default function IntegrationPartners() {
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);

  const partners = [
    {
      name: 'Microsoft',
      category: 'Kurumsal Paket',
      description: 'Microsoft 365, Azure ve Dynamics ekosistemiyle sorunsuz entegrasyon.',
      logo: 'https://readdy.ai/api/search-image?query=Microsoft%20company%20logo%20clean%20modern%20design%20on%20white%20background%2C%20professional%20corporate%20branding%20for%20enterprise%20software%20integration&width=120&height=80&seq=microsoft-integration&orientation=landscape'
    },
    {
      name: 'SAP',
      category: 'Eski Sistemler',
      description: 'SAP R/3 ve S/4HANA sistemleriyle veri taşıma ve birlikte çalışma.',
      logo: 'https://readdy.ai/api/search-image?query=SAP%20enterprise%20software%20logo%20modern%20clean%20design%20on%20white%20background%2C%20professional%20corporate%20technology%20branding&width=120&height=80&seq=sap-integration&orientation=landscape'
    },
    {
      name: 'Oracle',
      category: 'Veritabanı Çözümleri',
      description: 'Gelişmiş sorgu optimizasyonuyla yerel Oracle veritabanı bağlantısı.',
      logo: 'https://readdy.ai/api/search-image?query=Oracle%20database%20company%20logo%20clean%20modern%20design%20on%20white%20background%2C%20professional%20enterprise%20technology%20branding&width=120&height=80&seq=oracle-integration&orientation=landscape'
    },
    {
      name: 'Salesforce',
      category: 'CRM Platformu',
      description: 'Müşteri verilerini tek çatı altında toplamak için Salesforce CRM ile çift yönlü senkronizasyon.',
      logo: 'https://readdy.ai/api/search-image?query=Salesforce%20CRM%20company%20logo%20clean%20modern%20design%20on%20white%20background%2C%20professional%20cloud%20technology%20branding&width=120&height=80&seq=salesforce-integration&orientation=landscape'
    },
    {
      name: 'AWS',
      category: 'Bulut Altyapısı',
      description: 'Otomatik ölçekleme ve yönetilen servislerle yerel AWS dağıtımı.',
      logo: 'https://readdy.ai/api/search-image?query=Amazon%20AWS%20cloud%20services%20logo%20clean%20modern%20design%20on%20white%20background%2C%20professional%20cloud%20computing%20branding&width=120&height=80&seq=aws-integration&orientation=landscape'
    },
    {
      name: 'Google Cloud',
      category: 'Yapay Zeka ve Analitik',
      description: 'Google Cloud Platform destekli ileri seviye yapay zeka ve makine öğrenimi yetenekleri.',
      logo: 'https://readdy.ai/api/search-image?query=Google%20Cloud%20platform%20logo%20clean%20modern%20design%20on%20white%20background%2C%20professional%20cloud%20technology%20branding&width=120&height=80&seq=google-cloud-integration&orientation=landscape'
    },
    {
      name: 'QuickBooks',
      category: 'Muhasebe',
      description: 'QuickBooks Online ve masaüstü sürümleriyle otomatik senkronizasyon.',
      logo: 'https://readdy.ai/api/search-image?query=QuickBooks%20accounting%20software%20logo%20clean%20modern%20design%20on%20white%20background%2C%20professional%20financial%20technology%20branding&width=120&height=80&seq=quickbooks-integration&orientation=landscape'
    },
    {
      name: 'Shopify',
      category: 'E-Ticaret',
      description: 'Shopify mağazalarıyla anlık sipariş ve stok senkronizasyonu.',
      logo: 'https://readdy.ai/api/search-image?query=Shopify%20e-commerce%20platform%20logo%20clean%20modern%20design%20on%20white%20background%2C%20professional%20retail%20technology%20branding&width=120&height=80&seq=shopify-integration&orientation=landscape'
    }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0D152E] mb-6">
            Kurumsal Entegrasyonlar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            İşletmenizin zaten kullandığı araçlarla sorunsuzca entegre olun. Kesinti yok, sadece ekstra güç.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-3 relative overflow-hidden"
              onMouseEnter={() => setHoveredPartner(index)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center h-16 mb-6">
                  <img 
                    src={partner.logo}
                    alt={`${partner.name} Entegrasyonu`}
                    className={`max-w-full max-h-full object-contain transition-all duration-300 ${
                      hoveredPartner === index ? 'grayscale-0 scale-110' : 'grayscale hover:grayscale-0'
                    }`}
                  />
                </div>

                <h3 className="text-xl font-bold text-[#0D152E] mb-2 group-hover:text-[#C8102E] transition-colors duration-300">
                  {partner.name}
                </h3>

                <div className="text-sm font-semibold text-[#C8102E] uppercase tracking-wider mb-3">
                  {partner.category}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="border-2 border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white px-12 py-4 font-bold tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap rounded-xl">
            Tüm 50+ Entegrasyonu Gör
          </button>
        </div>
      </div>
    </section>
  );
}
