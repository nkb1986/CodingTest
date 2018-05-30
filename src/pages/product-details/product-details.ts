import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductInfoProvider } from '../../providers/product-info/product-info';
import { Observable } from 'rxjs/Observable';
import { Product } from '../product-details/product';


@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  focusedProdId: string;    // Save as a string for easier injection
  product: Observable<any>; // JSON object returned after load
  details = new Product();  // Instantiate a blank product for loading


  constructor(public navCtrl: NavController, public navParams: NavParams, public productData: ProductInfoProvider) {

    // Get product ID
    this.focusedProdId = navParams.get('data');

    // Use Product API to load data based on product ID
    this.product = productData.loadData(this.focusedProdId);

    // Fill the project object
    this.product.subscribe(data => {
      this.details.productUrl = data['imageURL'];
      this.details.productCaption = data['caption'];
      this.details.productPrice = Number.parseFloat(data['price']).toFixed(2);
      this.details.productDescription = data['description'];
      this.details.productSoldBy = data['storeDescription'];
      this.details.soldByLogo = data['storeLogoImageFileName'];
      this.details.isOnSale = data['onSale'];
      
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

}
