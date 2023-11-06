import { Injectable } from '@angular/core';
import { ArchivoIndexado } from '../models/archivo-indexado.model';
import { ValidadorService } from './validador.service';
import { bloque } from '../models/bloque.model';

@Injectable({
  providedIn: 'root',
})
export class AsignacionIndexadaService {
  listaArchivos: ArchivoIndexado[] = [];
  bloques = new Array<bloque>(80);
  counter = 1;

  constructor(public validadorService: ValidadorService) {}

  //Métodos
  addToLista(archivo: ArchivoIndexado) {
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
      }
    }
  }

  primeraIteracion(datosPertinentes: any) {
    for (let index = 1; index <= this.bloques.length; index++) {
      if (this.bloques[index].occupied == false) {
        //Llenamos el bloque
        this.bloques[index].nombre = datosPertinentes.archivo.nombre;
        this.bloques[index].color = datosPertinentes.archivo.color;
        this.bloques[index].occupied = true;
        //Llenamos el archivo
        datosPertinentes.archivo.inicio = index;
        datosPertinentes.datosLeft--;
        datosPertinentes.archivo.bloques.push(index);
        //Llenamos el bloque anterior
        datosPertinentes.bloqueAnterior = this.bloques[index];
        return datosPertinentes;
      }
    }
    alert('Disco lleno');
    return datosPertinentes;
  }

  segundaIteracion(datosPertinentes: any) {
    var tempDatos = datosPertinentes;
    //console.log(tempDatos);
    for (let index = 1; index < this.bloques.length; index++) {
      //console.log(index);
      if (this.bloques[index].occupied == false && tempDatos.datosLeft > 0) {
        //Llenamos el bloque
        this.bloques[index].nombre = tempDatos.archivo.nombre;
        this.bloques[index].color = tempDatos.archivo.color;
        this.bloques[index].occupied = true;
        //Llenamos los datos pertinentes
        tempDatos.datosLeft--;
        tempDatos.archivo.bloques.push(index);
        this.bloques[tempDatos.bloqueAnterior.i].siguiente_bloque =
          this.bloques[index];
        tempDatos.bloqueAnterior = this.bloques[index];
      }
      if (tempDatos.datosLeft == 0) {
        //Llenamos el archivo
        tempDatos.archivo.fin = tempDatos.bloqueAnterior.i;
        tempDatos.archivo.siguiente_bloque = null;
        this.listaArchivos.push(tempDatos.archivo);
        //console.log(this.listaArchivos);
        //console.log(this.bloques);
        return tempDatos;
      }
    }
    alert('No hay espacio suficiente');
    return datosPertinentes;
  }

  deleteItem(item: any) {
    for (let index = 0; index < item.bloques.length; index++) {
      this.bloques[item.bloques[index]].nombre = '';
      this.bloques[item.bloques[index]].color = '#FFFFFF';
      this.bloques[item.bloques[index]].occupied = false;
      this.bloques[item.bloques[index]].siguiente_bloque = null;
    }
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
    this.listaArchivos.forEach((archivo) => {
      for (let index = 0; index < archivo.punteros.length; index++) {
        this.bloques[archivo.punteros[index]].nombre = archivo.nombre;
        this.bloques[archivo.punteros[index]].color = archivo.color;
        this.bloques[archivo.punteros[index]].occupied = true;
        if (archivo.punteros[index + 1] != null) {
          this.bloques[archivo.punteros[index]].siguiente_bloque =
            this.bloques[archivo.punteros[index + 1]];
        }
      }
    });
  }
}
