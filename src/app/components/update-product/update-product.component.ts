import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product-service.service';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.sass']
})
export class UpdateProductComponent implements OnInit {

  product: ProductModel = {id: null, name: null, price: null}

  constructor(private rout: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    let id = this.rout.snapshot.params.id;
    this.productService.getById(id).subscribe((data: ProductModel) => {

      this.product = data
    })
  }

  update(){
    
    this.productService.update(this.product).subscribe(() => {
      this.router.navigate(['/products'])
    })
  }

}
