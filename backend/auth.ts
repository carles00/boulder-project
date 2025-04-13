import dotenv from 'dotenv'
import prisma from './src/utils/prismaClient';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from "better-auth/adapters/prisma";

dotenv.config();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql'
  }),
  emailAndPassword: {
    enabled: true
  }
})
