/**
 * Product Info provider unit tester
 *
 */

import { ProductInfoProviderMock } from '../../../test-config/mocks-ionic';

let productDataObject = null;
let parameter = "1502136921";   // The ID of the hardcoded mock JSON pulled from the real API

describe('Product Info Provider Test', () => {
    beforeEach(() => {
        productDataObject = new ProductInfoProviderMock();
        productDataObject.loadData(parameter);
        
    });

    it('Tester was instantiated', () => {
        expect(productDataObject).not.toBeNull();
    });

    it('Test JSON retrieval: \'price\' should equal 159', () => {
        expect(productDataObject.productData['price']).toBe(159);
    });
    
  

})