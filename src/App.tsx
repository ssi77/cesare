import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MenuPreview from './components/MenuPreview';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1A1612] text-[#F8FAFC] antialiased" style={{ fontFamily: 'var(--font-body)' }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MenuPreview />
        <Stats />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}