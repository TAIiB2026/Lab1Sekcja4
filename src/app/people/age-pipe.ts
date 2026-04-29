import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../classes/person';

@Pipe({
  name: 'age',
  standalone: false,
})
export class AgePipe implements PipeTransform {
  transform(value: Person): number {
    const currentTimestamp = Date.now();
    const dateNow = new Date(currentTimestamp);
    console.log('calculateAge - pipe');
    return dateNow.getFullYear() - value.dateOfBirth.getFullYear();
  }
}
