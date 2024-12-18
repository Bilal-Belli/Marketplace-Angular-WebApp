import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [HeaderComponent, ProductListComponent]
})
export class AppComponent {
  title = 'marketplace-app';
}
