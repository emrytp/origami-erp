'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export type Product = {
  id: string
  title: string
  slug: string
  category: 'ERP' | 'Mobil' | 'Entegrasyon'
  summary: string
  features: string[]
  image: string
  badge?: string
}

const PRODUCTS: Product[] = [
  {
    id: 'mobile',
    title: 'Origami Yazılım Mobil',
    slug: '/urunler/origami-yazilim-mobil',
    category: 'Mobil',
    summary:
      'Saha ekipleri ve yöneticiler için iOS/Android uygulaması. Anlık bildirim, çevrimdışı çalışma, hızlı onay akışları.',
    features: ['iOS & Android', 'Çevrimdışı senkron', 'Push bildirimler', 'Onay & Görev akışları'],
    image: '/mobilerp.png',
    badge: 'Saha için',
  },
  {
    id: 'erp',
    title: 'Origami ERP',
    slug: '/urunler/origami-erp',
    category: 'ERP',
    summary:
      'Modüler mimari, güçlü raporlama ve sınırsız entegrasyon. Büyüyen ekipler için esnek kurumsal altyapı.',
    features: ['Modül tabanlı yapı', 'Gerçek zamanlı raporlama', 'Rol/Yetki yönetimi', 'API & Webhook'],
    image: '/hero.png',
    badge: 'Yeni sürüm 2.4',
  },
  {
    id: 'uao',
    title: 'UAO Mobil Uygulaması',
    slug: '/urunler/uao-mobil',
    category: 'Mobil',
    summary:
      'United Aikido Organisation için özelleştirilmiş mobil yönetim uygulaması. ERP entegrasyonlu üyelik & etkinlik yönetimi.',
    features: ['Üyelik yönetimi', 'Etkinlik & ders planı', 'ERP entegrasyonu', 'Rol bazlı erişim'],
    image: '/aik.png',
    badge: 'Özel proje',
  },
]

const CATEGORIES: Array<{ key: Product['category'] | 'Tümü'; label: string }> = [
  { key: 'Tümü', label: 'Tümü' },
  { key: 'ERP', label: 'ERP' },
  { key: 'Mobil', label: 'Mobil' },
  { key: 'Entegrasyon', label: 'Entegrasyon' },
]

export default function ProductsPage() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]['key']>('Tümü')
  const [q, setQ] = useState('')

  const items = useMemo(() => {
    const filtered = PRODUCTS.filter((p) => (cat === 'Tümü' ? true : p.category === cat))
    if (!q) return filtered
    const s = q.toLowerCase()
    return filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(s) ||
        p.summary.toLowerCase().includes(s) ||
        p.features.some((f) => f.toLowerCase().includes(s))
    )
  }, [cat, q])

  return (
    <main className="min-h-screen w-full bg-white">
      <Header />

      {/* --- HERO / üst başlık --- */}
      <section className="relative overflow-hidden">
        <Image
          src="/urunlerheroo.png"
          alt="Ürünler Hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 sm:pt-44">
          <div className="flex flex-col items-center text-center text-white">
            <span className="rounded-full border border-white/30 px-4 py-1.5 text-sm font-medium tracking-wide">
              Ürün Kataloğu
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Güçlü. Esnek. Entegre.
            </h1>
            <p className="mt-6 max-w-3xl text-lg sm:text-xl text-balance">
              Origami Yazılım ürün ailesi: ERP çekirdeği, mobil uygulamalar ve kurumunuza özel entegrasyon
              çözümleri. Tümü aynı mimaride, aynı kalite çizgisinde.
            </p>
          </div>
        </div>
      </section>

      {/* --- ÜRÜN KARTLARI --- */}
      <section className="mx-auto max-w-7xl px-6 pb-12 mt-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    priority={p.id === 'erp'}
                  />
                </div>
                {p.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-rose-600/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow">
                    {p.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600">
                    {p.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  <Link href={p.slug} className="after:absolute after:inset-0">
                    {p.title}
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{p.summary}</p>

                <ul className="mt-1 grid grid-cols-1 gap-2 text-sm text-slate-700">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="mt-[2px] h-4 w-4 flex-none"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-2 flex items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                  >
                    Demo Al
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* --- Renklendirilmiş güven şeridi --- */}
      <section className="border-y border-slate-100 bg-slate-50/60">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-3">
          {/* 1 */}
          <div className="rounded-2xl border border-slate-200 p-6 text-center bg-gradient-to-br from-rose-50 to-white hover:from-rose-100 hover:to-white transition shadow-sm hover:shadow-md">
            <div className="flex justify-center mb-3 text-rose-600 text-3xl">
              <i className="ri-shield-check-line" aria-hidden="true"></i>
            </div>
            <p className="text-sm font-semibold text-slate-900">Kurumsal Güvenlik</p>
            <p className="mt-1 text-sm text-slate-600">
              ISO uyumluluğu, rollere göre erişim ve denetim kayıtları.
            </p>
          </div>

          {/* 2 */}
          <div className="rounded-2xl border border-slate-200 p-6 text-center bg-gradient-to-br from-blue-50 to-white hover:from-blue-100 hover:to-white transition shadow-sm hover:shadow-md">
            <div className="flex justify-center mb-3 text-blue-600 text-3xl">
              <i className="ri-server-line" aria-hidden="true"></i>
            </div>
            <p className="text-sm font-semibold text-slate-900">Ölçeklenebilir Mimari</p>
            <p className="mt-1 text-sm text-slate-600">Bulut/On‑prem dağıtım, yüksek erişilebilirlik.</p>
          </div>

          {/* 3 */}
          <div className="rounded-2xl border border-slate-200 p-6 text-center bg-gradient-to-br from-green-50 to-white hover:from-green-100 hover:to-white transition shadow-sm hover:shadow-md">
            <div className="flex justify-center mb-3 text-green-600 text-3xl">
              <i className="ri-plug-line" aria-hidden="true"></i>
            </div>
            <p className="text-sm font-semibold text-slate-900">Sınırsız Entegrasyon</p>
            <p className="mt-1 text-sm text-slate-600">API, webhook ve hazır konektör ekosistemi.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
