import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/ui/Hero';
import VideoBanner from './components/ui/VideoBanner';
import Partners from './components/ui/Partners';
import Solutions from './components/ui/Solutions';
import Process from './components/ui/Process';
import Products from './components/ui/Products';
import MaterialsBanner from './components/ui/MaterialsBanner';
import CoreFeature from './components/ui/CoreFeature';
import FAQ from './components/ui/FAQ';
import Stats from './components/ui/Stats';
import RequestQuote from './components/ui/RequestQuote';
import Testimonials from './components/ui/Testimonials';
import NewsAndEvents from './components/ui/NewsAndEvents';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <Hero />
      <Partners />
      <VideoBanner />
      <Solutions />
      <Process />
      <Products />
      <MaterialsBanner />
      <CoreFeature />
      <FAQ />
      <Stats />
      <RequestQuote />
      <Testimonials />
      <NewsAndEvents />
      <Footer />
    </div>
  );
}

export default App;
