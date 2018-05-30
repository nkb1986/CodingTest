/**
 * Testing mockups
 * 
 * Two mock units to test the search and product
 * providers (SearchDataProvider and ProductInfoProviderMock)
 * 
 * I hardcoded the JSON information into the mocks, but these
 * could easily be read from a local file if need be.
 * 
 */


export class SearchDataProviderMock {

  testSearch: any;
  testTerm: any;

  loadData(parameter) {
    this.testTerm = parameter;
    this.testSearch = 
    {
      "searchItems": [ 
       {
          "prodID": 1502136921,
          "prods_CatalogSKU": "18649608",
          "merchantSKU": "",
          "priceInfo": 
         {
            "price": "$49.99",
            "minimumUnits": 0,
            "isOnSaleMin": false,
            "isOnSaleMax": false,
            "hasMinMaxPricing": false,
            "customProduct": false,
            "localeId": 0,
            "decimalMin": "49.99",
            "showUpto": false,
            "cashBack": "$1.00",
            "distributorCashback": "$1.00",
            "standardCashback": "$1.00",
            "increasedCashback": "$0.00",
            "campaignEndDate": "",
            "ibv": "1.00",
            "upToCashBack": false 
         },
          "localPrice": 49.99,
          "doNotUse": false,
          "prodContainerID": 1533152385,
          "onSaleSpecial": false,
          "regularPrice": 49.99,
          "localeID": 1,
          "volumeID": 243545,
          "catalogID": 63730,
          "catalogName": "Bed Bath & Beyond",
          "the_Description": "Tommy Bahama® Backpack Cooler Chair is made with a lightweight aluminum frame that adjusts to 5 positions. Molded armrests include a cell phone holder and cup holder.",
          "the_FullDescription": "",
          "fileName": "1533152385.jpg",
          "eCommerceEnabled": false,
          "catalogSortName": "Bed Bath & Beyond",
          "prodIconID": 0,
          "isBackOrdered": false,
          "isTempOOS": false,
          "imageWidth": 175,
          "imageHeight": 175,
          "opContainerID": 1276425452,
          "caption": "Tommy Bahama® Backpack Cooler Chair",
          "captionIntlID": 0,
          "cashBack": 0.9998,
          "bvPercent": 0,
          "ibvPercent": 0.9998,
          "catalogLogoName": "",
          "standardCashBack": 0.9998,
          "increasedCashBack": 0,
          "ppcCashBack": 0,
          "customerIncentivePoints": 0,
          "imageURI": "https://img.shop.com/Image/240000/243500/243545/products/1533152385__175x175__.jpg",
          "thumbURI": "https://img.shop.com/Image/240000/243500/243545/products/thumb1533152385.jpg",
          "prodContainerUrl": "/Tommy+Bahama+Backpack+Cooler+Chair-1533152385-p+.xhtml",
          "linkOff": false,
          "linkOffUrl": "/nbts/p1502136921-xinternalsearch-link_off.xhtml",
          "rating": 0,
          "ratingCount": 0,
          "freeShipping": false,
          "storeCount": 1,
          "featuredProductFlag": false,
          "brand": "Tommy Bahama",
          "productCategoryId": 32842,
          "categoryId": 0,
          "modelQuickViewDetails": 
         {
            "hasATCOverlay": true,
            "opcID": 1276425452,
            "pcID": 1533152385,
            "prodID": 1502136921,
            "catalogID": 63730,
            "offerQty": 1,
            "rating": 0,
            "oosflag": 0,
            "linkoff": false,
            "linkUrl": "http://www.shop.com/nbts/p1502136921-xinternalsearch-link%5Foff.xhtml",
            "rebate": "",
            "price": "",
            "egiftok": false,
            "autoship": false,
            "isMAStore": false,
            "customProd": "NOT_CUSTOM",
            "btntype": "GOTO",
            "minPrice": 49.99,
            "caption": "Tommy Bahama® Backpack Cooler Chair",
            "catalogLocaleID": 1,
            "freeShipping": false 
         },
          "productDetail": 
         {
            "rel": "Tommy Bahama® Backpack Cooler Chair",
            "href": "/stores/v1/products/1502136921?siteId=260",
            "type": "application/json; charset=UTF-8" 
         },
          "hasOptions": false,
          "upc": "00080958300391",
          "manufacturerPartNumber": "",
          "reviewData": 
         {
            "count": 0,
            "rating": 0 
         },
          "miPoints": 0.9998 
       },
        
       {
          "prodID": 0,
          "prods_CatalogSKU": "MOE1670-1",
          "merchantSKU": "",
          "priceInfo": 
         {
            "price": "$479.00 - $1,510.00",
            "minPrice": "$479.00",
            "maxPrice": "$1,510.00",
            "saleMinPrice": "",
            "saleMaxPrice": "$755.00",
            "minimumUnits": 0,
            "isOnSaleMin": false,
            "isOnSaleMax": false,
            "hasMinMaxPricing": true,
            "customProduct": false,
            "localeId": 0,
            "decimalMin": "479.00",
            "showUpto": true,
            "cashBack": "$60.40",
            "distributorCashback": "$60.40",
            "standardCashback": "$60.40",
            "increasedCashback": "$0.00",
            "campaignEndDate": "",
            "ibv": "30.20",
            "upToCashBack": true 
         },
          "localPrice": 755,
          "doNotUse": false,
          "prodContainerID": 0,
          "onSaleSpecial": true,
          "regularPrice": 622.72,
          "localeID": 1,
          "volumeID": 262642,
          "catalogID": 111475,
          "catalogName": "4 Stores",
          "the_Description": "These contemporary Kaden dining chairs from Moe's Home Collection are a modern masterpiece of forward design. These sleek,        armless chairs feature blue top-grain leather and brushed stainless steel legs.",        
          "the_FullDescription": "",
          "fileName": "1562092674.jpg",
          "eCommerceEnabled": false,
          "catalogSortName": "4 Stores",
          "prodIconID": 0,
          "isBackOrdered": false,
          "isTempOOS": false,
          "imageWidth": 175,
          "imageHeight": 175,
          "opContainerID": 1304739754,
          "caption": "Moes Home Kaden Dining Chair Blue - M2 [Set of 2]",
          "captionIntlID": 0,
          "cashBack": 60.4,
          "bvPercent": 0,
          "ibvPercent": 30.2,
          "catalogLogoName": "",
          "standardCashBack": 60.4,
          "increasedCashBack": 0,
          "ppcCashBack": 0,
          "customerIncentivePoints": 0,
          "imageURI": "https://img.shop.com/Image/260000/262600/262642/products/1562092674__175x175__.jpg",
          "thumbURI": "https://img.shop.com/Image/260000/262600/262642/products/thumb1562092674.jpg",
          "prodContainerUrl": "/Moes+Home+Kaden+Dining+Chair+-1304739754-o+.xhtml",
          "linkOff": false,
          "rating": 0,
          "ratingCount": 0,
          "freeShipping": true,
          "storeCount": 4,
          "featuredProductFlag": false,
          "brand": "Moe's Home Collection",
          "productCategoryId": 32842,
          "categoryId": 12384870,
          "modelQuickViewDetails": 
         {
            "hasATCOverlay": true,
            "opcID": 1304739754,
            "pcID": 0,
            "prodID": 0,
            "catalogID": 92626,
            "offerQty": 4,
            "rating": 0,
            "oosflag": 0,
            "linkoff": false,
            "linkUrl": "http://www.shop.com/Moes+Home+Kaden+Dining+Chair+-1304739754-o+.xhtml",
            "rebate": "",
            "price": "",
            "egiftok": true,
            "autoship": false,
            "isMAStore": false,
            "customProd": "NOT_CUSTOM",
            "btntype": "COMPARE",
            "specialOffersCID": "111475",
            "minPrice": 479,
            "caption": "Moes Home Kaden Dining Chair",
            "catalogLocaleID": 1,
            "freeShipping": true 
         },
          "containerDetail": 
         {
            "rel": "Moes Home Kaden Dining Chair",
            "href": "/stores/v1/offers/1304739754?siteId=260",
            "type": "application/json; charset=UTF-8" 
         },
          "hasOptions": false,
          "upc": "00849043039611",
          "manufacturerPartNumber": "",
          "focusedProductUrl": "https://www.shop.com/Moes+Home+Kaden+Dining+Chair+Blue+M2+Set+of+2+-1562092674-p+.xhtml",
          "focusedProductPrice": 479,
          "focusedProdContainerId": 1562092674,
          "focusedOpContainerId": 1304739754,
          "focusedProdId": 1531383930,
          "reviewData": 
         {
            "count": 0,
            "rating": 0 
         },
          "miPoints": 60.4 
       } 
     ],
      "previousLink": 
     {
        "rel": "Previous",
        "href": "/Home+Store/Furniture-chairs-3+?br=&i=0&t=0&k=5&nover=",
        "type": "text/html" 
     },
      "moreLink": 
     {
        "rel": "More",
        "href": "/Home+Store/Furniture-chairs-3+?br=&i=2&t=0&k=5&nover=",
        "type": "text/html" 
     },
      "sortByLinks": [ 
       {
          "rel": "sort_popular",
          "href": "/Home+Store/Furniture-chairs-3+?br=&sort_popular=&t=0&k=5",
          "type": "text/html" 
       },
        
       {
          "rel": "sort_price_high",
          "href": "/Home+Store/Furniture-chairs-3+?br=&sort_price_high=&t=0&k=5",
          "type": "text/html" 
       },
        
       {
          "rel": "sort_price_low",
          "href": "/Home+Store/Furniture-chairs-3+?br=&sort_price_low=&t=0&k=5",
          "type": "text/html" 
       },
        
       {
          "rel": "sort_cb",
          "href": "/Home+Store/Furniture-chairs-3+?br=&sort_cb=&t=0&k=5",
          "type": "text/html" 
       },
        
       {
          "rel": "sort_points",
          "href": "/Home+Store/Furniture-chairs-3+?br=&sort_points=&t=0&k=5",
          "type": "text/html" 
       } 
     ],
      "sponsoredLinks": 
     {
        "rel": "sponsoredLinks",
        "href": "/Site/SponsoredLink/Search/Action/~chairs,     br,     t0,     i1,     k5,     oHome+Store_Furniture/Sessionid/?siteId=260",
        "type": "application/json; charset=UTF-8" 
     },
      "searchRequestData": 
     {
        "ticks": 0,
        "timed_out": false 
     },
      "trackingCategory": 
     {
        "productCategoryId": 32842,
        "categoryId": 12384870,
        "department": "Home Store",
        "category": "Furniture",
        "productType": "Kitchen & Dining Room Furniture",
        "brand": "" 
     },
      "vgn": false,
      "cgn": false,
      "shipFreeToggleLink": 
     {
        "rel": "shipFreeOneCartToggleLink",
        "href": "/Home+Store/Furniture-chairs-3+?br=&sf=1&t=0&k=5",
        "type": "text/html" 
     },
      "shipFreeMode": 0,
      "exclusiveBrandsToggleLink": 
     {
        "rel": "exclusiveBrandsToggleLink",
        "href": "/Home+Store/Furniture-chairs-3+?br=&eb=1&t=0&k=5",
        "type": "text/html" 
     },
      "exclusiveBrandsMode": 0,
      "searchSpellChecked": false 
    }
  }
}

