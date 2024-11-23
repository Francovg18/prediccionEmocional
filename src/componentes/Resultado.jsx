import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Resultado() {
  const location = useLocation();
  const navigate = useNavigate();

  const { resultado } = location.state || { resultado: null };

  if (!resultado) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200">
        <div className="text-center">
          <h1 className="text-xl font-bold text-red-500 mb-4">
            No hay resultados disponibles.
          </h1>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Volver al formulario
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200">
      <div className="max-w-xl w-full bg-gray-800 shadow-2xl rounded-3xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6 drop-shadow-lg">
          Tu Estado Emocional
        </h1>
        <p className="text-center text-lg font-medium mb-4">
          Estado:{" "}
          <span className="text-blue-300 font-bold">
            {resultado.estado_emocional}
          </span>
        </p>
        <div className="bg-gray-700 p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4">
            Recomendaciones:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {resultado.recomendaciones.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Volver al formulario
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resultado;
