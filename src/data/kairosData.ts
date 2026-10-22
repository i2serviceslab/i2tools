export interface ServiceLine {
  id: string;
  title: string;
  category: string;
  summary: string;
  fullDescription: string;
  badge: string;
  targetAudience: string;
  topProducts: string[];
  specs: { label: string; value: string }[];
}

export interface VademecumItem {
  id: string;
  name: string;
  line: 'Hospitalaria' | 'Comercial' | 'Insumos' | 'Institucional' | 'Naturista';
  presentation: string;
  invima: string;
  temperature: string;
  stockStatus: 'Disponible' | 'Alta Rotación' | 'Bajo Pedido';
}

export interface LabPartner {
  id: string;
  name: string;
  category: string;
  origin: string;
  logoImage?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  sector: 'Hospitalario' | 'Droguerías' | 'Insumos' | 'Institucional' | 'Nacional';
  phone: string;
  cleanPhone: string;
  image: string;
  specialty: string;
  whatsappMessage: string;
}

export const KAIROS_INFO = {
  name: "Kairos Farmacéutica S.A.S.",
  tagline: "Medicamentos de Calidad para toda Colombia",
  headline: "Distribución Farmacéutica Mayorista con Despachos en 24h y Cadena de Frío Garantizada",
  subheadline: "Abastecemos droguerías, clínicas e IPS en los 32 departamentos de Colombia desde nuestra central logística en el Parque Industrial Garibaldi. Precios mayoristas directos y resolución INVIMA al día.",
  location: {
    address: "Parque Industrial Garibaldi, Manzana 3 Bodega 4",
    city: "Girón / Bucaramanga",
    state: "Santander",
    country: "Colombia",
    fullAddress: "Parque Industrial Garibaldi, Girón, Santander, Colombia"
  },
  contact: {
    mainPhone: "+57 (607) 646 9090",
    generalWhatsApp: "+573150733319",
    email: "contacto@kairosfarmaceuticasas.com",
    commercialEmail: "ventas@kairosfarmaceuticasas.com",
    hours: "Lunes a Viernes: 7:30 AM - 5:30 PM | Sábados: 8:00 AM - 1:00 PM"
  },
  social: {
    instagram: "https://instagram.com/kairosfarmaceutica/",
    facebook: "https://facebook.com/people/Kairos-Farmac%C3%A9utica-Col/61583071553916/",
    youtube: "https://youtube.com/@KairosFarmac%C3%A9utica"
  },
  videoUrl: "https://vimeo.com/1198533427"
};

