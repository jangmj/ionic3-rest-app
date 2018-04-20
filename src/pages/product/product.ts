import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Product} from "../../models/product";
import {HomePage} from "../home/home";
import {RestProvider} from "../../providers/rest/rest";

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  myProduct:Product;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest:RestProvider, public toastCtrl:ToastController) {
    this.myProduct = new Product(navParams.get("product"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
    //alert(this.myProduct.name);
  }

  saveProduct(product:Product) {
    //edit
    if(product.id) {
      //
      this.rest.updateProduct(product).subscribe(product => {
        this.myProduct = product;
        this.showSuccessMessage(product.id + " OK")
        this.navCtrl.setRoot(HomePage);
      });
    } else {
      //
      this.rest.createProduct(product).subscribe(product => {
        this.myProduct = product;
        this.showSuccessMessage(product.id + " OK")
        this.navCtrl.setRoot(HomePage);
      });
    }
  }

  deleteProduct(productId:number) {
    this.rest.deleteProductById(productId).subscribe(product => {
      this.showSuccessMessage(productId + " OK")
      this.navCtrl.setRoot(HomePage);
    });
  }
  showSuccessMessage(msg:string) {
    this.toastCtrl.create({
      message:msg,
      showCloseButton:true,
      duration:3000,
      position:'middle'
    }).present();
  }
}
