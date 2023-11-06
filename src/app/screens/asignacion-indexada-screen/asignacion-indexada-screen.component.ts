import { Component, OnInit } from '@angular/core';
import { AsignacionIndexadaService } from '../../services/asignacion-indexada.service';
import { ArchivoIndexado } from '../../models/archivo-indexado.model';

@Component({
  selector: 'app-asignacion-indexada-screen',
  templateUrl: './asignacion-indexada-screen.component.html',
  styleUrls: ['./asignacion-indexada-screen.component.css'],
})
export class AsignacionIndexadaScreenComponent {
  nombre = '';
  longitud: any;
  color = '';

  constructor(public asignacionIndexadaService: AsignacionIndexadaService) {}

  items = this.asignacionIndexadaService.getListaArchivos();

  bloques = this.asignacionIndexadaService.getBloques();

  espaciosLibre = this.asignacionIndexadaService.getLibres();

  addArchivo() {
    var ArchivoIndexado: ArchivoIndexado = {
      id: 0,
      color: this.color,
      nombre: this.nombre,
      indice: 0,
      punteros: [],
      longitud: this.longitud,
    };
    this.asignacionIndexadaService.addToLista(ArchivoIndexado);
    this.graficarLista();
    this.asignacionIndexadaService.llenarEspaciosLibres();
    this.espaciosLibre = this.asignacionIndexadaService.getLibres();
    this.nombre = '';
    this.longitud = null;
    this.color = '';
  }

  deleteItem(item: any) {
    this.asignacionIndexadaService.deleteItem(item);
    console.log(this.asignacionIndexadaService.getListaArchivos());
    this.items = this.asignacionIndexadaService.getListaArchivos();
    this.graficarLista();
    this.asignacionIndexadaService.llenarEspaciosLibres();
    this.espaciosLibre = this.asignacionIndexadaService.getLibres();
  }

  graficarLista() {
    //this.asignacionIndexadaService.llenarGrafica();
    this.bloques = this.asignacionIndexadaService.getBloques();
    console.log(this.asignacionIndexadaService.getListaArchivos());
  }

  formatearDiscos() {
    this.asignacionIndexadaService.clearListaArchivos();
    this.items = this.asignacionIndexadaService.getListaArchivos();
    this.graficarLista();
  }
  ngOnInit(): void {
    this.asignacionIndexadaService.llenarBloquesIniciales();
    this.asignacionIndexadaService.llenarEspaciosLibres();
    this.bloques = this.asignacionIndexadaService.getBloques();
    this.espaciosLibre = this.asignacionIndexadaService.getLibres();
  }
}
