import { Component, ElementRef, ViewChild } from '@angular/core';
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
  totalTip: any
  splitTip: number

  invalid1 = false
  invalid2 = false
  invalidColor = "1px solid #DF4A4A"

  constructor() {
    this.calculator = new TipCalculator()
  }

  private verifyCalc() {
    if (this.peopleAmount && (this.tipPercent || this.customTip) && this.orderValue) {
      this.invalid1 = false
      this.invalid2 = false
      
      this.calculate()
    } else {
      if (!this.orderValue) this.invalid1 = true
      else this.invalid1 = false

      if (!this.peopleAmount) this.invalid2 = true
      else this.invalid2 = false

      console.error("Você deve preencher todos os campos")
    }
  }

  private calculate() {

    this.calculator.orderValue = this.orderValue

    if (this.customTip) {
      this.calculator.tipPercent = this.customTip
    } else {
      this.calculator.tipPercent = this.tipPercent
    }

    this.calculator.peopleAmount = this.peopleAmount

    this.totalTip = this.calculator.calculateTip()
    this.splitTip = this.calculator.tipSplit()
  }
}

