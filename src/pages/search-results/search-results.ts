/**
 * This is the search results controller.
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchDataProvider } from '../../providers/search-data/search-data';
import { Observable } from 'rxjs/Observable';
import { ProductDetailsPage } from '../product-details/product-details';


@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {

  searchTerm: string;               // This will contain the string passed in from the previous search bar
  searchResults: Observable<any>;   // This will contain the JSON of search results
  results = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public inSearchData: SearchDataProvider) {

    this.searchTerm = navParams.get('data');  // Pull data from previous activity
    this.searchResults = this.inSearchData.loadData(this.searchTerm); // Load JSON from remote API
    

    // Push each found item into the results array.
    this.searchResults.subscribe(data => {    
      console.log(data['searchItems']);
      data.searchItems.forEach(e => { 
        if(e.prodID != 0)   
          this.results.push(e);
      
      });
    }); 

     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultsPage');
    console.log("ionViewDidLoad: " + this.searchResults);
  }

  // Function to handle a list item that was clicked
  itemClick(item) {

      console.log("Item id: " + item.prodID);
      var string: string;

      // Filter out any prodId that equal zero. Done for the purpose
      // of the code test!
      if (item.prodID != 0)
        string = item.prodID;

      // Push the product ID to the product details activity.
      this.navCtrl.push(ProductDetailsPage, {
          data: string
      }

      );
      
  }

}
