import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {HamburgerComponent} from "./hamburger/hamburger.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HamburgerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'eatzamore';
}
