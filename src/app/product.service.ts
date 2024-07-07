import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  dataSource: string = "assets/products.json"
  catDataSource: string = "https://catfact.ninja/fact";

  title: string = "List of Products";
  catTitle: string = "Cat Fact of the Day"

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataSource);
  }

  getCatFact(): Observable<any> {
    return this.http.get<any>(this.catDataSource);
  }
}
