import express from 'express';
import config from 'config';
import issuesRouter from './routes/issuesRouter.js';
import errorsDispatcher from "./utils/errorsDispatcher.js";
import { constants } from "./utils/constants.js";
const app = express();
const port = config.get('PORT');

const {ISSUES} = constants.SPECIFIC_URIS;

app.use(ISSUES, issuesRouter());


app.use((req, res) => {
  errorsDispatcher(res, 'BAD_REQUEST');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});