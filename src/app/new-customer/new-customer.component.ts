import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css'],
})
export class NewCustomerComponent implements OnInit {
  @ViewChild('customerForm') customerForm: NgForm;
  customerCreated:boolean = false;
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {}
  createCustomer() {
    console.log(this.customerForm);
    const newCustomer = {
      fullName: this.customerForm.value.fullName,
      dateOfBirth: this.customerForm.value.dateOfBirth,
    };
    this.customerService.addCustomer(newCustomer).subscribe((customer) => {
      console.log(customer);
      this.customerForm.reset();
      
    });
  }
}
