import { Component } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 19.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 29.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 39.99, imageUrl: 'https://via.placeholder.com/150' },
  ];
}