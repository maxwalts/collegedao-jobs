import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

// POST /api/apply
// creates an entry in Applications table for a user and job
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    console.log(req.body);
    const { jobIds, userId } = req.body;

    jobIds.forEach(async (jobId: number) => {
      const application = await prisma.application.create({
        data: {
          jobId: jobId,
          userId: userId,
        }
      });
      res.status(200).json(application);
    });
  }
  if (req.method == "GET") {
    const { userId } = req.body;
    // get the first 5 applications with this user id
    const userApplications = await prisma.application.findMany({
      where: {
        userId: userId,
      },
      take: 5,
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
