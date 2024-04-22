export class InvestmentModel {
    public id: string;
    public currency: string;
    public amount: number;

    public constructor(investment: InvestmentModel) {
        this.id = investment.id;
        this.currency = investment.currency;
        this.amount = investment.amount
    }
}