"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const card = {
  description:
    "Accede al demo del modelo que se integra a tus bases de datos para interpretar información, analizar fluctuaciones, identificar patrones clave y sugerir combinaciones de productos basadas en tu realidad operativa.",
  image: "/vectorInput.png",
  link: "/model",
};

export default function CardsGrid() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-[#fff] overflow-hidden p-4 sm:p-6">
      {/* Fondo animado suave */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,102,255,0.15),_transparent_60%)]"
      />

      {/* Título principal animado */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-8 sm:mb-10 text-center uppercase drop-shadow-sm px-2"
      >
        Modelo IA Servex
      </motion.h1>

      <Link href={card.link} className="w-full flex justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-full sm:w-[85%] md:w-[80%] h-auto md:h-[55vh] rounded-3xl shadow-xl overflow-hidden cursor-pointer bg-white/70 backdrop-blur-xl flex flex-col border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all"
        >
          {/* Parte superior */}
          <div className="w-full h-[250px] sm:h-[300px] md:h-[55%] bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4 sm:p-6">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              src={card.image}
              alt="Servex Vector"
              className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] object-contain drop-shadow-lg"
            />
          </div>

          {/* Parte inferior */}
          <div className="p-4 sm:p-6 flex flex-col justify-center text-center bg-white/90">
            <h2 className="text-gray-800 text-xl sm:text-2xl font-bold mb-2 tracking-wide uppercase">
              Análisis Inteligente en Tiempo Real
            </h2>

            <img
              src="/logo.png"
              alt="Servex Logo"
              className="w-16 sm:w-80 mx-auto mb-4 opacity-95"
            />

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-[95%] sm:max-w-[85%] mx-auto">
              {card.description}
            </p>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}