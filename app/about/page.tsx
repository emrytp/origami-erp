'use client';

import Header from '../../components/Header';
import AboutUs from '../../components/AboutUs';
import ProductModules from '../../components/ProductModules';
import DemoProcess from "@/components/DemoProcess";
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutUs />
      <ProductModules />
      <DemoProcess />
      <Footer />
    </>
  );
}
