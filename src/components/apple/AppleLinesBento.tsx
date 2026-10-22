import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICE_LINES, LAB_LOGOS } from '../../data/kairosData';

export function AppleLinesBento() {
  const getWhatsApp = (text: string) =>
    `https://wa.me/573150733319?text=${encodeURIComponent(text)}`;

  return (
    <section id="lineas" className="py-24 sm:py-32 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de sección estilo Apple - Eyebrow puramente tipográfico, sin iconitos */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs sm:text-[13px] font-semibold text-[#86868B] uppercase tracking-[0.2em] mb-3">
            Portafolio Farmacéutico Especializado
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08] mb-4">
            Cinco líneas integrales.<br />
            Un solo estándar de calidad.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed">
            Cada línea cuenta con certificación INVIMA vigente, trazabilidad completa de lote y entrega bajo estricto cumplimiento técnico y normativo.
          </p>
        </div>

        {/* Bento Grid Limpio y Elegante - Sin imágenes recortadas de forma descuidada */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Línea Hospitalaria (8 cols) - Protagónica */}
          <div className="md:col-span-8 group relative bg-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between min-h-[420px] border border-black/[0.04]">
            <div className="relative z-10 max-w-lg">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase text-[#0071E3] bg-[#0071E3]/10 mb-4">
                {SERVICE_LINES[0].category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-3">
                {SERVICE_LINES[0].title}
              </h3>
              <p className="text-[#86868B] text-base leading-relaxed mb-6">
                {SERVICE_LINES[0].summary}
              </p>

              {/* Especificaciones clave */}
              <div className="space-y-2 mb-8 text-xs text-[#1D1D1F]/80 font-medium">
                <p className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0071E3]" />
                  Antibióticos parenterales, anestésicos y soluciones endovenosas
                </p>
                <p className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0071E3]" />
                  Certificados analíticos de lote por cada despacho
                </p>
                <p className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0071E3]" />
                  Cadena de frío continua de 2°C a 8°C para biológicos
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <a
                href={getWhatsApp(`Hola Kairos Farmacéutica, requiero cotizar medicamentos de la ${SERVICE_LINES[0].title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F5F7] group-hover:bg-[#0071E3] text-[#1D1D1F] group-hover:text-white text-xs font-semibold transition-all duration-300 shadow-xs"
              >
                <span>Cotizar Línea Hospitalaria</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Foto de fondo bien integrada y sutil a la derecha */}
            <div className="hidden lg:block absolute right-0 bottom-0 w-2/5 h-full overflow-hidden pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-700">
              <img
                src="/kairos/hero-bodega.jpg"
                alt="Almacenamiento de medicamentos hospitalarios"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
            </div>
          </div>

          {/* Card 2: Insumos Quirúrgicos (4 cols) - Limpia y Tipográfica */}
          <div className="md:col-span-4 group bg-white rounded-3xl p-8 sm:p-10 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between min-h-[420px] border border-black/[0.04]">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase text-[#34C759] bg-[#34C759]/10 mb-4">
                {SERVICE_LINES[1].category}
              </span>
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-3">
                {SERVICE_LINES[1].title}
              </h3>
              <p className="text-[#86868B] text-sm leading-relaxed mb-6">
                {SERVICE_LINES[1].summary}
              </p>

              <ul className="space-y-2 text-xs text-[#1D1D1F]/80 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34C759]" />
                  Jeringas descartables (1ml, 3ml, 5ml, 10ml, 20ml)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34C759]" />
                  Guantes de nitrilo y látex quirúrgico estéril
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34C759]" />
                  Catéteres endovenosos y equipos de venoclisis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34C759]" />
                  Gasas estériles y material de curación
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a
                href={getWhatsApp(`Hola Kairos Farmacéutica, requiero cotizar ${SERVICE_LINES[1].title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F5F7] group-hover:bg-[#1D1D1F] text-[#1D1D1F] group-hover:text-white text-xs font-semibold transition-all duration-300"
              >
                <span>Cotizar Insumos Médicos</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 3: Productos Comerciales / Droguerías (4 cols) */}
          <div className="md:col-span-4 group bg-white rounded-3xl p-8 sm:p-10 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between min-h-[380px] border border-black/[0.04]">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase text-[#FF9500] bg-[#FF9500]/10 mb-3">
                {SERVICE_LINES[3].category}
              </span>
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-2">
                {SERVICE_LINES[3].title}
              </h3>
              <p className="text-[#86868B] text-sm leading-relaxed mb-5">
                {SERVICE_LINES[3].summary}
              </p>

              <p className="text-xs text-[#1D1D1F]/80 font-medium">
                Más de 2.000 referencias comerciales disponibles con precios directos de laboratorio para droguerías independientes y cadenas.
              </p>
            </div>

            <div className="pt-6">
              <a
                href={getWhatsApp(`Hola Kairos Farmacéutica, quiero solicitar lista de precios para droguería`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F7] group-hover:bg-[#1D1D1F] text-[#1D1D1F] group-hover:text-white text-xs font-semibold transition-all duration-300"
              >
                <span>Pedir Vademécum Droguerías</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 4: Canal Institucional (4 cols) */}
          <div className="md:col-span-4 group bg-white rounded-3xl p-8 sm:p-10 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between min-h-[380px] border border-black/[0.04]">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase text-[#AF52DE] bg-[#AF52DE]/10 mb-3">
                {SERVICE_LINES[2].category}
              </span>
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-2">
                {SERVICE_LINES[2].title}
              </h3>
              <p className="text-[#86868B] text-sm leading-relaxed mb-5">
                {SERVICE_LINES[2].summary}
              </p>

              <p className="text-xs text-[#1D1D1F]/80 font-medium">
                Suministro calendarizado, respaldo para licitaciones públicas, facturación electrónica DIAN y soporte documental RIPS.
              </p>
            </div>

            <div className="pt-6">
              <a
                href={getWhatsApp(`Hola Kairos Farmacéutica, necesito atención institucional para contratación`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F7] group-hover:bg-[#1D1D1F] text-[#1D1D1F] group-hover:text-white text-xs font-semibold transition-all duration-300"
              >
                <span>Atención Institucional</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 5: Línea Naturista (4 cols) */}
          <div className="md:col-span-4 group bg-white rounded-3xl p-8 sm:p-10 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between min-h-[380px] border border-black/[0.04]">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase text-[#30B0C7] bg-[#30B0C7]/10 mb-3">
                {SERVICE_LINES[4].category}
              </span>
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-2">
                {SERVICE_LINES[4].title}
              </h3>
              <p className="text-[#86868B] text-sm leading-relaxed mb-5">
                {SERVICE_LINES[4].summary}
              </p>

              <p className="text-xs text-[#1D1D1F]/80 font-medium">
                Extractos estandarizados, fitoterapéuticos y suplementos dietarios certificados con registro sanitario INVIMA al día.
              </p>
            </div>

            <div className="pt-6">
              <a
                href={getWhatsApp(`Hola Kairos Farmacéutica, quiero consultar el portafolio naturista`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F7] group-hover:bg-[#1D1D1F] text-[#1D1D1F] group-hover:text-white text-xs font-semibold transition-all duration-300"
              >
                <span>Consultar Portafolio</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Respaldo Institucional: Carrusel Continuo de Laboratorios Aliados */}
        <div className="mt-20 pt-14 border-t border-black/[0.06] text-center">
          <p className="text-xs sm:text-[13px] font-semibold text-[#86868B] uppercase tracking-[0.2em] mb-8">
            Alianzas con los Principales Laboratorios Farmacéuticos
          </p>

          {/* Carrusel Marquee Infinito con Máscara de Desvanecimiento Lateral */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="cencora-marquee-track flex items-center gap-6 sm:gap-8 py-3">
              {[...LAB_LOGOS, ...LAB_LOGOS, ...LAB_LOGOS, ...LAB_LOGOS].map((lab, index) => (
                <div
                  key={`${lab.id}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-6 py-4 rounded-2xl bg-white border border-black/[0.05] shadow-xs hover:shadow-md transition-all duration-300 w-48 sm:w-56 h-22 sm:h-24 group/logo cursor-pointer"
                >
                  {lab.logoImage ? (
                    <img
                      src={lab.logoImage}
                      alt={`Laboratorio ${lab.name}`}
                      className="max-h-12 sm:max-h-14 w-auto max-w-[150px] object-contain filter grayscale group-hover/logo:grayscale-0 opacity-75 group-hover/logo:opacity-100 transition-all duration-300 group-hover/logo:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-xs sm:text-sm font-bold text-[#1D1D1F] tracking-wide">
                      {lab.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
