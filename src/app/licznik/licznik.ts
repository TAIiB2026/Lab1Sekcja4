import { Component, inject } from '@angular/core';
import { LicznikLokalny } from '../services/licznik-lokalny';
import { LicznikSterownika } from '../services/licznik-sterownika';
import { LicznikGlobalny } from '../services/licznik-globalny';

@Component({
  selector: 'app-licznik',
  standalone: false,
  templateUrl: './licznik.html',
  styles: ``,
  providers: [LicznikLokalny]
})
export class Licznik {
  public readonly lokalny = inject(LicznikLokalny);
  public readonly sterownika = inject(LicznikSterownika);
  public readonly globalny = inject(LicznikGlobalny);

  public podniesLokalny(): void {
    this.lokalny.podniesLicznik();
  }

  public podniesSterownika(): void {
    this.sterownika.podniesLicznik();
  }

  public podniesGlobalny(): void {
    this.globalny.podniesLicznik();
  }
}
