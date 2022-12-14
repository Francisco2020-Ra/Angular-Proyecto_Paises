import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = 'Hola mundo'
  hayError: boolean = false;
  paises: Pais[] =[];
  pasesSugeridos: Pais[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);


    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => {this.paises = paises; console.log(paises)},
      error: (error) => {this.hayError = true; this.paises = [];}
    });
  }

  sugerencias(termino: string){
    this.hayError = false;
   
    this.paisService.buscarPais( termino )
    .subscribe( paises => 
      this.pasesSugeridos = paises.splice(0,5),
      (error) => this.pasesSugeridos = []
    )
  }
  
}
