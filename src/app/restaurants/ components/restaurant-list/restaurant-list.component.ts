import {Component, Input} from '@angular/core';
import {Restaurant, RestaurantsData} from "../../interface/restaurant";
import {RestaurantService} from "../../services/restaurant.service";
import {Subscription} from "rxjs";
import {MenuListComponent} from "../menu-list/menu-list.component";

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [
    MenuListComponent
  ],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent {
  @Input() province: string;
  public restaurantsDetail: Restaurant[];
  selectedRestaurant: string | null = null;

  private subscription: Subscription = new Subscription();

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit(){
    this.subscription.add(
      this.restaurantService.getProvince().subscribe((res: RestaurantsData ) =>{
        this.restaurantsDetail = res.restaurants
      })
    )
  }
  showMenuList(restaurantName: string) {
    this.selectedRestaurant = restaurantName;
  }

}
