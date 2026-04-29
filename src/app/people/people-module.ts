import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { People } from './people/people';
import { AppPeopleRoutingModule } from './people-routing-module';
import { AgePipe } from './age-pipe';
import { PersonComponent } from './person/person';

@NgModule({
  declarations: [People, AgePipe, PersonComponent],
  imports: [CommonModule, AppPeopleRoutingModule],
})
export class PeopleModule {}
