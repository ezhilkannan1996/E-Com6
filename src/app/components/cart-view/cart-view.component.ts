import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Order,CartItem } from 'src/app/interface/data-type'; 
import { AlertService } from 'src/app/services/alert.service';
import { PlaceorderalertService } from 'src/app/services/placeorderalert.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  @Input() cartItems: any[] = [];
  orderList: any[] = [];

  constructor(private cartService: CartService, private orderService: OrderService,private AlertService: AlertService, private alertService : PlaceorderalertService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((cartItems) => {
      this.cartItems = cartItems;
    });
  }

  removeFromCart(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartService.updateCart(this.cartItems);
    }
  }

  increaseQuantity(item: any) {
    if (item.quantity === undefined) {
      item.quantity = 0;
    }
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity === undefined) {
      item.quantity = 0;
    } else if (item.quantity > 0) {
      item.quantity--;
    }
  }

  getTotalPrice(item: any): number {
    return item.price * (item.quantity || 0);
  }

  get grandTotal(): number {
    return this.cartItems.reduce((total, item) => total + this.getTotalPrice(item), 0);
  }

  
  buyProducts(cartItems: CartItem[]): void {
    const order: Order = {
      id: new Date().getTime(),
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1, 
        imageUrl: item.imageUrl 
      }))
    };

    this.orderService.placeOrder(order);
    this.AlertService.showAlert();
    this.alertService.showAlert();
    this.cartService.clearCart();
  }
  
}
