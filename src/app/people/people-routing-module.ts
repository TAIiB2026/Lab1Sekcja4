import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { People } from "./people/people";
import { PersonComponent } from "./person/person";

const routes: Routes = [
    { path: '', component: People },
    { path: 'tabela', component: People },
    { path: ':id', component: PersonComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AppPeopleRoutingModule { }