'use client';

export default function StatsSection() {
  const stats = [
    {
      number: '20+',
      label: 'Sektör',
      description: 'Küresel Hizmet'
    },
    {
      number: '1M+',
      label: 'Kullanıcı',
      description: 'Günlük Aktif'
    },
    {
      number: '99.9%',
      label: 'Çalışma Süresi',
      description: 'SLA Garantili'
    },
    {
      number: '7/24',
      label: 'Destek',
      description: 'Uzman Ekip'
    }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-br from-gray-100 to-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0D152E] mb-6">
            Lider Markaların Tercihi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Operasyonlarını bizimle dijitalleştiren binlerce şirkete katılın.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="text-6xl lg:text-7xl font-bold text-[#C8102E] mb-4 font-serif group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              
              <div className="text-2xl font-bold text-[#0D152E] mb-2">
                {stat.label}
              </div>
              
              <div className="text-gray-600 font-medium text-lg">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
