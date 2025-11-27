import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { FeatureBento } from './components/FeatureBento';
import { Process } from './components/Process';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-architop-black min-h-screen text-white selection:bg-architop-neon selection:text-black">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <FeatureBento />
        <Process />
      </main>
      <Footer />
    </div>
  );
}

export default App;