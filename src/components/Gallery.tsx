import { useReveal } from '../hooks/useReveal';

const photos = [
  {
    prompt: 'Italian osteria interior Rome, warm wood tables, vintage framed photos on brick wall, soft amber lighting, no people, 4:3',
    className: 'col-span-1 md:col-span-2 row-span-2',
    aspect: '4/5',
  },
  {
    prompt: 'Close-up of cacio e pepe pasta on rustic ceramic plate, dark moody food photography, Rome, 1:1',
    className: 'col-span-1',
    aspect: '1/1',
  },
  {
    prompt: 'Bottle of Italian red wine Cesanese del Piglio, dark wood table, candle light, moody 1:1',
    className: 'col-span-1',
    aspect: '1/1',
  },
  {
    prompt: 'Roman trattoria exterior evening, warm light from windows, cobblestone street, vintage signage 4:3',
    className: 'col-span-1 md:col-span-2',
    aspect: '4/3',
  },
  {
    prompt: 'Italian chef hands rolling fresh pasta dough on wooden board, dramatic side lighting, 1:1',
    className: 'col-span-1',
    aspect: '1/1',
  },
  {
    prompt: 'Bowl of slow-cooked ragù sauce with fresh basil, dark rustic kitchen background, overhead shot 1:1',
    className: 'col-span-1',
    aspect: '1/1',
  },
];

export default function Gallery() {
  const { ref, style } = useReveal();

  return (
    <section id="galleria" className="py-20 md:py-32 bg-[#1A1612]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div ref={ref} style={style} className="mb-12 md:mb-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-xs md:text-sm font-semibold text-[#D4654A] uppercase tracking-[0.3em] mb-4">
                Galleria
              </p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] tracking-tight max-w-2xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                L'osteria, vista da dentro.
              </h2>
            </div>
            <p className="text-[#F8FAFC]/70 max-w-md text-base">
              Tavoli di legno consumato, luci basse, il rumore del quartiere fuori. Vieni a
              trovarci — è l'unica foto che conta davvero.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[200px] md:auto-rows-[220px]">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-sm bg-[#25201A] border border-white/5 group ${
                p.className
              }`}
            >
              <img
                src={`https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/builder/135/assets/ai-74aabb0cbd-78c4a667228a.jpg`}
                alt={`Cesare galleria ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1612]/40 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}