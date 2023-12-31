import express from 'express';

import config from './config.js';
import getBlockNumber from './controllers/get-block-number.js';
import getCurrentValue from './controllers/get-current-value.js';
import getDoubleValue from './controllers/get-doubled-value.js';

const app = express();


app.get("/",getBlockNumber)
app.get("/value",getCurrentValue)
app.get("/double-value",getDoubleValue)

app.listen(config.PORT,()=>{
    console.log(`Listening at http://localhost${config.PORT}`)
})
