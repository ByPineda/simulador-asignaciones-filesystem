import { Injectable } from '@angular/core';
import { Archivo } from '../models/archivo.model';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ValidadorService {
  public validarNombre(lista: any[], archivo: any) {
    //console.log('Validando');
    //console.log(lista);
    //console.log(archivo);
    if (archivo.nombre != '') {
      //console.log('Nombre no vacío');
      if (lista.filter((arch) => arch.nombre === archivo.nombre).length == 0) {
        //console.log('Nombre no repetido');
        return true;
      } else {
        //console.log('Nombre repetido');
        alert('Nombre repetido');
        return false;
      }
    } else {
      //console.log('Nombre vacío');
      alert('Nombre vacío');
      return false;
    }
  }

  public validarInicio(lista: any[], archivo: any) {
    if (archivo.inicio >= 0) {
      //console.log('Inicio no negativo');
      if (archivo.inicio == 0) {
        //console.log("Inicio en 0, el bloque 0 es reservado para el sistema");
        alert('Inicio en 0, el bloque 0 es reservado para el sistema');
        return false;
      } else {
        if (
          lista.filter((arch) => arch.inicio === archivo.inicio).length == 0
        ) {
          //console.log('Inicio no repetido');
          return true;
        } else {
          //console.log('Inicio repetido');
          alert('Inicio repetido');
          return false;
        }
      }
    }
    if (archivo.inicio == null) {
      alert('Inicio vacío');
      return false;

    
    } 
    else {
      //console.log('Inicio negativo');
      alert('Inicio negativo');
      return false;
    }
  }
  public validarLongitud(archivo: any) {
    if(archivo.longitud == null){
      alert('Longitud vacía');
      return false;
    }
    if (archivo.longitud == 0) {
      alert('Longitud 0');
      return false;
    } else {
      //console.log('Longitud negativa');
      alert('Longitud negativa');
      return false;
    }
  }

  public validarLimites(archivo: any) {
    if (archivo.inicio >= 80) {
      alert('Inicio fuera de límites');
      return false;
    } else {
      if (archivo.inicio + archivo.longitud - 1 >= 80) {
        alert('Sin memoria suficiente');
        return false;
      }
    }
    return true;
  }
  public validarColor(archivo: any) {
    if (archivo.color != '') {
      return true;
    } else {
      alert('Color vacío. Eligir un color');
      return false;
    }
  }

  constructor() {}
}