// Vademécum search catalog for real-time reference checking
export const VADEMECUM_CATALOG: VademecumItem[] = [
  { id: '1', name: 'Ampicilina + Sulbactam 1.5g', line: 'Hospitalaria', presentation: 'Caja x 10 viales liofilizados', invima: 'Vigente INVIMA', temperature: '15°C - 25°C', stockStatus: 'Disponible' },
  { id: '2', name: 'Ceftriaxona 1g I.V.', line: 'Hospitalaria', presentation: 'Caja x 10 ampollas + diluyente', invima: 'Vigente INVIMA', temperature: '15°C - 25°C', stockStatus: 'Disponible' },
  { id: '3', name: 'Meropenem 1g Polvo Inyectable', line: 'Hospitalaria', presentation: 'Caja x 1 vial', invima: 'Vigente INVIMA', temperature: '15°C - 25°C', stockStatus: 'Alta Rotación' },
  { id: '4', name: 'Lactato de Ringer 500ml', line: 'Hospitalaria', presentation: 'Bolsa colapsable x 24 unds', invima: 'Vigente INVIMA', temperature: '15°C - 25°C', stockStatus: 'Disponible' },
  { id: '5', name: 'Solución Salina Normal 0.9% 500ml', line: 'Hospitalaria', presentation: 'Bolsa x 24 unds', invima: 'Vigente INVIMA', temperature: '15°C - 25°C', stockStatus: 'Disponible' },
  { id: '6', name: 'Propofol 1% 20ml', line: 'Hospitalaria', presentation: 'Caja x 5 ampollas emulsión', invima: 'Vigente INVIMA', temperature: '2°C - 25°C', stockStatus: 'Disponible' },
  { id: '7', name: 'Insulina Glargina 100 UI/ml', line: 'Hospitalaria', presentation: 'Pluma prellenada 3ml', invima: 'Vigente INVIMA', temperature: '2°C - 8°C (Refrigerado)', stockStatus: 'Disponible' },
  { id: '8', name: 'Jeringas Desechables 5ml c/aguja 21G', line: 'Insumos', presentation: 'Caja x 100 unidades', invima: 'Dispositivo Médico INVIMA', temperature: 'Ambiente controlado', stockStatus: 'Disponible' },
  { id: '9', name: 'Jeringas Desechables 10ml c/aguja 21G', line: 'Insumos', presentation: 'Caja x 100 unidades', invima: 'Dispositivo Médico INVIMA', temperature: 'Ambiente controlado', stockStatus: 'Disponible' },
  { id: '10', name: 'Guantes de Examen Nitrilo Azul (S, M, L)', line: 'Insumos', presentation: 'Caja x 100 unidades', invima: 'Dispositivo Médico INVIMA', temperature: 'Ambiente controlado', stockStatus: 'Disponible' },
  { id: '11', name: 'Guantes Quirúrgicos Estériles Látex', line: 'Insumos', presentation: 'Caja x 50 pares en empaque individual', invima: 'Dispositivo Médico INVIMA', temperature: 'Ambiente controlado', stockStatus: 'Disponible' },
  { id: '12', name: 'Catéter Intravenoso Periférico 18G/20G/22G', line: 'Insumos', presentation: 'Caja x 50 unidades estériles', invima: 'Dispositivo Médico INVIMA', temperature: 'Ambiente controlado', stockStatus: 'Disponible' },
  { id: '13', name: 'Equipo de Venoclisis con Microgotero', line: 'Insumos', presentation: 'Paquete x 20 unidades', invima: 'Dispositivo Médico INVIMA', temperature: 'Ambiente controlado', stockStatus: 'Disponible' },
  { id: '14', name: 'Gasas Quirúrgicas Estériles 7.5 x 7.5 cm', line: 'Insumos', presentation: 'Sobre x 5 unidades / Caja x 100', invima: 'Dispositivo Médico INVIMA', temperature: 'Ambiente controlado', stockStatus: 'Disponible' },
  { id: '15', name: 'Acetaminofén 500mg Tabletas', line: 'Comercial', presentation: 'Caja x 100 tabletas (Blíster)', invima: 'Vigente INVIMA', temperature: '15°C - 25°C', stockStatus: 'Alta Rotación' },
  { id: '16', name: 'Ibuprofeno 800mg Tabletas', line: 'Comercial', presentation: 'Caja x 50 tabletas', invima: 'Vigente INVIMA', temperature: '15°C - 25°C', stockStatus: 'Alta Rotación' },
  { id: '17', name: 'Amoxicilina 500mg Cápsulas', line: 'Comercial', presentation: 'Caja x 50 cápsulas', invima: 'Vigente INVIMA', temperature: '15°C - 25°C', stockStatus: 'Disponible' },
  { id: '18', name: 'Losartán Potásico 50mg', line: 'Comercial', presentation: 'Caja x 30 tabletas recubiertas', invima: 'Vigente INVIMA', temperature: '15°C - 25°C', stockStatus: 'Disponible' },
  { id: '19', name: 'Omeprazol 20mg Cápsulas', line: 'Comercial', presentation: 'Caja x 30 cápsulas', invima: 'Vigente INVIMA', temperature: '15°C - 25°C', stockStatus: 'Alta Rotación' },
  { id: '20', name: 'Metformina 850mg Tabletas', line: 'Comercial', presentation: 'Caja x 30 tabletas', invima: 'Vigente INVIMA', temperature: '15°C - 25°C', stockStatus: 'Disponible' },
  { id: '21', name: 'Extracto Estandarizado Alcachofa + Boldo', line: 'Naturista', presentation: 'Frasco x 360ml jarabe', invima: 'Registro Fitoterapéutico', temperature: '15°C - 25°C', stockStatus: 'Disponible' },
  { id: '22', name: 'Colágeno Hidrolizado + Vitamina C y Biotina', line: 'Naturista', presentation: 'Tarro x 500g polvo soluble', invima: 'Suplemento Dietario INVIMA', temperature: '15°C - 25°C', stockStatus: 'Disponible' }
];

