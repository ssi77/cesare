import { ArrowDown, MapPin, Clock } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  const { ref, style } = useReveal();

  return (
    <section
      id="top"
      className="relative min-h-screen pt-24 md:pt-32 pb-16 overflow-hidden bg-[#1A1612]"
    >
      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-[#D4654A]/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[460px] h-[460px] bg-[#7A8B5C]/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(248,250,252,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,0.6) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div
        ref={ref}
        style={style}
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6"
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-[#D4654A]" />
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#D4654A] font-semibold">
            Osteria Romana · dal 1978
          </span>
        </div>

        {/* Main grid: text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: headline + cta */}
          <div className="lg:col-span-6 xl:col-span-7">
            <h1
              className="text-[#F8FAFC] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              La cucina
              <br />
              di <em className="text-[#D4654A] not-italic">Cesare</em>,
              <br />
              <span className="text-[#F8FAFC]/70">come una volta.</span>
            </h1>

            <p className="mt-7 text-[#F8FAFC]/75 text-lg md:text-xl leading-relaxed max-w-md">
              A due passi da Piazza Risorgimento, una trattoria di famiglia che serve la
              Roma vera. Paste fatte in casa, ragù lento, vini del Lazio.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#prenota"
                className="bg-[#D4654A] hover:bg-[#D4654A]/90 text-white font-semibold px-7 py-3.5 rounded-sm transition-colors text-center shadow-lg shadow-[#D4654A]/20"
              >
                Prenota un tavolo
              </a>
              <a
                href="#menu"
                className="border border-[#F8FAFC]/20 hover:border-[#D4654A] hover:text-[#D4654A] text-[#F8FAFC] font-semibold px-7 py-3.5 rounded-sm transition-colors text-center"
              >
                Scopri il menù
              </a>
            </div>

            {/* Quick info tags */}
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="flex items-center gap-1.5 text-xs text-[#94A3B8] bg-white/5 border border-white/8 px-3 py-1.5 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#D4654A]" />
                Prati · Roma
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#94A3B8] bg-white/5 border border-white/8 px-3 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5 text-[#D4654A]" />
                Mar – Dom · 19:30
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#94A3B8] bg-white/5 border border-white/8 px-3 py-1.5 rounded-full">
                <ArrowDown className="w-3.5 h-3.5 text-[#D4654A]" />
                Solo su prenotazione
              </span>
            </div>
          </div>

          {/* Right: hero video */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            {/* Accent frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#D4654A]/20 rounded-sm pointer-events-none z-0" />
            <div className="relative z-10 overflow-hidden rounded-sm shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
              <video
                src="https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/builder/135/assets/ai-ac8521a68b-197f57c00c63.mp4"
                autoPlay
                loop
                muted
                playsInline
                poster="https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/builder/135/assets/ai-eee2876994-5c16b740442b.jpg"
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
              {/* Overlay gradient at bottom for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1612]/60 via-transparent to-transparent pointer-events-none" />
              {/* Caption badge */}
              <div className="absolute bottom-5 left-5 bg-[#1A1612]/80 backdrop-blur-sm border border-white/10 rounded-sm px-4 py-2">
                <p className="text-[#E8D9B5] text-sm font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                  Piazza Risorgimento, 14
                </p>
                <p className="text-[#94A3B8] text-xs mt-0.5">Prati · Roma</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info strip */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#D4654A] mt-0.5 shrink-0" />
            <div>
              <div className="text-xs uppercase tracking-widest text-[#94A3B8] mb-1">Dove</div>
              <div className="text-[#F8FAFC] font-semibold">Piazza Risorgimento, 14</div>
              <div className="text-[#F8FAFC]/60 text-sm">00192 Roma · Prati</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#D4654A] mt-0.5 shrink-0" />
            <div>
              <div className="text-xs uppercase tracking-widest text-[#94A3B8] mb-1">Quando</div>
              <div className="text-[#F8FAFC] font-semibold">Martedì – Domenica · 19:30 – 23:00</div>
              <div className="text-[#F8FAFC]/60 text-sm">Pranzo su richiesta</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ArrowDown className="w-5 h-5 text-[#D4654A] mt-0.5 shrink-0" />
            <div>
              <div className="text-xs uppercase tracking-widest text-[#94A3B8] mb-1">Come</div>
              <div className="text-[#F8FAFC] font-semibold">Solo su prenotazione</div>
              <div className="text-[#F8FAFC]/60 text-sm">+39 06 3937 2001</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}