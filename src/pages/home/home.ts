/*
  This is the controller for the start screen (home)
*/

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchResultsPage } from '../search-results/search-results';

import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  searchText : string;    // This holds the text from the search bar

  options : InAppBrowserOptions = {   // This handles the Android browser options
    location : 'yes', 
    hidden : 'no', 
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', 
   
};

  constructor(public navCtrl: NavController, private inAppBrowser: InAppBrowser) {
  }   // Leave the constructor empty

  searchTerm() {
    // Push the search text to the search results page/controller
    this.navCtrl.push(SearchResultsPage, {    
        data: this.searchText

    });
  }

  openWebSite() {   // This natively opens up the default browser on Android
   
   let target = "_system";
   this.inAppBrowser.create("http://shop.com/",target,this.options);

  }
  

  

}
