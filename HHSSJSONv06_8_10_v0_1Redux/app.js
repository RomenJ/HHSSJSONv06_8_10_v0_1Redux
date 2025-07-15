// Datos originales del JSON ahora como una constante en JavaScript
const conductas = [
  {
    "numero": 1,
    "descripcion": "Lucía la Llama comenta: 'Hoy no tengo ganas de jugar, mejor nos vemos mañana.'",
    "correcta": "RESPUESTA ASERTIVA"
  },
  {
    "numero": 2,
    "descripcion": "Ana la Rana se acerca a Pablo el Topo mientras le grita",
    "correcta": "RESPUESTA AGRESIVA"
  },
  {
    "numero": 3,
    "descripcion": "Sofía la Serpiente dice: 'No me gusta que me llamen así, llámame por mi nombre.'",
    "correcta": "RESPUESTA ASERTIVA"
  },
  {
    "numero": 4,
    "descripcion": "Luca la Tortuga le grita a Carolina la Loba diciendo \"¡Eres tonta y no sabes jugar!\"",
    "correcta": "RESPUESTA AGRESIVA"
  },
  {
    "numero": 5,
    "descripcion": "Lucía la Llama dice: \"Me gustaría que me escucharas cuando hablo\".",
    "correcta": "RESPUESTA ASERTIVA"
  },
  {
    "numero": 6,
    "descripcion": "Fernando el Foca cruza los brazos y se aleja sin decir nada cuando alguien le habla.",
    "correcta": "RESPUESTA INHIBIDA"
  },
  {
    "numero": 7,
    "descripcion": "Sofía la Serpiente empuja a Tomás el Tigre porque no quiere compartir el juguete.",
    "correcta": "RESPUESTA AGRESIVA"
  },
  {
    "numero": 8,
    "descripcion": "Juan el Jaguar hace una mueca y se ríe de otro sin decirle nada directamente.",
    "correcta": "RESPUESTA AGRESIVA"
  },
  {
    "numero": 9,
    "descripcion": "Tengo una idea que tal si...'",
    "correcta": "RESPUESTA ASERTIVA"
  },
  {
    "numero": 10,
    "descripcion": "Laura la Liebre pregunta: '¿Podrías explicarme eso otra vez? No entendí muy bien.'",
    "correcta": "RESPUESTA ASERTIVA"
  }
];

let indiceActual = 0;
let puntos = 0;

// Mostrar ejemplo actual
function mostrarEjemplo() {
  // Si ya no hay más conductas
  if (indiceActual >= conductas.length) {
    document.getElementById('juego').innerHTML = `
      <h3 class="text-center text-success">¡Juego terminado!</h3>
      <p class="text-center">Has conseguido ${puntos} de ${conductas.length} puntos.</p>
      <div class="mt-4 text-center">
     <a href="index.html" class="btn btn-outline-primary">Volver a inicio</a>
     <br/>
   </div>
    `;
    return;
  }

  const actual = conductas[indiceActual];

  // Mostrar la conducta actual
  document.getElementById('descripcion').innerHTML = `
    <strong>Ejemplo ${actual.numero} de ${conductas.length}:</strong><br><br>${actual.descripcion}
  `;
}

// Evaluar respuesta seleccionada
function seleccionar(respuesta) {
  const actual = conductas[indiceActual];

  if (respuesta === actual.correcta) {
    puntos++;
    document.getElementById('mensaje').textContent = '✅ ¡Correcto!';
    document.getElementById('mensaje').className = 'text-success';
  } else {
    document.getElementById('mensaje').textContent = `❌ Incorrecto. La respuesta era: ${actual.correcta}`;
    document.getElementById('mensaje').className = 'text-danger';
  }

  // Actualizar puntuación mostrada
  document.getElementById('puntos').textContent = puntos;

  // Siguiente pregunta
  indiceActual++;

  // Pasar automáticamente al siguiente ejemplo después de 1.5 segundos
  setTimeout(() => {
    mostrarEjemplo();
  }, 1500);
}

// Iniciar el juego al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  mostrarEjemplo();
});
