import * as React from 'react';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      console.log(req.body)
      const user = await prisma.user.findUnique({
        where: {
          email: req.body.email,
        },
      })
      res.status(202).json(["Login Successful"])
    } else {
      // Handle any other HTTP method
      res.status(203).json(["User Created"])
    }
  }