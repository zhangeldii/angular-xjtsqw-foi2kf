import { Component } from "@angular/core";
import { CartService } from "../cart.service";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent {
  products = products;
  newItem: string;

  constructor(private cartService : CartService){
    this.newItem = '';
  }

  ngOnInit(): void {
    // this.getItems();
  }

  share() {
    window.alert("The product has been shared!");
  }

  // getItems() {
  //   this.cartService.getItems().subscribe( (products) => {this.products = products});
  // }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }

  deleteItem(id: number) {
    this.products = this.products.filter((x) => x.id !== id);
    this.cartService.deleteItem(id).subscribe( () => { console.log('deleted', id);
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
