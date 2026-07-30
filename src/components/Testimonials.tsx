import { Star } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const recensioni = [
  {
    testo:
      'Sono romano, vivo a Trastevere da trent\'anni. Cesare è il posto dove torno quando voglio mangiare come mia nonna. Il ragù è un ricordo d\'infanzia servito nel piatto.',
    nome: 'Marco De Santis',
    ruolo: 'Romano, cliente da 12 anni',
    initials: 'M',
  },
  {
    testo:
      'We came here on a recommendation from our hotel concierge, expecting tourist food. We were so wrong. The cacio e pepe was the best we ate in two weeks in Italy. The owner sat with us for ten minutes after dinner.',
    nome: 'Sarah Whitman',
    ruolo: 'Traveler from Boston',
    initials: 'S',
  },
  {
    testo:
      'Locale senza fronzoli, cucina vera. La trippa alla romana come deve essere, il vino del territorio, il cameriere che ti accoglie come uno di casa. Questo è il senso dell\'ospitalità romana.',
    nome: 'Giulia Mancini',
    ruolo: 'Critica gastronomica, Gambero Rosso',
    initials: 'G',
  },
];

export default function Testimonials() {
  const { ref, style } = useReveal();

  return (
    <section id="recensioni" className="py-20 md:py-32 bg-[#25201A] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div ref={ref} style={style}>
          <div className="max-w-3xl mb-14">
            <p className="text-xs md:text-sm font-semibold text-[#D4654A] uppercase tracking-[0.3em] mb-4">
              Recensioni
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Chi viene,
              <br />
              torna.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {recensioni.map((r) => (
              <figure
                key={r.nome}
                className="bg-[#1A1612] border border-white/5 rounded-sm p-7 md:p-8 flex flex-col"
              >
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#D4654A] text-[#D4654A]"
                    />
                  ))}
                </div>
                <blockquote
                  className="text-[#F8FAFC]/90 leading-relaxed flex-1 text-base md:text-[17px]"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                >
                  "{r.testo}"
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#D4654A]/15 text-[#D4654A] flex items-center justify-center font-bold">
                    {r.initials}
                  </div>
                  <div>
                    <div className="text-[#F8FAFC] font-semibold text-sm">
                      {r.nome}
                    </div>
                    <div className="text-[#94A3B8] text-xs">{r.ruolo}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}