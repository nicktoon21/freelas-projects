import express, { json } from 'express';
import cors from 'cors';

import router from './routes';

const app = express();

app.use(cors());
app.use(json());
app.use(router);

app.listen(3333,() => {
    console.log("Listening in port 3333")
});

