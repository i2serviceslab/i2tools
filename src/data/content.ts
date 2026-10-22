import { MetricItem, PracticeArea, ServicePackage } from '../types';

export const siteContent = {
  brand: {
    name: 'i2 Services S.A.S.',
    taglineShort: {
      en: 'You Ground, our Experience',
      es: 'Su Terreno, nuestra Experiencia'
    },
    sloganHero: {
      en: 'You drill. We handle everything else.',
      es: 'Usted perfora. Nosotros nos encargamos de todo lo demás.'
    },
    subHero: {
      en: 'Public-company standards, at junior cost.',
      es: 'Estándares de compañía listada, a costo de junior.'
    },
    heroLead: {
      en: 'You explore and raise capital. We manage your mining project in Colombia with verified local knowledge, public-company governance, and junior-company cost efficiency.',
      es: 'Usted explora y levanta capital. Nosotros administramos su proyecto minero en Colombia con conocimiento real del territorio y estándares de una compañía listada en Canadá o EE. UU., a costo de junior.'
    },
    address: 'Cra. 43A #1 Sur 188, Of. 610 · Torre Empresarial Davivienda · Medellín, Colombia',
    email: 'info@i2services.co',
    phone: '+57 310 397 6421'
  },

  metrics: [
    {
      number: '02',
      label: {
        en: 'Publicly Listed Clients',
        es: 'Compañías Listadas en Bolsa'
      },
      detail: {
        en: 'Mining companies (TSX / ASX) run their Colombian back office on this team.',
        es: 'Compañías mineras listadas operan su back office en Colombia con este equipo.'
      },
      highlight: true
    },
    {
      number: '22',
      label: {
        en: 'In-House Specialists',
        es: 'Especialistas en Equipo'
      },
      detail: {
        en: 'Multidisciplinary team in law, finance, geology, mining and technology based in Medellín.',
        es: 'Equipo multidisciplinario con oficina física en la Torre Davivienda, Medellín.'
      }
    },
    {
      number: '14+',
      label: {
        en: 'Mining Titles & 60 Applications',
        es: 'Títulos Mineros y 60 Solicitudes'
      },
      detail: {
        en: 'Actively managed and kept in full legal standing before the National Mining Agency (ANM).',
        es: 'Gestionados y monitoreados continuamente ante la Agencia Nacional de Minería (ANM).'
      }
    },
    {
      number: '05',
      label: {
        en: 'Entities Incorporated',
        es: 'Sociedades y Sucursales'
      },
      detail: {
        en: 'Local vehicle companies and branches formed with foreign capital in Colombia.',
        es: 'Sociedades constituidas y formalizadas con capital extranjero en Colombia.'
      }
    },
    {
      number: '06',
      label: {
        en: 'Corporate Bank Accounts',
        es: 'Cuentas Bancarias Corporativas'
      },
      detail: {
        en: 'Opened and managed across Tier-1 institutions: Bancolombia, BBVA, Banco Agrario.',
        es: 'Abiertas y operativas en Bancolombia, BBVA y Banco Agrario.'
      }
    },
    {
      number: '18m',
      label: {
        en: 'Continuous Drilling Record',
        es: 'Perforación sin Interrupciones'
      },
      detail: {
        en: 'Case study: Titles in good standing through 18 months of continuous drilling, zero interruptions.',
        es: 'Caso de éxito: Títulos en regla durante 18 meses de perforación continua, sin interrupciones.'
      },
      highlight: true
    }
  ] as MetricItem[],

  practiceAreas: [
    {
      id: 'legal',
      title: {
        en: 'Legal & Regulatory Services',
        es: 'Servicios Legales y Regulatorios'
      },
      tagline: {
        en: 'Full legal security from local incorporation to title defence and environmental permits.',
        es: 'Seguridad jurídica integral desde la constitución societaria hasta la defensa de títulos.'
      },
      icon: 'Scale',
      items: [
        {
          en: 'Corporate & company law: Incorporation, bylaw amendments, minutes, corporate governance, and filings before chambers of commerce and superintendencies.',
          es: 'Derecho comercial y societario: Constitución de sociedades, reformas estatutarias, actas, gobierno corporativo y trámites ante entidades de control.'
        },
        {
          en: 'Mining & environmental law: Application and management of mining titles, PTO, environmental licensing, natural-resource permits, surface fees, and insurance bonds.',
          es: 'Derecho minero y ambiental: Solicitud y gestión de títulos mineros, PTO, licenciamiento ambiental, seguimiento de cánones superficiarios y pólizas.'
        },
        {
          en: 'Corporate compliance (SAGRILAFT / AML-CFT): Due diligence on vendors and partners, beneficial-owner identification, restrictive-list and PEP screening, and whistleblower channels.',
          es: 'Cumplimiento corporativo (SAGRILAFT / LA-FT): Debida diligencia de clientes y proveedores, beneficiarios finales, listas restrictivas y prevención de soborno.'
        },
        {
          en: 'Contract & commercial law: Drafting, negotiation and administration of civil works, leases, easements, confidentiality, and joint-venture agreements.',
          es: 'Derecho contractual y comercial: Redacción y negociación de contratos de obra civil, servidumbres de paso, acuerdos de confidencialidad y colaboración.'
        },
        {
          en: 'Labour & social security law: Employment agreements, shift and field working hours, payroll compliance, internal work regulations, and contingency prevention.',
          es: 'Derecho laboral y seguridad social: Contratación de personal, jornadas de campo y turnos, liquidaciones, reglamento interno y prevención de riesgos laborales.'
        }
      ]
    },
    {
      id: 'finance',
      title: {
        en: 'Financial, Accounting & Tax',
        es: 'Financiera, Contable y Tributaria'
      },
      tagline: {
        en: 'Local accounting rigor structured to feed listed-company head office reports seamlessly.',
        es: 'Rigor contable y tributario local listo para reportes IFRS a casas matrices en Canadá y Australia.'
      },
      icon: 'Calculator',
      items: [
        {
          en: 'Accounting system configured to Colombian regulations and IFRS standards with audit-ready traceability.',
          es: 'Sistema contable configurado bajo normativa colombiana y NIIF/IFRS con trazabilidad para auditoría externa.'
        },
        {
          en: 'Daily financial, tax and treasury management: Periodic tax filings, accounts receivable/payable, and monthly statements.',
          es: 'Gestión financiera y tributaria diaria: Obligaciones periódicas con la DIAN, pagos, cartera y estados financieros mensuales.'
        },
        {
          en: 'Corporate banking & signatories: Account opening with top banks, authorized signatures, approval matrices, and foreign exchange monetization.',
          es: 'Banca corporativa: Apertura de cuentas en Bancolombia/BBVA, límites de aprobación y monetización de divisas en mercado cambiario.'
        },
        {
          en: 'Human resources & payroll: Recruitment, onboarding, biometric/field records, social security filings, and occupational health (SG-SST).',
          es: 'Gestión humana y nómina: Apoyo en selección, contratación local, expedientes laborales, seguridad social y seguridad y salud en el trabajo.'
        }
      ]
    },
    {
      id: 'comms',
      title: {
        en: 'Communications, Brand & IR',
        es: 'Comunicaciones, Marca y Reputación'
      },
      tagline: {
        en: 'Translating Colombian operational milestones into compelling capital-market narrative.',
        es: 'Traducción de hitos operativos en campo a narrativas efectivas para inversionistas en bolsa.'
      },
      icon: 'Megaphone',
      items: [
        {
          en: 'Investor Relations (IR): TSX/ASX pitch decks, corporate presentations, quarterly management commentary, and technical conference materials.',
          es: 'Relaciones con Inversionistas (IR): Pitch decks, presentaciones corporativas para conferencias internacionales de minería (TSX/ASX).'
        },
        {
          en: 'Events & international networking: Presence and coordination at premier mining summits (PDAC Toronto, Mines & Money, roadshows).',
          es: 'Eventos y relacionamiento: Coordinación para ferias mineras globales (PDAC Toronto, Mines & Money) y roadshows de capital.'
        },
        {
          en: 'Media, PR & institutional positioning: Press releases, stakeholder interviews, official industry positioning, and SEO/GEO visibility.',
          es: 'Relaciones públicas y medios: Comunicados de prensa, entrevistas en medios especializados y posicionamiento institucional.'
        },
        {
          en: 'Content production & crisis management: High-resolution field photography, technical drill core infographics, and community crisis protocols.',
          es: 'Producción técnica y gestión de crisis: Fotografía y video de perforación en campo, infografías geológicas y protocolos de contingencia social.'
        }
      ]
    },
    {
      id: 'tech',
      title: {
        en: 'Project Management & AI Technology',
        es: 'Gestión de Proyectos y Tecnología'
      },
      tagline: {
        en: 'Real-time dashboards, automated compliance pipelines, and custom AI agents for exploration.',
        es: 'Tableros de control ejecutivos, automatizaciones de cumplimiento y agentes de IA a la medida.'
      },
      icon: 'Cpu',
      items: [
        {
          en: 'Project governance & timelines: Milestone tracking, operational risk matrices, and executive deliverables for board meetings.',
          es: 'Gobernanza y cronogramas: Seguimiento de hitos de exploración, matrices de riesgos operativos y reportes ejecutivos para juntas directivas.'
        },
        {
          en: 'Custom AI systems & autonomous agents: Specialized agents trained on Colombian mining regulations, contract checks, and title status.',
          es: 'Sistemas de IA y agentes a medida: Agentes inteligentes de apoyo operativo en normativa minera colombiana y revisión contractual.'
        },
        {
          en: 'Automated executive dashboards: Live tracking of surface fee deadlines, drilling expenditures, and ANM filing statuses.',
          es: 'Tableros web corporativos: Visibilidad en tiempo real de vencimientos de cánones, presupuesto de perforación y trámites ANM.'
        },
        {
          en: 'CRM & stakeholder relationship workflows: Contact management with local authorities, environmental consultants, and community leaders.',
          es: 'CRM y flujos de relacionamiento: Gestión estructurada de contactos con autoridades locales, comunidades y consultores aliados.'
        }
      ]
    }
  ] as PracticeArea[],

  packages: [
    {
      id: 'launch',
      badge: { en: 'One-Time Onboarding', es: 'Montaje Inicial · Único' },
      name: { en: 'Launch Package', es: 'Paquete de Lanzamiento' },
      target: {
        en: 'For foreign exploration companies establishing clean, verifiable, and swift initial operations in Colombia.',
        es: 'Para compañías extranjeras que necesitan iniciar operaciones en Colombia de manera ordenada, rápida y verificable.'
      },
      deliverables: [
        { en: 'Creation & structuring of the local corporate vehicle (SAS or branch)', es: 'Creación o estructuración de la sociedad vehículo local (SAS o sucursal)' },
        { en: 'Corporate, registry, Chamber of Commerce, and DIAN tax setup', es: 'Registro mercantil, trámites DIAN (RUT), y libros corporativos' },
        { en: 'Tier-1 corporate bank account opening support (Bancolombia, BBVA)', es: 'Acompañamiento en apertura de cuentas bancarias corporativas' },
        { en: 'Preliminary legal due diligence review of target mining titles', es: 'Revisión legal preliminar de títulos y solicitudes mineras' },
        { en: 'Initial SAGRILAFT & AML compliance checklist and early risk audit', es: 'Checklist inicial de cumplimiento SAGRILAFT e identificación temprana de riesgos' }
      ]
    },
    {
      id: 'monthly',
      badge: { en: 'Daily Back-Office Retainer', es: 'Operación Diaria · Mensual' },
      name: { en: 'Monthly Package', es: 'Paquete Mensual Operativo' },
      target: {
        en: 'Turnkey administration of all ongoing day-to-day legal, accounting, tax, and regulatory obligations in Colombia.',
        es: 'Administración continua de la operación colombiana: legal, contable, nómina, y cumplimiento minero diario.'
      },
      deliverables: [
        { en: 'Ongoing legal counsel specialized in Colombian mining sector regulations', es: 'Asesoría jurídica permanente especializada en sector minero' },
        { en: 'Full accounting, treasury, payroll management, and monthly tax filings', es: 'Contabilidad diaria, gestión de nómina, pagos a proveedores e impuestos' },
        { en: 'Continuous tracking of mining and environmental obligations before ANM', es: 'Seguimiento riguroso de obligaciones mineras y ambientales (cánones, pólizas)' },
        { en: 'Comprehensive monthly reporting tailored for head office board reviews', es: 'Reportes ejecutivos mensuales consolidados para casa matriz y auditorías' },
        { en: 'Document management, secure digital archive, and official notice monitoring', es: 'Gestión documental, archivo centralizado y monitoreo de notificaciones oficiales' }
      ],
      featured: true
    },
    {
      id: 'adhoc',
      badge: { en: 'Special Mandates', es: 'Por Proyecto · Ad-hoc' },
      name: { en: 'Ad-hoc Services', es: 'Servicios Puntuales' },
      target: {
        en: 'Targeted high-impact interventions tailored to specific strategic milestones, financing rounds, or audits.',
        es: 'Servicios especializados por proyecto o actividad, según la etapa estratégica de la compañía.'
      },
      deliverables: [
        { en: 'Exhaustive legal & operational title due diligence and audit reports', es: 'Debida diligencia técnica y legal a fondo de títulos mineros' },
        { en: 'High-profile investor pitch decks, TSX/ASX one-pagers, and IR collateral', es: 'Pitch decks y one-pagers de alto perfil para inversionistas y bolsas' },
        { en: 'Corporate governance policies, compliance manuals, and risk matrices', es: 'Políticas corporativas, manuales de cumplimiento y matrices de riesgo' },
        { en: 'Commercial negotiations support: surface easements, drilling contracts, joint-ventures', es: 'Acompañamiento en negociación de servidumbres y contratos de perforación' }
      ]
    }
  ] as ServicePackage[],

  titleBrokerage: {
    badge: { en: 'Signature Engagement', es: 'Servicio Insignia' },
    title: {
      en: 'Mining Title Brokerage & Due Diligence',
      es: 'Corretaje y Due Diligence de Títulos Mineros'
    },
    scope: {
      en: 'Sold as its own independent mandate, buyers-side only.',
      es: 'Se contrata como mandato aparte, exclusivamente del lado comprador.'
    },
    highlights: [
      { en: 'Direct connection between qualified sellers and foreign buyers', es: 'Conexión calificada entre compradores extranjeros y vendedores' },
      { en: 'Preliminary geological and legal opportunity screening', es: 'Revisión preliminar de oportunidad legal, geológica y catastral' },
      { en: 'Coordination and execution of in-depth title due diligence', es: 'Coordinación y ejecución de due diligence exhaustivo' },
      { en: 'Drafting and strategic support for NDAs, LOIs, and MOUs', es: 'Acompañamiento en acuerdos de confidencialidad, cartas de intención y MOUs' }
    ],
    steps: [
      { number: '01', title: { en: 'Initial Diagnosis', es: 'Diagnóstico Inicial' } },
      { number: '02', title: { en: 'Scope Definition', es: 'Definición de Alcance' } },
      { number: '03', title: { en: 'Team Assignment', es: 'Asignación de Equipo' } },
      { number: '04', title: { en: 'Implementation Schedule', es: 'Cronograma' } },
      { number: '05', title: { en: 'Execution & Follow-up', es: 'Ejecución y Control' } },
      { number: '06', title: { en: 'Periodic Client Reporting', es: 'Reportes Periódicos' } },
      { number: '07', title: { en: 'Critical Escalation Protocol', es: 'Escalamiento Crítico' } }
    ]
  }
};
