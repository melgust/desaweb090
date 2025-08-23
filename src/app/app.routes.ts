import { Routes } from '@angular/router';
import { PersonComponent } from './pages/person/person.component';

export const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'persons', component: PersonComponent },
];
