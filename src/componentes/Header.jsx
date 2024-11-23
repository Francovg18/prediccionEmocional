import React from "react";

function Header() {
  return (
    <header className="bg-gray-800 text-white py-12 shadow-xl">
      <div className="container mx-auto text-center px-6">
        {/* Título Principal */}
        <h1 className="text-5xl font-bold tracking-tight mb-4 drop-shadow-md">
          🌟 **Ayuda Psicológica Virtual** 🌟
        </h1>
        {/* Subtítulo */}
        <p className="text-xl font-medium mb-6">
          Porque tu bienestar emocional es nuestra prioridad. Encuentra apoyo, herramientas y guía para mejorar tu vida.
        </p>
        {/* Call-to-Action */}
        <div className="mt-8">
          <a
            href="#"
            className="bg-white text-purple-700 hover:bg-purple-100 font-semibold py-3 px-6 rounded-full shadow-lg text-lg transition duration-300 ease-in-out"
          >
            Comienza tu camino hacia el bienestar ✨
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
