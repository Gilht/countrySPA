import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{
  public country?: Country;

  constructor(
    private activeRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ){}

  ngOnInit(): void {
    this,this.activeRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id))
    )
    .subscribe( country => {
      if(!country) return this.router.navigateByUrl("");
      
      return this.country = country;
    })
  }

}
