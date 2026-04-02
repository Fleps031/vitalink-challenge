import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('vitalink');

  logoUrl = "vitalink-logo.svg"

  constructor(private router: Router){
    console.log(router.url)
  }


  isActiveRoute(routeTo: string){
   return this.router.url == routeTo
  }

  navigateTo(routeTo: string){
    this.router.navigate([routeTo])
  }
}
