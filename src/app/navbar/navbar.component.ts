import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { CustomerstateService } from '../services/customerstate.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm;
  constructor(
    private customerService: CustomerService,
    private customerStateService: CustomerstateService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  getCustomers(age: number) {
    this.router.navigate(['/customers/age', age]);
    // if (age >= 0) {
    //   this.customerService.getCustomersByAge(age).subscribe((customers) => {
    //     this.customerStateService.setCustomers(customers);
    //   });
    // } else {
    //   // If the search box is cleared, fetch all customers again
    //   this.customerService.getAllCustomers().subscribe((customers) => {
    //     this.customerStateService.setCustomers(customers);
    //   });
    // }
    this.searchForm.reset();
  }
}
