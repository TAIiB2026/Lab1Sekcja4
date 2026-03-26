import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Second } from './second/second';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyDirective } from './my-directive';

@NgModule({
  declarations: [App, Second, MyDirective],
  imports: [BrowserModule, CommonModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