export class ProductInfoProviderMock {

    productData: any;
  
    loadData(testParam: string) {
  
      this.productData = {
        "doNotUse": true,
        "flags": 
       {
          "autoShipEnabled": false,
          "egiftEnabled": false,
          "eligibleForFreeShipping": false,
          "giftRegistryEnabled": false,
          "listEnabled": true,
          "priceAlertEnabled": true,
          "trendEnabled": true,
          "saveForLaterEnabled": false 
       },
        "priceInfo": 
       {
          "price": "$159.00",
          "wasPrice": "$399.95",
          "salePrice": "$159.00",
          "savingsPrice": "$240.95",
          "savingsPercentage": "60.2%",
          "minimumUnits": 0,
          "isOnSaleMin": false,
          "isOnSaleMax": false,
          "hasMinMaxPricing": false,
          "customProduct": false,
          "localeId": 0,
          "showUpto": false,
          "cashBack": "$6.36",
          "distributorCashback": "$6.36",
          "ibv": "9.54",
          "upToCashBack": false 
       },
        "currency": "$",
        "price": 159,
        "originalPrice": 399.95,
        "cashBack": 
       {
          "prodId": 874694776,
          "price": null,
          "cashBack": 6.36,
          "distributorCashBack": 6.36,
          "ciPoints": 0,
          "miPoints": 0,
          "cashBackString": "$6.36",
          "distributorCashBackString": "$6.36",
          "ibvstring": "9.54",
          "standardCashback": 6.36,
          "standardCashbackString": "$6.36",
          "increasedCashback": 0,
          "increasedCashbackString": "$0.00",
          "campaignEndDate": "",
          "ibv": 9.54,
          "bv": 0 
       },
        "latency": 0,
        "otherProdContainerProducts": [
       ],
        "browseData": [
       ],
        "extendedDescriptions": [
       ],
        "aspectivaReviewData": 
       {
          "count": 0,
          "rating": 0 
       },
        "similarItems": 
       {
          "rel": "Similar Items",
          "href": "/stores/v1/products/SimilarItems/869423531?siteId=0",
          "type": "application/json; charset=UTF-8" 
       },
        "storeSiteLink": 
       {
          "rel": "Outlet Stores",
          "href": "/Outlet+Stores-v250025-c+.xhtml",
          "type": "text/html" 
       },
        "productLink": 
       {
          "rel": "Product page",
          "href": "/869423531-p.xhtml",
          "type": "text/html" 
       },
        "storePromoLinkText": "Free Standard Shipping on orders from Outlet Stores.",
        "storePromoText": "Now thru May 19,        2019,        Outlet Stores is offering FREE SHIPPING on all orders to the Continental US (unless additional per product charge by vendor has been add for large/bulky/heavy items. Any adjustment will show in cart and checkout)     Free Shipping",
        "storePromoExpireDate": "05/20/2019",
        "storeMaVendorId": "1509",
        "largeAltImage": 
       {
          "largeURL": "https://img.shop.com/Image/250000/250000/250025/products/lg_869423531__800x800__.jpg",
          "largeWidth": 800,
          "largeHeight": 800,
          "isLargeView": true,
          "alternateImageID": 188430602,
          "sortOrder": 0,
          "url": "https://img.shop.com/Image/250000/250000/250025/products/lg_869423531__400x400__.jpg",
          "fileName": "lg_869423531.jpg",
          "width": 400,
          "height": 400,
          "displayText": "View Larger Image" 
       },
        "maxOrderQuantity": 500,
        "storeMessages": [ 
         {
            "catalogInfoScreenTypeID": 6,
            "description": "Free Shipping",
            "displayText": "Now thru May 19,            2019,            Outlet Stores is offering FREE SHIPPING on all orders to the Continental US (unless additional per product charge by vendor has been add for large/bulky/heavy items. Any adjustment will show in cart and checkout)          Free Shipping",
            "linkText": "Free Standard Shipping on orders from Outlet Stores.",
            "reqMinPurchase": 0,
            "endDate": "2019-05-20T07:00:00.000+0000" 
         } 
       ],
        "mipRedeem": 0,
        "shipWarningMessages": [
       ],
        "description": "Your Bike - Your Style! This Vilano Fixed Gear / Single Speed comes in unique colors to fit your style. The frame and fork is tig-welded hi-ten steel with alloy seat post and stem. It comes equipped with rear caliper brake and a flip-flop rear hub for easy conversion from single speed to fixed gear (just flip the rear wheel)           Fork: 700c 1 1/8\" Threadless           Wheels: 700c 30mm Double walled w/ CNC machined sides           Rear Hub: Flip-Flop Freewheel / Fixed            Crankset: 46T Chainring           Brakes: Rear caliper           Headset: Alloy Threadless           Stem: Alloy            Handlebar: Alloy Riser           Saddle: Urban     Seatost: Alloy with clamp     ",        "shortDescription": "Your Bike - Your Style! This Vilano Fixed Gear / Single Speed comes in unique colors to fit your style. The frame and fork is tig-welded hi-ten steel with alloy seat post and stem. It comes equipped with rear caliper brake and a flip-flop rear hub...",
        "availability": "Sold Out",
        "weight": 35,
        "storeName": "Outlet Stores",
        "prodID": 874694776,
        "prodContainerID": 869423531,
        "opcontainerID": 703139399,
        "caption": "Vilano Fixed Gear Bike Urban Single Speed Deep-V Wheels",
        "sku": "700-FIXIE",
        "imageWidth": 300,
        "imageHeight": 185,
        "productReviews": 
       {
          "rel": "Product Reviews",
          "href": "/Store/Offer/Reviews/703139399/Sort/NEWEST?siteId=0",
          "type": "application/json; charset=UTF-8" 
       },
        "onSale": true,
        "imageURL": "https://img.shop.com/Image/250000/250000/250025/products/869423531.jpg",
        "linkOff": false,
        "macatalog": false,
        "merchantDescription": "Vilano Fixed Gear Bike Urban Single Speed Deep-V Wheels",
        "storeDescription": "Outlet Stores",
        "storeLogoImageFileName": "https://img.shop.com/Image/topbrands/nmlogos_102571.gif",
        "storeWWWLink": "",
        "storeLocaleID": 1,
        "departmentName": "Fixed Gear",
        "oneCart": false,
        "sponsoredLinkTerm": "Vilano Fixed Gear Bike Urban Single Speed Deep-V Wheels",
        "alternateImages": [ 
         {
            "largeURL": "https://img.shop.com/Image/250000/250000/250025/products/alt_311453667__800x800__.jpg",
            "largeWidth": 800,
            "largeHeight": 800,
            "isLargeView": false,
            "alternateImageID": 311453667,
            "sortOrder": 2,
            "url": "https://img.shop.com/Image/250000/250000/250025/products/alt_311453667__400x400__.jpg",
            "fileName": "alt_311453667.jpg",
            "width": 400,
            "height": 400,
            "displayText": "Vilano Fixed Gear Bike Urban Single Speed Deep-V Wheels" 
         },
          
         {
            "largeURL": "https://img.shop.com/Image/250000/250000/250025/products/alt_311453668__800x800__.jpg",
            "largeWidth": 800,
            "largeHeight": 800,
            "isLargeView": false,
            "alternateImageID": 311453668,
            "sortOrder": 3,
            "url": "https://img.shop.com/Image/250000/250000/250025/products/alt_311453668__400x400__.jpg",
            "fileName": "alt_311453668.jpg",
            "width": 400,
            "height": 400,
            "displayText": "Vilano Fixed Gear Bike Urban Single Speed Deep-V Wheels" 
         },
          
         {
            "largeURL": "https://img.shop.com/Image/250000/250000/250025/products/lg_869423531__800x800__.jpg",
            "largeWidth": 800,
            "largeHeight": 800,
            "isLargeView": true,
            "alternateImageID": 188430602,
            "sortOrder": 0,
            "url": "https://img.shop.com/Image/250000/250000/250025/products/lg_869423531__400x400__.jpg",
            "fileName": "lg_869423531.jpg",
            "width": 400,
            "height": 400,
            "displayText": "View Larger Image" 
         },
          
         {
            "largeURL": "https://img.shop.com/Image/250000/250000/250025/products/alt_311453666__800x800__.jpg",
            "largeWidth": 800,
            "largeHeight": 800,
            "isLargeView": false,
            "alternateImageID": 311453666,
            "sortOrder": 1,
            "url": "https://img.shop.com/Image/250000/250000/250025/products/alt_311453666__400x400__.jpg",
            "fileName": "alt_311453666.jpg",
            "width": 400,
            "height": 400,
            "displayText": "Vilano Fixed Gear Bike Urban Single Speed Deep-V Wheels" 
         } 
       ],
        "statusID": 3 
     }

    }
  }

