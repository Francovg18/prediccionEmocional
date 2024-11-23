import React from "react";

function Nav() {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold">
          🌟 Ayuda Psicológica
        </div>
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <a href="/" className="hover:text-purple-400 transition">
              Inicio
            </a>
          </li>
          <li>
            <a href="/sobre-nosotros" className="hover:text-purple-400 transition">
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a href="/contacto" className="hover:text-purple-400 transition">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
