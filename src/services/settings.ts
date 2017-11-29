

export class SettingsService {
  private alternativeBackground = false;

  isAlternativeBackground(){
    return this.alternativeBackground;
  }

  setAlternativeBackground(value : boolean){
    this.alternativeBackground = value;
  }
}
