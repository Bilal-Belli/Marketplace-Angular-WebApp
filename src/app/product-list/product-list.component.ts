import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class ProductListComponent implements OnInit {
  products: any[] = [];
  currentPage = 0;
  itemsPerPage = 10;

  ngOnInit() {
    this.generateProducts();
  }

  generateProducts() {
    for (let i = 1; i <= 25; i++) {
      this.products.push({
        id: i,
        name: `Product ${i}`,
        imageUrl: `https://picsum.photos/300/300?random=${i}`
      });
    }
  }

  get displayedProducts() {
    const start = this.currentPage * this.itemsPerPage;
    return this.products.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if ((this.currentPage + 1) * this.itemsPerPage < this.products.length) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}

// export class ProductListComponent {
//   products: Product[] = [
//     { id: 1, name: 'Product 1', description: 'Description 1', price: 19.99, imageUrl: 'https://via.placeholder.com/150' },
//     { id: 2, name: 'Product 2', description: 'Description 2', price: 29.99, imageUrl: 'https://via.placeholder.com/150' },
//     { id: 3, name: 'Product 3', description: 'Description 3', price: 39.99, imageUrl: 'https://via.placeholder.com/150' },
//   ];
// }