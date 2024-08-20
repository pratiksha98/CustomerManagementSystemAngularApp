import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customer: Customer;
  id: string;
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.customerService
        .getCustomerById(this.id)
        .subscribe((customer) => {this.customer = customer; console.log(customer)});
    });
  }
}
