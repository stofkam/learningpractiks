import {z} from "zod";
import {Request,Response,NextFunction} from "express";



export const validateRequest = (schema:z.ZodObject<any,any>) => {
    return (req:Request, res:Response, next:NextFunction) => {
       const result = schema.safeParse(req.body)
       if(!result.success){
     const flatErrors = result.error.flatten().formErrors; 
    
    // Если вам также нужны ошибки конкретных полей:
    const fieldErrors = Object.values(result.error.flatten().fieldErrors).flat();
    const allErrors = [...flatErrors, ...fieldErrors];

    console.log(allErrors);
    return res.status(400).json({ message: allErrors.join(", ") });
       }
       next()
    }
}
