import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 50,        // 50 usuarios al mismo tiempo
  duration: '30s' // Prueba de 30 segundos
};

export default function () {
  // Pedir lista de publicaciones
  let res = http.get('https://jsonplaceholder.typicode.com/posts');
  check(res, { 'Respuesta correcta': (r) => r.status === 200 });
  
  // Pedir un detalle
  http.get('https://jsonplaceholder.typicode.com/posts/1');
  
  // Pausa corta como si fuera una persona real
  sleep(1);
}