import { Request, Response } from 'express';
import sendGenericErrorMessage from '../errors/standard-error-response';
import config from '../config';

const getDoubleValue = async (req: Request, res: Response) => {
	try {
        const doubleValue = await config.myContractClientInstance.methods.getDoubleValue().call()

        return res.status(200).json({
            success:true,
            doubleValue:Number(doubleValue)
        })

    } catch (error) {
		sendGenericErrorMessage(500, res);
	}
};


export default getDoubleValue