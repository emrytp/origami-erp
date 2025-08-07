'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 500) return;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  const handleWhatsAppClick = () => {
    const message = "Merhaba! Origami ERP hakkında daha fazla bilgi almak istiyorum.";
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="w-full py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0D152E] mb-6">
            İşletmenizi Dönüştürmeye Hazır mısınız?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Akıllı ERP çözümlerimizle iş süreçlerinizi bir üst seviyeye taşıyın.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* WhatsApp Contact */}
          <div className="text-center lg:text-left">
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mr-4">
                  <i className="ri-whatsapp-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0D152E]">Hızlı Yanıt</h3>
                  <p className="text-gray-600">WhatsApp ile anında iletişim</p>
                </div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                ERP uzmanlarımızla hemen iletişime geçin. Sorularınıza hızlı yanıt alın ve size özel demo randevusu oluşturun.
              </p>

              <button
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-10 py-4 font-bold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-1 w-full lg:w-auto"
              >
                <i className="ri-whatsapp-line mr-2"></i>
                WhatsApp'tan Yaz
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
              {!isSubmitted ? (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[#0D152E] font-semibold mb-3">Ad Soyad</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent transition-all duration-300"
                      placeholder="Adınızı ve soyadınızı girin"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[#0D152E] font-semibold mb-3">E-posta</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent transition-all duration-300"
                      placeholder="ornek@sirketiniz.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[#0D152E] font-semibold mb-3">Mesaj</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="İhtiyaçlarınızı bize anlatın..."
                      required
                    ></textarea>
                    <div className="text-right text-sm text-gray-500 mt-2">
                      {formData.message.length}/500
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!formData.name || !formData.email || !formData.message}
                    className="w-full bg-[#C8102E] hover:bg-[#A00D26] text-white px-8 py-4 font-bold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Mesajı Gönder
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#C8102E] rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-3xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D152E] mb-4">Mesajınız Gönderildi!</h3>
                  <p className="text-gray-600">
                    ERP ihtiyaçlarınızı görüşmek üzere en kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
