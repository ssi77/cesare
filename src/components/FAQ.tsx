import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const faqs = [
  {
    q: 'Cesare è un ristorante turistico?',
    a: 'No, e non vuole esserlo. Cesare è un\'osteria di quartiere, frequentata prima di tutto dai romani che cercano un posto onesto dove mangiare come a casa. Niente menù plastificati con foto, niente prezzi gonfiati per i visitatori: solo cucina vera e prezzi giusti.',
  },
  {
    q: 'Devo prenotare per venire a cena?',
    a: 'La prenotazione è consigliata, soprattutto nel weekend e nelle sere d\'estate. Puoi scriverci un messaggio su WhatsApp o compilare il modulo di prenotazione sul sito: ti confermiamo il tavolo nel giro di poche ore. Se passi senza prenotare, faremo il possibile per farti accomodare.',
  },
  {
    q: 'Quali sono i piatti simbolo della casa?',
    a: 'La carbonara secondo la tradizione romana, la cacio e pepe, le polpette al sugo della nonna, la trippa alla romana e l\'abbacchio al forno con patate. Il menù cambia spesso seguendo la stagionalità delle materie prime che selezioniamo al mercato.',
  },
  {
    q: 'Usate prodotti locali del Lazio?',
    a: 'Sì, è uno dei nostri principi. Ci riforniamo dai mercati rionali di Roma e dai produttori del Lazio: pecorino dei Castelli, olio del Viterbese, guanciale del territorio, verdure degli agricoltori di zona. La filiera corta è anche un modo per raccontare il nostro legame con la città.',
  },
  {
    q: 'Avete opzioni per vegetariani o intolleranze?',
    a: 'Certo. Oltre ai classici romani, proponiamo piatti vegetariani di stagione e siamo felici di adattare le preparazioni per celiachia, intolleranza al lattosio o altre esigenze: basta dirci in anticipo cosa preferisci evitare e parliamo con lo chef.',
  },
  {
    q: 'Quanto costa mediamente una cena da Cesare?',
    a: 'Una cena completa — antipasto, primo, secondo, contorno, dolce e un buon bicchiere di vino locale — si aggira intorno ai 35-45 euro a persona. I vini della regione sono selezionati con cura e proposti a un rapporto qualità-prezzo che vogliamo sia onesto.',
  },
  {
    q: 'Organizzate cene private o eventi?',
    a: 'Sì. Mettiamo a disposizione il nostro spazio per cene private, celebrazioni di famiglia, piccoli eventi culturali legati alla cucina romana e collaborazioni con produttori locali. Scrivici raccontandoci cosa hai in mente: costruiamo insieme un\'esperienza su misura.',
  },
  {
    q: 'Siete aperti a pranzo e a cena?',
    a: 'Siamo aperti a cena dal martedì alla domenica. A pranzo riceviamo su prenotazione per comitive o eventi privati. Il lunedì è il giorno di riposo, come nelle vecchie osterie: anche il forno ha bisogno di respirare.',
  },
];

export default function FAQ() {
  const { ref, style } = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#25201A]">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div ref={ref} style={style} className="mb-14 md:mb-20 text-center">
          <p className="text-xs md:text-sm font-semibold text-[#D4654A] uppercase tracking-[0.3em] mb-4">
            Domande frequenti
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Tutto quello che vuoi sapere
          </h2>
          <p className="text-[#F8FAFC]/70 text-lg mt-6">
            Le risposte oneste di un'osteria che non ha niente da nascondere.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-[#1A1612] border border-white/5 rounded-sm overflow-hidden hover:border-[#D4654A]/30 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-lg font-semibold text-[#F8FAFC]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4654A] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-[#F8FAFC]/75 leading-relaxed">
                    {item.a}
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