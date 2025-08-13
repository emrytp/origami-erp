'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Highlighter } from '@/components/magicui/highlighter';

type Img = { src: string; alt: string };

const images: Img[] = [
  { src: '/foto1.png', alt: 'Foto 1' },
  { src: '/foto2.png', alt: 'Foto 2' },
  { src: '/foto3.png', alt: 'Foto 3' },
  { src: '/foto4.png', alt: 'Foto 4' },
  { src: '/foto5.png', alt: 'Foto 5' },
];

function FrameWrapper({
  children,
  badge = 'Modern Arayüz',
}: {
  children: React.ReactNode;
  badge?: string;
}) {
  return (
    <div className="w-full h-full rounded-3xl shadow-2xl border border-gray-100 overflow-hidden bg-white">
      <div className="relative bg-[#0D152E] h-12 flex items-center px-5">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#C8102E]" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-5 text-white/90 text-sm font-semibold">Kurumsal Panel</div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#C8102E] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          💡 {badge}
        </div>
      </div>
      <div className="relative w-full h-[calc(100%-3rem)] bg-white">{children}</div>
    </div>
  );
}

export default function ThreeDGalleryFullWidth() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const setRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const [_, force] = useState(0); // ölçü yeniden hesap için

  useEffect(() => {
    const onResize = () => force((x) => x + 1);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const setEl = setRef.current;
    if (!scroller || !setEl) return;

    let raf = 0;
    let x = 0;
    const speed = 0.5; // px/frame (daha hızlı: 0.6; daha yavaş: 0.3)

    const loop = () => {
      const setWidth = setEl.getBoundingClientRect().width;
      if (!pausedRef.current) {
        x -= speed;
        if (x <= -setWidth) x += setWidth; // sonsuz döngü
        scroller.style.transform = `translateX(${x}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [_]); // yeniden ölçüm tetikleyici

  const handleEnter = () => { pausedRef.current = true; };
  const handleLeave = () => { pausedRef.current = false; };

  const Card = (img: Img, i: number) => (
    <div
      key={`${img.src}-${i}`}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      onTouchStart={handleEnter}
      onTouchEnd={handleLeave}
      className="
        shrink-0 w-[480px] md:w-[640px] h-[280px] md:h-[360px]
        rounded-3xl overflow-hidden bg-white
        shadow-[0_16px_32px_rgba(0,0,0,0.3)]
        transition-all duration-200 ease-out will-change-transform
        hover:shadow-[0_28px_64px_rgba(0,0,0,0.45)]
        hover:-translate-y-1 hover:scale-[1.02] hover:z-20
      "
      style={{ transformOrigin: 'center bottom' }}
    >
      <FrameWrapper>
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 480px, 640px"
          priority={i < images.length}
        />
      </FrameWrapper>
    </div>
  );

  const loopImages = [...images, ...images];

  return (
    <section className="w-full relative py-16 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, #ffffff 0%, #0D152E 22%, #0D152E 78%, #ffffff 100%)',
        }}
      />

      {/* Başlık */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 mb-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/95 leading-tight">
          <Highlighter action="underline" color="#FF9800" animationDuration={700} iterations={2} triggerInView>
            Sektörünüze Özel
          </Highlighter>{' '}
          <Highlighter action="highlight" color="#e31f1f" animationDuration={700} iterations={2} triggerInView>
            Çözümleri Keşfedin
          </Highlighter>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/80">
          Gerçek ekran görüntüleriyle{' '}
          <Highlighter action="underline" color="#FFDD57" animationDuration={600} iterations={1} triggerInView replayOnHover>
            ürün deneyimine göz atın
          </Highlighter>
          .
        </p>
      </div>

      <div className="relative z-10 overflow-hidden px-8">
        <div
          ref={scrollerRef}
          className="flex gap-8 will-change-transform"
          style={{ transform: 'translateX(0px)' }}
        >
          {/* Set A */}
          <div ref={setRef} className="flex gap-8">
            {images.map((img, i) => Card(img, i))}
          </div>
          {/* Set B */}
          <div className="flex gap-8">
            {images.map((img, i) => Card(img, i + images.length))}
          </div>
        </div>
      </div>
    </section>
  );
}
