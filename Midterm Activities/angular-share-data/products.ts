import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {
  getProducts() {
    return [
      {
        productID: 'P-101',
        productName: 'Logitech Mouse',
        productDesc: '6 Button Mechanical Mouse',
        price: 899.00,
      },
      {
        productID: 'P-102',
        productName: 'JBL BT Speaker',
        productDesc: 'Waterproof Radio 360 Surround',
        price: 1099.00,
      },
      {
        productID: 'P-103',
        productName: 'Mechanical Keyboard',
        productDesc: 'Hot-swappable RGB Backlit',
        price: 2395.00,
      },
      {
        productID: 'P-104',
        productName: 'Oculus Meta',
        productDesc: 'All-in-one Gaming Headset',
        price: 22450.00,
      },
    ];
  }
}
