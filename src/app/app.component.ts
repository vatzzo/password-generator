import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  password = '';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  includeLowercase = false;
  includeUppercase = false;

  onButtonClick() {
    const numbers = '0123456789';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWYZ';
    const symbols = "!@#$%^&*()";

    let validChars = '';
    
    if(this.includeLetters) {
      validChars += lowercaseLetters;
    }

    if(this.includeNumbers) {
      validChars += numbers;
    }

    if(this.includeSymbols) {
      validChars += symbols;
    }

    if(this.includeUppercase) {
      validChars += uppercaseLetters;
    }

    if(this.includeLowercase && !this.includeLetters) {
      validChars += lowercaseLetters;
    }

    let generatedPassword = '';

    for(let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  onUserInput(length: string) {
    if(/[0-9]/.test(length)) {
      this.length = parseInt(length);
    } else {
      console.log('Only positive natural numbers are allowed.');
    }
  }

  onChangeIncludeLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeIncludeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeIncludeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeIncludeLowercase() {
    this.includeLowercase = !this.includeLowercase;
  }

  onChangeIncludeUppercase() {
    this.includeUppercase = !this.includeUppercase;
  }

  onClickCopy() {
    var dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = this.password;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
  }
}
