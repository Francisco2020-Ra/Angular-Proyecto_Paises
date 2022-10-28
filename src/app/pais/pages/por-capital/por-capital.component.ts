import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino: string = 'Hola mundo'
  hayError: boolean = false;
  paises: Pais[] =[];

  constructor(private paisService: PaisService) { }


  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);


    this.paisService.buscarCapital(this.termino).subscribe({
      next: (paises) => {this.paises = paises; console.log(paises)},
      error: (error) => {this.hayError = true; this.paises = [];}
    });
  }
}
