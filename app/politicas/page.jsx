"use client";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Copy,
  ChevronDown,
  ChevronUp,
  Database,
  KeyRound,
  Cpu,
  Layers,
  FileText,
} from "lucide-react";

import Head from "next/head";
import Header from "./components/header";

export default function GLYNNEOverviewComponent() {
  const [openSection, setOpenSection] = useState(null);
  const contentRef = useRef(null);

 
  const sections = [
    {
      id: "demo-1",
      title: "Objetivo del Demo",
      icon: FileText,
      content:
        "Este demo fue creado para mostrar a Servex cómo una plataforma de análisis inteligente puede interpretar datos estructurados provenientes de CET Designer y convertirlos en información útil en tiempo real. Aunque es una versión básica, refleja claramente la dirección tecnológica y el potencial del sistema completo."
    },
    {
      id: "demo-2",
      title: "Naturaleza del Prototipo",
      icon: FileText,
      content:
        "El desarrollo se realizó en una semana utilizando la infraestructura previamente establecida por GLYNNE IA. Gracias a estos cimientos —modelos privados, flujos, entornos MCP, vectorización y servicios cloud— fue posible construir un ejemplo funcional sin necesidad de implementar todavía la arquitectura final."
    },
    {
      id: "demo-3",
      title: "Uso de Datos del Catálogo",
      icon: FileText,
      content:
        "Para el demo se utilizó el catálogo completo de Diversified Spaces. Toda la información del PDF fue procesada, limpiada y convertida en una matriz vectorial estructurada. Esta base permite que el modelo consulte datos reales, productos, variaciones y especificaciones con alto nivel de precisión."
    },
    {
      id: "demo-4",
      title: "Alcance del Procesamiento Inicial",
      icon: FileText,
      content:
        "El sistema demuestra cómo interpretar archivos estructurados, identificar productos, extraer parámetros relevantes y transformarlos en una base de datos consultable por IA. Aunque esta versión no automatiza cálculos de costos ni genera documentos, establece las bases para lograrlo en fases posteriores."
    },
    {
      id: "demo-5",
      title: "Análisis Inteligente en Tiempo Real",
      icon: FileText,
      content:
        "El modelo puede analizar consultas complejas, comparar productos, identificar variaciones y generar conclusiones basadas en información real. Esto representa el primer paso hacia la automatización completa del flujo entre CET y los procesos administrativos internos."
    },
    {
      id: "demo-6",
      title: "Arquitectura Preliminar",
      icon: FileText,
      content:
        "Aunque el demo utiliza infraestructura ya existente de GLYNNE, el proyecto final contempla una arquitectura modular independiente para Servex, con capas dedicadas para ingestión CET, normalización, pricing engine, documentos PDF y conectores ERP."
    },
    {
      id: "demo-7",
      title: "Unificación de Datos",
      icon: FileText,
      content:
        "Toda la información utilizada fue centralizada en un solo repositorio estructurado. Esto permite que la IA consulte cada componente del catálogo sin inconsistencias y demuestra cómo será el proceso de consolidación de datos que Servex tendrá en su plataforma final."
    },
    {
      id: "demo-8",
      title: "Rol de CET Designer",
      icon: FileText,
      content:
        "El demo refuerza que CET seguirá siendo la herramienta de diseño principal. La plataforma no modifica renders ni modelos 3D; opera exclusivamente sobre los datos exportados, ampliando las capacidades de CET sin alterar su flujo de trabajo."
    },
    {
      id: "demo-9",
      title: "Primer Paso hacia Automatización Completa",
      icon: FileText,
      content:
        "Esta versión demuestra cómo la IA puede interpretar catálogos, pero el sistema final automatizará cotizaciones, documentos técnicos, BOM, resúmenes ejecutivos y reportes internos directamente desde los archivos exportados de CET."
    },
    {
      id: "demo-10",
      title: "Enfoque de Escalabilidad",
      icon: FileText,
      content:
        "El demo es pequeño, pero la arquitectura final está pensada para soportar miles de proyectos, múltiples catálogos, distintos dealers y una operación completamente automatizada dentro de la infraestructura de Servex."
    },
    {
      id: "demo-11",
      title: "Vectorización como Base del Modelo",
      icon: FileText,
      content:
        "La conversión del catálogo en una base vectorial permite consultas semánticas, búsqueda avanzada y análisis inteligente. Es un componente esencial que muestra cómo la IA podrá interpretar futuras expansiones del catálogo sin reestructurar el sistema."
    },
    {
      id: "demo-12",
      title: "Beneficios Inmediatos Demostrados",
      icon: FileText,
      content:
        "Incluso siendo una versión básica, el demo evidencia reducción de tiempos de análisis, mayor claridad en la consulta de datos y una experiencia más fluida para el equipo comercial y técnico, comparado con revisiones manuales del catálogo."
    },
    {
      id: "demo-13",
      title: "Claridad para Equipos Comerciales",
      icon: FileText,
      content:
        "Se demuestra cómo un dealer o asesor puede consultar productos rápidamente sin navegar entre PDFs. El objetivo a futuro es integrar esta capacidad a la plataforma oficial de ventas de Servex."
    },
    {
      id: "demo-14",
      title: "Acceso Universal",
      icon: FileText,
      content:
        "El prototipo refleja la idea de que todo el análisis —hoy restringido a CET— podrá realizarse desde cualquier dispositivo, sin necesidad de un entorno especializado ni licencias adicionales."
    },
    {
      id: "demo-15",
      title: "Independencia Técnica",
      icon: FileText,
      content:
        "Este demo sirve como referencia para construir un ecosistema de software propio de Servex, disminuyendo la dependencia total de CET Designer y abriendo la puerta a procesos más flexibles y escalables."
    },
    {
      id: "demo-16",
      title: "Base para Integración con Sistemas Internos",
      icon: FileText,
      content:
        "La información estructurada y procesada podrá conectarse en el futuro con ERP, CRM, sistemas contables y módulos administrativos, generando un flujo operativo completamente automatizado."
    },
    {
      id: "demo-17",
      title: "Expansión del Catálogo y Nuevos Proveedores",
      icon: FileText,
      content:
        "La arquitectura presentada en el demo permite incorporar catálogos de otros fabricantes en el futuro. Esto prepara a Servex para manejar múltiples líneas de productos desde una sola plataforma."
    },
    {
      id: "demo-18",
      title: "Próximos Módulos del Proyecto Final",
      icon: FileText,
      content:
        "Los siguientes pasos incluirán pricing inteligente, generación de cotizaciones automáticas, matrices de materiales, verificación de compatibilidad de componentes y producción de PDFs profesionales con branding Servex."
    },
    {
      id: "demo-19",
      title: "Proceso Simplificado para el Usuario",
      icon: FileText,
      content:
        "El objetivo a largo plazo es que el diseñador solo exporte desde CET y el sistema haga todo lo demás: analizar, validar, calcular, estructurar y generar todos los documentos necesarios."
    },
    {
      id: "demo-20",
      title: "Preparación para Inteligencia Predictiva",
      icon: FileText,
      content:
        "El demo plantea las bases para futuras funciones como análisis histórico, patrones de compra, sugerencias basadas en demanda y optimización de inventario a partir de datos CET."
    },
    {
      id: "demo-21",
      title: "Enfoque Técnico del Demo",
      icon: FileText,
      content:
        "El prototipo demuestra únicamente el módulo de interpretación de datos. Los demás componentes —pricing engine, rule engine, generador de documentos, trazabilidad, dashboards— forman parte del desarrollo oficial."
    },
    {
      id: "demo-22",
      title: "Compatibilidad con Infraestructura Servex",
      icon: FileText,
      content:
        "El diseño del sistema está pensado para integrarse sin fricción en la operación actual de Servex. No reemplaza procesos, sino que los amplía y los vuelve más eficientes."
    },
    {
      id: "demo-23",
      title: "Alineación con Necesidades del Cliente",
      icon: FileText,
      content:
        "El demo se construyó basado en la necesidad real de Servex: interpretar información compleja con rapidez y reducir la carga manual en análisis, ventas y administración."
    },
    {
      id: "demo-24",
      title: "Limitaciones del Demo",
      icon: FileText,
      content:
        "Si bien muestra el potencial del proyecto, esta versión no incluye cálculos financieros, automatización completa, exportación de documentos ni integración con sistemas externos. Es solo una vista inicial del camino a seguir."
    },
    {
      id: "demo-25",
      title: "Visión del Proyecto Completo",
      icon: FileText,
      content:
        "El desarrollo final consolidará un sistema autónomo capaz de procesar datos CET, generar documentos, validar configuraciones y entregar resultados profesionales sin intervención humana."
    },
    {
      id: "demo-26",
      title: "Mensaje Final",
      icon: FileText,
      content:
        "Este demo funciona como una guía clara: muestra lo que la IA puede hacer hoy y hacia dónde se dirige el desarrollo oficial. Es un ejemplo simple, pero totalmente orientado al futuro sistema empresarial de Servex."
    }
  ];
  

  const toggle = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copiado al portapapeles");
    } catch (e) {
      alert("No se pudo copiar");
    }
  };

  const generarPDF = async () => {
    if (!contentRef.current) return;

    const canvas = await html2canvas(contentRef.current);
    const img = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(img, "PNG", 0, 0, width, height);
    pdf.save("GLYNNE_documentacion.pdf");
  };

  return (
    <div ref={contentRef} className="max-w-6xl mt-10 mx-auto p-6">

      {/* ================================ */}
      {/* 🔥 SEO AGREGADO EXACTAMENTE COMO PEDISTE */}
      {/* ================================ */}
      <Head>
        <title>GLYNNE – Documentación Legal y Arquitectura de Plataforma IA</title>

        <meta
          name="description"
          content="GLYNNE ofrece agentes de inteligencia artificial, automatización avanzada y arquitecturas escalables para empresas B2B. Consulta documentación legal, alcances del servicio y lineamientos técnicos."
        />

        <meta
          name="keywords"
          content="GLYNNE, documentación legal, agentes IA, inteligencia artificial empresarial, automatización B2B, arquitectura de software, LangChain, integración de APIs, Next.js, automatización corporativa"
        />

        <meta name="author" content="GLYNNE Tech" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="GLYNNE – Documentación y Alcances de Servicio" />
        <meta
          property="og:description"
          content="Accede a la documentación oficial de GLYNNE, una plataforma empresarial para agentes IA, automatización profunda y arquitectura integrable."
        />
        <meta property="og:image" content="https://glynneai.com/meta-banner.jpg" />
        <meta property="og:url" content="https://glynneai.com/politicas" />
        <meta property="og:site_name" content="GLYNNE" />

        {/* Canonical */}
        <link rel="canonical" href="https://glynneai.com/politicas" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Documentación y Políticas · GLYNNE",
              "url": "https://glynneai.com/politicas",
              "description":
                "Documentación oficial del servicio, alcances legales, lineamientos técnicos y aclaraciones sobre el funcionamiento de agentes IA en GLYNNE.",
              "publisher": {
                "@type": "Organization",
                "name": "GLYNNE",
                "url": "https://glynneai.com",
                "logo": "https://glynneai.com/favicon.ico",
              },
            }),
          }}
        />
      </Head>

      {/* ================================ */}
      {/* TODO TU CÓDIGO ORIGINAL SIN CAMBIAR NADA */}
      {/* ================================ */}

      <Header />

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* SIDEBAR FIXED */}
        <aside
          className="
            hidden md:block
            md:col-span-1
            space-y-4
            w-[350px]
            fixed
            top-24
            left-0
            h-[calc(100vh-6rem)]
            overflow-y-auto
            pr-4
          "
        >
          <div className="p-4 rounded-2xl shadow-sm bg-white/60 backdrop-blur">
            <h3 className="font-semibold">Secciones</h3>

            <ul className="mt-3 space-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(`section-${s.id}`);
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    className="w-full flex items-start justify-between p-2 rounded-lg hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center gap-3">
                      <s.icon className="w-4 h-4" />
                      <span>{s.title}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => copyToClipboard("https://glynneai.com")}
                className="flex-1 py-2 px-3 rounded-lg border text-sm hover:bg-gray-50"
              >
                <Copy className="w-4 h-4 inline-block mr-2" /> Copiar URL
              </button>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 backdrop-blur shadow-sm">
            <h4 className="text-xs uppercase text-gray-500">Estado</h4>
            <div className="mt-2 text-sm">Presets: Ventas, Finanzas, Operaciones</div>
            <div className="mt-3 text-xs text-gray-400">Entornos: dev • staging • prod</div>
          </div>
        </aside>

        {/* MAIN — TEXTO */}
        <main
          className="
            md:col-span-2
            md:ml-[280px]
            w-full
            prose prose-neutral max-w-none
          "
        >
          {sections.map((s) => (
            <section key={s.id} id={`section-${s.id}`} className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-2">{s.title}</h2>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{s.content}</p>

              <hr className="my-8 border-gray-300" />
            </section>
          ))}

          {/* DOCUMENTACIÓN EXTENDIDA */}
          <section className="mt-12">
            <h3 className="text-xl font-semibold">Documentación extendida</h3>
            <p className="mt-2 text-gray-700">
              Aquí puedes pegar artículos largos, contenido técnico o guías completas.
            </p>

            <div className="mt-4 flex gap-2">
              <button className="py-2 px-3 rounded-lg border" onClick={generarPDF}>
                Exportar PDF
              </button>

              <button className="py-2 px-3 rounded-lg border">Abrir Editor</button>
            </div>
          </section>
        </main>
      </div>

      <footer className="mt-6 text-sm text-gray-500 text-center">
        GLYNNE · Plataforma de agentes y automatización guiada por IA
      </footer>
    </div>
  );
}
