import React from "react";

function SobreNosotros() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 px-6 py-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-400 text-center mb-6 drop-shadow-lg">
          Acerca de Nosotros
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            🌟 Nuestra misión
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            En nuestro equipo estamos comprometidos con el bienestar emocional
            de las personas. Nuestro objetivo principal es proporcionar un
            espacio accesible y seguro para ayudar a los usuarios a comprender y
            gestionar sus emociones, identificar necesidades psicológicas, y
            ofrecer herramientas prácticas que fomenten el crecimiento
            personal.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            🧠 ¿Por qué es importante la ayuda psicológica?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            La salud mental es un componente esencial del bienestar general.
            Muchas veces, las personas enfrentan desafíos emocionales o
            psicológicos que pueden afectar su calidad de vida. Hablar con
            profesionales capacitados permite encontrar soluciones, aprender
            herramientas para manejar el estrés y mejorar nuestras relaciones.
            Buscar apoyo no es un signo de debilidad, sino un paso valiente
            hacia una vida más equilibrada y plena.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">
            🤖 Nuestro Chatbot
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Sabemos que no siempre es fácil dar el primer paso para buscar
            ayuda. Por eso hemos desarrollado un chatbot diseñado para ofrecer
            orientación inicial y conectar a las personas con los recursos y
            servicios adecuados. A través de una conversación amigable y
            confidencial, nuestro chatbot puede ayudarte a identificar tus
            necesidades emocionales y orientarte hacia un profesional si lo
            necesitas. ¡Estamos aquí para ti!
          </p>
        </section>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">
            💬 Estamos contigo en cada paso del camino
          </h3>
          <p className="text-lg text-gray-400">
            Tu bienestar emocional es nuestra prioridad. No estás solo/a.
            Nuestro equipo y nuestras herramientas están diseñados para ayudarte
            a construir una vida más saludable y feliz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;
