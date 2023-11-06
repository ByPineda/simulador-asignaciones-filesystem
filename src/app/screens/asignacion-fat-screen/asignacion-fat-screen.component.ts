import { Component, OnInit } from '@angular/core';
import { AsignacionFatService } from '../../services/asignacion-fat.service';
import { ArchivoFAT } from '../../models/archivo-fat.model';
@Component({
  selector: 'app-asignacion-fat-screen',
  templateUrl: './asignacion-fat-screen.component.html',
  styleUrls: ['./asignacion-fat-screen.component.css'],
})
export class AsignacionFatScreenComponent {
  nombre = '';
  longitud: any;
  color = '';

  constructor(public AsignacionFatService: AsignacionFatService) {}

  items = this.AsignacionFatService.getListaArchivos();

  bloques = this.AsignacionFatService.getBloques();

  espaciosLibres  = this.AsignacionFatService.getLibres();


  addArchivo() {
    var ArchivoFAT: ArchivoFAT = {
      id: 0,
      color: this.color,
      nombre: this.nombre,
      start: 0,
      longitud: this.longitud,
      siguiente_bloque: null,
    };
    this.AsignacionFatService.addToLista(ArchivoFAT);

    //Llenamos el espacio libre
    this.AsignacionFatService.llenarEspaciosLibres();
    this.espaciosLibres = this.AsignacionFatService.getLibres();

    this.graficarLista();
    this.nombre = '';
    this.longitud = null;
    this.color = '';
  }

  deleteItem(item: any) {
    this.AsignacionFatService.deleteItem(item);
    console.log(this.AsignacionFatService.getListaArchivos());
    this.items = this.AsignacionFatService.getListaArchivos();
    this.graficarLista();

    this.AsignacionFatService.llenarEspaciosLibres();
    this.espaciosLibres = this.AsignacionFatService.getLibres();
  }

  graficarLista() {
    //this.AsignacionFatService.llenarGrafica();
    this.bloques = this.AsignacionFatService.getBloques();
    //console.log(this.AsignacionFatService.getListaArchivos());
  }

  formatearDiscos() {
    this.AsignacionFatService.clearListaArchivos();
    this.items = this.AsignacionFatService.getListaArchivos();

    //Limpiamos el display de espacios libres
    this.AsignacionFatService.llenarEspaciosLibres();
    this.espaciosLibres = this.AsignacionFatService.getLibres();
    this.graficarLista();
  }
  ngOnInit(): void {
    this.AsignacionFatService.llenarBloquesIniciales();
    this.AsignacionFatService.llenarEspaciosLibres();
    this.espaciosLibres = this.AsignacionFatService.getLibres();
  }
}
