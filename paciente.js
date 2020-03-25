import Fecha from './fecha.js';
import Nombre from './nombre.js'
export default class Paciente {
  /**
   *
   * @param {Nombre} nombre
   * @param {Fecha} fechaNacimiento
   * @param {number} numeroTel
   */
  constructor({nombre, fechaNacimiento, telefono}) {
    this._nombre = nombre;
    this._fechaNacimiento = fechaNacimiento;
    this._telefono = telefono;
  }

  getPerfil() {
    return `${this._nombre.getNombreCompleto()}, ${this._fechaNacimiento.getFecha()}, ${this._telefono}`;
  }
  getApellidoParteno(){
    return(this._nombre._apellidoPaterno)
  }
}
