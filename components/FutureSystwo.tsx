'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FeatureSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-white to-gray-50 overflow-hidden -mt-6 lg:-mt-8">
      {/* Arka plan blur */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#C8102E] opacity-10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0D152E] opacity-10 blur-[120px] rounded-full" />
      </div>

      {/* Şık çizgi */}
      <svg
        className="absolute right-[-100px] top-[50px] w-[800px] h-[800px] z-0 pointer-events-none"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 800 0 C 700 100, 750 200, 600 300 C 450 400, 500 500, 700 650"
          stroke="#0D152E"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* NOT: min-h-screen yok; daha sıkı padding */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12
                   pt-[clamp(0.75rem,2vw,1.25rem)]
                   pb-[clamp(2rem,5vw,3rem)]"
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* Sol Görsel */}
          <motion.div
            className="relative z-10 order-1 lg:order-none pr-0 lg:pr-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden p-3 rotate-[-6deg] hover:rotate-[-3deg] transition-transform duration-500">
              <div className="bg-[#0D152E] py-4 px-5 rounded-t-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#C8102E]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-6 text-sm text-white font-semibold tracking-wide">Kurumsal Panel</div>
                </div>
              </div>
              <img
                src="/foto2.png"
                alt="ERP Panel Arayüzü"
                className="w-full rounded-b-2xl object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Sağ Metin */}
          <motion.div
            className="space-y-6 pt-0 z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D152E] leading-tight tracking-tight">
              Her Adımda Yanınızda Olan <br className="hidden lg:block" />
              <span className="text-[#C8102E]">Güçlü ve Esnek ERP Altyapısı</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 max-w-xl font-normal leading-relaxed">
              Origami ERP ile iş süreçlerinizi merkezi bir sistemde birleştirin. Esnek yapısı sayesinde her sektöre uyum sağlar, büyümenize destek olur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-[#C8102E] hover:bg-[#A00D26] text-white px-10 py-4 text-base font-semibold rounded-lg shadow-md transition"
                >
                  Teklif Al
                </motion.button>
              </Link>

              <Link href="/urunler">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="border border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white px-10 py-4 text-base font-semibold rounded-lg transition"
                >
                  Ürünü İncele
                </motion.button>
              </Link>
            </div>

            <div className="text-sm text-gray-500 flex items-center gap-6 pt-2"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
