import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  signOut() {
    // Implement your sign out logic here
    // For example:
    // this.authService.signOut();
    this.router.navigate(['/login']);
  }
}