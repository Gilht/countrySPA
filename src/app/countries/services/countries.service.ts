import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private httpClient = inject(HttpClient);

  private baseUrl: string = "https://restcountries.com/v3.1";

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.baseUrl}/capital/${term}`;
    return this.httpClient.get<Country[]>(url);
  }
}
