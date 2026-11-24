import  jwt ,{SignOptions} from 'jsonwebtoken'
import {  Response } from 'express';

export const generateToken = (userId:string,res:Response) => {
 const payload = {id: userId}
 const options:SignOptions = {
    expiresIn: (process.env.JWT_EXPIRES_IN as SignOptions['expiresIn']) || '7d',
 }
 const token = jwt.sign(payload, process.env.JWT_SECRET!, options) 
 res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
 })
 return token
}
