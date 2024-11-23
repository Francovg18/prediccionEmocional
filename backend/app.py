from flask import Flask, request, jsonify
from flask_cors import CORS  
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Rutas

# Cargar el modelo y las clases
data = joblib.load('modelo_emocional.pkl')
modelo = data['modelo']
clases = data['clases']

@app.route('/predecir', methods=['POST'])
def predecir():
    try:
        respuestas = request.json.get('respuestas', [])
        if len(respuestas) != 15:
            return jsonify({'error': "Por favor, responde todas las preguntas."}), 400
        if any(respuesta < 1 or respuesta > 5 for respuesta in respuestas):
            return jsonify({'error': "Las respuestas deben estar entre 1 y 5."}), 400
        
        datos = np.array([respuestas])
        prediccion = modelo.predict(datos)[0]
        categorias = {
            "Muy Negativo😒": ["Busca apoyo emocional...", "Intenta realizar pequeños cambios..."],
            "Negativo🙁": ["Intenta incorporar actividades como meditación...", "Habla con un profesional..."],
            "Neutral 😐": ["Considera dedicar más tiempo a actividades relajantes...", "Habla con amigos..."],
            "Positivo😌": ["Sigue cultivando tus hábitos positivos...", "Dedica tiempo a actividades..."],
            "Muy Positivo😃": ["Mantén tu actitud positiva...", "Aprovecha este buen estado emocional..."]
        }
        recomendaciones = categorias.get(prediccion, [])
        return jsonify({'estado_emocional': prediccion, 'recomendaciones': recomendaciones})
    except Exception as e:
        return jsonify({'error': f"Error en el procesamiento: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
