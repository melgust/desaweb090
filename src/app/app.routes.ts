import { Routes } from '@angular/router';
import { PruebaComponent } from './24604/prueba/prueba.component';
import { PersonEditComponent } from './management/person-edit/person-edit.component';
import { PersonComponent } from './pages/person/person.component';
import { ClientComponent } from './pages/client/client.component';
import { Product } from './models/product';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './24604/login/login.component';

export const routes: Routes = [
  {
    path: 'rolando',
    component: PruebaComponent
  },
    { path: 'persons', component: PersonComponent },
        { path: 'client', component: ClientComponent },
                { path: 'product', component: ProductsComponent },

                { path: 'login', component: LoginComponent }


//   {
//     path: '',
//     redirectTo: 'persona',  
//     pathMatch: 'full'        
//   },
//   {
//     path: 'persona',  
//     component: PersonEditComponent
//   }
]