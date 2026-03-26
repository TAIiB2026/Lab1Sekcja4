import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: false,
  templateUrl: './second.html',
  styles: ``,
})
export class Second {
  @Input() nazwa!: string;
  licznik: number = 0;
  @Output() zmianaLicznika = new EventEmitter<void>();
  @Output() usunKomponent = new EventEmitter<string>();
  @Input() uprawnienieDoUsuwania!: boolean;

  onLicznikClick(): void {
    this.licznik++;
    this.zmianaLicznika.emit();
  }

  onUsunKomponentClick(): void {
    this.usunKomponent.emit(this.nazwa);
  }
}
