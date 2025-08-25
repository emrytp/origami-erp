'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0D152E] text-white px-6">
      <h1 className="text-9xl font-extrabold">404</h1>
      <p className="text-2xl mt-4">Aradığın sayfa bulunamadı.</p>

      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
      >
        Ana Sayfaya Git
      </Link>
    </div>
  );
}
