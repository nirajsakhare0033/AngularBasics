import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Watch',
      price: '109',
      color: 'Black',
      available: 'Available',
      image: 'assets/apple-iphone-12-r1.jpg',
    },
    {
      id: 2,
      name: 'Rubber',
      price: '129',
      color: 'pink',
      available: 'NotAvailable',
      image: 'assets/product_1.webp',
    },
    {
      id: 3,
      name: 'Iphone',
      price: '989',
      color: 'green',
      available: 'Available',
      image: 'assets/apple-iphone-12-r1.jpg',
    },
    {
      id: 4,
      name: 'Printer',
      price: '537',
      color: 'while',
      available: 'NotAvailable',
      image: 'assets/product_1.webp',
    },
    {
      id: 5,
      name: 'Gold Watch',
      price: '812',
      color: 'yello',
      available: 'Available',
      image: 'assets/apple-iphone-12-r1.jpg',
    },
    {
      id: 6,
      name: 'CycleKids',
      price: '356',
      color: 'skyBlue',
      available: 'NotAvailable',
      image: 'assets/product_1.webp',
    },
  ];
}
