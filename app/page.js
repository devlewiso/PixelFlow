"use client";

import React from "react";
import {
  Upload,
  Image as ImageIcon,
  ArrowRight,
  Download,
  Heart,
  Code,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HoverImageComponent from "./components/hoverimageComponent"; // Importa el componente

const LandingPage = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  const features = [
    {
      icon: <ImageIcon className="w-8 h-8 text" />,
      title: "Multiple Formats",
      description: "Convert between WebP, JPG, PNG, and more with perfect quality",
    },
    {
      icon: <ArrowRight className="w-8 h-8 text-teal-600" />,
      title: "Fast & Efficient",
      description: "Process your images instantly with our optimized converter.",
    },
    {
      icon: <Download className="w-8 h-8 text-teal-600" />,
      title: "Batch Processing",
      description: "Convert multiple images at once to save time.",
    },
  ];

  const conversionOptions = [
    {
      icon: <Upload className="w-16 h-16 text-teal-400 mx-auto mb-4" />,
      title: "Image to WebP",
      description: "Convert any image format (JPG, PNG, GIF) to WebP in seconds.",
      path: "/imagetowebp",
    },
    {
      icon: <ArrowRight className="w-16 h-16 text-teal-400 mx-auto mb-4" />,
      title: "WebP to Image",
      description: "Convert WebP images back to JPG, PNG, or any format you prefer.",
      path: "/webptoimage",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-blue-200">
      {/* Hover Image Section */}
      <HoverImageComponent />

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-teal-800 mb-6">
            Convert Your Images With Ease
          </h1>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Transform your images between multiple formats effortlessly. Fast,
            secure, and free. Choose the conversion you need and get started now.
          </p>

          {/* Conversion Options */}
          <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-8 md:space-y-0 mb-16">
            {conversionOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg w-80 text-center mx-auto md:mx-0"
              >
                {option.icon}
                <h2 className="text-2xl text-teal-700 font-semibold mb-4">
                  {option.title}
                </h2>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <button
                  onClick={() => navigateTo(option.path)}
                  className="bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                >
                  Convert Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">
            Why Choose Our Converter?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-black">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
