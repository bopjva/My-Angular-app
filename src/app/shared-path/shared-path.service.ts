import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedPathService {
  private customer = new BehaviorSubject<any>({ data: [], status: null });
  cast = this.customer.asObservable();


  constructor() { }

  getCustomerAge(customerResponse: any) {
    console.log('6');
    this.customer.next(customerResponse);


  }
}
