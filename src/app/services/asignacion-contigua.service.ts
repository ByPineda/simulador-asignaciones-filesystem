import { Injectable } from '@angular/core';
import { Archivo } from '../models/archivo.model';
import { ValidadorService } from './validador.service';
import { EspacioLibreService } from './espacio-libre.service';
@Injectable({
  providedIn: 'root',
})
export class AsignacionContiguaService {
  listaArchivos: Archivo[] = [];
  bloques = new Array(80);
  libres: any = [];

  counter = 1;
  top = 0;

  constructor(
    public validadorService: ValidadorService,
    public espacioLibreService: EspacioLibreService
  ) {}

  //Métodos
  addToLista(archivo: Archivo) {
    if (this.validadorService.validarNombre(this.listaArchivos, archivo)) {
      if (this.validadorService.validarInicio(this.listaArchivos, archivo)) {
        if (this.validadorService.validarColor(archivo)) {
          if (this.validadorService.validarLongitud(archivo)) {
            if (this.validadorService.validarLimites(archivo)) {
              if (this.listaArchivos.length == 0) {
                archivo.id = this.counter;
                archivo.fin = archivo.inicio + archivo.longitud - 1;
                this.listaArchivos.push(archivo);
                this.counter++;
                //this.top = archivo.fin;
              } else {
                for (
                  let i = archivo.inicio;
                  i < archivo.inicio + archivo.longitud - 1;
                  i++
                ) {
                  if (this.bloques[i].occupied == true) {
                    alert('El archivo se sobrepone con otro archivo');
                    return;
                  }
                }
                archivo.id = this.counter;
                archivo.fin = archivo.inicio + archivo.longitud - 1;
                this.listaArchivos.push(archivo);
              }
            }
          }
        }
      }
    }
  }

  deleteItem(item: any) {
    this.listaArchivos = this.listaArchivos.filter(
      (archivo) => archivo.nombre !== item.nombre
    );
  }

  getListaArchivos() {
    return this.listaArchivos;
  }

  getBloques() {
    return this.bloques;
  }

  getLibres() {
    return this.libres;
  }

  clearListaArchivos() {
    this.listaArchivos = [];
    this.counter = 1;
    this.top = 0;
    return this.listaArchivos;
  }

  //Métodos de gráfica

  llenarBloquesIniciales() {
    //Llenamos el arreglo de bloques de prueba para probar ngFor
    for (let i = 0; i < this.bloques.length; i++) {
      this.bloques[i] = {
        nombre: '',
        color: '#FFFFFF',
        i,
        occupied: false,
      };
    }
  }

  llenarEspaciosLibres() {
    this.libres = this.espacioLibreService.obtenerEspaciosLibre(this.bloques);
    console.log(this.libres);
  }
  
  llenarGrafica() {
    //Limpiamos la gráfica
    this.llenarBloquesIniciales();
    //Llenamos la gráfica con los archivos
    this.listaArchivos.forEach((archivo) => {
      let inicio = archivo.inicio;
      let longitud = archivo.longitud;
      for (let i = inicio; i < inicio + longitud; i++) {
        this.bloques[i].nombre = archivo.nombre;
        this.bloques[i].color = archivo.color;
        this.bloques[i].occupied = true;
      }
    });
  }
}