export const SERVICE_LINES: ServiceLine[] = [
  {
    id: "hospitalaria",
    title: "Línea Hospitalaria",
    category: "Alta Complejidad",
    summary: "Medicamentos de uso hospitalario, soluciones endovenosas y fármacos especializados para clínicas de II, III y IV nivel.",
    fullDescription: "Suministro continuo de medicamentos críticos, anestésicos, antibióticos de amplio espectro y electrolitos parenterales. Cumplimiento irrestricto de la Resolución 1403 con certificados de calidad de cada lote.",
    badge: "Grado Hospitalario",
    targetAudience: "Clínicas, Hospitales, Quirófanos y Unidades de Cuidados Intensivos",
    topProducts: [
      "Antibióticos parenterales: Ceftriaxona, Ampicilina+Sulbactam, Meropenem",
      "Soluciones endovenosas: Ringer Lactato, SSN 0.9%, Dextrosa",
      "Anestésicos y sedantes: Propofol, Fentanilo, Rocuronio",
      "Fármacos biológicos y termolábiles (cadena de frío 2°C a 8°C)"
    ],
    specs: [
      { label: "Normativa", value: "Resolución 1403 de 2007 / INVIMA" },
      { label: "Cadena de Frío", value: "Termo-registradores validados" },
      { label: "Despacho Express", value: "Entregas prioritarias a centros de urgencias" }
    ]
  },
  {
    id: "insumos",
    title: "Insumos Médicos",
    category: "Dispositivos & Quirúrgico",
    summary: "Material médico-quirúrgico, jeringas, catéteres, guantes y consumibles estériles con registro sanitario INVIMA.",
    fullDescription: "Abastecimiento de dispositivos médicos estériles de alta demanda para áreas de hospitalización, cirugía y toma de muestras. Empaques individuales grado médico con trazabilidad por código de barras.",
    badge: "Registro INVIMA Vigente",
    targetAudience: "Hospitales, centros de salud, laboratorios clínicos y consultorios",
    topProducts: [
      "Jeringas descartables de 1ml, 3ml, 5ml, 10ml y 20ml",
      "Guantes de examen y quirúrgicos (Nitrilo, Látex estéril)",
      "Catéteres endovenosos radiopacos (18G, 20G, 22G, 24G)",
      "Material de curación: Gasas estériles, apósitos, vendas elásticas"
    ],
    specs: [
      { label: "Esterilidad", value: "Óxido de etileno / radiación gamma" },
      { label: "Disponibilidad", value: "Stock permanente para alta demanda institucional" },
      { label: "Venta Mayorista", value: "Por cajas master y embalajes clínicos" }
    ]
  },
  {
    id: "institucional",
    title: "Canal Institucional",
    category: "Gestión en Salud Pública",
    summary: "Distribución mayorista calendarizada para EPS, IPS, cajas de compensación y redes de salud territorial.",
    fullDescription: "Estructura logística diseñada para responder a licitaciones, contratos de suministro masivo y entrega periódica en múltiples sedes departamentales, con soporte de facturación electrónica y compatibilidad RIPS.",
    badge: "Abastecimiento Masivo",
    targetAudience: "EPS, IPS, Cajas de Compensación, Secretarías Departamentales",
    topProducts: [
      "Paquetes de medicamentos del Plan de Beneficios en Salud (PBS)",
      "Abastecimiento programado mensual por sedes territoriales",
      "Fármacos de control especial con custodia reglamentaria",
      "Plataforma de remisiones y reportes de trazabilidad en lote"
    ],
    specs: [
      { label: "Cobertura", value: "Rutas troncales fijas a 32 departamentos" },
      { label: "Facturación", value: "Electrónica DIAN y conciliación RIPS" },
      { label: "Garantía", value: "Compromiso de entrega sin quiebres de inventario" }
    ]
  },
  {
    id: "comerciales",
    title: "Productos Comerciales",
    category: "Droguerías & Retail",
    summary: "Catálogo masivo de medicamentos genéricos y éticos de marca para droguerías independientes y cadenas.",
    fullDescription: "Precios directos de laboratorio para que las droguerías comunitarias mantengan márgenes de utilidad atractivos y cero desabastecimiento en analgésicos, antibióticos, antigripales y salud digestiva.",
    badge: "Precios Directos Mayoristas",
    targetAudience: "Droguerías de barrio, farmacias independientes y distribuidores zonales",
    topProducts: [
      "Analgésicos y antiinflamatorios (Acetaminofén, Ibuprofeno, Naproxeno)",
      "Cardiovasculares y metabólicos (Losartán, Enalapril, Metformina)",
      "Línea pediátrica y suspensiones antibióticas orales",
      "Marcas éticas comerciales líderes en el mercado colombiano"
    ],
    specs: [
      { label: "Portafolio", value: "+2.000 referencias comerciales disponibles" },
      { label: "Tiempos", value: "Bucaramanga < 24h &bull; Nacional 24-48h" },
      { label: "Acompañamiento", value: "Asesor comercial asignado por zona" }
    ]
  },
  {
    id: "naturista",
    title: "Línea Naturista",
    category: "Bienestar & Fitoterapéuticos",
    summary: "Productos herbales, suplementos dietarios y fórmulas naturales respaldadas con registro fitoterapéutico INVIMA.",
    fullDescription: "Complemento de bienestar preventivo para farmacias integrativas y tiendas naturistas. Selección de laboratorios que cumplen Buenas Prácticas de Manufactura en extractos estandarizados.",
    badge: "Bienestar Certificado",
    targetAudience: "Farmacias integrativas, droguerías y tiendas de salud natural",
    topProducts: [
      "Fitoterapéuticos digestivos, hepáticos y circulatorios",
      "Suplementos nutricionales con colágeno, biotina y minerales",
      "Jarabes e infusiones expectorantes a base de extractos naturales",
      "Vitaminas del complejo B, vitamina C y antioxidantes"
    ],
    specs: [
      { label: "Seguridad", value: "100% Registro Sanitario INVIMA vigente" },
      { label: "Calidad", value: "Extractos botánicos estandarizados" },
      { label: "Demanda", value: "Línea de alto margen y creciente consumo" }
    ]
  }
];

