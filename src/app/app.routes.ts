import { Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'location/western-cape', pathMatch: 'full' },
  { path: 'location/:province', component: RestaurantsComponent },
  { path: '**', component: PageNotFoundComponent },
];
