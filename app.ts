import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { InvestmentAccount } from './class/InvestmentAccont'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(300)
console.log(peopleAccount.balance)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(300)
companyAccount.deposit(20)
companyAccount.getLoan(200)
console.log(companyAccount.balance)

const investimentAccount: InvestmentAccount = new InvestmentAccount('DIO', 20)
investimentAccount.invest(300)
console.log(investimentAccount.balance)