import axios from "axios";
import { promises } from "dns";
import { appConfig } from "../2-utils/app.config";
import { InvestmentModel } from "../3-models/amount-model";

class CoinsService {

    public async getAllCoins(): Promise<string[]> {
        const response = await axios.get<string[]>(appConfig.apiUrl + "list")
        const coins = response.data
        console.log(coins);
        return coins
    }
    public async getCoinsById(id: string): Promise<string> {
        const response = await axios.get<string>(appConfig.apiUrl + id)
        const coin = response.data
        console.log(coin);
        return coin
    }
    public async getValue(amount: InvestmentModel): Promise<string> {
        console.log(appConfig.apiUrl + amount.id);
    
        const response = await axios.get<any>(appConfig.apiUrl + amount.id);
        const cryptoCoin = response.data;
        const priceOfSingularCrypto =
          cryptoCoin.market_data.current_price[amount.currency];
    
        const result = `You can buy ${amount.amount / priceOfSingularCrypto} ${
          amount.id
        } with ${amount.amount} ${amount.currency}`;
        return result;
      }}
export const coinsService = new CoinsService();