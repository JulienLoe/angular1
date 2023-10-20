import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLandingPage: Boolean = true;

  constructor(private router: Router) {
    // Écoutez les événements de changement de route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Vérifiez la route
        this.isLandingPage =
          event.url === '/65e4gn_zvl&a&n&d&i&n&g&5ve46tb8sc32';
      }
    });
  }
}
