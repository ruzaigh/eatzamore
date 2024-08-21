import { Component, Input } from '@angular/core';
import { Restaurant, RestaurantsData } from '../../interface/restaurant';
import { RestaurantService } from '../../services/restaurant.service';
import { Subscription } from 'rxjs';
import { MenuListComponent } from '../menu-list/menu-list.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [MenuListComponent, NgClass],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css',
})
export class RestaurantListComponent {
  @Input() province: string = 'western-cape';
  public restaurantsDetail: Restaurant[];
  selectedRestaurant: string | null = 'Savory Table';

  private subscription: Subscription = new Subscription();

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.subscription.add(
      this.restaurantService.getProvince().subscribe((res: RestaurantsData) => {
        this.restaurantsDetail = res.restaurants;
      })
    );
  }
  showMenuList(restaurantName: string) {
    this.selectedRestaurant =
      this.selectedRestaurant === restaurantName ? null : restaurantName;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Clean up subscriptions
  }
}
