'use client';

import React, { useState } from 'react';
import { Upload, Image as ImageIcon, AlertCircle, Download } from 'lucide-react';
import Image from 'next/image'; // Asegúrate de importar el componente Image correctamente
import Header from '../components/header'; // Asegúrate de que la ruta sea correcta

export default function ImageToWebp() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedFile(file);
            setError(null);
            setDownloadUrl(null);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const convertToWebp = async () => {
        if (!selectedFile) {
            setError('Por favor, selecciona una imagen primero.');
            return;
        }

        setIsLoading(true);

        try {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();

            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                canvas.toBlob(function (blob) {
                    const url = URL.createObjectURL(blob);
                    setDownloadUrl(url);
                }, 'image/webp');
            };

            img.src = URL.createObjectURL(selectedFile);
        } catch (error) {
            console.error('Error al convertir la imagen:', error);
            setError('Hubo un error al convertir la imagen. Por favor, intenta de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <Header /> {/* Componente Header añadido */}
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Conversor de Imagen a WebP
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Convierte imágenes a formato WebP de manera sencilla
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div
                            className="flex flex-col items-center justify-center border-2 border-dashed 
                                     border-gray-300 rounded-lg p-6 bg-gray-50 hover:bg-gray-100 
                                     transition-colors duration-200"
                        >
                            <ImageIcon className="h-12 w-12 text-gray-400 mb-3" />
                            <div className="flex text-sm">
                                <label
                                    htmlFor="imageInput"
                                    className="relative cursor-pointer rounded-md font-medium 
                                             text-blue-600 hover:text-blue-500 focus-within:outline-none"
                                >
                                    <span>{selectedFile ? selectedFile.name : 'Seleccionar archivo'}</span>
                                    <input
                                        id="imageInput"
                                        type="file"
                                        className="sr-only"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">
                                Formatos compatibles: PNG, JPG, etc.
                            </p>
                        </div>

                        <div className="flex justify-center mt-6">
                            <button
                                onClick={convertToWebp}
                                disabled={isLoading || !selectedFile}
                                className={`flex items-center px-6 py-2.5 rounded-lg text-sm font-medium 
                                         transition-colors duration-200 
                                         ${isLoading || !selectedFile
                                            ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                                        }`}
                            >
                                <Upload className="h-4 w-4 mr-2" />
                                {isLoading ? 'Convirtiendo...' : 'Convertir a WebP'}
                            </button>
                        </div>

                        {error && (
                            <div className="rounded-lg bg-red-50 p-4 mt-4">
                                <div className="flex">
                                    <AlertCircle className="h-5 w-5 text-red-400" />
                                    <div className="ml-3">
                                        <p className="text-sm text-red-700">{error}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {downloadUrl && (
                            <div className="space-y-6 mt-6">
                                <div className="border rounded-lg overflow-hidden bg-gray-50">
                                    <Image
                                        src={previewUrl}
                                        alt="Vista previa"
                                        width={800} // Ajusta el ancho según sea necesario
                                        height={600} // Ajusta la altura según sea necesario
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex justify-center mt-4">
                                    <a
                                        href={downloadUrl}
                                        download="imagen_convertida.webp"
                                        className="inline-flex items-center px-6 py-2.5 rounded-lg 
                                                 text-sm font-medium text-white bg-green-600 
                                                 hover:bg-green-700 transition-colors duration-200"
                                    >
                                        <Download className="h-4 w-4 mr-2" />
                                        Descargar WebP
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
