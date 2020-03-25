import Nombre from './Nombre.js';
import Tiempo from './tiempo.js';
import Fecha from './fecha.js';
import Doctor from './doctor.js';
import Paciente from './paciente.js';
import Cita from './cita.js';
import Hospital from './hospital.js';
import PacienteAsegurado from './paciente-asegurado.js';

var pacienteAseg = {
  nombre: new Nombre("Yolanda", "Solorio", "Reyes"),
  fechaNacimiento: new Fecha(29, 2, 2019),
  telefono: 3121423889,
  numeroPoliza: 2152521,
  fechaFinVigencia: new Fecha(25,12,2016),
  compañia: "Repara todo"
};

class Main {
  constructor() {
    this.tiempo1 = new Tiempo({ hora: 10, minuto: 25, periodo: 'am' });
    this.tiempo2 = new Tiempo({ hora: 10, minuto: 25, periodo: 'pm' });

    this.fecha = new Fecha(15, 6, 2005);

    this.nombre = new Nombre('Juan', 'Pérez', 'Díaz');
    this.nombre2 = new Nombre('María', 'Ramos', 'Ramírez');

    var datospaciente = {
      nombre: this.nombre,
      fechaNacimiento: this.fecha,
      telefono: 3121256585
    }
    this.paciente = new Paciente(datospaciente);


    var datosDoctor = {
      nombre: this.nombre2,
      especialidad: "Cardiologo", 
      telefono: 312158895,
      cedula: 445566
    }
    this.doctor = new Doctor(datosDoctor);

    var datosCita ={
      fecha: this.fecha, 
      hora: this.tiempo1, 
      doctor: this.doctor, 
      paciente: this.Paciente
    }
    this.cita = new Cita(datosCita);

    var datosHospital = {
      nombre: "Puerta de hierro" ,
      direccion: "Av. Constitución 110"
    }
    this.hospital = new Hospital(datosHospital);

    this._pacienteAsegurado1 = new PacienteAsegurado(pacienteAseg)

  }

  probarTiempo() {
    console.log(this.tiempo1.getFormato12());
  }

  probarFecha() {
    console.log(this.fecha.getAños());
    console.log(this.fecha.getMeses());
    console.log(this.fecha.getSemanas());
    console.log(this.fecha.getDias());
    console.log(this.fecha.getFecha());
    console.log(this.fecha.getDiaFecha());
  }

  probarNombre() {
    console.log(this.nombre.getNombreCompleto());
    console.log(this.nombre.getApellidoNombre());
    console.log(this.nombre.getIniciales());
  }

  probarPaciente() {
    console.log(this.paciente.getPerfil());
  }

  probarDoctor() {
    console.log(this.doctor.getPerfil());
  }

  probarCita() {
    console.log(this.cita.getCita());
  }

  probarHospital() {
    this.hospital.registrarDoctor(this.doctor);
    this.hospital.registrarCita(this.cita);
    this.hospital.listarDoctores();
    this.hospital.listarCitas();
  }

  probarPacienteAsegurado(){
    console.log(this._pacienteAsegurado1.getPerfil())
  }
}
let app = new Main();

app.probarTiempo();
app.probarFecha();
app.probarNombre();
app.probarPaciente();
app.probarDoctor();
app.probarCita();
app.probarHospital();
app.probarPacienteAsegurado()