import { Flame, Wheat, Wine, Leaf, Heart, Users } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const features = [
  {
    icon: Flame,
    title: 'Cucina alla brace',
    desc: 'Il fuoco è il cuore della nostra cucina. Carni, verdure e pesce cotti sulla brace come si faceva una volta.',
    span: 'md:col-span-2',
  },
  {
    icon: Wheat,
    title: 'Pasta fatta in casa',
    desc: 'Tirata a mano ogni mattina dalla signora Maria. Tonnarelli, rigatoni, fettuccine — la differenza si sente.',
    span: 'md:col-span-1',
  },
  {
    icon: Wine,
    title: 'Vini del Lazio',
    desc: 'Cesanese, Frascati, Montepulciano dei Castelli. Solo vini del territorio, scelti con cura.',
    span: 'md:col-span-1',
  },
  {
    icon: Leaf,
    title: 'Mercato rionale',
    desc: "Ogni mattina alle 6 siamo a Campo de' Fiori. Quello che troviamo decide il menù della giornata.",
    span: 'md:col-span-1',
  },
  {
    icon: Heart,
    title: 'Famiglia dal 1978',
    desc: 'Tre generazioni, una sola ricetta: rispetto per la materia prima e per chi siede a tavola.',
    span: 'md:col-span-1',
  },
  {
    icon: Users,
    title: 'Trenta coperti, niente di più',
    desc: 'Piccoli per scelta. Così il cameriere ricorda il tuo nome e il vino che hai bevuto la volta scorsa.',
    span: 'md:col-span-2',
  },
];

export default function Features() {
  const { ref, style } = useReveal();

  return (
    <section id="filosofia" className="py-20 md:py-32 bg-[#1A1612]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div ref={ref} style={style} className="mb-14 md:mb-20">
          <p className="text-xs md:text-sm font-semibold text-[#D4654A] uppercase tracking-[0.3em] mb-4">
            La nostra filosofia
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] tracking-tight max-w-3xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Sei cose che facciamo, e una che non facciamo.
          </h2>
          <p className="text-[#F8FAFC]/70 text-lg mt-6 max-w-2xl">
            Quella che non facciamo è il menù turistico. Il resto lo raccontano i piatti e le persone che li cucinano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className={`group relative overflow-hidden bg-[#25201A] border border-white/5 rounded-sm hover:border-[#D4654A]/40 transition-all duration-500 ${f.span}`}
              >
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-sm bg-[#D4654A]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4654A] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#D4654A] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold text-[#F8FAFC] tracking-tight mb-3"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-[#F8FAFC]/70 text-base leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}