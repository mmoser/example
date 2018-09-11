import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../model/employee';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BenefitsCostService {

  constructor(private http: HttpClient) { }

  get rootUrl() {
    return `${environment.apiUrl}BenefitsCost/`;
  }

  getEmployeeCost(employee: IEmployee) {
    var url = `${this.rootUrl}employeecost`;
    // Note: Right now this is hardcoded to company id 1, if we add companies, change this.
    return this.http.post(url, { companyId: 1, employee: employee }); 
  }
}
