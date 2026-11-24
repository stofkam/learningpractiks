import { Request, Response, NextFunction } from 'express';
import { db } from '../prisma/db'
import  jwt ,{ JwtPayload } from 'jsonwebtoken'

// Глобально добавляем поле user в стандартный Express.Request
declare global {
  namespace Express {
    interface Request {
      user?: any; // при желании замените any на тип вашей модели User
    }
  }
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
 
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    token = req.headers.authorization.split(" ")[1]
  } else if(req.cookies?.jwt){
    token = req.cookies.jwt
  }

  if(!token){
    return res.status(401).json({ error: 'Not authorized, no token provided' })
  }

  try {
    // Verify token and get user from payload

       const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET is not defined');
    }
    const decoded = jwt.verify(token, secret) as JwtPayload & { id: string  };

    const user = await db.orm.public.User.where({id: decoded.id}).first()
    
    if(!user){
      return res.status(401).json({ error: 'User no longer exists, please login again' })
    }
    req.user = user
    next()
  } catch (error) {
    return res.status(401).json({ error: 'Not authorized, invalid or expired token' });
  }
  
}