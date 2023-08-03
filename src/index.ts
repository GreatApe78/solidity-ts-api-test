import express from 'express';

import config from './config.js';
import getBlockNumber from './controllers/get-block-number.js';

const app = express();


app.get("/",getBlockNumber)


app.listen(config.PORT,()=>{
    console.log(`Listening at http://localhost${config.PORT}`)
   
    
})
