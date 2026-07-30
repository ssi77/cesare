import { useReveal } from '../hooks/useReveal';

const stats = [
  { value: '47', label: 'Anni a Piazza Risorgimento', suffix: '' },
  { value: '12', label: 'Piatti in carta', suffix: '' },
  { value: '6', label: 'Produttori del Lazio', suffix: '' },
  { value: '30', label: 'Coperti a sera', suffix: '' },
];

export default function Stats() {
  const { ref, style } = useReveal();

  return (
    <section className="relative py-20 md:py-28 bg-[#1A1612] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(248,250,252,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div ref={ref} style={style}>
              <p className="text-xs md:text-sm font-semibold text-[#D4654A] uppercase tracking-[0.3em] mb-4">
                I numeri di Cesare
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#F8FAFC] tracking-tight mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Quarantasette anni. Pochi piatti. Tanta cura.
              </h2>
              <p className="text-[#F8FAFC]/70 text-base leading-relaxed">
                Non cerchiamo la quantità. La nostra forza è restare piccoli — e farlo bene, ogni sera, da tre generazioni.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative h-72 md:h-96 overflow-hidden rounded-sm">
              <img
                src="https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/builder/135/assets/ai-74aabb0cbd-78c4a667228a.jpg"
                alt="Interno della osteria Cesare"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1612] via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
          {stats.map((s, i) => (
            <div key={i} className="bg-[#1A1612] p-6 md:p-8 text-center">
              <div
                className="text-5xl md:text-6xl font-bold text-[#D4654A] tabular-nums tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {s.value}
                <span className="text-3xl md:text-4xl">{s.suffix}</span>
              </div>
              <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#94A3B8] mt-3">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}