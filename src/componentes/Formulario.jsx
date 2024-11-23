import React from "react";
import { useNavigate } from "react-router-dom";

function Formulario() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Recopilar respuestas
    const respuestas = Array.from({ length: 15 }, (_, i) =>
      parseInt(event.target[`pregunta_${i + 1}`].value)
    );

    try {
      // Enviar respuestas al backend
      const response = await fetch("http://localhost:5000/predecir", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ respuestas }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.error || "Error al procesar la solicitud.");
        return;
      }

      // Obtener datos del backend
      const data = await response.json();

      // Redirigir a la página de resultados con el estado emocional y recomendaciones
      navigate("/resultado", { state: { resultado: data } });
    } catch (error) {
      console.error("Error al enviar las respuestas:", error);
      alert("Hubo un problema al procesar tu solicitud. Intenta nuevamente.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-900 text-gray-200 font-sans">
      <div className="max-w-xl w-full bg-gray-800 shadow-2xl rounded-3xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6 drop-shadow-lg">
          😊 Predicción de tu Estado Emocional
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-h-[600px] overflow-y-auto"
        >
          <div className="bg-gray-700 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-blue-300 mb-4">
              🌈 Estado emocional positivo
            </h2>
            {[...Array(5)].map((_, index) => (
              <div key={index} className="mt-4">
                <label
                  htmlFor={`pregunta_${index + 1}`}
                  className="block font-medium text-gray-300"
                >
                  {[
                    "Me siento feliz y satisfecho/a con mi vida en este momento.",
                    "Tengo la energía suficiente para realizar mis actividades diarias.",
                    "Me siento optimista respecto a mi futuro.",
                    "Disfruto de las actividades que realizo diariamente.",
                    "Me siento valorado/a por las personas cercanas a mí.",
                  ][index]}
                </label>
                <input
                  type="number"
                  id={`pregunta_${index + 1}`}
                  name={`pregunta_${index + 1}`}
                  min="1"
                  max="5"
                  required
                  className="mt-2 w-full border border-gray-600 rounded-lg bg-gray-900 px-4 py-2 text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            ))}
          </div>

          <div className="bg-gray-700 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-red-300 mb-4">
              😟 Estado emocional negativo
            </h2>
            {[...Array(5)].map((_, index) => (
              <div key={index + 5} className="mt-4">
                <label
                  htmlFor={`pregunta_${index + 6}`}
                  className="block font-medium text-gray-300"
                >
                  {[
                    "Me siento estresado/a o abrumado/a con frecuencia.",
                    "Me cuesta concentrarme en mis actividades diarias.",
                    "Me siento desanimado/a con frecuencia.",
                    "Tengo dificultades para manejar mis emociones.",
                    "Me siento solo/a con frecuencia.",
                  ][index]}
                </label>
                <input
                  type="number"
                  id={`pregunta_${index + 6}`}
                  name={`pregunta_${index + 6}`}
                  min="1"
                  max="5"
                  required
                  className="mt-2 w-full border border-gray-600 rounded-lg bg-gray-900 px-4 py-2 text-gray-300 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            ))}
          </div>

          <div className="bg-gray-700 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-yellow-300 mb-4">
              😰 Ansiedad y preocupación
            </h2>
            {[...Array(5)].map((_, index) => (
              <div key={index + 10} className="mt-4">
                <label
                  htmlFor={`pregunta_${index + 11}`}
                  className="block font-medium text-gray-300"
                >
                  {[
                    "Me preocupo en exceso por problemas o situaciones.",
                    "Tengo dificultades para dormir debido a preocupaciones.",
                    "Me siento ansioso/a incluso sin una razón clara.",
                    "Me siento constantemente en alerta o tenso/a.",
                    "Experimento síntomas físicos como palpitaciones o sudoración.",
                  ][index]}
                </label>
                <input
                  type="number"
                  id={`pregunta_${index + 11}`}
                  name={`pregunta_${index + 11}`}
                  min="1"
                  max="5"
                  required
                  className="mt-2 w-full border border-gray-600 rounded-lg bg-gray-900 px-4 py-2 text-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            ))}
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md"
            >
              Enviar respuestas
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
