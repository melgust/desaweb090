import { Routes } from '@angular/router';
import { PruebaComponent } from './24604/prueba/prueba.component';
import { PersonEditComponent } from './management/person-edit/person-edit.component';
import { PersonComponent } from './pages/person/person.component';

export const routes: Routes = [
  {
    path: 'rolando',
    component: PruebaComponent
  },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'persons', component: PersonComponent },
//   {
//     path: '',
//     redirectTo: 'persona',  
//     pathMatch: 'full'        
//   },
//   {
//     path: 'persona',  
//     component: PersonEditComponent
//   }

