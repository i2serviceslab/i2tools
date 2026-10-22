import { KAIROS_INFO } from '../../data/kairosData';

export function AppleFooter() {
  return (
    <footer className="bg-[#F5F5F7] text-[#86868B] py-16 text-xs border-t border-[#E5E5EA]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Nota Regulatoria Apple-style */}
        <div className="pb-8 mb-8 border-b border-[#E5E5EA] space-y-3 leading-relaxed text-[11px]">
          <p>
            1. Kairos Farmacéutica S.A.S. opera bajo las directrices del Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA) de la República de Colombia, cumpliendo con las Buenas Prácticas de Almacenamiento y Transporte (BPA/BPT).
          </p>
          <p>
            2. La disponibilidad de medicamentos y tiempos de despacho están sujetos a confirmación de inventario y validación documental previa conforme a la normatividad farmacéutica vigente.
          </p>
        </div>

        {/* Links & Brand */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          <div>
            <h5 className="font-semibold text-[#1D1D1F] text-xs mb-3">Líneas de Negocio</h5>
            <ul className="space-y-2 text-[12px]">
              <li><a href="#lineas" className="hover:text-[#1D1D1F] transition-colors">Hospitalaria</a></li>
              <li><a href="#lineas" className="hover:text-[#1D1D1F] transition-colors">Insumos Quirúrgicos</a></li>
              <li><a href="#lineas" className="hover:text-[#1D1D1F] transition-colors">Droguerías</a></li>
              <li><a href="#lineas" className="hover:text-[#1D1D1F] transition-colors">Institucional</a></li>
              <li><a href="#lineas" className="hover:text-[#1D1D1F] transition-colors">Naturista</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-[#1D1D1F] text-xs mb-3">Infraestructura</h5>
            <ul className="space-y-2 text-[12px]">
              <li><a href="#cadena-frio" className="hover:text-[#1D1D1F] transition-colors">Cadena de Frío</a></li>
              <li><a href="#cadena-frio" className="hover:text-[#1D1D1F] transition-colors">Flota de Transporte</a></li>
              <li><a href="#cadena-frio" className="hover:text-[#1D1D1F] transition-colors">Bodega Central</a></li>
              <li><a href="#cadena-frio" className="hover:text-[#1D1D1F] transition-colors">Trazabilidad de Lotes</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-[#1D1D1F] text-xs mb-3">Atención & Asesores</h5>
            <ul className="space-y-2 text-[12px]">
              <li><a href="#equipo" className="hover:text-[#1D1D1F] transition-colors">Equipo Comercial</a></li>
              <li><a href="#contacto" className="hover:text-[#1D1D1F] transition-colors">Despacho Central</a></li>
              <li><a href="#contacto" className="hover:text-[#1D1D1F] transition-colors">Horarios de Entrega</a></li>
              <li><a href="#contacto" className="hover:text-[#1D1D1F] transition-colors">Sede Física</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-[#1D1D1F] text-xs mb-3">Kairos Farmacéutica</h5>
            <div className="space-y-2 text-[12px]">
              <img
                src="/kairos/logo-kairos.png"
                alt={KAIROS_INFO.name}
                className="h-13 sm:h-15 w-auto object-contain mb-4"
              />
              <p className="text-[#1D1D1F] font-medium">{KAIROS_INFO.name}</p>
              <p>{KAIROS_INFO.location.address}</p>
              <p>{KAIROS_INFO.location.city}, {KAIROS_INFO.location.country}</p>
              <p className="pt-2 text-[11px] text-[#86868B]">{KAIROS_INFO.contact.mainPhone}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#E5E5EA] text-[11px]">
          <p>© {new Date().getFullYear()} {KAIROS_INFO.name}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#1D1D1F] cursor-pointer">Aviso de Privacidad</span>
            <span className="hover:text-[#1D1D1F] cursor-pointer">Términos Comerciales</span>
            <span className="hover:text-[#1D1D1F] cursor-pointer">Regulación INVIMA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
