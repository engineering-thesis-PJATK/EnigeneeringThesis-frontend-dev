import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerCompany } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers!: CustomerCompany[];
  constructor(private http: CustomerService) { }

  ngOnInit(): void {
    //this.customers = this.http.getCustomers();
    this.http.getCustomers().subscribe(c => this.customers = c);
  }

  reloadCustomers() {
    //this.customers = this.http.getCustomers();
    this.http.getCustomers().subscribe(c => this.customers = c);
  }

}
