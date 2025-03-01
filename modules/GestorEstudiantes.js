import Estudiante from "./Estudiante.js";

class GestorEstudiantes {
  constructor() {
    this.estudiantes = {};
  }

  crearEstudiante(nombre, edad, nivel) {
    const estudiante = new Estudiante(nombre, edad, nivel);
    this.estudiantes[estudiante.id] = estudiante;
  }

  listarEstudiantes() {
    return Object.values(this.estudiantes);
  }

  actualizarEstudiante(id, nombre, edad, nivel) {
    if (this.estudiantes[id]) {
      this.estudiantes[id].nombre = nombre;
      this.estudiantes[id].edad = edad;
      this.estudiantes[id].nivel = nivel;
    }
  }

  eliminarEstudiante(id) {
    if (this.estudiantes[id]) {
      delete this.estudiantes[id];
    }
  }
}

export default GestorEstudiantes;