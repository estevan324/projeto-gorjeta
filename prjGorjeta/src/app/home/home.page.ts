import { Component } from '@angular/core';
import { TipCalculator } from '../models/TipCalculator';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  calculator: TipCalculator

  orderValue: number

  tipPercent: number
  customTip: number

  peopleAmount: number
  totalTip: number
  splitTip: number

  constructor() {
    this.calculator = new TipCalculator()
  }

  private calculate(){
    this.calculator.orderValue = this.orderValue
    
    if(this.customTip) {
      this.calculator.tipPercent = this.customTip
    } else {
      this.calculator.tipPercent = this.tipPercent
    }
    
    this.calculator.peopleAmount = this.peopleAmount

    this.totalTip = this.calculator.calculateTip()
    this.splitTip = this.calculator.tipSplit()
  }

}
