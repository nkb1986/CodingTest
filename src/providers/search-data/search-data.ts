import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * This class is the provider for interacting with the Search API.
 */

@Injectable()
export class SearchDataProvider {

  constructor(public http: HttpClient) {}

  // Load data given a search term string
  loadData(searchTerm: string) {

      // Set up variables. Not a huge worry with CORS on a native app, but
      // proxy settings have been set up for mobile browser testing.
      var url = '../sites/v1/search/term/{term}'.replace(/{term}/g, encodeURIComponent(searchTerm));
      var params = '?' +  encodeURIComponent('page') + '=' + encodeURIComponent('1')+ '&' +  encodeURIComponent('count') 
        + '=' + encodeURIComponent('100')+ '&' +  encodeURIComponent('apikey') + '=' + encodeURIComponent('l7xx8a07cdc674a24b48b8a8edaf8a905797');

      return this.http.get(url + params);
  }

}



