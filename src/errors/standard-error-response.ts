import { Response } from "express"



const sendGenericErrorMessage = (statusCode:number, res:Response)=>{
    
    return res.status(statusCode).json({
        success:false,
        errorCode:statusCode
    })
    
}

export default sendGenericErrorMessage