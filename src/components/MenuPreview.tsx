import { useReveal } from '../hooks/useReveal';

const piatti = [
  {
    nome: 'Tonnarelli cacio e pepe',
    desc: 'Pasta all\'uovo tirata a mano, pecorino romano DOP, pepe nero di Sarawak.',
    prezzo: '14',
  },
  {
    nome: 'Rigatoni al ragù di Cesare',
    desc: 'Ragù di manzo e maiale cotto cinque ore, pomodoro San Marzano, soffritto di sedano e cipolla.',
    prezzo: '16',
  },
  {
    nome: 'Trippa alla romana',
    desc: 'Trippa di vitello, sugo di pomodoro, pecorino, mentuccia. La ricetta della nonna.',
    prezzo: '15',
  },
  {
    nome: 'Saltimbocca alla romana',
    desc: 'Fettine di vitello, prosciutto di Parma, salvia, burro, vino bianco.',
    prezzo: '22',
  },
  {
    nome: 'Carciofi alla giudia',
    desc: 'Quando sono di stagione, li facciamo così. Croccanti fuori, teneri dentro.',
    prezzo: '12',
  },
  {
    nome: 'Tiramisù di casa',
    desc: 'Mascarpone, savoiardi, caffè, uova, Marsala. Quello vero.',
    prezzo: '7',
  },
];

export default function MenuPreview() {
  const { ref, style } = useReveal();

  return (
    <section id="menu" className="py-20 md:py-32 bg-[#25201A] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div ref={ref} style={style}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
            <div className="lg:col-span-5">
              <p className="text-xs md:text-sm font-semibold text-[#D4654A] uppercase tracking-[0.3em] mb-4">
                Il menù
              </p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                La carta
                <br />
                di oggi.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-4">
              <p className="text-[#F8FAFC]/80 text-lg leading-relaxed">
                Pochi piatti, fatti bene. La carta cambia con le stagioni e con quello che
                troviamo al mercato la mattina. Se volete sapere cosa c'è oggi, chiamateci.
              </p>
              <p className="text-[#94A3B8] text-sm mt-4 italic">
                * Il menù sottostante è un estratto. Quello vero lo scriviamo a mano ogni
                mattina sulla lavagna.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {piatti.map((p, i) => (
              <div
                key={p.nome}
                className="group py-6 border-b border-white/5 flex items-start justify-between gap-6 hover:border-[#D4654A]/40 transition-colors"
              >
                <div className="flex-1">
                  <h3
                    className="text-[#F8FAFC] text-lg md:text-xl font-bold tracking-tight group-hover:text-[#D4654A] transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {p.nome}
                  </h3>
                  <p className="text-[#F8FAFC]/60 text-sm mt-1.5 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div
                    className="text-2xl font-bold text-[#D4654A] tabular-nums"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    €{p.prezzo}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-white/10">
            <p className="text-[#F8FAFC]/70 text-sm">
              Coperto €3 · Acqua e vino esclusi · Menù degustazione €45 a persona
            </p>
            <a
              href="#prenota"
              className="bg-[#D4654A] hover:bg-[#D4654A]/90 text-white text-sm font-semibold px-6 py-3 rounded-sm"
            >
              Prenota per stasera
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}