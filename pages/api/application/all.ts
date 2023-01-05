import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

// POST /api/apply
// creates an entry in Applications table for a user and job
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const { userId } = req.body;
    // get the first 5 applications with this user id
    const userApplications = await prisma.application.findMany({
      where: {
        userId: userId,
      }
    });
    res.status(200).json(userApplications);
  }
  // delete all applications
  if (req.method == "DELETE") {
    const deletedApplications = await prisma.application.deleteMany({
    });
    console.log(deletedApplications);
    res.status(200).json(deletedApplications);
  }
}