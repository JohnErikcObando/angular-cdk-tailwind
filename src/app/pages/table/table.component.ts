import { Component, inject } from '@angular/core';

import { CdkTableModule } from '@angular/cdk/table';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { DataSourceProduct } from './data-source';
import { BtnComponent } from '../../components/btn/btn.component';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CdkTableModule,
    NavbarComponent,
    CommonModule,
    BtnComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  private http = inject(HttpClient);

  dataSource = new DataSourceProduct();
  total = 0;
  input = new FormControl('', { nonNullable: true });

  columns: string[] = ['#No', 'Name', 'price', 'cover', 'action'];

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.dataSource.init(data);
        this.total = this.dataSource.getTotal();
      });

    this.input.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.dataSource.find(value);
    });
  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }
}
