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

  ionViewDidLoad() {
    this.products = this.restProvider.getProducts();
  }
}
