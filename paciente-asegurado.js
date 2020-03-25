import Paciente from "./paciente.js"
import Fecha from "./fecha.js"

export default class PacienteAsegurado extends Paciente{
    /**
     * 
     * @param {number} numeroPoliza 
     * @param {Fecha} fechaFinVigencia 
     * @param {string} compañia 
     */
    constructor({nombre, fechaNacimiento, telefono, numeroPoliza, fechaFinVigencia, compañia}){
        super(nombre, fechaNacimiento, telefono)
        this._numeroPoliza = numeroPoliza
        this._fechaFinVigencia = fechaFinVigencia
        this._compañia = compañia
        this._nombre = nombre
        this._fechaNacimiento = fechaNacimiento
        this._telefono = telefono
    }
    getPerfil(){
        return(`${this._nombre.getNombreCompleto()}, ${this._fechaNacimiento.getFecha()}, ${this._telefono}, ${this._numeroPoliza}, ${this._fechaFinVigencia.getFecha()}, ${this._compañia}`)
    }
}