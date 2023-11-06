import { Injectable } from '@angular/core';
import { ArchivoFAT } from '../models/archivo-fat.model';
import { ValidadorService } from './validador.service';
import { bloque } from '../models/bloque.model';

@Injectable({
  providedIn: 'root',
})
export class AsignacionFatService {
  listaArchivos: ArchivoFAT[] = [];
  bloques = new Array<bloque>(80);
  counter = 1;

  constructor(public validadorService: ValidadorService) {}

  //Métodos
  addToLista(archivo: ArchivoFAT) {
    if (this.validadorService.validarNombre(this.listaArchivos, archivo)) {
      if (this.validadorService.validarColor(archivo)) {
        var datosPertinentes = {
          archivo: archivo,
          datosLeft: archivo.longitud,
          bloqueAnterior: null,
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
        datosPertinentes.bloqueAnterior = index;
        datosPertinentes.archivo.start = index;
        datosPertinentes.datosLeft--;
        this.bloques[index].nombre = datosPertinentes.archivo.nombre;
        this.bloques[index].color = datosPertinentes.archivo.color;
        this.bloques[index].occupied = true;
        return datosPertinentes;
      }
    }
    alert('Discos llenos');
    return datosPertinentes;
  }

  segundaIteracion(datosPertinentes: any) {
    var bloquesLibresEnSistema = this.obtenerBloquesLibres();
    if (bloquesLibresEnSistema < datosPertinentes.datosLeft) {
      alert('No hay suficientes bloques libres');
      this.bloques[datosPertinentes.archivo.start].nombre = '';
      this.bloques[datosPertinentes.archivo.start].color = '#FFFFFF';
      this.bloques[datosPertinentes.archivo.start].occupied = false;
      return datosPertinentes;
    } else {
      for (let index = 1; index <= this.bloques.length; index++) {
        if (this.bloques[index].occupied == false) {
          this.bloques[datosPertinentes.bloqueAnterior].siguiente_bloque =
            index;
          this.bloques[index].nombre = datosPertinentes.archivo.nombre;
          this.bloques[index].color = datosPertinentes.archivo.color;
          this.bloques[index].occupied = true;
          datosPertinentes.bloqueAnterior = index;
          datosPertinentes.datosLeft--;
        }
        if (datosPertinentes.datosLeft == 0) {
          this.listaArchivos.push(datosPertinentes.archivo);
          this.bloques[index].siguiente_bloque = -1;
          return datosPertinentes;
        }
      }
    }
  }

  deleteItem(item: any) {
    var bloqueActual = item.start;
    var bloqueSiguiente = this.bloques[item.start].siguiente_bloque;
    while (bloqueSiguiente != null) {
      this.bloques[bloqueActual].nombre = '';
      this.bloques[bloqueActual].color = '#FFFFFF';
      this.bloques[bloqueActual].occupied = false;
      bloqueActual = bloqueSiguiente;
      bloqueSiguiente = this.bloques[bloqueActual].siguiente_bloque;
    }
    this.bloques[bloqueActual].nombre = '';
    this.bloques[bloqueActual].color = '#FFFFFF';
    this.bloques[bloqueActual].occupied = false;
    this.listaArchivos.splice(this.listaArchivos.indexOf(item), 1);
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

  llenarGrafica() {
    //Limpiamos la gráfica
    this.llenarBloquesIniciales();
    //Llenamos la gráfica con los archivos
  }
}