// Operational Facts (Audited Data replacing fake quotes)
export const OPERATIONAL_FACTS = [
  {
    metric: "+12.400",
    label: "Despachos Anuales Realizados",
    detail: "Envíos completados a farmacias, clínicas e IPS en toda Colombia."
  },
  {
    metric: "99.8%",
    label: "Cumplimiento en Cadena de Frío",
    detail: "Auditoría de termo-registradores digitales sin quiebre de temperatura."
  },
  {
    metric: "32",
    label: "Departamentos con Cobertura",
    detail: "Rutas troncales terrestres y convenios aéreos prioritarios."
  },
  {
    metric: "< 24h",
    label: "Tiempos de Entrega Regional",
    detail: "Despachos en Santander y Norte de Santander el mismo día o 24h."
  }
];

export const LAB_LOGOS: LabPartner[] = [
  { id: 'genfar', name: 'GENFAR', category: 'Genéricos & Hospitalario', origin: 'Colombia / Sanofi', logoImage: '/kairos/lab-1.png' },
  { id: 'tecnoquimicas', name: 'TECNOQUÍMICAS', category: 'Líder Farmacéutico Nacional', origin: 'Colombia', logoImage: '/kairos/lab-2.png' },
  { id: 'abbott', name: 'ABBOTT', category: 'Multinacional Farmacéutica', origin: 'Internacional', logoImage: '/kairos/lab-3.png' },
  { id: 'baxter', name: 'BAXTER', category: 'Fluidos Parenterales & Terapias', origin: 'Internacional', logoImage: '/kairos/lab-4.png' },
  { id: 'procaps', name: 'PROCAPS', category: 'Cápsula Blanda & Soluciones', origin: 'Colombia', logoImage: '/kairos/lab-5.png' },
  { id: 'vitalis', name: 'VITALIS', category: 'Inyectables & Grado Hospitalario', origin: 'Colombia', logoImage: '/kairos/lab-6.png' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "brayan-vargas",
    name: "Brayan Vargas",
    role: "Ejecutivo Comercial",
    sector: "Hospitalario",
    phone: "+57 315 073 3319",
    cleanPhone: "573150733319",
    image: "/kairos/team/brayan-vargas.png",
    specialty: "Línea Hospitalaria & Medicamentos Críticos",
    whatsappMessage: "Hola Brayan, me comunico desde la web de Kairos Farmacéutica. Deseo cotizar medicamentos de la Línea Hospitalaria para mi clínica o IPS."
  },
  {
    id: "silvia-rodriguez",
    name: "Silvia Rodríguez",
    role: "Ejecutiva Comercial",
    sector: "Droguerías",
    phone: "+57 315 572 1178",
    cleanPhone: "573155721178",
    image: "/kairos/team/silvia-rodriguez.png",
    specialty: "Droguerías, Farmacias & Línea Comercial",
    whatsappMessage: "Hola Silvia, me comunico desde la web de Kairos Farmacéutica. Deseo solicitar el vademécum comercial y precios mayoristas para mi droguería."
  },
  {
    id: "william-suarez",
    name: "William Suárez",
    role: "Ejecutivo Comercial",
    sector: "Insumos",
    phone: "+57 315 069 4597",
    cleanPhone: "573150694597",
    image: "/kairos/team/william-suarez.png",
    specialty: "Insumos Quirúrgicos & Dispositivos Médicos",
    whatsappMessage: "Hola William, me comunico desde la web de Kairos Farmacéutica. Deseo información y cotización sobre dispositivos médicos e insumos quirúrgicos."
  },
  {
    id: "juan-david-hernandez",
    name: "Juan David Hernández",
    role: "Ejecutivo Comercial",
    sector: "Nacional",
    phone: "+57 317 127 2999",
    cleanPhone: "573171272999",
    image: "/kairos/team/juan-david-hernandez.png",
    specialty: "Cuentas Mayoristas & Distribución Nacional",
    whatsappMessage: "Hola Juan David, me comunico desde la web de Kairos Farmacéutica para consultar sobre distribución mayorista y despachos nacionales."
  },
  {
    id: "daniel-sarmiento",
    name: "Daniel Sarmiento",
    role: "Ejecutivo Comercial",
    sector: "Institucional",
    phone: "+57 315 662 5618",
    cleanPhone: "573156625618",
    image: "/kairos/team/daniel-sarmiento.png",
    specialty: "Canal Institucional, EPS & Redes Públicas",
    whatsappMessage: "Hola Daniel, me comunico desde la web de Kairos Farmacéutica para información sobre el Canal Institucional, contratos y licitaciones de salud."
  },
  {
    id: "andres-ortiz",
    name: "Andrés Ortiz",
    role: "Ejecutivo de Cuentas Clave",
    sector: "Nacional",
    phone: "+57 317 144 8231",
    cleanPhone: "573171448231",
    image: "/kairos/team/andres-ortiz.png",
    specialty: "Convenios Especiales & Línea Naturista",
    whatsappMessage: "Hola Andrés, me comunico desde la web de Kairos Farmacéutica para cotizar la Línea Naturista y convenios especiales de distribución."
  }
];

