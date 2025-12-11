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
        id: "guia-1",
        title: "Problema Central: Catálogos Desordenados",
        icon: FileText,
        content:
            "Los fabricantes envían sus catálogos a Servex en una amplia variedad de formatos, incluyendo PDFs extensos, hojas de Excel que suelen venir desordenadas, imágenes separadas y descripciones que no siguen un estándar claro. Antes de que esta información pueda utilizarse dentro de CET, el equipo de Servex debe emprender un proceso manual muy detallado para organizar, limpiar y reestructurar todos los datos."
    },
    {
        id: "guia-2",
        title: "El Proceso Manual Actual",
        icon: FileText,
        content:
            "Esta depuración previa es indispensable para que CET interprete correctamente cada producto, sus variantes, medidas, materiales y precios; sin embargo, hoy representa uno de los puntos más complejos, lentos y desgastantes dentro del flujo de trabajo de Servex. El proceso actual requiere revisar PDFs página por página, copiar información dispersa desde diferentes documentos y corregir manualmente medidas, colores, variantes y nombres. Luego es necesario reconstruir tablas completas que sigan exactamente el formato que CET exige."
    },
    {
        id: "guia-3",
        title: "Errores y Consecuencias",
        icon: FileText,
        content:
            "En ese camino aparecen errores frecuentes, como SKUs incompletos, modelos duplicados, descripciones inconsistentes y datos que vuelven a desordenarse cuando los fabricantes envían actualizaciones. Todo este trabajo, aunque fundamental, consume una enorme cantidad de tiempo y energía del equipo, disminuye la capacidad para asumir más proyectos y retrasa la velocidad de respuesta hacia los clientes."
    },
    {
        id: "guia-4",
        title: "La Solución de Glynne IA: Automatización Pre-CET",
        icon: FileText,
        content:
            "Para aliviar este dolor, Glynne IA plantea una solución centrada en automatizar todo el flujo previo a CET sin modificar ni reemplazar CET en absoluto. CET es el corazón del negocio de Servex y debe seguir siendo la herramienta central. Lo que la inteligencia artificial hace es transformar el catálogo original del fabricante en un archivo limpio, coherente y completamente estructurado para integrarlo al flujo de Servex."
    },
    {
        id: "guia-5",
        title: "Función de la IA en la Extracción y Limpieza",
        icon: FileText,
        content:
            "La IA extrae productos, medidas, materiales, precios y SKUs directamente desde los PDFs o Excels, unifica nombres y variantes, corrige inconsistencias y genera automáticamente una tabla final con el formato que Servex ya utiliza. Este proceso, que hoy requiere horas o días, puede realizarse en minutos, sin errores y sin intervención manual repetitiva."
    },
    {
        id: "guia-6",
        title: "Beneficios de la Automatización",
        icon: FileText,
        content:
            "Adoptar esta automatización genera beneficios directos: los tiempos de preparación de catálogos se reducen drásticamente, la precisión aumenta al eliminar errores humanos, el equipo de Servex gana capacidad para manejar más fabricantes y más proyectos simultáneamente, y las actividades dejan de centrarse en tareas mecánicas para enfocarse en diseño, análisis y trabajo estratégico. La operación no cambia; simplemente Servex empieza a recibir datos más limpios, más rápido y listos para alimentar CET sin reprocesos."
    },
    {
        id: "guia-7",
        title: "Necesidad de una Arquitectura Base",
        icon: FileText,
        content:
            "Para que todo esto funcione de manera estable y escalable, es necesario construir primero una arquitectura de software que sirva como base del sistema. Una IA no puede operar aislada; requiere un entorno donde vivir, procesar y almacenar información, definir accesos, registrar cambios y conectarse con otras herramientas sin generar riesgos."
    },
    {
        id: "guia-8",
        title: "Estructura de la Arquitectura",
        icon: FileText,
        content:
            "Por esa razón, el primer paso consiste en estructurar la plataforma que gestionará usuarios, inicios de sesión, perfiles, roles y permisos, asegurando que cada persona dentro de Servex vea únicamente lo que corresponde a su función. Esta arquitectura, además, será el espacio donde se almacenarán los catálogos, donde la IA procesará documentos y donde se mantendrán historiales, versiones y conexiones seguras con los flujos operativos existentes."
    },
    {
        id: "guia-9",
        title: "Estrategia de Avance Modular",
        icon: FileText,
        content:
            "La construcción de esta arquitectura no implica crear una plataforma gigante desde el primer día. La estrategia ideal es avanzar por módulos, comenzando con la estructura de usuarios y permisos, seguido por la gestión de documentos, la integración con la IA extractora y, posteriormente, los módulos adicionales como revisiones automáticas, visualización, flujos de aprobación e integraciones futuras. Este enfoque modular permite avanzar rápido, minimizar riesgos y asegurar que la solución crezca con Servex a largo plazo."
    },
    {
        id: "guia-10",
        title: "Conclusión: La Ruta Estratégica",
        icon: FileText,
        content:
            "En conclusión, el aspecto más crucial que Servex debe abordar no es el desarrollo directo del modelo de inteligencia artificial, sino la creación de la base tecnológica que permitirá que esta IA funcione correctamente y se integre con la operación diaria. CET continuará siendo el núcleo del negocio y no se reemplaza; lo que se fortalece es el flujo que alimenta a CET para que Servex trabaje más rápido, con más precisión y con una capacidad operativa mucho mayor. Esta guía constituye el primer paso para entender la ruta estratégica que permitirá transformar un proceso manual y desgastante en una ventaja operativa que acompañará a Servex durante los próximos años."
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
                    className="
                      w-full
                      flex
                      items-start       /* <-- CORREGIDO */
                      justify-between
                      p-2
                      rounded-lg
                      hover:bg-gray-50
                      transition
                      text-left         /* <-- CORREGIDO */
                    "
                  >
                    <div className="flex items-start gap-3">  {/* <-- CORREGIDO */}
                      <s.icon className="w-4 h-4 mt-0.5" />
                      <span className="text-left">{s.title}</span>
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