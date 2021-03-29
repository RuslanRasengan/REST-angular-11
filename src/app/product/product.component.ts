import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from '../models/product.model'
import { ProductService } from '../services/product-service.service'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent implements OnInit {

  products: ProductModel[] = []

  product: ProductModel = {id: null, name: null, price: null}

  constructor(private productService: ProductService, private router: Router ) { }

  ngOnInit(): void {
    this.get();
  };


  get(){
    this.productService.getProduct().subscribe((data: ProductModel[]) => this.products = data)
  }

  removeProduct(id : number) 
  { 
    this.productService.remove(id).subscribe(data => this.product = data) 
    this.productService.getProduct().subscribe((data:ProductModel[]) => this.products = data)
  }

  postProduct(product: ProductModel){
    this.productService.post(product).subscribe(data => this.products.push(data))
  }

  updateProduct(product: ProductModel){
    this.productService.update(product).subscribe(data => this.product = data)
  }
}