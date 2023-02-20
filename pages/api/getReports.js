import * as React from 'react';
import prisma from "../../lib/prismadb"

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      console.log(req.body)
      const user = await prisma.user.findUnique({
        where: {
          email: req.body.email,
        },
      })
      if (user.password === req.body.password)
      {
        data : {
            gender : user.gender,
            phone : user.phone,
            password: req.body.password
          }
        res.status(202).json(["Login Successful"])
      }
      } else {
      // Handle any other HTTP method
      res.status(203).json(["Anuthorize"])
    }
  }