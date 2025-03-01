let contadorId = 1;

class Estudiante {
  constructor(nombre, edad, nivel) {
    this.id = contadorId++;
    this.nombre = nombre;
    this.edad = edad;
    this.nivel = nivel;
  }
}

export default Estudiante;
