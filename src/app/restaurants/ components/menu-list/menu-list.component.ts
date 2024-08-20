import {Component, Input} from '@angular/core';
import {Dish, } from "../../interface/restaurant";

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent {
  @Input() dishes: Dish[]

  constructor() {

  }



}
