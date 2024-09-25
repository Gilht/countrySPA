import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private httpClient = inject(HttpClient);

  private baseUrl: string = "https://restcountries.com/v3.1";

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {

    const url = `${ this.baseUrl }/alpha/${ code }`;

    return this.httpClient.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
  }


  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.baseUrl}/capital/${term}`;
    return this.httpClient.get<Country[]>(url);
  }

  searchCountry(country: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${country}`;
    return this.httpClient.get<Country[]>(url);
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${region}`;
    return this.httpClient.get<Country[]>(url);
  }
}
