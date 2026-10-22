import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, CheckCircle2, TrendingUp, Truck, Thermometer, Award } from 'lucide-react';
import { OPERATIONAL_FACTS, FAQ_LIST } from '../../data/kairosData';

export const VerifiedTrustSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(FAQ_LIST[0].id);

  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Operational Proof & Audited Track Record (Replaced Fake Testimonials) */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0D7AAB] block mb-2">
              Prueba Operativa & Capacidad Instalada
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Indicadores de rigor logístico en el territorio colombiano.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
              La confianza en el sector farmacéutico se sustenta en hechos auditables: tiempos de entrega verificados, conservación térmica sin fallas y respaldo regulatorio en cada despacho.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OPERATIONAL_FACTS.map((fact, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-mono mb-2">
                    {fact.metric}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0D7AAB] mb-2">
                    {fact.label}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {fact.detail}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Dato Operativo Auditado</span>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance & Quality Seal Banner */}
          <div className="mt-8 p-6 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#0D7AAB]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Garantía de Origen Farmacéutico & Facturación Electrónica DIAN
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  100% de los productos se despachan con copia de registro INVIMA vigente y certificado de lote.
                </p>
              </div>
            </div>

            <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full shrink-0">
              Vigilado Secretaría de Salud
            </span>
          </div>
        </div>

        {/* FAQs Section (Clean Architectural Accordion) */}
        <div id="faq" className="pt-16 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0D7AAB] block mb-2">
                Preguntas Frecuentes
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                Claridad operativa para directores de compras y farmacias.
              </h3>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed font-normal">
                Si requiere aclaraciones sobre tiempos de despacho, documentación sanitaria requerida o apertura de código comercial, consulte las directrices oficiales.
              </p>
            </div>

            <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200">
              {FAQ_LIST.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div key={faq.id} className="py-5">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="w-full text-left flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0D7AAB] transition-colors">
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0D7AAB]' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="pt-3 pr-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
