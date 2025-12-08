import React from "react";

export default function TutorialBanner() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-10">
      <div
        className="
          flex flex-col md:flex-row items-center gap-10 
          bg-white shadow-[0_15px_35px_rgba(0,0,0,0.1)] 
          rounded-2xl p-6 md:p-10
        "
      >
           {/* Imagen */}
           <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/movile.png"
            alt="Tutoriales GLYNNE"
            className="w-full max-w-md h-auto"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
  Acceso universal a la IA de Servex: un análisis moderno, claro y <span className="text-blue-900">sin barreras</span>.
</h2>

<p className="text-gray-600 mt-4 text-xs sm:text-base max-w-md">
  Este demo refleja la visión detrás del desarrollo oficial de la plataforma: permitir que 
  toda la información, procesos y capacidades de análisis de <strong>Servex</strong> estén 
  disponibles en cualquier dispositivo, ya sea móvil o desktop. El objetivo es ofrecer un 
  acceso práctico, rápido y unificado sin reemplazar el trabajo que actualmente se desarrolla 
  en <strong>CET Designer</strong>.
  <br /><br />
  CET sigue siendo la herramienta central para el diseño y la construcción de catálogos; sin 
  embargo, sus modelos y su ecosistema no permiten la integración directa con sistemas de 
  inteligencia artificial. Por eso es necesario complementar su función con una plataforma 
  moderna y accesible que habilite análisis en tiempo real, consultas inteligentes y una 
  experiencia abierta para dealers y equipos comerciales.
  <br /><br />
  Con esta arquitectura paralela, Servex puede mantener a CET como su entorno de diseño, mientras 
  la nueva plataforma se convierte en el espacio ideal para ventas, análisis, exploración de 
  productos e interacción con IA bajo los estándares más avanzados del sector.
</p>

        </div>

     
      </div>
    </section>
  );
}
