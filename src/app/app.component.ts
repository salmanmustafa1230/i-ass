import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private result: any = "Hello World";
  constructor() {
    this.callAllPossibilites(this.result);
  }
  // call function on change of input field
  onChange(value) {
    this.callAllPossibilites(value);
  }

  callAllPossibilites(value) {
    const upperCase = this.upperCaseFunc(value);
    const altUperAndLower = this.alternativeUperAndLower(value);
    const csvFormat = this.csvFormatFunc(value);
    this.result = `${upperCase}<br>${altUperAndLower}</br>${csvFormat}`;
  }

  // convert it to uppercase
  upperCaseFunc(str) {
    return str.toUpperCase();
  }

  // alternative uper and lowercase
  alternativeUperAndLower(str) {
    const arrayVal = [];
    for (let i = 0; i < str.length; i++) {
      // for alternative approach
      if (i % 2) {
        arrayVal[i] = str[i].toLowerCase();
      } else {
        arrayVal[i] = str[i].toUpperCase();
      }
    }
    return arrayVal.join("");
  }

  // show CSV formate value for string
  csvFormatFunc(str) {
    return str.toLowerCase().split("").join(",");
  }
}
