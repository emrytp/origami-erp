'use client';

export default function DemoProcess() {
  const steps = [
    {
      number: '01',
      title: 'İhtiyaç Analizi',
      description: 'İşletmenizin gereksinimlerini, mevcut sistemlerini ve operasyonel zorluklarını detaylı şekilde analiz ediyoruz.',
      icon: 'ri-search-eye-line',
      color: 'from-[#C8102E] to-[#A00D26]'
    },
    {
      number: '02',
      title: 'Özel Sunum',
      description: 'Sektörünüze ve kullanım senaryonuza özel hazırlanmış bir demoyu adım adım sunuyoruz.',
      icon: 'ri-presentation-line',
      color: 'from-[#A00D26] to-[#8B0B23]'
    },
    {
      number: '03',
      title: 'Teknik Uyum',
      description: 'Teknik ekibimiz entegrasyon ihtiyaçlarını, veri aktarımı ve sistem mimarisi detaylarını inceler.',
      icon: 'ri-settings-4-line',
      color: 'from-[#8B0B23] to-[#760920]'
    },
    {
      number: '04',
      title: 'Canlı Test',
      description: 'Gerçek verilerinizle, güvenli bir demo ortamında sistemi bizzat deneyimleyin.',
      icon: 'ri-play-circle-line',
      color: 'from-[#760920] to-[#61071D]'
    }
  ];

  return (
    <section className="w-full py-24 bg-[#0D152E]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Uygulama Yolculuğunuz
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ERP sistemine geçiş sürecinizin sorunsuz, verimli ve hedeflerinize tam uyumlu olması için yapılandırılmış bir yaklaşım.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Bağlantı Çizgisi */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-[#C8102E] to-transparent z-10"></div>
              )}
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${step.icon} text-2xl text-white`}></i>
                  </div>
                  
                  <div className="text-3xl font-bold text-[#C8102E] mb-2 font-serif">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-[#C8102E] hover:bg-[#A00D26] text-white px-12 py-4 text-lg font-bold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1">
            Demo Yolculuğuna Başla
          </button>
        </div>
      </div>
    </section>
  );
}
