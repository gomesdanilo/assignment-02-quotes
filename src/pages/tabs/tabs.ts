import { Component } from '@angular/core';
import { FavouritesPage } from '../favourites/favourites';
import { LibraryPage } from '../library/library';

//
@Component({
  selector : 'tabs-page',
  templateUrl : 'tabs.html'
})
export class TabsPage {

  tab1Root = FavouritesPage;
  tab2Root = LibraryPage;

  constructor() {

  }
}
