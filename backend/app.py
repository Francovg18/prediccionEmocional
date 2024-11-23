from flask import Flask, request, render_template
import joblib
import numpy as np

app = Flask(__name__)

# Cargar el modelo y las clases
data = joblib.load('modelo_emocional.pkl')
modelo = data['modelo']
clases = data['clases']  # Clases del modelo ('Muy Negativo', 'Negativo', etc.)

@app.route('/')
def index():
    # Renderizar el formulario inicial
    return render_template('index.html')

@app.route('/predecir', methods=['POST'])
def predecir():
    try:
        # Obtener datos del formulario
        respuestas = [
            int(request.form[f'pregunta_{i}']) for i in range(1, 16)
        ]
        
        # Validar que todas las preguntas tienen una respuesta
        if len(respuestas) < 15:
            return "Por favor, responde todas las preguntas.", 400

        # Validar que las respuestas estén entre 1 y 5
        if any(respuesta < 1 or respuesta > 5 for respuesta in respuestas):
            return "Las respuestas deben estar entre 1 y 5.", 400
        
        # Crear un array con los datos ingresados
        datos = np.array([respuestas])
        
        # Realizar la predicción con el modelo
        prediccion = modelo.predict(datos)[0]  # Extraer la predicción (Muy Negativo, Negativo, etc.)

        # Mapear la predicción a las recomendaciones
        categorias = {
            "Muy Negativo": ["Busca apoyo emocional...", "Intenta realizar pequeños cambios..."],
            "Negativo": ["Intenta incorporar actividades como meditación...", "Habla con un profesional..."],
            "Neutral": ["Considera dedicar más tiempo a actividades relajantes...", "Habla con amigos..."],
            "Positivo": ["Sigue cultivando tus hábitos positivos...", "Dedica tiempo a actividades..."],
            "Muy Positivo": ["Mantén tu actitud positiva...", "Aprovecha este buen estado emocional..."]
        }

        # Obtener recomendaciones para el estado emocional
        recomendaciones = categorias.get(prediccion, [])

        # Renderizar la página de resultados
        return render_template(
            'resultado.html', 
            estado_emocional=prediccion, 
            recomendaciones=recomendaciones
        )
    except Exception as e:
        return f"Error en el procesamiento: {str(e)}", 500

if __name__ == '__main__':
    app.run(debug=True)
