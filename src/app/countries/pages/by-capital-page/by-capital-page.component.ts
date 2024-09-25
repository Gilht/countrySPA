import { Component, inject } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  private countryService = inject(CountriesService);

  public countries: Country[] = [];

  searchByCapital(term: string): void {
    this.countryService.searchCapital(term).subscribe((items) => {
      this.countries = items;
      console.log(items)
    })
  }
}
