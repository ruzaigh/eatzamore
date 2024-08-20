export interface MenuItem {
  name: string;
  price: number;
}

export interface Dish {
  name: string;
  menuItems: MenuItem[]; // This is camelCased for consistency
}

export interface Restaurant {
  provinces: string[];
  name: string;
  dishes: Dish[];
  rating: number;
  reviews: number;
}

export interface RestaurantsData {
  restaurants: Restaurant[];
}
