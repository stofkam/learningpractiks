import { Request, Response } from 'express';
import { db } from '../prisma/db'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils/generateToken'

const register = async (req: Request, res: Response) => {
  const { name, password, email } = req.body;
  // Check if user already exists
  const userExist = await db.orm.public.User.where({ email }).first()
  if(userExist){
    return res.status(400).json({ error: "User already exists with this email" })
  }
  // hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // create user

  const user = await db.orm.public.User.create({
    name,
    email,
    password: hashedPassword,
  })
    // Generate JWT Token
const token = generateToken(user.id,res)
  res.status(201).json({ 
    success:"success",
    data:{
      user:{
        id:user.id,
        email:user.email,
        name:user.name,
      },
      token
    }
   })
} 

const login = async (req: Request, res: Response)=>{
  const { name, password, email } = req.body;
  // check if user exists with email
  const userExist = await db.orm.public.User.where({ email }).first()
  if(!userExist){
    return res.status(401).json({ error: "Invalid email or password" })
  }
  // verify password matches
  
  const isPasswordValid = await bcrypt.compare(password, userExist.password)
  if(!isPasswordValid){
    return res.status(401).json({ error: "Invalid email or password" })
  }

  // Generate JWT Token
const token = generateToken(userExist.id,res)

  res.status(201).json({ 
    success:"success",
    data:{
      user:{
        id:userExist.id,
        email:userExist.email,
        
      },
      token,
    }
   })
}

const logout = async (req: Request, res: Response)=>{
  // Clear JWT cookie
  res.cookie('jwt',"",{
    httpOnly: true,
    expires: new Date(0),
  })
  res.status(200).json({ success: "success", message: 'Logout successful' })
}

export { register,login,logout }


