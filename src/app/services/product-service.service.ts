import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProductModel} from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

    url = 'http://localhost:3000/products';

    getProduct():Observable<ProductModel[]>
    {
        return this.http.get<ProductModel[]>(this.url)
    }

    remove(id: number):Observable<ProductModel>
    {
      return this.http.delete<ProductModel>(`${this.url}/${id}`)
    }

    post(product: ProductModel):Observable<ProductModel>{
      return this.http.post<ProductModel>(this.url, product)
    }

    update(product: ProductModel):Observable<ProductModel>{
      return this.http.put<ProductModel>(`${this.url}/${product.id}`, product)
    }

    getById(id: number):Observable<ProductModel>{
      return this.http.get<ProductModel>(`${this.url}/${id}`)
    } 
}