import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../models/Customer';
import { CustomerstateService } from '../services/customerstate.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers$ = this.customerstateService.customers$;
  constructor(
    private customerService:CustomerService,
    private customerstateService: CustomerstateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const ageParam = params.get('age');
      const age = ageParam !== null ? +ageParam : null;
      if (age !== null && !isNaN(age)) {
        this.customerService.getCustomersByAge(age).subscribe((customers) => {
          this.customerstateService.setCustomers(customers);
        });
      } else {
        this.customerService.getAllCustomers().subscribe((customers) => {
          this.customerstateService.setCustomers(customers);
        });
      }
    });
    
  }
}
