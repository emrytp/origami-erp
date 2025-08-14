'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* ÜST: Harita + İletişim Bilgileri */}
      <section className="mt-[88px]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Harita */}
          <div className="w-full h-[320px] md:h-[380px] rounded-xl overflow-hidden shadow-sm">
            <iframe
              title="Origami Yazılım - Konum"
              src="https://www.google.com/maps?q=Armada%20İş%20Merkezi%20Dumlupınar%20Bulvarı%206A/14%20Beştepe%2C%20Ankara%2006560&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Bilgi Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-[#0D152E]">
            <div className="flex flex-col items-center text-center">
              <FiMapPin className="w-9 h-9 mb-3" />
              <h3 className="text-xl font-bold">Adres</h3>
              <p className="mt-2 text-base md:text-lg font-medium text-gray-700 leading-relaxed">
                Armada İş Merkezi Dumlupınar Bulvarı 6A/14<br />
                Beştepe, Ankara 06560
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <FiPhone className="w-9 h-9 mb-3" />
              <h3 className="text-xl font-bold">Telefon</h3>
              <p className="mt-2 text-base md:text-lg font-medium text-gray-700 leading-relaxed">
                <a href="tel:+903122222320" className="hover:underline">+90 (312) 222 23 20</a>
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <FiMail className="w-9 h-9 mb-3" />
              <h3 className="text-xl font-bold">E‑Posta</h3>
              <p className="mt-2 text-base md:text-lg font-medium text-gray-700 leading-relaxed">
                <a href="mailto:origami@origamierp.com" className="hover:underline">origami@origamierp.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ALT: Bize Ulaşın (senin verdiğin form) */}
      <ContactForm />

      <Footer />
    </div>
  );
}

/* =========================
   Form Bileşeni (senin kodun)
   ========================= */
function ContactForm() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 500) return;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ firstName: '', lastName: '', email: '', message: '' });
    }, 2500);
  };

  const onWhatsApp = () => {
    const text = 'Merhaba! Origami ERP hakkında bilgi almak istiyorum.';
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="w-full min-h-[70vh] bg-[#0D152E] py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Başlık */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Bize Ulaşın</h2>
        </div>

        {/* Form */}
        <div className="rounded-2xl">
          {!sent ? (
            <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Ad */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-white/90">Ad</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={onChange}
                  placeholder="Adınız"
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30"
                  required
                />
              </div>

              {/* Soyad */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-white/90">Soyad</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={onChange}
                  placeholder="Soyadınız"
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30"
                  required
                />
              </div>

              {/* E-posta */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-white/90">E‑posta adresi</label>
                  <span className="text-xs text-white/50">Gizli tutulur</span>
                </div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="ornek@sirketiniz.com"
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30"
                  required
                />
              </div>

              {/* Mesaj */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-white/90">Mesaj</label>
                  <span className="text-xs text-white/50">{form.message.length}/500</span>
                </div>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Kısaca ihtiyacınızı anlatın…"
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 resize-none"
                  required
                />
              </div>

              {/* Butonlar */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <button
                  type="submit"
                  className="h-12 rounded-lg bg-white text-[#0D152E] font-semibold hover:bg-white/90 transition-colors"
                >
                  Gönder
                </button>

                <button
                  type="button"
                  onClick={onWhatsApp}
                  className="h-12 rounded-lg border border-white/20 bg-transparent text-white font-medium hover:bg-white/5 transition-colors inline-flex items-center justify-center gap-3"
                >
                  <Image
                    src="/wp.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  WhatsApp ile yaz
                </button>
              </div>
            </form>
          ) : (
            <div className="py-10 text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-white text-[#0D152E] grid place-items-center">
                ✓
              </div>
              <p className="text-white font-semibold">Mesajınız gönderildi!</p>
              <p className="mt-1 text-white/70 text-sm">En kısa sürede dönüş yapacağız.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
