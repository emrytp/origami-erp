'use client';

import {useRouter} from 'next/navigation';
import Image from 'next/image';

const LANGS = [
  {code:'tr', alt:'Türkçe',  src:'/flags/tr.svg'},
  {code:'ru', alt:'Русский', src:'/flags/ru.svg'},
  {code:'en', alt:'English', src:'/flags/en.svg'}
] as const;

export default function LanguageSwitcher() {
  const router = useRouter();

  function setLang(code:string) {
    document.cookie = `NEXT_LOCALE=${code}; Path=/; Max-Age=31536000; SameSite=Lax`;
    router.refresh(); // sayfa aynı URL’de seçilen dil ile yeniden render olur
  }

  return (
    <div className="flex items-center gap-2">
      {LANGS.map(l => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className="inline-flex items-center justify-center rounded p-1 hover:scale-105 transition"
          title={l.alt}
        >
          <Image src={l.src} alt={l.alt} width={28} height={20}/>
        </button>
      ))}
    </div>
  );
}