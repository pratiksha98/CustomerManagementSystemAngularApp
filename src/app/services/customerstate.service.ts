import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { BehaviorSubject, Subject } from 'rxjs';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerstateService {
  private customersSubject = new BehaviorSubject<Customer[]>([]);
  customers$ = this.customersSubject.asObservable();

  constructor(private customerService: CustomerService) {
    this.loadAllCustomers();
  }

  private loadAllCustomers() {
    this.customerService.getAllCustomers().subscribe((customers) => {
      this.customersSubject.next(customers);
    });
  }

  setCustomers(customers: Customer[]) {
    this.customersSubject.next(customers);
  }

  getCustomers() {
    return this.customersSubject.getValue();
  }
}