export const FAQ_LIST = [
  {
    id: "faq-1",
    question: "¿Qué requisitos se necesitan para abrir código comercial con Kairos?",
    answer: "Para habilitar su código como droguería, clínica o institución se requiere: RUT vigente, certificado de Cámara de Comercio (no mayor a 30 días), cédula del representante legal y copia del acta de inspección o resolución de la Secretaría de Salud correspondiente. El trámite se formaliza en menos de 24 horas hábiles.",
    category: "Comercial"
  },
  {
    id: "faq-2",
    question: "¿Cuáles son las condiciones de despacho y pedidos mínimos?",
    answer: "En el área metropolitana de Bucaramanga y municipios de Santander realizamos entregas en menos de 24 horas sin recargo a partir de montos mínimos accesibles. Para despachos a nivel nacional hacia los 32 departamentos, coordinamos fletes consolidados a través de transportadoras especializadas en medicamentos con tiempos de 24 a 48 horas.",
    category: "Logística"
  },
  {
    id: "faq-3",
    question: "¿Cómo garantizan la cadena de frío de medicamentos termolábiles?",
    answer: "Nuestra bodega central en el Parque Industrial Garibaldi cuenta con cámaras frías de 2°C a 8°C auditadas permanentemente con sensores digitales certificados. Para el transporte, utilizamos conservadoras térmicas de alta densidad con geles refrigerantes en cantidad calibrada y termo-registradores digitales para validar que el medicamento no sufrió quiebre de temperatura.",
    category: "Calidad"
  },
  {
    id: "faq-4",
    question: "¿Cómo solicitar una cotización formal o lista de precios en PDF?",
    answer: "Puede utilizar nuestro buscador de Vademécum en el sitio web para seleccionar referencias, enviar su solicitud mediante el formulario con su correo institucional para recibir la cotización formal en PDF en menos de 2 horas hábiles, o conectar de inmediato por WhatsApp con el asesor asignado a su sector.",
    category: "Atención"
  }
];
