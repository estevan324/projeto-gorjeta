export class TipCalculator {
    private _orderValue: number
    private _tipPercent: number
    private _peopleAmount: number

    constructor(){
        this._orderValue = 0
        this._tipPercent = 0
        this._peopleAmount = 0
    }

    // Get methods
    public get orderValue(): number{
        return this._orderValue
    }

    public get tipPercent(): number{
        return this._tipPercent
    }

    public get peopleAmount(): number{
        return this._peopleAmount
    }

    // Set methods
    public set orderValue(orderValue: number){
        this._orderValue = orderValue
    }

    public set tipPercent(tipPercent: number){
        this._tipPercent = tipPercent
    }

    public set peopleAmount(peopleAmount: number){
        this._peopleAmount = peopleAmount
    }

    // methods
    public calculateTip(): number{
        return this._orderValue * this._tipPercent / 100
    }

    public tipSplit(): number{
        return this.calculateTip() / this._peopleAmount
    }
}