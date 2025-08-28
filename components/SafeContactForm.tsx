'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

type Props = {
  formspreeId: string;        // Formspree form id (örn: "xyzqwdab")
  minimalDelayMs?: number;    // time-trap eşiği (default 3000ms)
  className?: string;
};

const SPAM_WORDS = [
  'viagra','loan','casino','crypto airdrop','porn','xxx','sex',
  'visit my site','bit.ly','tinyurl.com'
];

export default function SafeContactForm({
  formspreeId,
  minimalDelayMs = 3000,
  className = ''
}: Props) {
  const [state, handleSubmit] = useForm(formspreeId);
  const [error, setError] = useState<string | null>(null);
  const startedAt = useRef<number>(Date.now());
  const [locked, setLocked] = useState(false); // double submit kilidi

  // Honeypot alan adı
  const honeyName = useMemo(() => 'website', []);

  // Basit içerik filtresi
  const looksSpammy = (text: string) => {
    const lc = text.toLowerCase();
    const links = (lc.match(/https?:\/\//g) || []).length;
    if (links > 2) return 'Çok fazla link tespit edildi.';
    if (SPAM_WORDS.some(w => lc.includes(w))) return 'Mesaj içeriği uygun değil.';
    return null;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setError(null);

    // honeypot kontrolü
    const form = e.currentTarget;
    const hp = (form.elements.namedItem(honeyName) as HTMLInputElement | null)?.value?.trim();
    if (hp) {
      e.preventDefault();
      setError('İşlem başarısız.');
      return;
    }

    // time-trap kontrolü
    const elapsed = Date.now() - startedAt.current;
    if (elapsed < minimalDelayMs) {
      e.preventDefault();
      setError('Gönderim çok hızlı yapıldı. Lütfen tekrar deneyin.');
      return;
    }

    // içerik filtresi
    const msgEl = form.elements.namedItem('message') as HTMLTextAreaElement | null;
    const message = msgEl?.value || '';
    const spamMsg = looksSpammy(message);
    if (spamMsg) {
      e.preventDefault();
      setError(spamMsg);
      return;
    }

    if (locked) {
      e.preventDefault();
      return;
    }
    setLocked(true);

    await handleSubmit(e);
    // Success durumda state.succeeded true'ya döner, form kapatılır.
  };

  // Hata varsa kilidi kaldır (tip güvenli)
  useEffect(() => {
    const hasErrors = Array.isArray(state.errors)
      ? state.errors.length > 0
      : Boolean(state.errors);
    if (hasErrors) setLocked(false);
  }, [state.errors]);

  if (state.succeeded) {
    return (
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-200">
        Teşekkürler! Mesajınız bize ulaştı. En kısa sürede dönüş yapacağız.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`grid gap-3 ${className}`} autoComplete="off" noValidate>
      {/* honeypot (gizli) */}
      <div aria-hidden="true" style={{position:'absolute', left:'-9999px', width:0, height:0, overflow:'hidden'}}>
        <label htmlFor={honeyName}>Leave this field empty</label>
        <input id={honeyName} name={honeyName} type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* time-trap hidden */}
      <input type="hidden" name="_startedAt" value={startedAt.current.toString()} />

      <div className="grid gap-1">
        <label htmlFor="firstName" className="text-sm">Ad</label>
        <input
          id="firstName" name="firstName" type="text" required
          maxLength={60} autoComplete="off"
          className="rounded-md border bg-transparent p-2"
          pattern="^[A-Za-zÇĞİÖŞÜçğıöşü\s\-'.]{2,}$"
        />
      </div>

      <div className="grid gap-1">
        <label htmlFor="lastName" className="text-sm">Soyad</label>
        <input
          id="lastName" name="lastName" type="text" required
          maxLength={60} autoComplete="off"
          className="rounded-md border bg-transparent p-2"
          pattern="^[A-Za-zÇĞİÖŞÜçğıöşü\s\-'.]{2,}$"
        />
      </div>

      <div className="grid gap-1">
        <label htmlFor="email" className="text-sm">E-posta</label>
        <input
          id="email" name="email" type="email" required
          inputMode="email" autoComplete="off" maxLength={120}
          className="rounded-md border bg-transparent p-2"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="grid gap-1">
        <label htmlFor="message" className="text-sm">Mesaj</label>
        <textarea
          id="message" name="message" required rows={5}
          maxLength={2000}
          className="rounded-md border bg-transparent p-2"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {error && (
        <div className="rounded-md border border-rose-500/30 bg-rose-500/10 p-2 text-rose-200 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={state.submitting || locked}
        className="rounded-lg border px-4 py-2 disabled:opacity-60"
      >
        {state.submitting || locked ? 'Gönderiliyor…' : 'Gönder'}
      </button>
    </form>
  );
}
