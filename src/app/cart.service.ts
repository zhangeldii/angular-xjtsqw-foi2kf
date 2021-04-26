import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Products } from "./models";
import { products } from "./products";

@Injectable()
export class CartService {
  items = [];

  BASE_URL = "";

  constructor(private http: HttpClient) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/products/:productId`);
  }

  updateItem(product: Products): Observable<Products>{
    return this.http.put<Products>(`${this.BASE_URL}/products/:productId`, products)
  }

  addItem(product: Products): Observable<Products> {
    return this.http.post<Products>(`${this.BASE_URL}/products`, product)
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
