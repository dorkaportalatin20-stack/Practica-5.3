#  Resultados — Práctica 5.3

## Datos de la práctica
- **Nombre:** [Dorka Portalatin Feliz]
- **Asignatura:** Informática / Calidad y Pruebas de Software

## Herramientas utilizadas
- **Herramienta de prueba:** k6 v2.2.0
- **API probada:** JSONPlaceholder — https://jsonplaceholder.typicode.com
- **Usuarios virtuales:** 50
- **Duración de la prueba:** 30 segundos

## Resultados obtenidos
| Métrica | Valor |
|---|---|
| Solicitudes totales | 1,624 |
| Solicitudes por segundo | ~48.6 |
| Comprobaciones exitosas | 99.87% |
| Errores registrados | 0.06% (1 de 1,624) |
| Tiempo de respuesta promedio | 397.98 ms |
| Tiempo P95 | 1.42 s |

## Análisis y conclusión
La API mostró un rendimiento **muy satisfactorio** bajo una carga de 50 usuarios simultáneos. Se procesaron más de 1,600 solicitudes con una tasa de éxito superior al 99%. El tiempo de respuesta promedio fue de aproximadamente 400 ms, lo que se considera rápido para un servicio público en internet. El único error registrado fue mínimo y no afectó el comportamiento general del sistema. Se concluye que la API es estable y capaz de manejar la carga simulada sin problemas significativos.