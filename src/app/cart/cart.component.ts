import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { Products } from "../models";
import { products } from "../products";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent {
  products: Products[];
  newItem: string;
  newDescription: string;
  newUrl: string;
  items = this.cartService.getItems();
  constructor(private cartService: CartService) {}

  addItem() {
    const item = {
      name: this.newItem,
      description: this.newDescription,
      image: this.newUrl
    };

    this.cartService.addItem(item as Products).subscribe(item => {
      console.log(item);
      this.products.unshift(item);
    });
  }
}
