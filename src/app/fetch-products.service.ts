import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from './userData.interface';

@Injectable({
  providedIn: 'root',
})
export class FetchProductsService {
  url = 'https://fetchproducts-1f04a-default-rtdb.firebaseio.com/:products.json';

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}

  saveProducts(products: any[]) {
    // return this.http.post(this.url, products);
    return this.http.put(this.url, products, { headers: this.headers });
  }

  fetchProducts(){
    return this.http.get(this.url)
  }

  //Fetch Firebase dataTitle
  getDataTitle(){
    return this.http.get('https://fetchproducts-1f04a-default-rtdb.firebaseio.com/dataTitle.json')
  }

  //Fetch whole Employee database
  getEmployee(){
    return this.http.get<employee>('https://employee-4876f-default-rtdb.asia-southeast1.firebasedatabase.app/employee.json')
  }

  //Specific url service function
  getSingleEmployee(id:number){
    return this.http.get<employee>('https://employee-4876f-default-rtdb.asia-southeast1.firebasedatabase.app/employee/'+id+'.json')
  }
}
