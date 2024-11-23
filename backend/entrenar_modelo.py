import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix
import joblib
import matplotlib.pyplot as plt
import seaborn as sns

# Carga de datos del Excel
archivo = 'emocional.xlsx'  
df = pd.read_excel(archivo)

# Clasificación en base a cinco categorías
def clasificar(puntaje):
    if puntaje < 2:
        return 'Muy Negativo😒'
    elif 2 <= puntaje < 3:
        return 'Negativo🙁'
    elif 3 <= puntaje < 4:
        return 'Neutral 😐'
    elif 4 <= puntaje < 4.5:
        return 'Positivo😌'
    else:
        return 'Muy Positivo😃'

df['EstadoEmocional'] = df.mean(axis=1).apply(clasificar)

# Preparación de los datos
X = df.drop(columns='EstadoEmocional')  # Variables independientes (preguntas)
y = df['EstadoEmocional']  # Variable dependiente (Estado emocional)

# Dividir los datos en conjunto de entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Entrenamiento del modelo (Clasificador Random Forest)
modelo = RandomForestClassifier(random_state=42)
modelo.fit(X_train, y_train)

# Evaluación del modelo
y_pred = modelo.predict(X_test)

# Reporte de clasificación
print("\n=== Evaluación del Modelo ===")
print(classification_report(y_test, y_pred))

# Matriz de confusión
plt.figure(figsize=(8, 6))
conf_matrix = confusion_matrix(y_test, y_pred, labels=modelo.classes_)
sns.heatmap(conf_matrix, annot=True, fmt='d', cmap='Blues', xticklabels=modelo.classes_, yticklabels=modelo.classes_)
plt.title('Matriz de Confusión')
plt.xlabel('Predicciones')
plt.ylabel('Valores Reales')
plt.show()

# Importancia de las variables
importancias = modelo.feature_importances_
print("\n=== Importancia de las Variables ===")
for i, imp in enumerate(importancias):
    print(f"{X.columns[i]}: {imp:.4f}")

# Visualizar importancia de las variables
plt.figure(figsize=(10, 6))
plt.barh(X.columns, importancias, color='skyblue')
plt.title('Importancia de las Variables')
plt.xlabel('Importancia')
plt.ylabel('Variables')
plt.grid(axis='x', linestyle='--', alpha=0.7)
plt.show()

# Guardar el modelo entrenado
joblib.dump({'modelo': modelo, 'clases': modelo.classes_}, 'modelo_emocional.pkl')
print("\nModelo guardado como 'modelo_emocional.pkl'.")
