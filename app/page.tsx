"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import Main1 from "./components/main1";
import GLYNNEMatrix from "./components/menuIicial";
import Header from "./components/header";
import CardM from "./components/cardMarcketinng";
import CData from "./components/CarddData";
import Movile from "./components/movileCard";
import Footer from "./components/footer";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("servex_modal_shown");
    if (!hasSeenModal) {
      setShowModal(true);
      sessionStorage.setItem("servex_modal_shown", "true");
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  return (
    <div className="w-full min-h-screen bg-white text-black relative">

      {/* ------------------------------------------------------------------ */}
      {/* ------------------------ MODAL CON BLUR -------------------------- */}
      {/* ------------------------------------------------------------------ */}

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="
              fixed inset-0 z-50 flex items-center justify-center 
              backdrop-blur-xl 
              px-4
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="
                bg-white/80 backdrop-blur-2xl text-black 
                p-8 max-w-lg rounded-2xl shadow-2xl 
                border border-white/40
              "
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
            >
              {/* TITULO */}
              <h2 className="text-2xl font-bold text-center">
                Demo Servex – Beta 0.1
              </h2>

              {/* LOGO DEBAJO DEL TITULO */}
              <div className="flex justify-center mt-3 mb-5">
                <Image
                  src="/logo3.png"   // 🔥 Cambia esta ruta por tu logo
                  width={90}
                  height={90}
                  alt="Servex Logo"
                  className="opacity-80"
                />
              </div>

              {/* TEXTO DEL MODAL */}
              <p className="text-sm leading-6 text-gray-800 mb-6 text-center">
                Este demo muestra cómo un modelo de inteligencia artificial se 
                conecta directamente a arquitecturas de datos especializadas para 
                cada cliente de Servex, accediendo a información en tiempo real 
                como productos, características y combinaciones.
                <br /><br />
                La plataforma permite análisis rápidos, detección de fluctuaciones, 
                inferencia de datos clave y sugerencias inteligentes de productos, 
                demostrando el impacto real de integrar IA con las bases de datos 
                de tu empresa.
                <br /><br />
                También incluye un modelo conectado al catálogo de Diversified 
                Spaces, capaz de interpretar datos tabulares, entender el mercado 
                y generar información confiable para la toma de decisiones.
                <br /><br />
                Además, el acceso móvil permite consultar análisis e insights 
                accionables desde cualquier dispositivo, garantizando una 
                experiencia útil incluso en movimiento.
              </p>

              {/* BOTÓN */}
              <button
                onClick={() => {
                  setShowModal(false);

                  fetch("https://servex-back.onrender.com", {
                    method: "GET",
                    mode: "no-cors",
                  }).catch(() => {});
                }}
                className="
                  w-full py-2 rounded-xl 
                  bg-black text-white 
                  hover:bg-gray-900 
                  transition
                "
              >
                Continuar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------------------------------------------------------ */}
      {/* ----------------------------- CONTENIDO --------------------------- */}
      {/* ------------------------------------------------------------------ */}

      <Header />

      <main
        className="w-full pt-14 bg-black text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/6e/79/0f/6e790fbd1a0166e5b40338d024628330.jpg')",
        }}
      >
        <GLYNNEMatrix />
      </main>

      <main className="w-full pt-14 bg-white text-black">
        <CardM />
      </main>

      <main className="w-full pt-14 bg-white text-black">
        <CData />
      </main>

      <main className="w-full pt-14 bg-white text-black">
        <Movile />
      </main>

      <main className="w-full pt-14 bg-white text-black">
        <Footer />
      </main>
    </div>
  );
}
