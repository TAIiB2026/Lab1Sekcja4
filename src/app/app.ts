import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styles: []
})
export class App {
  protected readonly title = 'lab1';
  public licznikGlobalny: number = 0;
  public tablica: string[] = ['Pierwszy', 'drugi', 'trzeci', 'czwarty'];
  public nowaNazwaInput?: string;
  public czyMoznaUsuwac: boolean = true;

  onZmianaLicznika(): void {
    this.licznikGlobalny++;
  }

  onDodajKomponentClick(): void {
    if(this.nowaNazwaInput) {
      this.tablica.push(this.nowaNazwaInput);
      this.nowaNazwaInput = '';
    } else {
      let nowaNazwa: string = "Komponent nr ";
      nowaNazwa += this.tablica.length;
      this.tablica.push(nowaNazwa);
      // this.tablica[0] = nowaNazwa;
    }
  }

  onUsunKomponent(nazwa: string): void {
    this.tablica = this.tablica.filter(x => x !== nazwa);
  }
}
