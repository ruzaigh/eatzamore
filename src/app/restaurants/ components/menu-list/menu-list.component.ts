import { Component, Input } from '@angular/core';
import { Dish } from '../../interface/restaurant';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css',
})
export class MenuListComponent {
  @Input() dishes: Dish[];
  dishImageMap = {
    'Appetizers/Starters': 'assets/starters-icon.png',
    Salads: 'assets/salads-icon.png',
    'Main Courses': 'assets/main-icon.png',
    Seafood: 'assets/seafood-icon.png',
  };
  constructor() {}
}
