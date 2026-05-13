import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PEOPLE_REPOSITORY_TOKEN } from '../tokens/people-repository.token';
import { Router } from '@angular/router';

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

  private readonly service = inject(PEOPLE_REPOSITORY_TOKEN);
  private readonly router = inject(Router);

  onSubmit(formularz: NgForm): void {
    console.log(formularz.value);
    console.log('valid: ', formularz.valid);

    const dateOfBirth: Date = new Date(formularz.value['dateOfBirth']);

    this.service.Post(formularz.value['name'], formularz.value['surname'], dateOfBirth).subscribe({
      next: (res) => {
        if(res) {
          this.router.navigateByUrl('osoby');
        } else {
          alert("Nie udało się dodać nowej osoby.")
        }
      }
    })
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
