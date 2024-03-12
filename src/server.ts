import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";

const startServer = () => {
    try {
        app.listen(Config.PORT, () => {
            logger.info(`Server running on port ${Config.PORT}`);
        });
    } catch (e: unknown) {
        let error_message = "";

        if (e instanceof Error) error_message = e.message;

        logger.error(error_message);

        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }
};

startServer();
