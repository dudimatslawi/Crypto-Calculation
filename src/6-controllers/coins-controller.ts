import express, { NextFunction, Request, Response } from "express";
import { coinsService } from "../5-services/coins-service";
import { InvestmentModel } from "../3-models/amount-model";

class CoinsController {
    // create a router object for listening to http request:
    public readonly router = express.Router();

    // register routs once:
    public constructor() {
        this.registerRoute();
    }

    private registerRoute(): void {
        this.router.get("/coins", this.getAllCoins);
        this.router.get("/coins/:id", this.getCoinById);
        this.router.get("/amount", this.getValue);
    }

    private async getAllCoins(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const coins = await coinsService.getAllCoins()
            response.json(coins)
        }
        catch (err: any) {
            next(err);
        }
    }

    private async getCoinById(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const id = request.params.id
            const coin = await coinsService.getCoinsById(id)
            response.json(coin)
        }
        catch (err: any) {
            next(err);
        }
    }

    private async getValue(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const id = new InvestmentModel(request.body)
            const coin = await coinsService.getValue(id)
            response.json(coin)
        }
        catch (err: any) {
            next(err);
        }
    }

}
const coinsController = new CoinsController();
export const coinsRouter = coinsController.router