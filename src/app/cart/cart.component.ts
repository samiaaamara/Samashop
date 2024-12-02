import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';  


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = this.cartService.getCartItems();
  total: any;


  constructor(private cartService: CartService) { }
  addToCart(): void {
    this.cartService.addToCart(this.cartItems);
    console.log('Produit ajouté au panier');
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
}

  
  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.productPrice, 0);
  }


  removeItem(cartId: number): void {
    this.cartService.removeFromCart(cartId);
    this.cartItems = this.cartService.getCartItems();
  }

}
