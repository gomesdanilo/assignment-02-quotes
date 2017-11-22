import { Component } from '@angular/core';
import { FavouritesPage } from '../favourites/favourites';
import { LibraryPage } from '../library/library';

//
@Component({
  //templateUrl: 'tabs.html'
  selector : 'tabs-page',
  template : `
  <ion-tabs>
    <ion-tab [root]="tab1Root" tabTitle="Favourites" tabIcon="star"></ion-tab>
    <ion-tab [root]="tab2Root" tabTitle="Library" tabIcon="book"></ion-tab>
    </ion-tabs>
`
})
export class TabsPage {

  tab1Root = FavouritesPage;
  tab2Root = LibraryPage;

  constructor() {

  }
}
