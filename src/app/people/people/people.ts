import { Component } from '@angular/core';
import { Person } from '../../classes/person';
import { PeopleService } from '../../people';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.html',
  styles: ``,
})
export class People {
  public data: Person[] = [];

  constructor(repository: PeopleService) {
    this.data = repository.get();
  }

  public trackByID(index: number, obj: Person): number {
    return obj.id;
  }

  public calculateAge(obj: Person): number {
    const currentTimestamp = Date.now();
    const dateNow = new Date(currentTimestamp);
    console.log('calculateAge');
    return dateNow.getFullYear() - obj.dateOfBirth.getFullYear();
  }
}