import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const LOGO = 'https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/builder/135/assets/ai-e6e6e53edd.png';

const links = [
  { href: '#storia', label: 'La Storia' },
  { href: '#menu', label: 'Il Menù' },
  { href: '#galleria', label: 'Galleria' },
  { href: '#recensioni', label: 'Recensioni' },
  { href: '#faq', label: 'Info' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#1A1612]/95 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3 group" aria-label="Cesare - Home">
            <img
              src={LOGO}
              alt="Cesare"
              className="h-10 w-10 md:h-11 md:w-11 rounded-sm object-contain bg-white/5 p-1"
            />
            <div className="leading-none">
              <div
                className="text-[#F8FAFC] text-lg md:text-xl font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Cesare
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#94A3B8] mt-0.5">
                Osteria · Roma
              </div>
            </div>
          </a>

          {/* Center links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#F8FAFC]/80 hover:text-[#D4654A] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+390639372001"
              className="text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              06 3937 2001
            </a>
            <a
              href="#prenota"
              className="bg-[#D4654A] hover:bg-[#D4654A]/90 text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors shadow-lg shadow-[#D4654A]/20"
            >
              Prenota un tavolo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden w-11 h-11 flex items-center justify-center bg-[#1A1612] border border-white/10 rounded-sm"
            aria-label="Apri menu"
          >
            <Menu className="w-5 h-5 text-[#F8FAFC]" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-[300px] bg-[#1A1612] border-l border-white/10 flex flex-col">
            <div className="h-16 px-5 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-2">
                <img src={LOGO} alt="Cesare" className="h-8 w-8 rounded-sm bg-white/5 p-1" />
                <span
                  className="text-[#F8FAFC] font-bold"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Cesare
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-[#F8FAFC]"
                aria-label="Chiudi menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 px-5 py-6 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[#F8FAFC]/80 hover:text-[#D4654A] py-3 border-b border-white/5 text-base"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="p-5 border-t border-white/5 flex flex-col gap-3">
              <a
                href="tel:+390639372001"
                className="flex items-center justify-center gap-2 text-sm text-[#F8FAFC] border border-white/10 py-3 rounded-sm"
              >
                <Phone className="w-4 h-4" />
                06 3937 2001
              </a>
              <a
                href="#prenota"
                onClick={() => setOpen(false)}
                className="bg-[#D4654A] text-white text-center font-semibold py-3 rounded-sm"
              >
                Prenota un tavolo
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}