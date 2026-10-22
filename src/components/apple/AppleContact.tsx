import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { KAIROS_INFO } from '../../data/kairosData';

export function AppleContact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [line, setLine] = useState('Hospitalaria');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Nueva Solicitud de Cotización (Web Apple)*%0A%0A*Nombre / Empresa:* ${name}%0A*Teléfono:* ${phone}%0A*Línea:* ${line}%0A*Detalles / Referencias:* ${notes || 'Solicita contacto'}`;
    window.open(`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 sm:py-32 bg-white text-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro sin iconitos */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs sm:text-[13px] font-semibold text-[#86868B] uppercase tracking-[0.2em] mb-3">
            Despacho Central & Contacto Directo
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08] mb-4">
            Hablemos de su abastecimiento.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed">
            Atendemos requerimientos institucionales, droguerías independientes y clínicas con cotizaciones formales en menos de 2 horas en horario hábil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Columna Izquierda: Sede e Información de Despacho */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Foto de las Instalaciones Reales */}
            <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-[#F5F5F7] border border-black/[0.06] shadow-xs group">
              <img
                src="/kairos/about-instalaciones.jpg"
                alt="Instalaciones Kairos Farmacéutica Parque Garibaldi"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-white/80 block">
                  Sede Operativa Principal
                </span>
                <p className="text-sm sm:text-base font-bold text-white">
                  {KAIROS_INFO.location.address}
                </p>
              </div>
            </div>

            {/* Puntos de Contacto */}
            <div className="space-y-5 bg-[#F5F5F7] p-6 sm:p-8 rounded-3xl border border-black/[0.04]">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="w-4 h-4 text-[#0071E3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1D1D1F]">Ubicación y Despacho</h4>
                  <p className="text-xs sm:text-sm text-[#86868B] mt-0.5">{KAIROS_INFO.location.address}</p>
                  <p className="text-xs text-[#86868B]">{KAIROS_INFO.location.city}, {KAIROS_INFO.location.country}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Phone className="w-4 h-4 text-[#0071E3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1D1D1F]">Línea Telefónica Central</h4>
                  <p className="text-xs sm:text-sm text-[#86868B] mt-0.5">{KAIROS_INFO.contact.mainPhone}</p>
                  <p className="text-xs text-[#86868B]">PBX Central de Pedidos</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Mail className="w-4 h-4 text-[#0071E3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1D1D1F]">Correo Institucional</h4>
                  <p className="text-xs sm:text-sm text-[#86868B] mt-0.5">{KAIROS_INFO.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Clock className="w-4 h-4 text-[#0071E3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1D1D1F]">Horarios de Atención</h4>
                  <p className="text-xs sm:text-sm text-[#86868B] mt-0.5">{KAIROS_INFO.contact.hours}</p>
                </div>
              </div>

            </div>

          </div>

          {/* Columna Derecha: Formulario Limpio */}
          <div className="lg:col-span-7">
            <div className="bg-[#F5F5F7] rounded-3xl p-8 sm:p-12 border border-black/[0.04]">
              <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider block mb-2">
                Cotización Rápida
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-2">
                Solicitud en Línea
              </h3>
              <p className="text-xs sm:text-sm text-[#86868B] mb-8 leading-relaxed">
                Complete el formulario. Su requerimiento será derivado al asesor especialista de su zona para emitir cotización con registro INVIMA y disponibilidad inmediata.
              </p>

              {submitted ? (
                <div className="bg-white rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-sm animate-fade-up">
                  <CheckCircle2 className="w-12 h-12 text-[#34C759] mx-auto" />
                  <h4 className="text-xl font-bold text-[#1D1D1F]">Solicitud Recibida</h4>
                  <p className="text-xs sm:text-sm text-[#86868B] max-w-md mx-auto">
                    Se ha abierto la conexión directa con el equipo comercial de Kairos. Un asesor confirmará existencias y emitirá su cotización formal.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center text-xs font-semibold text-[#0071E3] hover:underline cursor-pointer pt-2"
                  >
                    Enviar otra solicitud de cotización
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#1D1D1F] mb-2">
                      Nombre Completo o Razón Social de la Institución
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Clínica San Lucas S.A. / Droguería Moderna"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#E5E5EA] text-sm text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:border-transparent transition-all shadow-2xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1D1D1F] mb-2">
                        Teléfono Móvil o WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ej. 315 000 0000"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#E5E5EA] text-sm text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:border-transparent transition-all shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1D1D1F] mb-2">
                        Línea de Interés
                      </label>
                      <select
                        value={line}
                        onChange={(e) => setLine(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#E5E5EA] text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:border-transparent transition-all shadow-2xs cursor-pointer"
                      >
                        <option value="Hospitalaria">Línea Hospitalaria (Alta Complejidad)</option>
                        <option value="Insumos Médicos">Insumos y Dispositivos Médicos</option>
                        <option value="Droguerías">Productos Comerciales / Droguerías</option>
                        <option value="Institucional">Canal Institucional & Licitaciones</option>
                        <option value="Naturista">Línea Naturista / Fitoterapéuticos</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1D1D1F] mb-2">
                      Medicamentos, Principios Activos o Cantidades Requeridas
                    </label>
                    <textarea
                      rows={4}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Describa los productos requeridos, concentraciones, presentaciones o pegue su lista de compras institucional..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#E5E5EA] text-sm text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:border-transparent transition-all resize-none shadow-2xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#1D1D1F] hover:bg-[#0071E3] active:scale-[0.98] text-white text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Enviar Solicitud al Asesor</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[11px] text-[#86868B] text-center pt-2">
                    Respuesta garantizada en horario comercial &bull; Datos protegidos bajo confidencialidad farmacéutica.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
