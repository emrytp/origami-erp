'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

type Locale = 'tr' | 'en' | 'ru';

/* helpers */
function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

/* basit i18n */
const T: Record<Locale, {
  mapTitle: string;
  addressCard: { title: string; addr1: string; addr2: string };
  phoneCard: { title: string; value: string };
  mailCard: { title: string; value: string };
  formTitle: string;
  labels: { first: string; last: string; email: string; message: string; hiddenNote: string };
  placeholders: { first: string; last: string; email: string; message: string };
  send: string;
  sentTitle: string;
  sentDesc: string;
}> = {
  tr: {
    mapTitle: 'Origami Yazılım - Konum',
    addressCard: { title: 'Adres', addr1: 'Armada İş Merkezi Dumlupınar Bulvarı 6A/14', addr2: 'Beştepe, Ankara 06560' },
    phoneCard: { title: 'Telefon', value: '+90 (312) 222 23 20' },
    mailCard: { title: 'E‑Posta', value: 'origami@origamierp.com' },
    formTitle: 'Bize Ulaşın',
    labels: { first: 'Ad', last: 'Soyad', email: 'E‑posta adresi', message: 'Mesaj', hiddenNote: 'Gizli tutulur' },
    placeholders: { first: 'Adınız', last: 'Soyadınız', email: 'ornek@sirketiniz.com', message: 'Kısaca ihtiyacınızı anlatın…' },
    send: 'Gönder',
    sentTitle: 'Mesajınız gönderildi!',
    sentDesc: 'En kısa sürede dönüş yapacağız.',
  },
  en: {
    mapTitle: 'Origami Software - Location',
    addressCard: { title: 'Address', addr1: 'Armada Business Center Dumlupınar Blv. 6A/14', addr2: 'Beştepe, Ankara 06560' },
    phoneCard: { title: 'Phone', value: '+90 (312) 222 23 20' },
    mailCard: { title: 'E‑mail', value: 'origami@origamierp.com' },
    formTitle: 'Contact Us',
    labels: { first: 'First name', last: 'Last name', email: 'Email address', message: 'Message', hiddenNote: 'Kept confidential' },
    placeholders: { first: 'Your first name', last: 'Your last name', email: 'example@yourcompany.com', message: 'Briefly describe your need…' },
    send: 'Send',
    sentTitle: 'Your message has been sent!',
    sentDesc: 'We will get back to you shortly.',
  },
  ru: {
    mapTitle: 'Origami Software — Местоположение',
    addressCard: { title: 'Адрес', addr1: 'Думлупынар бул., 6A/14, Бизнес‑центр Armada', addr2: 'Бештепе, Анкара 06560' },
    phoneCard: { title: 'Телефон', value: '+90 (312) 222 23 20' },
    mailCard: { title: 'E‑mail', value: 'origami@origamierp.com' },
    formTitle: 'Связаться с нами',
    labels: { first: 'Имя', last: 'Фамилия', email: 'Электронная почта', message: 'Сообщение', hiddenNote: 'Конфиденциально' },
    placeholders: { first: 'Ваше имя', last: 'Ваша фамилия', email: 'primer@vashakompaniya.com', message: 'Кратко опишите вашу задачу…' },
    send: 'Отправить',
    sentTitle: 'Ваше сообщение отправлено!',
    sentDesc: 'Мы свяжемся с вами в ближайшее время.',
  },
};

export default function ContactPage() {
  const [locale, setLocale] = useState<Locale>('tr');

  useEffect(() => {
    const read = () => setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read();
    const onLocaleChange = () => read();
    window.addEventListener('locale-change', onLocaleChange);
    return () => window.removeEventListener('locale-change', onLocaleChange);
  }, []);

  const t = T[locale];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* ÜST: Harita + İletişim Bilgileri */}
      <section className="mt-[88px]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Harita */}
          <div className="w-full h-[320px] md:h-[380px] rounded-xl overflow-hidden shadow-sm">
            <iframe
              title={t.mapTitle}
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
              <h3 className="text-xl font-bold">{t.addressCard.title}</h3>
              <p className="mt-2 text-base md:text-lg font-medium text-gray-700 leading-relaxed">
                {t.addressCard.addr1}<br />{t.addressCard.addr2}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <FiPhone className="w-9 h-9 mb-3" />
              <h3 className="text-xl font-bold">{t.phoneCard.title}</h3>
              <p className="mt-2 text-base md:text-lg font-medium text-gray-700 leading-relaxed">
                <a href="tel:+903122222320" className="hover:underline">{t.phoneCard.value}</a>
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <FiMail className="w-9 h-9 mb-3" />
              <h3 className="text-xl font-bold">{t.mailCard.title}</h3>
              <p className="mt-2 text-base md:text-lg font-medium text-gray-700 leading-relaxed">
                <a href="mailto:origami@origamierp.com" className="hover:underline">{t.mailCard.value}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ALT: Form */}
      <ContactForm locale={locale} />

      <Footer />
    </div>
  );
}

function ContactForm({ locale }: { locale: Locale }) {
  const t = T[locale];

  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  return (
    <section className="w-full min-h-[70vh] bg-[#0D152E] py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Başlık */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{t.formTitle}</h2>
        </div>

        {/* Form */}
        <div className="rounded-2xl">
          {!sent ? (
            <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-white/90">{t.labels.first}</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={onChange}
                  placeholder={t.placeholders.first}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-white/90">{t.labels.last}</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={onChange}
                  placeholder={t.placeholders.last}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30"
                  required
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-white/90">{t.labels.email}</label>
                  <span className="text-xs text-white/50">{t.labels.hiddenNote}</span>
                </div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder={t.placeholders.email}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30"
                  required
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-white/90">{t.labels.message}</label>
                  <span className="text-xs text-white/50">{form.message.length}/500</span>
                </div>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  placeholder={t.placeholders.message}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 resize-none"
                  required
                />
              </div>

              <div className="md:col-span-2 flex justify-center mt-2">
                <button
                  type="submit"
                  className="h-12 px-14 rounded-lg bg-white text-[#0D152E] font-semibold hover:bg-white/90 transition-colors"
                >
                  {t.send}
                </button>
              </div>
            </form>
          ) : (
            <div className="py-10 text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-white text-[#0D152E] grid place-items-center">✓</div>
              <p className="text-white font-semibold">{t.sentTitle}</p>
              <p className="mt-1 text-white/70 text-sm">{t.sentDesc}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
