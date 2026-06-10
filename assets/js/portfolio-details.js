function obtenerIdioma() {
  return localStorage.getItem("language") || "es";
}

function obtenerParametroURL(nombre) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombre);
}

function mostrarDetalles(tituloKey, imagenes, githubLink) {
  const idioma = obtenerIdioma();
  const t = traducciones[idioma];

  const titulo = t.proyectos[tituloKey].titulo;
  const descripcion = t.proyectos[tituloKey].descripcion;
  const detalles = t.proyectos[tituloKey].detalles || [];

  document.getElementById("portfolio-title").innerText = titulo;
  document.getElementById("portfolio-description").innerText = descripcion;

  const featuresContainer = document.getElementById("portfolio-features");
  featuresContainer.innerHTML = "";
  detalles.forEach(function (item) {
    const li = document.createElement("li");
    li.innerText = item;
    featuresContainer.appendChild(li);
  });

  const slider = document.querySelector(".portfolio-details-slider .swiper-wrapper");
  slider.innerHTML = "";

  imagenes.forEach(function (imagen) {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    const img = document.createElement("img");
    img.src = imagen;
    img.alt = titulo;
    slide.appendChild(img);
    slider.appendChild(slide);
  });

  const githubLinkElement = document.getElementById("github-link");
  const isGithubLink = githubLink.includes("github.com");
  githubLinkElement.href = githubLink;
  githubLinkElement.innerHTML = `${isGithubLink ? t.githubLink : t.webLink} <i class="${isGithubLink ? "bi bi-github" : "bi bi-globe"}"></i>`;

  new Swiper(".portfolio-details-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

const proyectos = {
  signalScan: {
    imagenes: [
      "assets/img/portfolio/signalScan1.png",
      "assets/img/portfolio/signalScan2.png",
      "assets/img/portfolio/signalScan3.png",
    ],
    githubLink: "https://github.com/gvraul8/signalscan",
  },
  IPOkemon: {
    imagenes: [
      "assets/img/portfolio/IPOkemon.png",
      "assets/img/portfolio/IPOkemon1.png",
      "assets/img/portfolio/IPOkemon2.png",
    ],
    githubLink: "https://github.com/gvraul8/IPOkemon_grupal",
  },
  pokemon: {
    imagenes: [
      "assets/img/portfolio/wartortle1.png",
      "assets/img/portfolio/wartortle2.png",
      "assets/img/portfolio/wartortle3.png",
    ],
    githubLink: "https://github.com/gvraul8/PokemonWartortle",
  },
  gsiFinanzas: {
    imagenes: [
      "assets/img/portfolio/gsi_finanzas1.png",
      "assets/img/portfolio/gsi_finanzas2.png",
      "assets/img/portfolio/gsi_finanzas3.png",
    ],
    githubLink: "https://github.com/gvraul8/gsi_finanzas",
  },
  ESItravel: {
    imagenes: [
      "assets/img/portfolio/ESITravel.png",
      "assets/img/portfolio/ESITravel2.png",
      "assets/img/portfolio/ESITravel3.png",
    ],
    githubLink: "https://github.com/pedroocampos/isi-ESI-Travel.git",
  },
  a2fisioterapia: {
    imagenes: [
      "assets/img/portfolio/a2fisioterapia.png",
      "assets/img/portfolio/a2fisioterapia1.png",
      "assets/img/portfolio/a2fisioterapia2.png",
    ],
    githubLink: "https://a2fisioterapia.com/",
  },
  qrtrol: {
    imagenes: [
      "assets/img/portfolio/qrtrol.png",
      "assets/img/portfolio/qrtrol1.png",
      "assets/img/portfolio/qrtrol2.png",
    ],
    githubLink: "https://github.com/gvraul8/qrtrol",
  },
  afalbolanos: {
    imagenes: [
      "assets/img/portfolio/afalbolanos1.png",
      "assets/img/portfolio/afalbolanos2.png",
      "assets/img/portfolio/afalbolanos3.png",
    ],
    githubLink: "https://afalbolanos.es/",
  },
  micontrolhorario: {
    imagenes: [
      "assets/img/portfolio/micontrolhorario.png",
      "assets/img/portfolio/micontrolhorario1.png",
      "assets/img/portfolio/micontrolhorario2.png",
    ],
    githubLink: "#",
  },
};

const traducciones = {
  es: {
    githubLink: "Ver en GitHub",
    webLink: "Visitar sitio web",
    proyectos: {
      signalScan: {
        titulo: "SignalScan",
        descripcion: "Plataforma móvil diseñada con Flutter para analizar señales de tráfico y apoyar la toma de decisiones en ciudades inteligentes.",
        detalles: [
          "Interfaz intuitiva con visualización de datos en tiempo real.",
          "Integración de sensores y análisis de trayectorias para optimizar el flujo vehicular.",
          "Diseño responsive orientado a usabilidad en desplazamiento." 
        ],
      },
      IPOkemon: {
        titulo: "IPOkemon",
        descripcion: "Aplicación de escritorio que combina simulación de inversiones y una experiencia lúdica inspirada en el universo Pokémon.",
        detalles: [
          "Sistema de gestión de activos con cálculos financieros automáticos.",
          "Interfaz de usuario basada en fichas de personajes y paneles de control.",
          "Implementación de interacciones de combate adaptadas a métricas de rendimiento." 
        ],
      },
      pokemon: {
        titulo: "Pokemon Wartortle",
        descripcion: "Proyecto de escritorio con animaciones suaves, componentes dinámicos y un enfoque en experiencia visual avanzada.",
        detalles: [
          "Animaciones interactivas aplicadas a elementos de la UI.",
          "Arquitectura modular para mantenimiento y escalabilidad.",
          "Uso de gráficos y transiciones para mejorar la inmersión del usuario." 
        ],
      },
      gsiFinanzas: {
        titulo: "GSI Finanzas",
        descripcion: "Aplicación móvil para el control financiero personal, con seguimiento de gastos, ingresos y objetivos de ahorro.",
        detalles: [
          "Panel financiero con métricas clave y alertas de presupuesto.",
          "Diseño de navegación simplificada para operaciones rápidas.",
          "Integración de métricas gráficas para análisis de tendencias." 
        ],
      },
      ESItravel: {
        titulo: "ESI Travel",
        descripcion: "Aplicación web para reservas de viajes, hoteles y vuelos con autenticación segura y filtros avanzados.",
        detalles: [
          "Buscador dinámico de destinos con resultados instantáneos.",
          "Sistema de login y gestión de usuarios con roles diferenciados.",
          "Diseño optimizado para accesibilidad y experiencia responsive." 
        ],
      },
      a2fisioterapia: {
        titulo: "A2 Fisioterapia",
        descripcion: "Sitio web profesional para un centro de fisioterapia, diseñado para ofrecer servicios, datos de contacto y reservas en línea.",
        detalles: [
          "Estructura clara de servicios y áreas de especialidad.",
          "Optimización de contenidos para destacar confianza y profesionalismo.",
          "Integración de llamadas a la acción para facilitar la captación de clientes." 
        ],
      },
      qrtrol: {
        titulo: "QRTrol",
        descripcion: "Web de control horario para empleados con roles de gerente y trabajador. Los datos se guardan en base de datos; el gerente genera QR para fichar entradas y salidas, gestiona empleados y obtiene informes exportables.",
        detalles: [
          "Gestión completa de empleados: añadir, editar y eliminar perfiles.",
          "Fichaje de entrada y salida mediante códigos QR generados por el gerente.",
          "Exportación de registros e informes en PDF y Excel a partir de la base de datos." 
        ],
      },
      afalbolanos: {
        titulo: "AFAL Bolaños",
        descripcion: "Plataforma web con tienda solidaria y contenidos de apoyo, desarrollada para la Asociación de Familiares de enfermos de Alzheimer.",
        detalles: [
          "E-commerce accesible con productos y donaciones solidarias.",
          "Gestión de contenidos para noticias, eventos y recursos comunitarios.",
          "Diseño centrado en claridad y empatía para el público objetivo." 
        ],
      },
      micontrolhorario: {
        titulo: "MiControlHorario",
        descripcion: "Aplicación Android para jornadas con distintos tipos de trabajo, donde cada fichaje se registra para control y cálculo de coste. También genera informes mensuales en PDF.",
        detalles: [
          "Registro de turnos con distintos tipos de trabajo y valoración diferenciada.",
          "Control de fichajes de entrada y salida con tipo de trabajo asociado por jornada.",
          "Generación de informes mensuales en PDF para seguimiento y facturación." 
        ],
      },
    },
  },
  en: {
    githubLink: "View on GitHub",
    webLink: "Visit website",
    proyectos: {
      signalScan: {
        titulo: "SignalScan",
        descripcion: "Mobile platform built with Flutter to analyze traffic signals and support smart city decision-making.",
        detalles: [
          "Intuitive interface with real-time data visualization.",
          "Sensor integration and trajectory analysis to optimize traffic flow.",
          "Responsive design focused on mobile usability." 
        ],
      },
      IPOkemon: {
        titulo: "IPOkemon",
        descripcion: "Desktop application combining investment simulation and a gamified experience inspired by the Pokémon universe.",
        detalles: [
          "Asset management system with automatic financial calculations.",
          "User interface based on character cards and control panels.",
          "Battle interaction mechanics adapted to performance metrics." 
        ],
      },
      pokemon: {
        titulo: "Pokemon Wartortle",
        descripcion: "Desktop project with smooth animations, dynamic components and an emphasis on advanced visual experience.",
        detalles: [
          "Interactive animations applied to UI elements.",
          "Modular architecture for maintenance and scalability.",
          "Use of graphics and transitions to enhance user immersion." 
        ],
      },
      gsiFinanzas: {
        titulo: "GSI Finanzas",
        descripcion: "Mobile app for personal financial control, tracking expenses, income, and savings goals.",
        detalles: [
          "Financial dashboard with key metrics and budget alerts.",
          "Simplified navigation design for fast operations.",
          "Graphical metrics integration for trend analysis." 
        ],
      },
      ESItravel: {
        titulo: "ESI Travel",
        descripcion: "Web app for booking flights, hotels and travel services with secure authentication and advanced filters.",
        detalles: [
          "Dynamic destination search with instant results.",
          "Login system and user management with distinct roles.",
          "Design optimized for accessibility and responsive experience." 
        ],
      },
      a2fisioterapia: {
        titulo: "A2 Fisioterapia",
        descripcion: "Professional website developed for a physiotherapy center to showcase services, contact and online appointments.",
        detalles: [
          "Clear service structure with specialization areas.",
          "Content optimization to highlight trust and professionalism.",
          "Calls-to-action designed to ease client acquisition." 
        ],
      },
      qrtrol: {
        titulo: "QRTrol",
        descripcion: "Employee time-tracking web app with manager and employee roles. Data is stored in a database; managers generate QR codes for clocking in/out, manage staff, and obtain exportable reports.",
        detalles: [
          "Complete employee management: add, edit and remove profiles.",
          "Clock-in and clock-out via QR codes generated by the manager.",
          "Export attendance records and reports as PDF and Excel from the database." 
        ],
      },
      afalbolanos: {
        titulo: "AFAL Bolaños",
        descripcion: "Web platform with a solidarity shop and support content, developed for the Alzheimer care association.",
        detalles: [
          "Accessible e-commerce with products and solidarity donations.",
          "Content management for news, events and community resources.",
          "Design centered on clarity and empathy for the target audience." 
        ],
      },
      micontrolhorario: {
        titulo: "MiControlHorario",
        descripcion: "Android app for schedules with multiple work types, where each record is tracked for control and cost calculation. It also generates monthly PDF reports.",
        detalles: [
          "Shift registration with different work types and differentiated pricing.",
          "Check-in/check-out tracking with the work type recorded for each shift.",
          "Monthly PDF report generation for tracking and billing." 
        ],
      },
    },
  },
};

const proyectoSeleccionado = obtenerParametroURL("proyecto");

if (proyectoSeleccionado && proyectos[proyectoSeleccionado]) {
  const proyecto = proyectos[proyectoSeleccionado];
  mostrarDetalles(
    proyectoSeleccionado,
    proyecto.imagenes,
    proyecto.githubLink
  );
}
