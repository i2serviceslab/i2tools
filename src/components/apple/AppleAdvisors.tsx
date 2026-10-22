import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { TEAM_MEMBERS } from '../../data/kairosData';

export function AppleAdvisors() {
  return (
    <section id="equipo" className="py-24 sm:py-32 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro sin iconitos */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs sm:text-[13px] font-semibold text-[#86868B] uppercase tracking-[0.2em] mb-3">
            Asesoría Técnica y Comercial Directa
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08] mb-4">
            Un asesor dedicado<br />
            para su institución.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed">
            Sin intermediarios ni conmutadores eternos. Hable directamente con el ejecutivo responsable de su sector y reciba cotizaciones inmediatas con disponibilidad en tiempo real.
          </p>
        </div>

        {/* Grid de 6 Asesores con Retratos de Estudio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 border border-black/[0.04]"
            >
              {/* Contenedor Fotográfico con Fondo Neutro Suave */}
              <div className="relative aspect-[4/4.8] rounded-2xl overflow-hidden bg-[#F2F2F4] mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-102"
                  loading="lazy"
                />

                {/* Badge de sector */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 text-[10px] font-bold text-[#1D1D1F] uppercase tracking-wider shadow-2xs border border-black/[0.04]">
                  {member.sector}
                </div>
              </div>

              {/* Información & Contacto */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[11px] font-bold text-[#0071E3] uppercase tracking-wider block mb-1">
                    {member.specialty}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#86868B] mb-6">
                    {member.role}
                  </p>
                </div>

                <a
                  href={`https://wa.me/${member.cleanPhone}?text=${encodeURIComponent(member.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#F5F5F7] group-hover:bg-[#1D1D1F] text-[#1D1D1F] group-hover:text-white text-xs font-semibold transition-all duration-200 active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Escribir a {member.name.split(' ')[0]} por WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
