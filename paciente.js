import Fecha from './fecha.js';
import Nombre from './nombre.js'
export default class Paciente {
  /**
   *
   * @param {Nombre} nombre
   * @param {Fecha} fechaNacimiento
   * @param {number} numeroTel
   */
  constructor(nombre, fechaNacimiento, numeroTel) {
    this._nombre = nombre;
    this._fechaNacimiento = fechaNacimiento;
    this._telefono = numeroTel;
  }

  getPerfil() {
    return `${this._nombre}, ${this._fechaNacimiento.getFecha()}, ${this._telefono}`;
  }
}
