import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formularz',
  standalone: false,
  templateUrl: './formularz.html',
  styles: ``,
})
export class Formularz {
  public name: string = 'Imię...';
  public surname: string = 'Nazwisko...';
  public dateOfBirth: string = '1900-01-01';

  onSubmit(formularz: NgForm): void {
    console.log(formularz.value);
    console.log('valid: ', formularz.valid);
  }

  onNameChange(event: string): void {
    console.log(event);
  }

  wyzerujWartosci(): void {
    this.name = 'Imię...';
    this.surname = 'Nazwisko...';
    this.dateOfBirth = '1900-01-01';
  }
}
