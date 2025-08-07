'use client';

import { useState } from 'react';

export default function QuickQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.company) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '' });
      }, 3000);
    }
  };

  return (
    <section className="w-full py-24 bg-gradient-to-br from-[#0D152E] to-[#1a2235]">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Hızlı Fiyat Teklifi Alın
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            İşletmenizi bize anlatın, size özel bir çözüm ve şeffaf fiyatlandırma sunalım.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-3">Ad Soyad</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent transition-all duration-300"
                    placeholder="Adınızı ve soyadınızı girin"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">E-posta Adresi</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent transition-all duration-300"
                    placeholder="ornek@sirket.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">Şirket Adı</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent transition-all duration-300"
                    placeholder="Şirket Adınız"
                    required
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#C8102E] hover:bg-[#A00D26] text-white px-12 py-4 text-lg font-bold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1"
                >
                  Teklifimi Oluştur
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#C8102E] rounded-full flex items-center justify-center">
                <i className="ri-check-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Teşekkürler!</h3>
              <p className="text-gray-300">
                Talebinizi aldık. 24 saat içinde size özel teklifimizi ileteceğiz.
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 text-sm">
            <i className="ri-shield-check-line text-[#C8102E] mr-2"></i>
            Bilgileriniz güvendedir, asla üçüncü taraflarla paylaşılmayacaktır.
          </p>
        </div>
      </div>
    </section>
  );
}
