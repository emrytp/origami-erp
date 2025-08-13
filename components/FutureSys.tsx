'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-white to-gray-50 overflow-hidden flex items-center">
      {/* Blur arka planlar */}
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

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Sol Metin */}
          <motion.div
            className="space-y-8 pt-10 z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D152E] leading-tight tracking-tight">
              İşinizi Geleceğe Taşıyacak <br className="hidden lg:block" />
              <span className="text-[#C8102E]">Akıllı Yazılım</span> Çözümleri
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 max-w-xl font-normal leading-relaxed">
              Origami Yazılım, ERP teknolojisini sadeleştirerek iş süreçlerinizi hızlandırır. Yalnızca bir yazılım değil, sürdürülebilir dijital dönüşüm ortağınız.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-[#C8102E] hover:bg-[#A00D26] text-white px-10 py-4 text-base font-semibold rounded-lg shadow-md transition"
              >
                Teklif Al
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                className="border border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white px-10 py-4 text-base font-semibold rounded-lg transition"
              >
                Ürünü İncele
              </motion.button>
            </div>

            <div className="text-sm text-gray-500 flex items-center gap-6 pt-4">
              <span>✅ 500+ Mutlu Müşteri</span>
              <span>💡 7/24 Canlı Destek</span>
            </div>
          </motion.div>

          {/* Sağ Görsel */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: 50, rotate: 3 }} // Başlangıçta sağa yatık
            animate={{ opacity: 1, x: 0, rotate: 3 }} // Yüklenince de yatık kalır
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Rozet */}
            <div className="absolute top-4 right-4 bg-[#C8102E] text-white px-4 py-1 text-xs font-bold rounded-full shadow-md z-20">
              💡 Modern Arayüz
            </div>

            <motion.div
              whileHover={{ rotate: 5, scale: 1.02 }} // Hover'da biraz daha yatıyor
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden p-3"
            >
              <div className="bg-[#0D152E] py-4 px-5 rounded-t-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#C8102E]"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-6 text-sm text-white font-semibold tracking-wide">Kurumsal Panel</div>
                </div>
              </div>
              <img
                src="/hero.png"
                alt="ERP Panel Arayüzü"
                className="w-full rounded-b-2xl object-cover object-top"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
