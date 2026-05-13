import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Second } from './second/second';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyDirective } from './my-directive';
import { Menu } from './menu/menu';
import { Licznik } from './licznik/licznik';
import { SterownikLicznika } from './sterownik-licznika/sterownik-licznika';
import { LicznikGlobalny } from './services/licznik-globalny';
import { Formularz } from './formularz/formularz';
import { PEOPLE_REPOSITORY_TOKEN } from './tokens/people-repository.token';
import { PeopleService } from './people';

@NgModule({
  declarations: [App, Second, MyDirective, Menu, Licznik, SterownikLicznika, Formularz],
  imports: [BrowserModule, CommonModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(), 
    LicznikGlobalny,
    { provide: PEOPLE_REPOSITORY_TOKEN, useExisting: PeopleService }
  ],
  bootstrap: [App],
})
export class AppModule {}
