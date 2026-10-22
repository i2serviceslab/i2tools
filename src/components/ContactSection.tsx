import React, { useState } from 'react';
import { Language } from '../types';
import { Send, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`[i2 Services Inquiry] ${formData.company} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    setTimeout(() => {
      window.location.href = `mailto:info@i2services.co?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#08172E] text-white relative border-t border-[#273349] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial from-[#00649F]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* SVG Technical Angle Trace */}
      <div className="absolute right-0 bottom-0 pointer-events-none hidden md:block opacity-40">
        <svg width="420" height="260" viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M420 230 H 160 Q 140 230 125 215 L 20 110 Q 5 95 5 75 V 0"
            stroke="#01BBDC"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <ScrollReveal direction="up" duration={750}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="pdf-accent-bar mx-auto mb-4" />
            <div className="text-xs font-bold text-[#01BBDC] tracking-[0.25em] uppercase mb-3">
              {lang === 'en' ? 'DIRECT INTRODUCTION' : 'CONTACTO DIRECTO'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              {lang === 'en' ? 'Schedule an Introduction' : 'Agendar Presentación'}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {lang === 'en'
                ? 'Send your exploration plans or concession coordinates. Our senior management team in Medellín will review them and respond with preliminary feedback.'
                : 'Envíe los detalles de su proyecto minero o concesión. Nuestra gerencia en Medellín evaluará su requerimiento y le responderá directamente.'}
            </p>
          </div>
        </ScrollReveal>

        {/* Centered Inquiry Form */}
        <ScrollReveal direction="up" delay={150} duration={800}>
          <div className="max-w-2xl mx-auto rounded-3xl p-8 sm:p-10 bg-[#273349]/70 border border-slate-700/80 shadow-2xl relative backdrop-blur-sm">
            {submitted ? (
              <div className="p-10 text-center bg-[#08172E] rounded-2xl border border-emerald-500/30">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {lang === 'en' ? 'Inquiry Transmitted' : 'Consulta Transmitida'}
                </h3>
                <p className="text-sm text-slate-300">
                  {lang === 'en'
                    ? 'Thank you. Our senior management team in Torre Davivienda, Medellín will contact you promptly.'
                    : 'Gracias. Nuestra gerencia en Torre Davivienda, Medellín se comunicará a la brevedad.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === 'en' ? 'FULL NAME *' : 'NOMBRE COMPLETO *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#08172E] border border-slate-700 text-white text-sm outline-none focus:border-[#01BBDC] transition-colors"
                      placeholder="David Henderson"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === 'en' ? 'MINING COMPANY *' : 'COMPAÑÍA MINERA *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#08172E] border border-slate-700 text-white text-sm outline-none focus:border-[#01BBDC] transition-colors"
                      placeholder="Andean Exploration Ltd."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === 'en' ? 'CORPORATE EMAIL *' : 'CORREO CORPORATIVO *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#08172E] border border-slate-700 text-white text-sm outline-none focus:border-[#01BBDC] transition-colors"
                      placeholder="d.henderson@andean.ca"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === 'en' ? 'PHONE / WHATSAPP' : 'TELÉFONO / WHATSAPP'}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#08172E] border border-slate-700 text-white text-sm outline-none focus:border-[#01BBDC] transition-colors"
                      placeholder="+1 (416) 555-0199"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {lang === 'en' ? 'OPERATIONAL NEEDS / CONCESSION DETAILS' : 'DETALLES DE SU OPERACIÓN / CONCESIÓN'}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#08172E] border border-slate-700 text-white text-sm outline-none focus:border-[#01BBDC] transition-colors resize-none"
                    placeholder={
                      lang === 'en'
                        ? 'Brief overview of your exploration program, title status, banking or legal needs...'
                        : 'Breve descripción de su programa de exploración, estado de títulos, necesidades bancarias o legales...'
                    }
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-press w-full py-3.5 px-6 rounded-xl bg-[#01BBDC] hover:bg-[#38BDF8] text-[#08172E] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#01BBDC]/20 transition-all"
                  >
                    <span>{lang === 'en' ? 'Submit Introduction Request' : 'Enviar Solicitud de Presentación'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-center pt-2">
                  <span className="text-[11px] text-slate-400">
                    {lang === 'en'
                      ? 'Confidential inquiry. NDA provided upon request.'
                      : 'Consulta confidencial. Acuerdo de confidencialidad (NDA) disponible.'}
                  </span>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
