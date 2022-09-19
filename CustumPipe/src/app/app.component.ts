import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustumPipe';

  /** types pipes :
   * TitleCasePipe
    LowerCasePipe
    UpperCasePipe
    DatePipe
    CurrencyPipe
    DecimalPipe
    AsyncPipe
    PercentPipe
    SlicePipe
   */
    myDate = new Date();
    decimalNumber: number = 455.6656538467846;
    percentNumber: number = 2.5;
    moneyValue = 2580;
    myObj = ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5"];
}
