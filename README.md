# Práctica 5.3 — Pruebas de Performance con k6

##  Descripción
En esta práctica se realiza una prueba de rendimiento sobre una API pública, con el objetivo de medir el tiempo de respuesta, la estabilidad y el comportamiento del sistema bajo carga de usuarios simultáneos.

##  Estudiante
- **Nombre:** [Dorka Portalatin Feliz]
- **Matrícula/ID:** [100572272]
- **Fecha:** 28 de octubre de 2026

## Recursos utilizados
- **Herramienta de pruebas:** k6 — https://k6.io/
- **API de prueba:** JSONPlaceholder — https://jsonplaceholder.typicode.com
- **Tema:** Servicio de publicaciones y recursos en línea

##  Archivos del repositorio
| Archivo | Descripción |
|---|---|
| `prueba.js` | Script con la configuración y pasos de la prueba |
| `RESULTADOS.md` | Análisis detallado de los resultados obtenidos |
| `captura-resultados.png` | Captura de pantalla con la salida de k6 |

##  Cómo ejecutar la prueba
```bash
# Ejecutar desde la terminal
k6 run prueba.js