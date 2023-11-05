import { Component, OnInit } from '@angular/core';
import { AsignacionVinculadaService } from '../../services/asignacion-vinculada.service';
import {ArchivoVinculado} from '../../models/archivo-vinculado.model';

@Component({
  selector: 'app-asignacion-vinculada-screen',
  templateUrl: './asignacion-vinculada-screen.component.html',
  styleUrls: ['./asignacion-vinculada-screen.component.css']
})
export class AsignacionVinculadaScreenComponent implements OnInit {
  nombre = '';
  longitud : any;
  color = '';
  

  constructor(
    public asignacionVinculadaService: AsignacionVinculadaService
  ) {}

  items = this.asignacionVinculadaService.getListaArchivos();

  bloques = this.asignacionVinculadaService.getBloques();

  addArchivo(){
    
    var  archivoVinculado: ArchivoVinculado = {
      id: 0,
      color: this.color,
      nombre: this.nombre,
      inicio: 0,
      fin: 0,
      bloques: [],
      longitud: this.longitud,
    }
    this.asignacionVinculadaService.addToLista(archivoVinculado);
    this.graficarLista()
    this.nombre = '';
    this.longitud = null;
    this.color = '';
  }
  
  deleteItem(item : any){

    this.asignacionVinculadaService.deleteItem(item);
    console.log(this.asignacionVinculadaService.getListaArchivos());
    this.items = this.asignacionVinculadaService.getListaArchivos();
    this.graficarLista();
  }

  graficarLista(){
    //this.asignacionVinculadaService.llenarGrafica();
    this.bloques = this.asignacionVinculadaService.getBloques();
    console.log(this.asignacionVinculadaService.getListaArchivos())
  }

  formatearDiscos(){
    this.asignacionVinculadaService.clearListaArchivos();
    this.items = this.asignacionVinculadaService.getListaArchivos();
    this.graficarLista();

  }
  ngOnInit(): void {
    this.asignacionVinculadaService.llenarBloquesIniciales();
    //console.log(this.asignacionVinculadaService.getBloques());
  }
}
