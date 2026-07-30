import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

const LOGO = 'https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/builder/135/assets/ai-e6e6e53edd.png';

export default function Footer() {
  return (
    <footer className="bg-[#0F0D0A] border-t border-white/5 pt-16 md:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pb-12 border-b border-white/10">
          <div>
            <h3
              className="text-3xl md:text-4xl font-bold text-[#F8FAFC] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              La lettera di Cesare.
            </h3>
            <p className="text-[#F8FAFC]/70 mt-3 max-w-md leading-relaxed">
              Una volta al mese, una mail con il menù della stagione, i vini nuovi e le
              cene a tema. Niente spam, niente pubblicità. Solo la nostra osteria.
            </p>
          </div>
          <form
            data-creafi-newsletter
            className="flex flex-col sm:flex-row gap-3 lg:items-end"
          >
            <div className="flex-1">
              <label
                htmlFor="footer-email"
                className="block text-xs uppercase tracking-widest text-[#94A3B8] mb-2"
              >
                La vostra email
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                required
                placeholder="nome@esempio.it"
                className="w-full bg-[#1A1612] border border-white/10 focus:border-[#D4654A] outline-none rounded-sm px-4 py-3.5 text-[#F8FAFC] placeholder:text-[#94A3B8]/60 transition-colors min-h-[44px]"
              />
              <input
                type="text"
                name="website"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="bg-[#D4654A] hover:bg-[#D4654A]/90 text-white font-semibold px-6 py-3.5 rounded-sm min-h-[44px] whitespace-nowrap"
            >
              Iscrivetemi
            </button>
          </form>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={LOGO}
                alt="Cesare"
                className="h-10 w-10 rounded-sm bg-white/5 p-1 object-contain"
              />
              <div>
                <div
                  className="text-[#F8FAFC] text-lg font-bold"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Cesare
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#94A3B8]">
                  Osteria · Roma
                </div>
              </div>
            </div>
            <p className="text-[#F8FAFC]/60 text-sm leading-relaxed mt-5 max-w-xs">
              Un'osteria di famiglia a Piazza Risorgimento dal 1978. Cucina romana,
              vini del Lazio, niente fronzoli.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-[#D4654A] text-[#94A3B8] hover:text-white rounded-sm transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-[#D4654A] text-[#94A3B8] hover:text-white rounded-sm transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#F8FAFC] font-semibold text-sm uppercase tracking-widest mb-5">
              L'osteria
            </h4>
            <ul className="space-y-3 text-sm text-[#F8FAFC]/70">
              <li><a href="#storia" className="hover:text-[#D4654A]">La storia</a></li>
              <li><a href="#menu" className="hover:text-[#D4654A]">Il menù</a></li>
              <li><a href="#galleria" className="hover:text-[#D4654A]">Galleria</a></li>
              <li><a href="#recensioni" className="hover:text-[#D4654A]">Recensioni</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F8FAFC] font-semibold text-sm uppercase tracking-widest mb-5">
              Info
            </h4>
            <ul className="space-y-3 text-sm text-[#F8FAFC]/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#D4654A] shrink-0" />
                <span>Piazza Risorgimento 14<br />00192 Roma · Prati</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4654A] shrink-0" />
                <a href="tel:+390639372001" className="hover:text-[#D4654A]">06 3937 2001</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4654A] shrink-0" />
                <a href="mailto:ciao@cesare-roma.it" className="hover:text-[#D4654A]">ciao@cesare-roma.it</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F8FAFC] font-semibold text-sm uppercase tracking-widest mb-5">
              Quando
            </h4>
            <ul className="space-y-3 text-sm text-[#F8FAFC]/70">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-[#D4654A] shrink-0" />
                <span>Mar – Dom<br />19:30 – 23:00</span>
              </li>
              <li className="text-[#94A3B8] text-xs italic mt-2">
                Lunedì chiusi · Pranzo su richiesta
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© {new Date().getFullYear()} Osteria Cesare · Piazza Risorgimento, Roma · P.IVA 01234567890</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#D4654A]">Privacy</a>
            <a href="#" className="hover:text-[#D4654A]">Cookie</a>
            <a href="#" className="hover:text-[#D4654A]">Note legali</a>
          </div>
        </div>
      </div>
    </footer>
  );
}