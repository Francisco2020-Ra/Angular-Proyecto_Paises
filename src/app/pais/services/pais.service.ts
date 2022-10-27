import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v2';

  constructor(private httpClient: HttpClient) { }

  buscarPais( termino: string): Observable<Pais[]>{
    const url = `${ this.apiUrl }/name/ ${ termino }`;

    return this.httpClient.get<Pais[]>( url); 
  }

  
}