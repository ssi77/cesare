import { Phone, Mail, MapPin } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function CTA() {
  const { ref, style } = useReveal();

  return (
    <section id="prenota" className="py-20 md:py-32 bg-[#1A1612] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4654A]/10 rounded-full blur-3xl" />
      </div>

      <div
        ref={ref}
        style={style}
        className="relative max-w-5xl mx-auto px-4 md:px-6 text-center"
      >
        <p className="text-xs md:text-sm font-semibold text-[#D4654A] uppercase tracking-[0.3em] mb-6">
          Vi aspettiamo
        </p>
        <h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F8FAFC] tracking-tight leading-[1.05]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Prenotate un tavolo
          <br />
          a <em className="text-[#D4654A] not-italic">Piazza Risorgimento</em>.
        </h2>
        <p className="text-[#F8FAFC]/75 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
          Telefonateci, scriveteci su WhatsApp, o passate di persona per i prossimi tre
          giorni. Per gruppi o eventi privati, scriveteci con un po' di anticipo.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+390639372001"
            className="w-full sm:w-auto bg-[#D4654A] hover:bg-[#D4654A]/90 text-white font-semibold px-8 py-4 rounded-sm flex items-center justify-center gap-2 shadow-lg shadow-[#D4654A]/30"
          >
            <Phone className="w-5 h-5" />
            Chiama · 06 3937 2001
          </a>
          <a
            href="mailto:ciao@cesare-roma.it"
            className="w-full sm:w-auto border border-[#F8FAFC]/20 hover:border-[#D4654A] hover:text-[#D4654A] text-[#F8FAFC] font-semibold px-8 py-4 rounded-sm flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            ciao@cesare-roma.it
          </a>
        </div>

        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#D4654A] mt-0.5 shrink-0" />
            <div>
              <div className="text-xs uppercase tracking-widest text-[#94A3B8]">Indirizzo</div>
              <div className="text-[#F8FAFC] font-semibold mt-1">Piazza Risorgimento, 14</div>
              <div className="text-[#F8FAFC]/60 text-sm">00192 Roma · Prati</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-[#D4654A] mt-0.5 shrink-0" />
            <div>
              <div className="text-xs uppercase tracking-widest text-[#94A3B8]">Telefono</div>
              <div className="text-[#F8FAFC] font-semibold mt-1">06 3937 2001</div>
              <div className="text-[#F8FAFC]/60 text-sm">WhatsApp attivo</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-[#D4654A] mt-0.5 shrink-0" />
            <div>
              <div className="text-xs uppercase tracking-widest text-[#94A3B8]">Email</div>
              <div className="text-[#F8FAFC] font-semibold mt-1">ciao@cesare-roma.it</div>
              <div className="text-[#F8FAFC]/60 text-sm">Eventi: eventi@cesare-roma.it</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}