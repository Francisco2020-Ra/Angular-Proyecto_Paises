import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{
  
  @Output() onEnter = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();

  @Input() placeholder: string = ''

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void {
      this.debouncer
      .pipe(
        debounceTime(300) //despues que tipeo espera 300 milesimas de segundo para enviarlo a la busqueda
      )
      .subscribe( terminoDeBusqueda =>{
        this.onDebounce.emit(terminoDeBusqueda);
      })
  }

  buscar(){
    this.onEnter.emit(this.termino);

  }

  teclaPresionada(){
    this.debouncer.next( this.termino );
  }
}
