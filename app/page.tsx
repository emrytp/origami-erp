
'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import BenefitCards from '../components/BenefitCards';
import StatsSection from '../components/StatsSection';
import ProductModules from '../components/ProductModules';
import IndustriesServed from '../components/IndustriesServed';
import DemoProcess from '../components/DemoProcess';
import IntegrationPartners from '../components/IntegrationPartners';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import QuickQuote from '../components/QuickQuote';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BenefitCards />
      <StatsSection />
      <ProductModules />
      <IndustriesServed />
      <DemoProcess />
      <IntegrationPartners />
      <FAQ />
      <Testimonials />
      <QuickQuote />
      <ContactForm />
      <Footer />
    </div>
  );
}
