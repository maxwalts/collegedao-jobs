import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { company, logo, title, city, category, description } = req.body;
    const job = await prisma.job.create({
      data: {
        company,
        logo,
        title,
        city,
        category,
        description,
      },
    });
    res.status(200).json(job);
  } else if (req.method == "GET") {
    const jobs = await prisma.job.findMany();
    res.status(200).json(jobs);
  }

}