import { Component, inject } from '@angular/core';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NavbarComponent, ScrollingModule],
  templateUrl: './scroll.component.html',
})
export class ScrollComponent {
  private http = inject(HttpClient);

  products: Product[] = [];

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe({
        next: (data) => {
          this.products = data;
        },
      });
  }
}
