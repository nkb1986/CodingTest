import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

/**
 * This class provides a means to load the product details information.
 * It can be optimized by having another thread load information based
 * on the search results, but for this example I will leave this as-is.
 */

@Injectable()
export class ProductInfoProvider {

  constructor(public http: HttpClient, public platform: Platform) {}

  // Load data given a product ID
  loadData(prodId: string) {

    // Format the URL and parameters. In a native app we don't have to
    // worry so much about CORS -- under development I inserted proxy
    // information so that it would load on a mobile browser.
    var url = '../stores/v1/products/{prodID}'.replace(/{prodID}/, encodeURIComponent(prodId));
    var params = '?' +  encodeURIComponent('allperms') + '=' + encodeURIComponent('false')+ '&' 
      +  encodeURIComponent('apikey') + '=' + encodeURIComponent('l7xx8a07cdc674a24b48b8a8edaf8a905797');

    // Return the data
    return this.http.get(url + params);


  }

}
