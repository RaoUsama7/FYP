import * as React from 'react';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function validateUserCredentials(email, password) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  if (user.password === password) {
    return user
  }

  else {
        return null  
  }
}