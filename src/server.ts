import app from "./app";
import { Config } from "./config";

const startServer = () => {
    try {
        app.listen(Config.PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`Server running on port ${Config.PORT}`);
        });
    } catch (e) {
        let error_message = "";

        if (e instanceof Error) error_message = e.message;

        // eslint-disable-next-line no-console
        console.error(error_message);
        process.exit(1);
    }
};

startServer();
