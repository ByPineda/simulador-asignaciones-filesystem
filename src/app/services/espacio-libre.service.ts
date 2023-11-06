import { Injectable } from '@angular/core';
import { bloque } from '../models/bloque.model';

@Injectable({
  providedIn: 'root',
})
export class EspacioLibreService {
  constructor() {}

  public obtenerEspaciosLibre(bloques: bloque[]) {
    var espaciosLibres = [];
    var tempEspacioLibre = [];
    var inicio = 0;
    var fin = 0;

    for (let index = 1; index < bloques.length; index++) {
      if (bloques[index].occupied == false) {
        if (tempEspacioLibre.length == 0) {
          inicio = index;
        }
        tempEspacioLibre.push(index);
      } else {
        if (tempEspacioLibre.length > 0) {
          fin = index - 1;
          espaciosLibres.push({
            inicio: inicio,
            fin: fin,
            longitud: fin - inicio + 1,
          });
          tempEspacioLibre = [];
        }
      }
    }

    // Verifica si hay algún espacio libre pendiente y agrégalo al arreglo espaciosLibres
    if (tempEspacioLibre.length > 0) {
      fin = bloques.length - 1;
      espaciosLibres.push({
        inicio: inicio,
        fin: fin,
        longitud: fin - inicio + 1,
      });
    }

    //console.log(espaciosLibres);
    return espaciosLibres;
  }
}
