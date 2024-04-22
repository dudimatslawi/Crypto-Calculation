import express from "express";
import { appConfig } from "./2-utils/app.config";
import { loggerMiddleware } from "./4-middleware/logger-middleware";
import { errorMiddleware } from "./4-middleware/error-middleware";
import expressFileUpload from "express-fileupload";
import { fileSaver } from "uploaded-file-saver";
import path from "path";
import { coinsRouter } from "./6-controllers/coins-controller";


// main application
class App {
    //express server
    private server = express();
    // start app:
    public start(): void {

        //create a request.body containing the given json from the front:
        this.server.use(express.json());

        // register middleware:
        this.server.use(loggerMiddleware.logToConsole);

        // register controllers:
        this.server.use("/api", coinsRouter);

        // route not found middleware:
        this.server.use(errorMiddleware.routeNotFound);


        // catch all middleware:
        this.server.use(errorMiddleware.cathAll);

        // run server
        this.server.listen(appConfig.port, () => console.log("listening on http://localhost:" + appConfig.port)
        )
    }
}

const app = new App();
app.start();