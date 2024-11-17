"use client";

import React from "react";
import {
  Upload,
  Image as ImageIcon,
  ArrowRight,
  Download,
  Heart,
  Code,
  Users,
  School,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HoverImageComponent from "./components/hoverimageComponent";

const LandingPage = () => {
  const router = useRouter();

  const navegarA = (ruta) => {
    router.push(ruta);
  };

  const caracteristicas = [
    {
      icono: <ImageIcon className="w-8 h-8 text" />,
      titulo: "Múltiples Formatos",
      descripcion:
        "Convierte entre WebP, JPG, PNG y más con calidad perfecta.",
    },
    {
      icono: <ArrowRight className="w-8 h-8 text-teal-600" />,
      titulo: "Rápido y Eficiente",
      descripcion:
        "Procesa tus imágenes al instante con nuestro convertidor optimizado.",
    },
    {
      icono: <Download className="w-8 h-8 text-teal-600" />,
      titulo: "Procesamiento por Lotes",
      descripcion:
        "Convierte múltiples imágenes al mismo tiempo para ahorrar tiempo.",
    },
  ];

  const opcionesDeConversion = [
    {
      icono: <Upload className="w-16 h-16 text-teal-400 mx-auto mb-4" />,
      titulo: "Imagen a WebP",
      descripcion:
        "Convierte cualquier formato de imagen (JPG, PNG, GIF) a WebP en segundos.",
      ruta: "/imagetowebp",
    },
    {
      icono: <ArrowRight className="w-16 h-16 text-teal-400 mx-auto mb-4" />,
      titulo: "WebP a Imagen",
      descripcion:
        "Convierte imágenes WebP de vuelta a JPG, PNG o cualquier formato que prefieras.",
      ruta: "/webptoimage",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-blue-200">
      {/* Sección de Imagen Hover */}
      <HoverImageComponent />

      {/* Sección Hero */}
      <div className="container mx-auto px-6 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-teal-800 mb-6">
            Convierte tus Imágenes con Facilidad
          </h1>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Transforma tus imágenes entre múltiples formatos sin esfuerzo.
            Rápido, seguro y gratuito. Elige la conversión que necesitas y
            comienza ahora.
          </p>

          {/* Opciones de Conversión */}
          <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-8 md:space-y-0 mb-16">
            {opcionesDeConversion.map((opcion, indice) => (
              <div
                key={indice}
                className="bg-white p-8 rounded-xl shadow-lg w-80 text-center mx-auto md:mx-0"
              >
                {opcion.icono}
                <h2 className="text-2xl text-teal-700 font-semibold mb-4">
                  {opcion.titulo}
                </h2>
                <p className="text-gray-600 mb-6">{opcion.descripcion}</p>
                <button
                  onClick={() => navegarA(opcion.ruta)}
                  className="bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                >
                  Convertir Ahora
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección de Características */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">
            ¿Por qué Elegir Nuestro Convertidor?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-black">
            {caracteristicas.map((caracteristica, indice) => (
              <div key={indice} className="text-center p-6">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {caracteristica.icono}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {caracteristica.titulo}
                </h3>
                <p className="text-gray-600">{caracteristica.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección NeuralCodeLab */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-6">Únete a NeuralCodeLab</h2>
              <p className="text-xl mb-6">
                Estamos en una misión para proporcionar útiles escolares a niños
                necesitados. Únete a nuestra comunidad y ayuda a hacer la
                educación accesible para todos.
              </p>
              <div className="flex items-center space-x-4">
                <School className="w-12 h-12" />
                <div>
                  <p className="font-semibold text-lg">
                    Iniciativa de Útiles Escolares
                  </p>
                  <p>Apoyando la educación infantil, una mochila a la vez</p>
                </div>
              </div>
              <button
                onClick={() =>
                  window.open("https://neuralcodelab.com", "_blank")
                }
                className="mt-8 bg-white text-teal-600 px-8 py-3 rounded-lg font-bold hover:bg-teal-50 transition-colors"
              >
                Visitar NeuralCodeLab
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <Users className="w-24 h-24 mx-auto mb-6 text-white" />
                <p className="text-center text-lg">
                  Únete a nuestra creciente comunidad de desarrolladores que
                  están marcando la diferencia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Apoyo - Patreon */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Apoya Nuestra Misión
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ayúdanos a seguir desarrollando herramientas gratuitas y apoyando
            nuestras iniciativas educativas. ¡Tu contribución marca la
            diferencia!
          </p>
          <button
            onClick={() =>
              window.open("https://www.patreon.com/devlewiso", "_blank")
            }
            className="bg-[#FF424D] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#FF242D] transition-colors inline-flex items-center"
          >
            <span className="mr-2">Conviértete en Patrocinador</span>
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
