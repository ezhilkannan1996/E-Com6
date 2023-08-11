import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../interface/data-type'; // Import the Order interface

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  

  
  private orders: Order[] = [];

  private ordersSubject = new BehaviorSubject<Order[]>([]);
  orders$ = this.ordersSubject.asObservable();

  placeOrder(order: Order): void {
    this.orders.push(order);
    this.ordersSubject.next([...this.orders]);
  }
  updateOrders(orders: Order[]): void {
    this.orders = orders;
    this.ordersSubject.next([...this.orders]);
  }

  getHardcodedOrders(): Order[] {
    return this.orders;
  }

  getOrders(): Observable<Order[]> {
    return this.ordersSubject.asObservable();
  }
}
