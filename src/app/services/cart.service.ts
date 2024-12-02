import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSource = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSource.asObservable();

  addToCart(product: any) {
    const currentItems = this.cartItemsSource.value;
    currentItems.push(product);
    this.cartItemsSource.next(currentItems);
  }

  removeFromCart(cartId: number) {
    const currentItems = this.cartItemsSource.value.filter(item => item.cartId !== cartId);
    this.cartItemsSource.next(currentItems);
  }

  getCartItems() {
    return this.cartItemsSource.value;
  }

  calculateTotal() {
    return this.cartItemsSource.value.reduce((total, item) => total + item.productPrice, 0);
  }
}
