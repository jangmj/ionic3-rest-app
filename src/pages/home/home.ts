import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";
import {Product} from "../../models/product";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products:Observable<Product[]>;

  constructor(public navCtrl: NavController,
              private restProvider:RestProvider) {

  }

  //lifecycle method
  ionViewDidLoad() {
    this.products = this.restProvider.getProducts();
  }

  //move to details page
  navToProductDetail(product:Product) {
    this.navCtrl.push("ProductPage", {product:product});
  }

  //
  createProduct() {
    this.navCtrl.push("ProductPage", {product:{}});
  }
}
