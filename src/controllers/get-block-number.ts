import { Request, Response } from 'express';
import config from '../config';

const getBlockNumber = async (req: Request, res: Response) => {
	try {
		const currentBlockNumber = await config.web3.eth.getBlockNumber();
        
        return res.status(200).json({
            success:true,
            currentBlockNumber:Number(currentBlockNumber)
        })

	} catch (error) {
        return res.status(500).json({
            success:false,

        })
    }
};

export default getBlockNumber