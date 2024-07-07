import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title: string = '';
  catTitle: string = '';

  productList: Product[] = [];
  catFact: any = {};

  constructor(private myProductService: ProductService) { }

  ngOnInit(): void {

    this.title = this.myProductService.title;
    this.catTitle = this.myProductService.catTitle;


    this.myProductService.getAllProducts()
      .subscribe(response => this.productList = response);

    this.myProductService.getCatFact().subscribe(catResponse => {
      this.catFact = catResponse
    });
  }

}
