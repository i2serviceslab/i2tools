import React, { useState } from 'react';
import { Language } from '../types';
import { ArrowRight, ChevronLeft, ChevronRight, Compass, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface PracticeAreasProps {
  lang: Language;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const areas = [
    {
      id: 'legal',
      shortName: { en: 'Legal Services', es: 'Servicios Legales' },
      tagline: { en: 'Mining & Corporate Law', es: 'Derecho Minero & Corporativo' },
      name: { en: 'Legal Services', es: 'Servicios Legales' },
      image: '/extracted/img_3.jpg',
      imageAlt: 'Legal and mining regulatory compliance',
      caption: 'CORPORATE, MINING TITLES & ENVIRONMENTAL LAW',
      points: [
        {
          en: 'Corporate & company law: incorporation, bylaw amendments, minutes, corporate governance, shareholder disputes, and filings before chambers of commerce and superintendencies.',
          es: 'Derecho comercial y societario: constitución de sociedades, reformas estatutarias, actas, gobierno corporativo y trámites ante cámaras de comercio y superintendencias.'
        },
        {
          en: 'Corporate compliance (SAGRILAFT / AML-CFT): due diligence on clients and suppliers, beneficial-owner identification, restrictive-list and PEP screening, anti-bribery, codes of ethics, and whistleblowing channels.',
          es: 'Cumplimiento corporativo (SAGRILAFT / LA-FT): debida diligencia de clientes y proveedores, beneficiarios finales, listas restrictivas, prevención de soborno y líneas éticas.'
        },
        {
          en: 'Contract & commercial law: drafting, review, negotiation and administration of commercial and service contracts, including supply, civil works, lease, easements, and joint ventures.',
          es: 'Derecho contractual y comercial: redacción y negociación de contratos de obra civil, servidumbres de paso, arrendamiento, acuerdos de confidencialidad y colaboración.'
        },
        {
          en: 'Labour & social security law: employment contracts, payroll, shifts and field hours, social security, disciplinary processes, internal regulations, and prevention of labour contingencies.',
          es: 'Derecho laboral y seguridad social: contratación de personal, jornadas y turnos de campo, nómina, reglamento interno de trabajo y mitigación de contingencias.'
        },
        {
          en: 'Mining & environmental law: application and management of mining titles, PTO and filings before the ANM, environmental licensing and natural-resource permits, surface fees, insurance bonds, and legal audit of concession files.',
          es: 'Derecho minero y ambiental: solicitud y gestión de títulos mineros, PTO ante la ANM, licenciamiento ambiental, seguimiento de cánones superficiarios, pólizas y defensa jurídica de expedientes.'
        }
      ]
    },
    {
      id: 'finance',
      shortName: { en: 'Finance & Tax', es: 'Finanzas & Impuestos' },
      tagline: { en: 'IFRS & Treasury Management', es: 'NIIF & Gestión de Tesorería' },
      name: { en: 'Financial, Accounting, Tax & Administrative', es: 'Financiera, Contable, Tributaria y Administrativa' },
      image: '/extracted/img_4.jpg',
      imageAlt: 'Financial management and IFRS accounting',
      caption: 'IFRS AUDIT-READY TREASURY & TAXATION',
      points: [
        {
          en: 'Initial administrative structure and definition of roles and operational responsibilities.',
          es: 'Estructura administrativa inicial y definición clara de roles y responsabilidades operativas.'
        },
        {
          en: 'Accounting system configured to Colombian regulations and IFRS framework defined for parent company consolidation.',
          es: 'Sistema contable configurado bajo normativa colombiana y NIIF / IFRS listo para consolidación con casa matriz.'
        },
        {
          en: 'Daily financial, accounting and tax management: periodic obligations, payments, accounts receivable and payable, and monthly statements.',
          es: 'Gestión diaria contable y tributaria: cumplimiento ante la DIAN, pagos a proveedores, tesorería y estados financieros mensuales.'
        },
        {
          en: 'Bank account opening and review, authorized signatories and corporate approval limits across Tier-1 institutions.',
          es: 'Apertura y revisión de cuentas bancarias corporativas, firmas autorizadas y matrices de aprobación en Bancolombia y BBVA.'
        },
        {
          en: 'Foreign currency monetization and central bank exchange balance registration (Banco de la República).',
          es: 'Monetización ágil de divisas y registro de operaciones cambiarias ante el Banco de la República.'
        },
        {
          en: 'Administrative coordination with suppliers, field contractors, and third parties.',
          es: 'Coordinación administrativa integral con proveedores, contratistas de perforación y aliados locales.'
        },
        {
          en: 'Human resources: support in selection and hiring, onboarding, employee files, job profiles, and occupational health and safety (SG-SST).',
          es: 'Gestión humana: selección, contratación local, expedientes laborales, afiliaciones y seguridad y salud en el trabajo (SG-SST).'
        }
      ]
    },
    {
      id: 'comms',
      shortName: { en: 'Brand & IR', es: 'Marca & Relaciones (IR)' },
      tagline: { en: 'Investor Relations & Media', es: 'Inversionistas & Reputación' },
      name: { en: 'Communications, Brand & Reputation', es: 'Comunicaciones, Marca y Reputación' },
      image: '/extracted/img_5.jpg',
      imageAlt: 'Communications and investor relations',
      caption: 'INVESTOR RELATIONS (IR) & TSX/ASX POSITIONING',
      points: [
        {
          en: 'Corporate & institutional communications for public market transparency.',
          es: 'Comunicaciones corporativas e institucionales con rigor de mercado público.'
        },
        {
          en: 'Branding & identity: brand architecture, visual identity, and investor deck templates.',
          es: 'Branding e identidad: arquitectura de marca, diseño visual y plantillas para inversionistas.'
        },
        {
          en: 'Investor Relations (IR): pitch decks, corporate presentations, executive reports, and materials for mining conferences (TSX/ASX).',
          es: 'Relaciones con Inversionistas (IR): pitch decks, presentaciones ejecutivas y reportes técnicos para bolsas mineras (TSX/ASX).'
        },
        {
          en: 'Public relations: media, press releases, interviews, and institutional positioning.',
          es: 'Relaciones públicas: comunicados de prensa, entrevistas en medios especializados y visibilidad de marca.'
        },
        {
          en: 'Digital communications: corporate website, social media, content strategy, and SEO/GEO positioning.',
          es: 'Comunicación digital: portal web corporativo, canales digitales y posicionamiento en buscadores.'
        },
        {
          en: 'Content production: field video and photography of active core drilling, infographics, and technical concession diagrams.',
          es: 'Producción de contenido: fotografía y video en plataformas de perforación, infografías y diagramas de sondajes.'
        },
        {
          en: 'Events and networking: global mining conventions (PDAC Toronto, Mines & Money), roadshows, and capital launches.',
          es: 'Eventos y relacionamiento: coordinación para ferias mineras internacionales (PDAC Toronto), roadshows y presentaciones de capital.'
        },
        {
          en: 'CSR, social sustainability, reputation management, and proactive crisis communications protocols.',
          es: 'Sostenibilidad social, relacionamiento comunitario y protocolos estructurados para manejo de crisis en territorio.'
        }
      ]
    },
    {
      id: 'tech',
      shortName: { en: 'Project & Tech', es: 'Gestión & Tecnología' },
      tagline: { en: 'AI Systems & Milestones', es: 'Sistemas IA & Cronogramas' },
      name: { en: 'Project Management & Technology', es: 'Gestión de Proyectos y Tecnología' },
      image: '/extracted/img_6.jpg',
      imageAlt: 'Project management and technology automation',
      caption: 'AI AGENTS, DASHBOARDS & GOVERNANCE',
      points: [
        {
          en: 'Project Management: planning, timelines, and critical milestones for the entire exploration campaign.',
          es: 'Gestión de proyectos: planeación, cronogramas maestros e hitos críticos para toda la campaña de exploración.'
        },
        {
          en: 'Assignment and coordination of the multidisciplinary responsible team.',
          es: 'Asignación, supervisión y coordinación del equipo profesional responsable.'
        },
        {
          en: 'Deliverable tracking, quality control, and executive monthly reporting to head office and board of directors.',
          es: 'Control riguroso de calidad de entregables y reportes ejecutivos mensuales para la casa matriz y junta directiva.'
        },
        {
          en: 'Technology, AI & Automation: custom AI systems and specialized agents supporting regulatory analysis and compliance.',
          es: 'Tecnología e IA: sistemas inteligentes y agentes autónomos a medida para agilizar el análisis normativo y contractual.'
        },
        {
          en: 'Stakeholder CRM, corporate dashboards, and automated monitoring of surface-fee payment deadlines.',
          es: 'CRM de grupos de interés, tableros ejecutivos en tiempo real y alertas tempranas de cánones mineros.'
        },
        {
          en: 'An evolving field: we build to what each project specifically needs, not a rigid closed catalogue.',
          es: 'Un campo en constante evolución: desarrollamos soluciones a la medida exacta de cada proyecto, sin catálogos cerrados.'
        }
      ]
    }
  ];

  const current = areas[activeTab];

  const handlePrev = () => {
    setActiveTab((prev) => (prev > 0 ? prev - 1 : areas.length - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev < areas.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="expertise" className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Technical corner angle trace from PDF slides */}
      <div className="absolute right-0 bottom-0 pointer-events-none hidden md:block">
        <svg width="420" height="260" viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M420 230 H 160 Q 140 230 125 215 L 20 110 Q 5 95 5 75 V 0"
            stroke="#00C2FF"
            strokeWidth="1.5"
            strokeOpacity="0.3"
          />
        </svg>
        <div className="absolute right-8 bottom-6 text-[10px] tracking-[0.25em] text-slate-400 uppercase">
          i2services s.a.s. · medellín, colombia
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Areas of Expertise Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
            <div>
              <div className="pdf-accent-bar mb-3" />
              <div className="text-xs font-bold text-[#00446B] tracking-[0.22em] uppercase">
                {lang === 'en' ? 'AREAS OF EXPERTISE' : 'ÁREAS DE EXPERIENCIA'}
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-1">
                {lang === 'en' ? 'Integrated Capabilities' : 'Capacidades Integradas'}
              </h2>
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Minimalist Tab Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12 border-b border-slate-200">
            {areas.map((area, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveTab(idx)}
                  className={`pb-4 text-left transition-all duration-200 border-b-2 -mb-[2px] ${
                    isActive
                      ? 'border-slate-900 text-slate-900'
                      : 'border-transparent text-slate-400 hover:text-slate-700'
                  }`}
                >
                  <span
                    className={`block text-base sm:text-lg tracking-tight ${
                      isActive ? 'font-bold text-slate-900' : 'font-medium text-slate-500'
                    }`}
                  >
                    {area.shortName[lang]}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Slide Layout with Smooth Image Transition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Authentic Photo from PDF Slide */}
          <div className="lg:col-span-5 relative group">
            <ScrollReveal direction="right" duration={750}>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50 p-2.5 transition-transform duration-500 group-hover:scale-[1.01]">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.imageAlt}
                  className="w-full h-[380px] sm:h-[450px] rounded-2xl object-cover transition-opacity duration-300"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Slide Title & Bulleted List with Cyan Square Markers */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="left" delay={150} duration={750}>
              <div>
                <div className="text-xs font-bold tracking-[0.22em] text-[#00C2FF] uppercase mb-1">
                  {lang === 'en' ? 'CAPABILITY MODULE' : 'MÓDULO DE CAPACIDAD'} 0{activeTab + 1}
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {current.name[lang]}
                </h3>
              </div>

              {/* List with Cyan Square Bullets */}
              <div className="space-y-4 pt-2">
                {current.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3.5 group/item">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#00C2FF] mt-1.5 shrink-0 shadow-sm transition-transform duration-200 group-hover/item:scale-125" />
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {point[lang]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Inquire CTA */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  {lang === 'en' ? 'Need this capability for your Colombian operation?' : '¿Requiere esta capacidad para su operación en Colombia?'}
                </div>
                <a
                  href="#contact"
                  className="btn-press inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#00C2FF] hover:text-sky-600 transition-colors"
                >
                  <span>{lang === 'en' ? 'Inquire on this module' : 'Consultar este módulo'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Dual Focus: Clients We Serve & Allied Consultants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-16 pt-12 border-t border-slate-200">
          <ScrollReveal direction="up" delay={100} duration={700}>
            <div className="relative overflow-hidden p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm h-full group hover:border-[#01BBDC] transition-colors">
              <div className="absolute -bottom-6 -right-6 w-28 h-28 text-[#01BBDC]/[0.08] group-hover:text-[#01BBDC]/[0.18] transition-colors pointer-events-none select-none">
                <Compass className="w-full h-full stroke-[1.2]" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#01BBDC]" />
                  <span className="text-xs uppercase tracking-widest text-[#00446B] font-bold">
                    {lang === 'en' ? 'CLIENTS WE SERVE' : 'CLIENTES QUE ATENDEMOS'}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {lang === 'en'
                    ? 'Canadian and Australian junior exploration companies establishing, structuring or consolidating mining operations in Colombia.'
                    : 'Compañías junior de exploración canadienses y australianas que inician, estructuran o consolidan operaciones mineras en Colombia.'}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200} duration={700}>
            <div className="relative overflow-hidden p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm h-full group hover:border-[#01BBDC] transition-colors">
              <div className="absolute -bottom-6 -right-6 w-28 h-28 text-[#01BBDC]/[0.08] group-hover:text-[#01BBDC]/[0.18] transition-colors pointer-events-none select-none">
                <Users className="w-full h-full stroke-[1.2]" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#01BBDC]" />
                  <span className="text-xs uppercase tracking-widest text-[#00446B] font-bold">
                    {lang === 'en' ? 'ALLIED CONSULTANTS' : 'CONSULTORES ALIADOS'}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {lang === 'en'
                    ? 'External technical specialists engaged by project: senior exploration geologists, environmental engineers, and local community liaisons.'
                    : 'Especialistas técnicos vinculados por proyecto: geólogos seniors de exploración, ingenieros ambientales y profesionales de campo.'}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
