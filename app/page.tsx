'use client';

import { Suspense } from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import ThreeDGallery from '../components/ThreeDGallery';
import FutureSys from '../components/FutureSys';
import FutureSystwo from '../components/FutureSystwo';
import BenefitCards from '../components/BenefitCards';
import IndustriesServed from '../components/IndustriesServed';
import References from '../components/References';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={null}>
        <Header />
      </Suspense>

      <Hero />
      <FutureSys />
      <FutureSystwo />
      <BenefitCards />
      <ThreeDGallery />
      <IndustriesServed />
      <References />

      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>

      <Footer />
    </div>
  );
}
