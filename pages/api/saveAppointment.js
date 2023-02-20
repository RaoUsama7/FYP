import * as React from 'react';
import prisma from "../../lib/prismadb"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)
  console.log({ session, req: req.body });
  if (session) {
    if (req.method === 'POST') {
      const appointment = await prisma.appointment.create({
        data: {
          userId: session.user.Id,
          name: req.body.name,
          time: req.body.time,
          phone: req.body.number,
          address: req.body.address,
          gender: req.body.gender,
          date:   new Date(req.body.date),
          TestType: req.body.TestType,
        }
      })

      res.status(200).json(["appointment Created"])
    } else {
      // Handle any other HTTP method
      res.status(200).json(["Network Error"])
    }
  }
  else {
    res.send({
      error: "You must be signed in to view the protected content on this page.",
    })
  }
}
