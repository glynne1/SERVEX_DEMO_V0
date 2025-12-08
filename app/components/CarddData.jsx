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
     

        {/* Texto */}
        <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
  IA integrada al catálogo centralizado de <strong>Diversified Spaces</strong>, 
  con análisis preciso y <span className="text-blue-900">totalmente adaptable</span>.
</h2>

<p className="text-gray-600 mt-4 text-xs sm:text-base max-w-md">
  Para este demo, se recopiló y unificó todo el catálogo oficial de 
  <strong>Diversified Spaces</strong>. Se realizó una extracción completa de datos 
  desde los documentos PDF, identificando cada producto, sus características, modelos y 
  especificaciones técnicas. Toda esta información fue procesada y centralizada dentro de 
  una base de datos relacional diseñada para este proyecto.
  <br /><br />
  Gracias a esta estructura, el modelo de inteligencia artificial puede acceder libremente 
  a cada componente del catálogo, analizarlo en tiempo real y filtrar resultados con base 
  en las necesidades del usuario. Esto permite generar respuestas claras, confiables y 
  totalmente alineadas con los datos reales de la empresa.
</p>

        </div>

           {/* Imagen */}
           <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/CData.png"
            alt="Tutoriales GLYNNE"
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </section>
  );
}
