import { Injectable } from '@angular/core';
import { ArchivoIndexado } from '../models/archivo-indexado.model';
import { ValidadorService } from './validador.service';
import { EspacioLibreService } from './espacio-libre.service';

import { bloque } from '../models/bloque.model';

@Injectable({
  providedIn: 'root',
})
export class AsignacionIndexadaService {
  listaArchivos: ArchivoIndexado[] = [];
  bloques = new Array<bloque>(80);
  libres : any = []

  counter = 1;

  constructor(
    public validadorService: ValidadorService,
    public espacioLibreService: EspacioLibreService
    ) {}

  //Métodos
  addToLista(archivo: ArchivoIndexado) {
    if (this.validadorService.validarNombre(this.listaArchivos, archivo)) {
      if (this.validadorService.validarColor(archivo)) {
        var datosPertinentes = {
          archivo: archivo,
          datosLeft: archivo.longitud,
        };
        //Primera iteracion para buscar un lugar libre
        datosPertinentes = this.primeraIteracion(datosPertinentes);
        //console.log(datosPertinentes);

        //Segundo iterador para llenar bloques libres con los datos del archivo
        datosPertinentes = this.segundaIteracion(datosPertinentes);

        //console.log(datosPertinentes);
      }
    }
  }

  primeraIteracion(datosPertinentes: any) {
    for (let index = 1; index <= this.bloques.length; index++) {
      if (this.bloques[index].occupied == false) {
        this.bloques[index].nombre = datosPertinentes.archivo.nombre;
        this.bloques[index].color = datosPertinentes.archivo.color;
        this.bloques[index].occupied = true;
        datosPertinentes.archivo.indice = index;
        return datosPertinentes;
      }
    }
    alert('Disco lleno');
    return datosPertinentes;
  }

  segundaIteracion(datosPertinentes: any) {
    var bloquesLibresEnSistema = this.obtenerBloquesLibres();
    if (bloquesLibresEnSistema < datosPertinentes.datosLeft) {
      alert('No hay suficiente espacio en el disco');
      this.bloques[datosPertinentes.archivo.indice].nombre = '';
      this.bloques[datosPertinentes.archivo.indice].color = '#FFFFFF';
      this.bloques[datosPertinentes.archivo.indice].occupied = false;

      return datosPertinentes;
    } else {
      for (let index = 1; index < this.bloques.length; index++) {
        if (this.bloques[index].occupied == false) {
          this.bloques[index].nombre = datosPertinentes.archivo.nombre;
          this.bloques[index].color = datosPertinentes.archivo.color;
          this.bloques[index].occupied = true;
          datosPertinentes.archivo.punteros.push(index);
          datosPertinentes.datosLeft--;
          if (datosPertinentes.datosLeft == 0) {
            this.listaArchivos.push(datosPertinentes.archivo);
            return datosPertinentes;
          }
        }
      }
    }
  }

  deleteItem(item: any) {
    this.bloques[item.indice].nombre = '';
    this.bloques[item.indice].color = '#FFFFFF';
    this.bloques[item.indice].occupied = false;
    for (let index = 0; index < item.punteros.length; index++) {
      this.bloques[item.punteros[index]].nombre = '';
      this.bloques[item.punteros[index]].color = '#FFFFFF';
      this.bloques[item.punteros[index]].occupied = false;
    }
    this.listaArchivos = this.listaArchivos.filter(
      (archivo) => archivo.nombre !== item.nombre
    );
  }

  obtenerBloquesLibres() {
    var bloquesLibres = 0;
    for (let index = 0; index < this.bloques.length; index++) {
      if (this.bloques[index].occupied == false) {
        bloquesLibres++;
      }
    }
    return bloquesLibres;
  }
  getListaArchivos() {
    return this.listaArchivos;
  }

  getBloques() {
    return this.bloques;
  }

  setBloques(bloques: bloque[]) {
    this.bloques = bloques;
  }

  getLibres() {
    return this.libres;
  }
  
  clearListaArchivos() {
    this.listaArchivos = [];
    this.counter = 1;
    this.llenarBloquesIniciales();
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
        siguiente_bloque: null,
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
  }
}
