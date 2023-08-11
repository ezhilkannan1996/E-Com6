import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/interface/data-type';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input() orderList: Order[] = []; 

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.orders$.subscribe((orders) => {
      this.orderList = orders;
    });
  }

  cancelOrder(order: Order): void {
    const index = this.orderList.indexOf(order);
    if (index !== -1) {
      this.orderList.splice(index, 1);
      this.orderService.updateOrders(this.orderList); 
    }
  }

  calculateGrandTotal(order: Order): number {
    return order.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
