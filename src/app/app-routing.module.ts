import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { InfoPersonComponent } from './components/info-person/info-person.component';
const routes: Routes = [
  {
    path: '',
    component: FormSearchComponent
  },
  {
    path: 'informacion/:tipoCedula/:numCedula',
    component: InfoPersonComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
