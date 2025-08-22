'use client';

import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

type Locale = 'tr' | 'en' | 'ru';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

const TEXTS: Record<
  Locale,
  {
    successTitle: string;
    successSubtitle: string;
    heading: string;
    firstNameLabel: string;
    firstNamePh: string;
    lastNameLabel: string;
    lastNamePh: string;
    emailLabel: string;
    emailHint: string;
    emailPh: string;
    messageLabel: string;
    messagePh: string;
    counter: (n: number, max: number) => string;
    submit: string;
    submitting: string;
    subject: string;
  }
> = {
  tr: {
    successTitle: 'Mesajınız gönderildi!',
    successSubtitle: 'En kısa sürede dönüş yapacağız.',
    heading: 'Bizimle iletişime geçin',
    firstNameLabel: 'Ad',
    firstNamePh: 'Adınız',
    lastNameLabel: 'Soyad',
    lastNamePh: 'Soyadınız',
    emailLabel: 'E‑posta adresi',
    emailHint: 'Gizli tutulur',
    emailPh: 'ornek@sirketiniz.com',
    messageLabel: 'Mesaj',
    messagePh: 'Kısaca ihtiyacınızı anlatın…',
    counter: (n, max) => `${n}/${max}`,
    submit: 'Gönder',
    submitting: 'Gönderiliyor…',
    subject: 'Origami İletişim Formu'
  },
  en: {
    successTitle: 'Your message has been sent!',
    successSubtitle: 'We will get back to you shortly.',
    heading: 'Get in touch',
    firstNameLabel: 'First name',
    firstNamePh: 'Your first name',
    lastNameLabel: 'Last name',
    lastNamePh: 'Your last name',
    emailLabel: 'Email address',
    emailHint: 'Kept private',
    emailPh: 'you@company.com',
    messageLabel: 'Message',
    messagePh: 'Briefly describe what you need…',
    counter: (n, max) => `${n}/${max}`,
    submit: 'Send',
    submitting: 'Sending…',
    subject: 'Origami Contact Form'
  },
  ru: {
    successTitle: 'Ваше сообщение отправлено!',
    successSubtitle: 'Мы свяжемся с вами в ближайшее время.',
    heading: 'Свяжитесь с нами',
    firstNameLabel: 'Имя',
    firstNamePh: 'Ваше имя',
    lastNameLabel: 'Фамилия',
    lastNamePh: 'Ваша фамилия',
    emailLabel: 'Эл. почта',
    emailHint: 'Не публикуется',
    emailPh: 'you@company.com',
    messageLabel: 'Сообщение',
    messagePh: 'Кратко опишите вашу задачу…',
    counter: (n, max) => `${n}/${max}`,
    submit: 'Отправить',
    submitting: 'Отправляется…',
    subject: 'Форма контактов Origami'
  }
};

export default function ContactForm() {
  // Formspree
  const [fsState, handleSubmit] = useForm('mblkbqpz');

  // Locale
  const [locale, setLocale] = useState<Locale>('tr');
  useEffect(() => {
    const read = () => setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read();
    const handler = () => read();
    window.addEventListener('locale-change', handler);
    return () => window.removeEventListener('locale-change', handler);
  }, []);

  const t = TEXTS[locale];

  // UI state
  const MAX = 500;
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [botTrap, setBotTrap] = useState(''); // honeypot

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > MAX) return;
    setForm((p) => ({ ...p, [name]: value }));
  };

  // Başarılı gönderim
  if (fsState.succeeded) {
    return (
      <section className="w-full bg-[#0D152E] py-12 md:py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="py-8 text-center">
            <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-white text-[#0D152E] grid place-items-center">
              ✓
            </div>
            <p className="text-white font-semibold">{t.successTitle}</p>
            <p className="mt-1 text-white/70 text-sm">{t.successSubtitle}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#0D152E] py-12 md:py-14">
      <div className="max-w-5xl mx-auto px-6">
        {/* Başlık */}
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.heading}
          </h2>
        </div>

        {/* Form */}
        <div className="rounded-2xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Ad */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-white/90">{t.firstNameLabel}</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={onChange}
                placeholder={t.firstNamePh}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30"
                required
              />
            </div>

            {/* Soyad */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-white/90">{t.lastNameLabel}</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={onChange}
                placeholder={t.lastNamePh}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30"
                required
              />
            </div>

            {/* E-posta */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-white/90">{t.emailLabel}</label>
                <span className="text-xs text-white/50">{t.emailHint}</span>
              </div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder={t.emailPh}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30"
                required
              />
              <ValidationError prefix="Email" field="email" errors={fsState.errors} />
            </div>

            {/* Mesaj */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-white/90">{t.messageLabel}</label>
                <span className="text-xs text-white/50">{t.counter(form.message.length, MAX)}</span>
              </div>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={onChange}
                placeholder={t.messagePh}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 resize-none"
                required
              />
              <ValidationError prefix="Message" field="message" errors={fsState.errors} />
            </div>

            {/* Honeypot (gizli alan) */}
            <div className="hidden" aria-hidden>
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={botTrap}
                onChange={(e) => setBotTrap(e.target.value)}
              />
            </div>

            {/* Gizli alanlar */}
            <input type="hidden" name="_subject" value={t.subject} />
            <input
              type="hidden"
              name="fromPath"
              value={typeof window !== 'undefined' ? window.location.pathname : '/'}
            />

            {/* Buton */}
            <div className="md:col-span-2 flex justify-center mt-1">
              <button
                type="submit"
                disabled={fsState.submitting || !!botTrap}
                className="h-12 px-14 rounded-lg bg-white text-[#0D152E] font-semibold hover:bg-white/90 transition-colors disabled:opacity-60"
              >
                {fsState.submitting ? t.submitting : t.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
