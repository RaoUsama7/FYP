import * as React from 'react';
import prisma from "../../lib/prismadb"

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      console.log(req.body)
        await prisma.User.create({
          data : {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          }
        })
      
      res.status(200).json(["Yes User Created"])
    } else {
      // Handle any other HTTP method
      res.status(200).json(["User Created"])
    }
  }