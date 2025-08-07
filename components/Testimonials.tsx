'use client';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Origami ERP, üretim operasyonlarımızı tamamen dönüştürdü. Gerçek zamanlı görünürlük ve otomatik iş akışları sayesinde ilk çeyrekte verimliliğimiz %40 arttı.",
      name: "Sarah Chen",
      title: "Operasyon Direktörü",
      company: "TechFlow Manufacturing",
      image: "https://readdy.ai/api/search-image?query=Professional%20Asian%20businesswoman%20executive%20in%20modern%20office%20setting%2C%20confident%20corporate%20leader%20wearing%20business%20suit%20with%20clean%20contemporary%20background&width=100&height=100&seq=testimonial-sarah&orientation=squarish"
    },
    {
      quote: "Sunulan özelleştirme düzeyi inanılmaz. Sistemi kendi perakende süreçlerimize birebir uyarlayabildik, performanstan da hiç ödün vermedik.",
      name: "Michael Rodriguez",
      title: "Bilgi Teknolojileri Direktörü",
      company: "Meridian Retail Group",
      image: "https://readdy.ai/api/search-image?query=Professional%20Hispanic%20businessman%20executive%20in%20modern%20corporate%20environment%2C%20confident%20IT%20director%20wearing%20business%20attire%20with%20technology%20background&width=100&height=100&seq=testimonial-michael&orientation=squarish"
    },
    {
      quote: "Uygulama süreci sorunsuzdu ve destek ekibi mükemmeldi. İnşaat projelerimiz artık planlamadan teslimata kadar tamamen izlenebilir hale geldi.",
      name: "Emma Thompson",
      title: "Proje Yöneticisi",
      company: "Apex Construction Ltd",
      image: "https://readdy.ai/api/search-image?query=Professional%20Caucasian%20businesswoman%20executive%20in%20construction%20industry%20setting%2C%20confident%20project%20manager%20wearing%20professional%20attire%20with%20modern%20office%20background&width=100&height=100&seq=testimonial-emma&orientation=squarish"
    }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0D152E] mb-6">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Origami ERP ile operasyonlarını dönüştüren liderlerin gerçek hikâyeleri.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group text-center bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-3"
            >
              <div className="mb-8">
                <i className="ri-double-quotes-l text-4xl text-[#C8102E] mb-6 block"></i>
                <blockquote className="text-lg text-gray-700 leading-relaxed italic font-light">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-[#C8102E]/10 group-hover:ring-[#C8102E]/30 transition-all duration-300">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <div>
                  <div className="text-lg font-bold text-[#0D152E] mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#C8102E] font-semibold mb-1">
                    {testimonial.title}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="border-2 border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white px-12 py-4 font-bold tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap rounded-xl">
            Daha Fazla Başarı Hikayesi
          </button>
        </div>
      </div>
    </section>
  );
}
