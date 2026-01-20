import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { Products } from './products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-share-data');

public employees: {
  id: number,
  firstname: string,
  lastname: string,
  email: string,
}[] = [];

constructor(
  private _employeeService: Employee,
  private _productService: Products
) {}

ngOnInit() {
  this.employees = this._employeeService.getEmployees();
  this.products = this._productService.getProducts();
}

public products: {
  productID: string,
  productName: string,
  productDesc: string,
  price: number,
} [] = [];

}
