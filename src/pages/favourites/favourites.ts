import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';
import { ModalController } from 'ionic-angular';
import {SettingsService} from "../../services/settings";

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  quotes : Quote[];

  constructor (private quotesService : QuotesService,
               private modalCtrl : ModalController,
               private settingsService : SettingsService){}

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavouriteQuotes();
  }

  onViewQuote(quote : Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove : boolean) => {
      if (remove){
        this.removeQuote(quote);
      }
    })
  }

  onRemoveFromFavourites(quote : Quote){
    this.removeQuote(quote);
  }

  removeQuote(quote : Quote){
    this.quotesService.removeQuoteFromFavourites(quote);
    this.quotes = this.quotesService.getFavouriteQuotes();
  }

  getBackground(){
    return this.settingsService.isAlternativeBackground() ? "altBackground" : "quoteBackground";
  }

  isAltBackground(){
    return this.settingsService.isAlternativeBackground();
  }
}
