import { Quote } from "../data/quote.interface";


export class QuotesService {
  private favouriteQuotes : Quote[] = [];

  addQuoteToFavourites ( quote : Quote) {
    this.favouriteQuotes.push(quote);
    console.log(this.favouriteQuotes);
  }

  removeQuoteFromFavourites(quote : Quote) {
    const position = this.favouriteQuotes.findIndex(value => {
      return value.id == quote.id;
    });

    this.favouriteQuotes.splice(position, 1);
  }

  getFavouriteQuotes(){
    return this.favouriteQuotes.slice();
  }
}
