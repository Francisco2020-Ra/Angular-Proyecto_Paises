import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private httpClient: HttpClient) { }

  get getParams() {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }

  buscarPais(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.httpClient.get<Pais[]>(url, { params: this.getParams });
  }

  buscarCapital(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.httpClient.get<Pais[]>(url, { params: this.getParams });
  }

  buscarPaisPorAlpha(id: string) {
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.httpClient.get<Pais>(url);
  }

  buscarPorRegion(id: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/regionalbloc/${id}`;

    return this.httpClient.get<Pais[]>(url, { params: this.getParams });
  }

}
