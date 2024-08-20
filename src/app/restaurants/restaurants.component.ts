import { Component } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";
import {RestaurantListComponent} from "./ components/restaurant-list/restaurant-list.component";
import {MenuListComponent} from "./ components/menu-list/menu-list.component";


@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [
    RestaurantListComponent,
    MenuListComponent,
  ],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css'
})
export class RestaurantsComponent {
  public location: string = 'western-cape';
  private subscription: Subscription = new Subscription();
  constructor(
    private route: ActivatedRoute,
    ) {}

  ngOnInit(){
    this.subscription.add(
      this.route.params.subscribe((params: Params) => {
        this.location = params['province'];
      })
    );

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Clean up subscriptions
  }


}
