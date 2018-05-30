import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchResultsPage } from '../pages/search-results/search-results';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { SearchDataProvider } from '../providers/search-data/search-data';
import { ProductInfoProvider } from '../providers/product-info/product-info';

import { InAppBrowser } from '@ionic-native/in-app-browser';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchResultsPage,
    ProductDetailsPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchResultsPage,
    ProductDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
   {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    SearchDataProvider,
    ProductInfoProvider,
    InAppBrowser

  ]
})
export class AppModule {}
