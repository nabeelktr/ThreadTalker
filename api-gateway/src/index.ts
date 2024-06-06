import App from "./app";
import 'dotenv/config';

const port = Number(3000)
new App().startServer(port);

