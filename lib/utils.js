import * as React from 'react';
import prisma from "./prismadb";

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