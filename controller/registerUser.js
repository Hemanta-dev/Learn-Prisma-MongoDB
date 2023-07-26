
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Register=async(req,res,next)=> {
    const {name,email,password}= req.body;
  try {
    // Create users
    const userRegister =  await  prisma.user.create({
        data: {
            name,
            email,
            password
        },
      });
    res.status(201).json(userRegister);  
  } catch (error) {
    console.error("Error seeding user data:", error);
    next(error);
  } 
}

module.exports =Register;
