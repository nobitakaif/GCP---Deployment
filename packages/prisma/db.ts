
import { PrismaClient } from "@prisma/client"

export const client = new PrismaClient()

// prismaClient.user.create({
//     data:{
//         username:"nobita",
//         password:"nobitakaif"
//     }
// })