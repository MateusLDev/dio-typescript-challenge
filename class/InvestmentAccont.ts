import { DioAccount } from "./DioAccount"

export class InvestmentAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    invest = (value: number) => {
        this.balance += (value + 10)
    }
}