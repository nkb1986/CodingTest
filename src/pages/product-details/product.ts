/**
 * This is the product class that provides a model for the data
 * being returned from the loadData module in product-details.ts.
 * This also shows an example of how to import custom classes into
 * an Ionic/Cordova project.
 * 
 * No getter or setter functions will be implemented.
 */

export class Product {

    productUrl: string;
    productDescription: string;
    productCaption: string;
    productPrice: string;
    productSoldBy: string;
    soldByLogo: string;
    isOnSale: boolean;

     constructor() {}      // We'll only use a default constructor here.
                           // Could also use a varargs input and a dictionary
                           // for the parameters.
}