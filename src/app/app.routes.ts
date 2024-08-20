import { Routes } from '@angular/router';
import {RestaurantsComponent} from "./restaurants/restaurants.component";

export const routes: Routes = [
  // { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  {path:'location/:province', component: RestaurantsComponent},
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
]
