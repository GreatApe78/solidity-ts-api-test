import { Request, Response } from "express";
import sendGenericErrorMessage from "../errors/standard-error-response";
import config from "../config";


const getCurrentValue = async(req:Request,res:Response)=>{
    try {
        
        const currentValue = await config.myContractInstance.methods.value().call()
        return res.status(200).json({
            success:true,
            currentValue:Number(currentValue)
        })
    } catch (error) {
        console.error(error)
        sendGenericErrorMessage(500,res)
    }
}

export default getCurrentValue