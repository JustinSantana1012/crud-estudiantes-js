import Estudiante from "./Estudiante.js";

class GestorEstudiantes {
  constructor() {
    this.estudiantes = {};
    this.contadorId = 1;
  }

  crearEstudiante(nombre, edad, nivel, tecnico) {
    const estudiante = new Estudiante(this.contadorId++, nombre, edad, nivel, tecnico);
    this.estudiantes[estudiante.id] = estudiante;
  }

  actualizarEstudiante(id, nombre, edad, nivel, tecnico) {
    if (this.estudiantes[id]) {
      this.estudiantes[id].nombre = nombre;
      this.estudiantes[id].edad = edad;
      this.estudiantes[id].nivel = nivel;
      this.estudiantes[id].tecnico = tecnico;
    }
  }

  eliminarEstudiante(id) {
    delete this.estudiantes[id];
  }

  listarEstudiantes() {
    return Object.values(this.estudiantes);
  }

  buscarEstudiante(criterio) {
    return Object.values(this.estudiantes).find(
      (est) => est.id === parseInt(criterio) || est.nombre.toLowerCase() === criterio.toLowerCase()
    ) || "Estudiante no encontrado.";
  }
}

export default GestorEstudiantes;
