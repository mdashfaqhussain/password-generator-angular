import { Target } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  length:number = 0;
  useLetter:Boolean =  false;
  useNumber:Boolean = false;
  useSymbol:Boolean = false;
  password: String= ''

  onChangeLength(event:Event) {
   const parsedValue= parseInt((event.target as HTMLInputElement).value);
   if( !isNaN(parsedValue)){
    this.length = parsedValue;
   }

  }
  onChangeUseLetter() {
    this.useLetter = !this.useLetter;
    //console.log(this.useLetter);
  }

  onChangeUsenumber() {
    this.useNumber = !this.useNumber;
   // console.log(this.useNumber);
  }

  onChangeUseSymbols() {
    this.useSymbol = !this.useSymbol;
    //console.log(this.useSymbol);

  }
  onButtonClick() {

    const numbers = '1234567890';
    const letters= 'abcdefghijklmnopqrstuvwxyz';
    const symbols = `!@#$%^&*()`
    let validChars = '';
    if(this.useLetter) {
      validChars+=letters;
    }
    if(this.useNumber) {
      validChars+=numbers;
    }
    if(this.useSymbol) {
      validChars+=symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      //console.log(validChars[index]);

      generatedPassword+=validChars[index];
    }
    this.password = generatedPassword;
  }

  getPassword() {
    return this.password;
  }
}
