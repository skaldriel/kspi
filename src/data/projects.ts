export interface Project {
  id: string;
  title: string;
  client?: string;
  category: string;
  description: string;
  materials?: string; // Specifications
  image: string;
  tags: string[];
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: "remodelacion-laboratorio-lister",
    title: "Remodelación de Laboratorio Lister y Centro de Datos",
    client: "Laboratorios Lister",
    category: "Obra Civil / Proyectos Integrales",
    description:
      "Proyecto, remodelación integral de laboratorio: construcción de oficinas con tablaroca, plomería, red eléctrica y la instalación de site, red de voz y datos, aires acondicionados. Se ejecutó la fabricación y montaje de un montacarga eléctrico de 500 kg y la aplicación de piso antiestático especializado para entornos de laboratorio.",
    materials:
      "Instalación de un site para sistema de voz y datos incluyendo la configuración de switch y panel de parcheo. Construcción de cuartos fríos para preservación.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop", // Modern Laboratory
    tags: ["Obra Civil", "Refrigeración", "Laboratorio"],
    gallery: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2674&auto=format&fit=crop", // Server room / Data center
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop", // Laboratory details
    ],
  },
  {
    id: "ingenieria-azucarera-alianza-popular",
    title: "Fabricación y Montaje de Sistemas de Conducción y Sedimentación",
    client: "Ingenio Alianza Popular (Tambaca, S.L.P.)",
    category: "Proyectos Integrales de Fabricación",
    description:
      "Fabricación, montaje y puesta en operación de un sedimentador de cenizas y el conductor principal de bagazo. Incluyó la instalación de cadenas de arrastre y el ajuste de sistemas mecánicos complejos.",
    materials:
      "Uso de acero al carbón e inoxidable para componentes de alta fricción y corrosión.",
    image:
      "https://images.unsplash.com/photo-1565514020125-14f76bef8658?q=80&w=2670&auto=format&fit=crop", // Industrial Machinery/Conveyor
    tags: ["Mecánica", "Montaje", "Ingeniería"],
    gallery: [
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c71?q=80&w=2597&auto=format&fit=crop", // Heavy welding/structure
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop", // Industrial plant
    ],
  },
  {
    id: "mantenimiento-termico-alta-presion",
    title: "Mantenimiento Integral de Calderas e Instalación de Aislamiento",
    client: "N/A",
    category: "Mantenimiento Industrial",
    description:
      "Ejecución de servicios de instalación y rolado de tubería flux en calderas. Se realizó el mantenimiento mecánico preventivo y correctivo para asegurar la eficiencia térmica.",
    materials:
      "Instalación de paredes de aislamiento refractario y ladrillo refractario para protección térmica.",
    image:
      "https://plus.unsplash.com/premium_photo-1661962360562-b9b6572e816a?q=80&w=2670&auto=format&fit=crop", // Boiler / Pipes
    tags: ["Tuberías", "Válvulas", "Mantenimiento"],
    gallery: [
      "https://images.unsplash.com/photo-1535940336449-349bec986968?q=80&w=2574&auto=format&fit=crop", // Pipes detail
      "https://images.unsplash.com/photo-1507537362848-9c7e70b7e8c6?q=80&w=2670&auto=format&fit=crop", // Worker with safety gear
    ],
  },
  {
    id: "soldadura-sanitaria-grado-alimenticio",
    title: "Instalación de Tubería de Proceso e Infraestructura Eléctrica",
    client: "Sector Alimentario / Lácteo",
    category: "Tubería de Proceso / Eléctrico",
    description:
      "Instalación de tubería en acero inoxidable grado alimenticio y montaje de interruptores en tableros principales en cuartos de calderas.",
    materials:
      "Aplicación de soldadura especializada mediante procesos TIG, MIG y cámara de gas argón para garantizar la pureza y resistencia de las uniones.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop", // TIG Welding / Sparks
    tags: ["Acero Inox", "Estructural", "Soldadura"],
    gallery: [
      "https://images.unsplash.com/photo-1581093588402-4857474d2f14?q=80&w=2670&auto=format&fit=crop", // Stainless steel pipes
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop", // Electrical panel
    ],
  },
  {
    id: "ingenieria-ambiental-ptar",
    title:
      "Construcción de estructura y montaje de planta pre tratadora de aguas residuales",
    client: "N/A",
    category: "Ingeniería Ambiental",
    description:
      "Proyecto integral que contempló la fabricación de la estructura y el montaje de la planta de tratamiento, instalación de bombas de agua e interconexión de tuberías de suministro y descarga.",
    materials:
      "Fabricación de tanques y tolvas bajo normas oficiales vigentes en materia de agua y la Ley de Aguas Nacionales.",
    image:
      "https://images.unsplash.com/photo-1563910908-164998967f6b?q=80&w=2671&auto=format&fit=crop", // Water treatment plant
    tags: ["Ingeniería Ambiental", "Tratamiento de Agua"],
    gallery: [
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2670&auto=format&fit=crop", // Industrial water pipes
      "https://images.unsplash.com/photo-1622614761405-c0379983949f?q=80&w=2532&auto=format&fit=crop", // Industrial tank
    ],
  },
  {
    id: "proteccion-activos-industriales",
    title: "Impermeabilización y Sellado",
    client: "N/A",
    category: "Mantenimiento de Edificaciones",
    description:
      "Limpieza profunda y sellado de caballetes y traslapes en techumbres industriales para la eliminación total de filtraciones.",
    materials:
      "Uso de sellador de alta adherencia y cinta autosellante de larga duración.",
    image:
      "https://images.unsplash.com/photo-1517260739837-aaca985ed548?q=80&w=2670&auto=format&fit=crop", // Roof / Construction height
    tags: ["Mantenimiento", "Impermeabilización"],
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop", // Construction structure
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=2669&auto=format&fit=crop", // Safety gear
    ],
  },
  {
    id: "mantenimiento-sistemas-enfriamiento",
    title: "Mantenimiento General a Chiller y Torres de Enfriamiento",
    client: "Planta SERROT",
    category: "Mantenimiento Mecánico",
    description:
      "Limpieza técnica y revisión de sistemas de enfriamiento de agua para procesos industriales (Chiller’s).",
    materials: "",
    image:
      "https://images.unsplash.com/photo-1565451978393-5ba202159670?q=80&w=2670&auto=format&fit=crop", // HVAC / Industrial Fan
    tags: ["Mantenimiento Mecánico", "Refrigeración"],
    gallery: [
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2670&auto=format&fit=crop", // General industrial maintenance
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2669&auto=format&fit=crop", // HVAC component/pipes
    ],
  },
];
