import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Customer, NewCustomer } from '../models/Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'https://localhost:44343/api/Customers';
  
  constructor(private httpClient: HttpClient) {}
 
  // Get all customers
  getAllCustomers():Observable<Customer[]> {
   return this.httpClient
      .get<any[]>(this.apiUrl)
      .pipe(map((customer) => customer.map(this.transformCustomerData)));
  }

  // Add a new customer
  addCustomer(customer: NewCustomer): Observable<NewCustomer> {
    return this.httpClient.post<NewCustomer>(this.apiUrl, customer, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  // Get a customer by ID
  getCustomerById(id: string): Observable<Customer> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient
      .get<Customer>(url)
      .pipe(map((customer) => this.transformCustomerData(customer)));
  }
  // Get customers by age
  getCustomersByAge(age: number) :Observable<Customer[]>{
    const url = `${this.apiUrl}/${age}`;
   return this.httpClient
      .get<Customer[]>(url)
      .pipe(map((customer) => customer.map(this.transformCustomerData)))
  }

  //mapping the incoming customer data into Customer model
  transformCustomerData(data: any): Customer {
    return {
      id: data.customerId,
      dateOfBirth: new Date(data.dateOfBirth),
      fullName: data.fullName,
      profileImage: data.profileImage,
    };
  }
}
