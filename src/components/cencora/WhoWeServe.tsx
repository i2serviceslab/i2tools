import React, { useState } from 'react';
import { Store, Building2, Layers, ArrowRight, Check, ChevronDown, ChevronUp, FileText, Download } from 'lucide-react';

interface WhoWeServeProps {
  onSelectAudience: (audience: string) => void;
}

export const WhoWeServe: React.FC<WhoWeServeProps> = ({ onSelectAudience }) => {
  const [expandedSegment, setExpandedSegment] = useState<string | null>(null);

  const segments = [
    {
      id: 'droguerias',
      audience: 'Para Droguerías & Farmacias',
      badge: 'Retail & Comunitario',
      title: 'Abastecimiento comercial continuo y márgenes competitivos para el droguista.',
      description: 'Garantizamos que las farmacias independientes y redes de retail dispongan de los medicamentos comerciales y genéricos de mayor rotación en el mercado colombiano, con entregas locales en menos de 24 horas y precios directos.',
      features: [
        'Portafolio de más de 2.000 referencias comerciales activas',
        'Precios competitivos directos de laboratorio fabricante',
        'Despachos locales sin costo sobre pedido mínimo',
        'Asesor comercial asignado para reposición semanal'
      ],
      sampleProducts: [
        { name: 'Acetaminofén 500mg Tabletas', detail: 'Caja x 100 tabletas (Blíster) - Alta rotación' },
        { name: 'Ibuprofeno 800mg Tabletas', detail: 'Caja x 50 tabletas - Analgésico / Antiinflamatorio' },
        { name: 'Amoxicilina 500mg Cápsulas', detail: 'Caja x 50 cápsulas - Antibiótico oral' },
        { name: 'Omeprazol 20mg Cápsulas', detail: 'Caja x 30 cápsulas - Gastroprotector' },
      ],
      requirements: 'RUT, Cámara de Comercio (menor a 30 días) y Acta de Inspección Secretaría de Salud.'
    },
    {
      id: 'hospitalario',
      audience: 'Para Clínicas, Hospitales e IPS',
      badge: 'Alta Complejidad II, III y IV',
      title: 'Trazabilidad estricta, medicamentos críticos y dispositivos quirúrgicos.',
      description: 'Atendemos las exigencias de instituciones prestadoras de salud de mediana y alta complejidad. Proveemos fármacos especializados, soluciones parenterales y material médico-quirúrgico con registro sanitario INVIMA y soporte de lote.',
      features: [
        'Certificados analíticos de lote y fechas de vencimiento validadas',
        'Cadena de frío continua con registro termo-higrométrico',
        'Protocolos de entrega prioritaria para áreas de urgencias',
        'Dispositivos médicos estériles en empaques grado clínico'
      ],
      sampleProducts: [
        { name: 'Ampicilina + Sulbactam 1.5g', detail: 'Caja x 10 viales liofilizados - Antibiótico I.V.' },
        { name: 'Ceftriaxona 1g I.V.', detail: 'Caja x 10 ampollas + diluyente - Uso hospitalario' },
        { name: 'Propofol 1% 20ml', detail: 'Caja x 5 ampollas emulsión inyectable' },
        { name: 'Lactato de Ringer & Solución Salina 500ml', detail: 'Bolsas colapsables x 24 unidades' },
      ],
      requirements: 'RUT, Habilitación de Servicios de Salud (REPS) y Cédula del Representante Legal.'
    },
    {
      id: 'institucional',
      audience: 'Para Canal Institucional & EPS',
      badge: 'Suministro Masivo & PBS',
      title: 'Logística de gran escala para programas de salud pública y privada.',
      description: 'Diseñamos esquemas de distribución programada para EPS, secretarías de salud y cajas de compensación, asegurando cumplimiento contractual, cobertura territorial en 32 departamentos y facturación electrónica conciliable.',
      features: [
        'Despachos consolidados y calendarizados por red de sedes',
        'Capacidad operativa para responder a licitaciones masivas',
        'Informes de remisión electrónica y soporte RIPS',
        'Rutas troncales fijas a nivel nacional con trazabilidad GPS'
      ],
      sampleProducts: [
        { name: 'Paquetes de Medicamentos PBS', detail: 'Suministro periódico mensual programado' },
        { name: 'Cardiovasculares: Losartán & Enalapril', detail: 'Lotes de alto volumen para crónicos' },
        { name: 'Metformina 850mg Tabletas', detail: 'Manejo de pacientes diabéticos en red' },
        { name: 'Kits Quirúrgicos & Dispositivos Descartables', detail: 'Embalajes master para centros de atención' },
      ],
      requirements: 'Contrato de suministro o pliego de condiciones institucionales.'
    }
  ];

  return (
    <section id="quienes-servimos" className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading (Cencora Editorial Standard) */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0D7AAB] block mb-2">
            A quién servimos &bull; Segmentación de Mercado
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
            Soluciones logísticas adaptadas a cada eslabón del ecosistema de salud.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Comprendemos las diferencias operativas entre una farmacia comunitaria, un complejo clínico de alta complejidad y una entidad institucional. Cada modelo cuenta con condiciones comerciales y protocolos a su medida.
          </p>
        </div>

        {/* 3 Architectural Grid Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {segments.map((segment) => {
            const isExpanded = expandedSegment === segment.id;
            return (
              <div
                key={segment.id}
                className="bg-white p-7 sm:p-8 rounded-xl border border-slate-200 flex flex-col justify-between hover:border-slate-400 transition-colors shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {segment.audience}
                    </span>
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-[#0D7AAB]">
                      {segment.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 leading-snug mb-3">
                    {segment.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {segment.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {segment.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-[#0D7AAB] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Technical & Product Drawer */}
                  {isExpanded && (
                    <div className="mt-6 pt-5 border-t border-slate-200 space-y-4 animate-fadeIn">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block mb-2">
                          Principales Referencias de Esta Línea:
                        </span>
                        <div className="space-y-1.5">
                          {segment.sampleProducts.map((prod, pIdx) => (
                            <div key={pIdx} className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-xs">
                              <div className="font-semibold text-slate-900">{prod.name}</div>
                              <div className="text-[11px] text-slate-500">{prod.detail}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg text-xs text-slate-700">
                        <span className="font-bold text-[#0D7AAB] block mb-0.5">Requisitos de Apertura:</span>
                        <span>{segment.requirements}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Actions: Toggle Details & Cotizar Target */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setExpandedSegment(isExpanded ? null : segment.id)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-950 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>{isExpanded ? 'Ocultar catálogo' : 'Ver referencias clave'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectAudience(segment.audience)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0D7AAB] hover:text-[#09577a] transition-colors group cursor-pointer"
                  >
                    <span>Cotizar</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
