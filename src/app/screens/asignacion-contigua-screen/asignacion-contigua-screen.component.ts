import { Component, OnInit } from '@angular/core';
import { AsignacionContiguaService } from '../../services/asignacion-contigua.service';
import {Archivo} from '../../models/archivo.model';

@Component({
  selector: 'app-asignacion-contigua-screen',
  templateUrl: './asignacion-contigua-screen.component.html',
  styleUrls: ['./asignacion-contigua-screen.component.css'],
})
export class AsignacionContiguaScreenComponent implements OnInit {
  nombre = '';
  inicio :any;
  longitud  :any;
  color = '';
  

  constructor(
    public asignacionContiguaService: AsignacionContiguaService
  ) {}

  items = this.asignacionContiguaService.getListaArchivos();

  bloques = this.asignacionContiguaService.getBloques();

  addArchivo(){
    
    var  archivo: Archivo = {
      id: 0,
      color: this.color,
      nombre: this.nombre,
      inicio: this.inicio,
      fin: this.inicio + this.longitud - 1,
      bloques: this.longitud,
      longitud: this.longitud
    }
    this.asignacionContiguaService.addToLista(archivo);
    this.graficarLista()
    this.nombre = '';
    this.inicio = null;
    this.longitud = null;
    this.color = '';

    console.log("Agregando" + archivo);


    console.log(this.asignacionContiguaService.getListaArchivos());
  }
  
  deleteItem(item : any){
    console.log("Eliminando");
    console.log(item);
    this.asignacionContiguaService.deleteItem(item);
    console.log(this.asignacionContiguaService.getListaArchivos());
    this.items = this.asignacionContiguaService.getListaArchivos();
    this.graficarLista();
  }

  graficarLista(){
    this.asignacionContiguaService.llenarGrafica();
    this.bloques = this.asignacionContiguaService.getBloques();
  }

  formatearDiscos(){
    this.asignacionContiguaService.clearListaArchivos();
    this.items = this.asignacionContiguaService.getListaArchivos();
    this.graficarLista();

  }
  ngOnInit(): void {
    this.asignacionContiguaService.llenarBloquesIniciales();
  }
}
