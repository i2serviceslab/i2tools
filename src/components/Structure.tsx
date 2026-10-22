import React from 'react';
import { Language } from '../types';
import { Users, Compass } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { ScrollReveal } from './ScrollReveal';

interface StructureProps {
  lang: Language;
}

export const Structure: React.FC<StructureProps> = ({ lang }) => {
  const pillars = [
    {
      title: { en: 'Legal Services', es: 'Servicios Legales' },
      items: {
        en: ['Corporate & contracts', 'Labour & employment', 'Mining & environmental', 'Title protection & ANM'],
        es: ['Corporativo y contratos', 'Laboral y nómina', 'Minero y ambiental', 'Defensa de títulos ANM']
      }
    },
    {
      title: { en: 'Financial & Accounting', es: 'Financiera y Contable' },
      items: {
        en: ['IFRS Accounting', 'Tax & DIAN filings', 'Payroll & social security', 'Corporate banking', 'Board reporting'],
        es: ['Contabilidad NIIF', 'Impuestos y DIAN', 'Nómina de campo', 'Banca corporativa', 'Reportes a junta']
      }
    },
    {
      title: { en: 'Communications & Brand', es: 'Comunicaciones y Marca' },
      items: {
        en: ['Brand & IR narrative', 'TSX / ASX pitch decks', 'Content & field photo', 'PDAC events & networking', 'Crisis protocols'],
        es: ['Narrativa de marca e IR', 'Pitch decks TSX / ASX', 'Fotografía en terreno', 'Eventos PDAC', 'Protocolos de crisis']
      }
    },
    {
      title: { en: 'Project Management', es: 'Gestión de Proyectos' },
      items: {
        en: ['Master timelines', 'Deliverable milestones', 'Executive reporting', 'Operational risk matrices'],
        es: ['Cronogramas maestros', 'Hitos y entregables', 'Reportes a matriz', 'Matrices de riesgo']
      }
    },
    {
      title: { en: 'Technology & Automation', es: 'Tecnología y Automatización' },
      items: {
        en: ['Custom AI & agents', 'CRM & stakeholders', 'Web dashboards', 'Process automation', 'Custom dev'],
        es: ['Agentes de IA a medida', 'CRM de grupos de interés', 'Tableros web', 'Automatización de procesos', 'Desarrollo propio']
      }
    }
  ];

  return (
    <section id="structure" className="py-24 bg-[#273349] text-white relative border-t border-slate-700/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from Slide 5 */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="pdf-accent-bar mx-auto mb-4" />
            <div className="text-xs font-bold text-[#01BBDC] tracking-[0.25em] uppercase font-mono mb-3">
              {lang === 'en' ? 'STRUCTURE' : 'ESTRUCTURA'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              {lang === 'en' ? "How we're organized" : 'Cómo estamos organizados'}
            </h2>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#08172E] border border-[#01BBDC]/30 text-sm font-semibold text-[#01BBDC] shadow-md">
              <span>{lang === 'en' ? 'Strategic Direction' : 'Dirección Estratégica'}</span>
              <span className="text-[#718CC1]">/</span>
              <span>{lang === 'en' ? 'Project Coordination' : 'Coordinación de Proyectos'}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 5 Pillars Grid matching Slide 5 with Spotlight effect and Staggered Scroll Entry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {pillars.map((pillar, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 80} duration={650}>
              <SpotlightCard
                className="rounded-2xl bg-[#08172E] border border-slate-700/80 flex flex-col hover:border-[#01BBDC] transition-all duration-300 shadow-xl group hover:-translate-y-1.5 h-full"
              >
                {/* Pillar Header with Blue Gradient from exact palette */}
                <div className="p-4 bg-gradient-to-r from-[#00649F]/30 via-[#00446B]/20 to-transparent border-b border-slate-800">
                  <div className="text-[10px] font-mono text-[#01BBDC] font-bold uppercase mb-1">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white leading-tight group-hover:text-[#01BBDC] transition-colors">
                    {pillar.title[lang]}
                  </h3>
                </div>

                {/* Items List */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2.5">
                  <ul className="space-y-2 text-xs text-slate-300">
                    {pillar.items[lang].map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#01BBDC] mt-1.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Dual Banners: Clients We Serve & Allied Consultants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          <ScrollReveal direction="up" delay={200} duration={750}>
            <SpotlightCard className="relative overflow-hidden p-7 sm:p-8 rounded-2xl bg-[#08172E] border border-slate-700/80 shadow-xl h-full group hover:border-[#01BBDC]/50 transition-colors">
              {/* Bleed Watermark / Icono sangrado al espacio */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 text-[#01BBDC]/[0.05] group-hover:text-[#01BBDC]/[0.12] group-hover:scale-105 transition-all duration-500 pointer-events-none select-none">
                <Compass className="w-full h-full stroke-[1.2]" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#01BBDC]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#01BBDC] font-bold">
                    {lang === 'en' ? 'CLIENTS WE SERVE' : 'CLIENTES QUE ATENDEMOS'}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {lang === 'en'
                    ? 'Foreign junior exploration companies (Canadian & Australian) launching, structuring or consolidating operations in Colombia.'
                    : 'Compañías junior de exploración extranjeras (canadienses y australianas) que inician, estructuran o consolidan operaciones en Colombia.'}
                </p>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={320} duration={750}>
            <SpotlightCard className="relative overflow-hidden p-7 sm:p-8 rounded-2xl bg-[#08172E] border border-slate-700/80 shadow-xl h-full group hover:border-[#01BBDC]/50 transition-colors">
              {/* Bleed Watermark / Icono sangrado al espacio */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 text-[#01BBDC]/[0.05] group-hover:text-[#01BBDC]/[0.12] group-hover:scale-105 transition-all duration-500 pointer-events-none select-none">
                <Users className="w-full h-full stroke-[1.2]" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#01BBDC]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#01BBDC] font-bold">
                    {lang === 'en' ? 'ALLIED CONSULTANTS' : 'CONSULTORES ALIADOS'}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {lang === 'en'
                    ? 'External specialists engaged by project: geologists, environmental engineers, biologists, and ecologists.'
                    : 'Especialistas externos vinculados por proyecto: geólogos, ingenieros ambientales, biólogos y ecólogos.'}
                </p>
              </div>
            </SpotlightCard>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
