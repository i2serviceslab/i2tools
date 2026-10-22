import { ShieldCheck, ThermometerSnowflake, Truck, Clock } from 'lucide-react';

export function AppleColdChain() {
  const specs = [
    {
      icon: ThermometerSnowflake,
      value: "2°C a 8°C",
      label: "Cadena de Frío Estricta",
      detail: "Monitoreo continuo con data loggers calibrados en cada despacho biológico y de alta especialidad."
    },
    {
      icon: Truck,
      value: "32",
      label: "Departamentos de Colombia",
      detail: "Flota acondicionada y alianzas logísticas para entregas puntuales y seguras en todo el territorio."
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Certificación y Trazabilidad",
      detail: "Procesos auditados bajo directrices INVIMA. Cada lote cuenta con registro sanitario y trazabilidad."
    },
    {
      icon: Clock,
      value: "24/48h",
      label: "Tiempos de Despacho",
      detail: "Despacho prioritario para instituciones de salud y droguerías con stock crítico garantizado."
    }
  ];

  return (
    <section id="cadena-frio" className="py-24 sm:py-32 bg-white text-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro sin iconitos decorativos */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs sm:text-[13px] font-semibold text-[#86868B] uppercase tracking-[0.2em] mb-4">
            Infraestructura & Control Térmico
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1D1D1F] leading-[1.06] mb-6">
            Temperatura controlada.<br />
            Confianza absoluta.
          </h2>
          <p className="text-lg sm:text-xl text-[#86868B] font-normal leading-relaxed">
            La salud de los pacientes depende de no quebrar la cadena de frío. Diseñamos cada fase de nuestro almacenamiento y transporte bajo los más estrictos estándares farmacéuticos nacionales.
          </p>
        </div>

        {/* Imagen Gigante Real de la Flota - Limpia, sin elementos superpuestos ruidosos */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] mb-16 sm:mb-20 bg-[#F5F5F7] aspect-[16/9] max-h-[560px] group border border-black/[0.06]">
          <img
            src="/kairos/hero-flota.jpg"
            alt="Flota de transporte y distribución Kairos Farmacéutica"
            className="w-full h-full object-cover object-center group-hover:scale-[1.015] transition-transform duration-700 ease-out"
          />

          {/* Sutil gradiente solo en la base para dar contraste a la leyenda */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Pie de foto limpio */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-10 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
            <div className="max-w-xl">
              <span className="text-[11px] font-semibold tracking-wide uppercase text-white/80 block mb-1">
                Operación Logística Nacional
              </span>
              <p className="text-lg sm:text-2xl font-bold text-white leading-snug drop-shadow-sm">
                Flota propia y convenios certificados para despachos en los 32 departamentos de Colombia.
              </p>
            </div>

            <div className="text-xs text-white/90 font-medium bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
              Resolución INVIMA Vigente &bull; BPM
            </div>
          </div>
        </div>

        {/* 4 Specs Grids estilo Keynote de Apple */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-[#E5E5EA]">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl hover:bg-[#F5F5F7] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#F5F5F7] group-hover:bg-white flex items-center justify-center text-[#1D1D1F] mb-6 shadow-xs group-hover:shadow-md transition-all">
                    <Icon className="w-5 h-5 text-[#0071E3]" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] mb-2 group-hover:text-[#0071E3] transition-colors">
                    {spec.value}
                  </div>
                  <div className="text-sm font-semibold text-[#1D1D1F] mb-2">
                    {spec.label}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                  {spec.detail}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
