import React from 'react';
import { Language } from '../types';
import { ArrowRight } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { ScrollReveal } from './ScrollReveal';

interface PackagesProps {
  lang: Language;
}

export const Packages: React.FC<PackagesProps> = ({ lang }) => {
  return (
    <section id="packages" className="py-24 bg-[#08172E] text-white relative border-t border-[#273349]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from Slide 10 */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="pdf-accent-bar mx-auto mb-4" />
            <div className="text-xs font-bold text-[#01BBDC] tracking-[0.25em] uppercase mb-3">
              {lang === 'en' ? 'SERVICE PACKAGES' : 'PAQUETES DE SERVICIOS'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {lang === 'en' ? 'Modular, from setup to daily ops' : 'Modulares, del inicio a la operación diaria'}
            </h2>
          </div>
        </ScrollReveal>

        {/* 3 Vertical Rounded Cards with Spotlight Micro-interactions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Card 1: Launch Package (Palette Cyan Gradient) */}
          <ScrollReveal direction="up" delay={100} duration={800} className="h-full flex">
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.2)"
              className="rounded-3xl p-6 sm:p-7 xl:p-8 bg-gradient-to-b from-[#01BBDC] via-[#008FB8] to-[#00649F] text-[#08172E] flex flex-col justify-between shadow-2xl hover:-translate-y-1.5 transition-all duration-300 w-full"
            >
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-[#08172E]/70 mb-2">
                {lang === 'en' ? 'ONE-TIME ONBOARDING' : 'MONTAJE INICIAL'}
              </div>
              <h3 className="text-3xl font-black text-[#08172E] mb-4">
                {lang === 'en' ? 'Launch Package' : 'Paquete de Lanzamiento'}
              </h3>
              <p className="text-sm text-[#08172E]/90 font-medium mb-8 pb-6 border-b border-[#08172E]/20 leading-relaxed min-h-[50px]">
                {lang === 'en'
                  ? 'For foreign companies that need to launch operations in an orderly, fast and verifiable way.'
                  : 'Para compañías extranjeras que necesitan iniciar operaciones de manera ordenada, rápida y verificable.'}
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { en: 'Creation / structuring of the local vehicle company', es: 'Creación y estructuración de la sociedad vehículo local' },
                  { en: 'Corporate, registry & accounting support', es: 'Registro mercantil, trámites DIAN (RUT) y libros' },
                  { en: 'Initial branding activities & corporate presence', es: 'Actividades iniciales de marca y presencia' },
                  { en: 'Bank account opening support (Bancolombia/BBVA)', es: 'Acompañamiento en apertura de cuentas bancarias' },
                  { en: 'Preliminary legal review of mining titles', es: 'Revisión jurídica preliminar de títulos mineros' },
                  { en: 'Initial compliance checklist & early risk audit', es: 'Checklist inicial de cumplimiento y riesgos tempranos' },
                  { en: 'Basic document organisation & secure digital repository', es: 'Organización documental básica y archivo central' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-4 h-4 rounded-full bg-[#08172E] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold shadow-sm">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#08172E] leading-tight">
                      {item[lang]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="btn-press w-full py-3.5 px-6 rounded-2xl bg-[#08172E] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:bg-[#273349] transition-colors shadow-lg"
            >
              <span>{lang === 'en' ? 'Request Launch Scope' : 'Solicitar Alcance'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </SpotlightCard>
        </ScrollReveal>

          {/* Card 2: Monthly Package (Corporate Blue to Ocean Gradient - Featured) */}
          <ScrollReveal direction="up" delay={250} duration={800} className="h-full flex">
            <div className="relative w-full h-full flex flex-col pt-3.5 lg:-translate-y-2 hover:-translate-y-3 transition-all duration-300">
              {/* Featured Badge - Outside overflow-hidden so it is 100% visible */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 px-4 py-1 rounded-full bg-[#01BBDC] text-[#08172E] text-[11px] font-black uppercase tracking-widest shadow-lg border border-[#08172E]/20 select-none pointer-events-none">
                {lang === 'en' ? 'CORE DAILY OPS' : 'OPERACIÓN DIARIA'}
              </div>

              <SpotlightCard
                spotlightColor="rgba(1, 187, 220, 0.3)"
                className="rounded-3xl p-6 sm:p-7 xl:p-8 bg-gradient-to-b from-[#00649F] via-[#004E7A] to-[#00446B] text-white flex flex-col justify-between shadow-2xl border-2 border-[#01BBDC] w-full h-full"
              >
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#01BBDC] font-bold mb-2">
                    {lang === 'en' ? 'TURNKEY RETAINER' : 'RETAINER INTEGRAL'}
                  </div>
                <h3 className="text-3xl font-black text-white mb-4">
                  {lang === 'en' ? 'Monthly Package' : 'Paquete Mensual'}
                </h3>
                <p className="text-sm text-slate-200 font-normal mb-8 pb-6 border-b border-white/20 leading-relaxed min-h-[50px]">
                  {lang === 'en'
                    ? "Daily management of the client's Colombian operation."
                    : 'Administración continua y diaria de la operación en Colombia.'}
                </p>

                <div className="space-y-3.5 mb-8">
                  {[
                    { en: 'Key legal matters for the mining sector', es: 'Asuntos jurídicos permanentes del sector minero' },
                    { en: 'Accounting & financial management (IFRS compliance)', es: 'Gestión financiera y contable (norma NIIF/IFRS)' },
                    { en: 'HR, payroll, social security & field contracts', es: 'Nómina de campo, seguridad social y contratos' },
                    { en: 'Document management & regulatory filings', es: 'Gestión documental y radicación de trámites' },
                    { en: 'Compliance tracking (legal, mining, environmental)', es: 'Monitoreo de obligaciones (cánones, pólizas, ANM)' },
                    { en: 'Monthly executive reporting to head office and board', es: 'Reportes ejecutivos mensuales a casa matriz y junta' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-4 h-4 rounded-full bg-[#01BBDC] text-[#08172E] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold shadow-sm">
                        ✓
                      </span>
                      <span className="text-xs sm:text-sm text-white font-medium leading-tight">
                        {item[lang]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="btn-press w-full py-3.5 px-6 rounded-2xl bg-[#01BBDC] text-[#08172E] font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:bg-[#38BDF8] transition-colors shadow-lg shadow-[#01BBDC]/30"
              >
                <span>{lang === 'en' ? 'Inquire on Retainer' : 'Consultar Retainer'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </SpotlightCard>
          </div>
        </ScrollReveal>

          {/* Card 3: Ad-hoc Services (Slate to Deep Core Gradient) */}
          <ScrollReveal direction="up" delay={400} duration={800} className="h-full flex">
            <SpotlightCard
              spotlightColor="rgba(1, 187, 220, 0.15)"
              className="rounded-3xl p-6 sm:p-7 xl:p-8 bg-gradient-to-b from-[#273349] to-[#08172E] text-white flex flex-col justify-between shadow-2xl border border-slate-700/80 hover:-translate-y-1.5 transition-all duration-300 w-full"
            >
              <div>
                <div className="text-xs uppercase tracking-widest text-[#718CC1] font-bold mb-2">
                  {lang === 'en' ? 'SPECIAL MANDATES' : 'MANDATOS PUNTUALES'}
                </div>
                <h3 className="text-3xl font-black text-white mb-4">
                  {lang === 'en' ? 'Ad-hoc Services' : 'Servicios Puntuales'}
                </h3>
                <p className="text-sm text-slate-300 font-normal mb-8 pb-6 border-b border-slate-700 leading-relaxed min-h-[50px]">
                  {lang === 'en'
                    ? "Project-based or activity-based services, tailored to the client's needs."
                    : 'Servicios especializados por proyecto o actividad, según las necesidades del cliente.'}
                </p>

                <div className="space-y-3.5 mb-8">
                  {[
                    { en: 'In-depth due diligence and legal/technical audits', es: 'Debida diligencia exhaustiva y auditorías técnicas' },
                    { en: 'Board and investor documents for capital raises', es: 'Documentos para juntas directivas y rondas de capital' },
                    { en: 'Policies, manuals & compliance matrices (SAGRILAFT)', es: 'Políticas corporativas, manuales y matrices de riesgo' },
                    { en: 'Commercial negotiation support (easements, drilling)', es: 'Acompañamiento en negociación de servidumbres y sondajes' },
                    { en: 'High-profile pitch decks and TSX/ASX one-pagers', es: 'Pitch decks de alto perfil y one-pagers para inversionistas' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-4 h-4 rounded-full bg-[#08172E] text-[#01BBDC] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold border border-[#01BBDC]/40">
                        ✓
                      </span>
                      <span className="text-xs sm:text-sm text-slate-200 font-medium leading-tight">
                        {item[lang]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="btn-press w-full py-3.5 px-6 rounded-2xl bg-[#273349] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:bg-[#00446B] transition-colors border border-slate-600"
              >
                <span>{lang === 'en' ? 'Request Project Quote' : 'Cotizar Proyecto'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </SpotlightCard>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
