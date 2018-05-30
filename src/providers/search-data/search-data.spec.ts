/**
 * Search Data provider unit test
 */

import { SearchDataProviderMock } from '../../../test-config/mocks-ionic';

let searchDataObject = null;
let parameter = "1502136921"; // Arbitrarily used to feed loadData

describe('Search Data Provider Test', () => {
    beforeEach(() => {
        searchDataObject = new SearchDataProviderMock();
        searchDataObject.loadData(parameter);
    });

    it('Data Tester was instantiated', () => {
        expect(searchDataObject).not.toBeNull();
    });

    it('Parameter passes to loadData', () => {
        
        expect(searchDataObject.testTerm).toBe(parameter);
    });

    it('Search returns search results', () => {
        
        expect(searchDataObject.testSearch).toBeDefined();
    });

    it('Product ID ' + parameter + ' found in the search results', () => {
        
        expect(searchDataObject.testSearch
            .searchItems[0].prodID).toBe(Number(parameter));
    });
    
  

})