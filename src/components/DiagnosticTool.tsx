import React, { useState } from 'react';
import { Language } from '../types';
import { Sparkles, ArrowRight, ShieldCheck, Clock, CheckCircle, Copy, Check } from 'lucide-react';

interface DiagnosticToolProps {
  lang: Language;
}

interface DiagnosticResult {
  recommendedModel: { en: string; es: string };
  timeline: { en: string; es: string };
  keyModules: { en: string; es: string }[];
  summary: { en: string; es: string };
}

export const DiagnosticTool: React.FC<DiagnosticToolProps> = ({ lang }) => {
  const [selectedStage, setSelectedStage] = useState<'entry' | 'setup' | 'drilling' | 'capital'>('drilling');
  const [selectedPriority, setSelectedPriority] = useState<'anm' | 'banking' | 'payroll' | 'ir'>('anm');
  const [copied, setCopied] = useState<boolean>(false);

  const stages = [
    {
      id: 'entry' as const,
      title: { en: 'Title Due Diligence & Evaluation', es: 'Due Diligence & Evaluación de Títulos' },
      desc: { en: 'Evaluating target mining titles, applications, and legal standings before acquisition.', es: 'Evaluación de títulos objetivo y solicitudes antes de adquirir o firmar opción.' }
    },
    {
      id: 'setup' as const,
      title: { en: 'Entity Setup & Bank Accounts', es: 'Constitución & Cuentas Bancarias' },
      desc: { en: 'Incorporating Colombian SAS/branch, DIAN tax ID (RUT), and Tier-1 bank accounts.', es: 'Creación de vehículo societario SAS/sucursal, RUT y apertura bancaria Tier-1.' }
    },
    {
      id: 'drilling' as const,
      title: { en: 'Active Drilling & Camp Operations', es: 'Perforación Activa & Operación de Campo' },
      desc: { en: 'Continuous core drilling, remote camp contractors, field payroll, and ANM compliance.', es: 'Perforación diamantina continua, contratistas locales, nómina de campo y ANM.' }
    },
    {
      id: 'capital' as const,
      title: { en: 'Capital Raising & TSX/ASX Reporting', es: 'Levantamiento de Capital & Reportes TSX/ASX' },
      desc: { en: 'Presenting exploration results to international mining markets and institutional boards.', es: 'Comunicación de resultados a mercados internacionales y juntas directivas.' }
    }
  ];

  const priorities = [
    {
      id: 'anm' as const,
      title: { en: 'ANM Compliance & Good Standing', es: 'Cumplimiento ANM & Cánones' },
      desc: { en: 'Zero missed surface fees, insurance bonds, PTO updates, or environmental notices.', es: 'Cero moras en cánones, pólizas mineras al día y respuesta oportuna a requerimientos.' }
    },
    {
      id: 'banking' as const,
      title: { en: 'Corporate Banking & FX Monetization', es: 'Banca Corporativa & Giro de Divisas' },
      desc: { en: 'Streamlined wire transfers from Canada/Australia, Banco de la República forms, DIAN taxes.', es: 'Monetización ágil de divisas, formularios cambiarios y tributación sin tropiezos.' }
    },
    {
      id: 'payroll' as const,
      title: { en: 'Field Payroll & Remote Labor Contracts', es: 'Nómina de Campo & Contratos Locales' },
      desc: { en: 'Turnkey hiring of local geologists, field hands, camp staff, SG-SST safety compliance.', es: 'Contratación formal de personal de campo, turnos mineros y seguridad social.' }
    },
    {
      id: 'ir' as const,
      title: { en: 'IR Deck & Market Positioning', es: 'Pitch Decks & Posicionamiento IR' },
      desc: { en: 'Professional investor presentations translating technical drilling data into capital narratives.', es: 'Materiales ejecutivos que traducen avances geológicos a lenguaje de inversionistas.' }
    }
  ];

  const getRecommendation = (): DiagnosticResult => {
    if (selectedStage === 'entry') {
      return {
        recommendedModel: {
          en: 'Independent Title Brokerage & Legal Due Diligence Mandate',
          es: 'Mandato Independiente de Corretaje & Due Diligence Legal de Títulos'
        },
        timeline: {
          en: '10 to 15 business days for comprehensive technical & legal title audit',
          es: '10 a 15 días hábiles para auditoría exhaustiva técnica y catastral'
        },
        keyModules: [
          { en: 'ANM title history & cadastre overlap verification', es: 'Verificación catastral ANM y superposiciones ambientales' },
          { en: 'Direct preliminary engagement with sellers', es: 'Contacto directo preliminar con titulares mineros' },
          { en: 'Drafting of tailor-made Option Agreement / NDA', es: 'Estructuración de acuerdo de opción o memorando de entendimiento' }
        ],
        summary: {
          en: 'Recommended approach: Keep fixed costs zero until the title passes rigorous legal verification. Execute under an exclusive buyer-side mandate.',
          es: 'Enfoque recomendado: Mantener costos fijos en cero hasta verificar jurídicamente el título bajo mandato exclusivo de compra.'
        }
      };
    }

    if (selectedStage === 'setup') {
      return {
        recommendedModel: {
          en: 'Launch Package (Turnkey Local Incorporation & Banking)',
          es: 'Paquete de Lanzamiento (Constitución Llave en Mano & Banca)'
        },
        timeline: {
          en: '2 to 3 weeks for full entity registration and active corporate banking',
          es: '2 a 3 semanas para sociedad formalizada y cuentas bancarias listas'
        },
        keyModules: [
          { en: 'SAS creation, Chamber of Commerce & DIAN RUT registration', es: 'Constitución SAS, registro mercantil y obtención de RUT DIAN' },
          { en: 'Tier-1 corporate account opening (Bancolombia, BBVA)', es: 'Apertura de cuenta corporativa en Bancolombia o BBVA' },
          { en: 'Establishment of SAGRILAFT & AML governance protocols', es: 'Implementación inicial de manual SAGRILAFT y beneficiarios finales' }
        ],
        summary: {
          en: 'A dedicated one-time setup package ensuring your corporate vehicle meets foreign investment standards from day one.',
          es: 'Paquete único de instalación para que su vehículo cumpla con los estándares de inversión extranjera desde el día uno.'
        }
      };
    }

    if (selectedStage === 'drilling') {
      return {
        recommendedModel: {
          en: 'Full Monthly Retainer + ANM Continuous Tracking Protocol',
          es: 'Paquete Mensual Operativo + Protocolo Continuo ANM'
        },
        timeline: {
          en: 'Immediate onboarding · Same-day incident escalation protocol',
          es: 'Inicio inmediato · Protocolo de escalamiento de incidentes en tiempo real'
        },
        keyModules: [
          { en: 'Comprehensive monthly back-office (accounting, payroll, treasury)', es: 'Back office integral: contabilidad, nómina de campo y pagos' },
          { en: 'Rigorous ANM monitoring: surface fees, bonds, and PTO audits', es: 'Monitoreo riguroso ANM: cánones, pólizas mineras y obligaciones PTO' },
          { en: 'Executive board reports aligned with head office IFRS timelines', es: 'Reportes ejecutivos mensuales listos para consolidación IFRS' }
        ],
        summary: {
          en: 'Replicate the 18-month uninterrupted drilling record achieved for listed exploration clients. Zero downtime from local administrative roadblocks.',
          es: 'Replique el récord de 18 meses de perforación continua sin interrupciones logrado para clientes listados en bolsa.'
        }
      };
    }

    return {
      recommendedModel: {
        en: 'Integrated Operations Retainer + Investor Relations (IR) Module',
        es: 'Operación Integral + Módulo Estratégico de Relaciones con Inversionistas (IR)'
      },
      timeline: {
        en: 'Continuous monthly management + quarterly PDAC/roadshow cycle',
        es: 'Gestión mensual continua + ciclos de conferencias y roadshows (PDAC)'
      },
      keyModules: [
        { en: 'TSX/ASX pitch decks, corporate one-pagers, and website updates', es: 'Diseño de pitch decks para TSX/ASX y one-pagers ejecutivos' },
        { en: 'Bilingual drill-core visual storytelling and field media production', es: 'Fotografía técnica de testigos de perforación y narrativa bilingüe' },
        { en: 'International conference coordination and mining summit networking', es: 'Coordinación de presencia en conferencias mineras internacionales' }
      ],
      summary: {
        en: 'Bridge the gap between ground-level geological achievements in Colombia and institutional capital markets in Toronto, Sydney, and New York.',
        es: 'Conecte los avances geológicos reales en Colombia con el apetito de los mercados de capitales en Toronto, Sídney y Nueva York.'
      }
    };
  };

  const rec = getRecommendation();

  const handleCopy = () => {
    const textToCopy = `i2 Services S.A.S. - Exploration Scope Diagnostic
Stage: ${stages.find(s => s.id === selectedStage)?.title[lang]}
Operational Priority: ${priorities.find(p => p.id === selectedPriority)?.title[lang]}
Recommended Framework: ${rec.recommendedModel[lang]}
Estimated Timeline: ${rec.timeline[lang]}
Summary: ${rec.summary[lang]}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="diagnostic" className="py-24 bg-[#08152F] relative border-t border-slate-800">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,163,224,0.08),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#00A3E0]/15 text-[#00A3E0] border border-[#00A3E0]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Interactive Tool' : 'Herramienta Interactiva'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            {lang === 'en'
              ? 'Find your operational configuration in Colombia.'
              : 'Encuentre su configuración operativa en Colombia.'}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {lang === 'en'
              ? 'Select your project stage and immediate operational hurdle to receive an instant recommended setup and timeframe.'
              : 'Seleccione la fase de su proyecto y su reto administrativo para obtener el esquema de trabajo recomendado.'}
          </p>
        </div>

        {/* Diagnostic Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Input Selection (Stages + Priorities) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Stage Selector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {lang === 'en' ? 'Step 1: Current Project Phase' : 'Paso 1: Fase Actual de su Proyecto'}
                </span>
                <span className="text-xs text-[#00A3E0] font-mono">
                  {stages.findIndex((s) => s.id === selectedStage) + 1}/4
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {stages.map((stage) => {
                  const isSelected = selectedStage === stage.id;
                  return (
                    <button
                      key={stage.id}
                      onClick={() => setSelectedStage(stage.id)}
                      className={`btn-press p-4 rounded-xl text-left transition-all border ${
                        isSelected
                          ? 'bg-[#0B1B3D] border-[#00A3E0] text-white shadow-lg shadow-[#00A3E0]/15 ring-1 ring-[#00A3E0]'
                          : 'bg-[#061024]/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#0B1B3D]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-semibold text-white">
                          {stage.title[lang]}
                        </span>
                        {isSelected && (
                          <div className="w-2 h-2 rounded-full bg-[#00A3E0]" />
                        )}
                      </div>
                      <p className="text-xs text-slate-400 leading-snug">
                        {stage.desc[lang]}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Priority Selector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {lang === 'en' ? 'Step 2: Immediate Operational Hurdle' : 'Paso 2: Reto Operativo Inmediato'}
                </span>
                <span className="text-xs text-[#00A3E0] font-mono">
                  {priorities.findIndex((p) => p.id === selectedPriority) + 1}/4
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {priorities.map((prio) => {
                  const isSelected = selectedPriority === prio.id;
                  return (
                    <button
                      key={prio.id}
                      onClick={() => setSelectedPriority(prio.id)}
                      className={`btn-press p-4 rounded-xl text-left transition-all border ${
                        isSelected
                          ? 'bg-[#0B1B3D] border-[#00A3E0] text-white shadow-lg shadow-[#00A3E0]/15 ring-1 ring-[#00A3E0]'
                          : 'bg-[#061024]/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#0B1B3D]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-semibold text-white">
                          {prio.title[lang]}
                        </span>
                        {isSelected && (
                          <div className="w-2 h-2 rounded-full bg-[#00A3E0]" />
                        )}
                      </div>
                      <p className="text-xs text-slate-400 leading-snug">
                        {prio.desc[lang]}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Dynamic Recommendation Card */}
          <div className="lg:col-span-5 bg-[#061024] border border-[#00A3E0]/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00A3E0]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#00A3E0]" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  {lang === 'en' ? 'Tailored Architecture' : 'Esquema a la Medida'}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="btn-press flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors px-2 py-1 rounded bg-slate-800/60"
                title={lang === 'en' ? 'Copy brief' : 'Copiar diagnóstico'}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (lang === 'en' ? 'Copied!' : 'Copiado!') : (lang === 'en' ? 'Copy Brief' : 'Copiar')}</span>
              </button>
            </div>

            {/* Model Name */}
            <div className="mb-6">
              <div className="text-xs text-[#00A3E0] font-mono uppercase tracking-wider mb-1">
                {lang === 'en' ? 'Recommended Engagement' : 'Modelo Recomendado'}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {rec.recommendedModel[lang]}
              </h3>
            </div>

            {/* Summary */}
            <p className="text-sm text-slate-300 mb-6 leading-relaxed bg-[#0B1B3D]/60 p-4 rounded-xl border border-slate-800">
              {rec.summary[lang]}
            </p>

            {/* Key Deliverable Items */}
            <div className="space-y-3 mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {lang === 'en' ? 'Immediate Actions Included' : 'Acciones Clave Incluidas'}
              </div>
              {rec.keyModules.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                  <span>{item[lang]}</span>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 mb-6">
              <Clock className="w-4 h-4 text-[#00A3E0] shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white">
                  {lang === 'en' ? 'Estimated Timeframe: ' : 'Tiempo Estimado: '}
                </span>
                {rec.timeline[lang]}
              </div>
            </div>

            {/* Direct CTA */}
            <a
              href="#contact"
              className="btn-press w-full py-3.5 px-6 rounded-xl bg-[#00A3E0] hover:bg-[#38BDF8] text-[#061024] font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#00A3E0]/20 flex items-center justify-center gap-2"
            >
              <span>{lang === 'en' ? 'Discuss this configuration' : 'Conversar sobre este esquema'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
