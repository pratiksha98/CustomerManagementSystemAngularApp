import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'customers/new',
    component: NewCustomerComponent,
  },
  {
    path: 'customers/:id',
    component: CustomerComponent,
  },
  {
    path: 'customers/age/:age',
    component: CustomersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
