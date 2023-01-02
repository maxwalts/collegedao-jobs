'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { JobType } from "../../interfaces/main";
import { ApplicationType } from "../../interfaces/main";

export default function AccountHome() {
  // const defaultApplication = { id: -1 };
  const [applications, setApplications] = useState<ApplicationType[]>([]);

  useEffect(() => {
    fetch("/api/application").then((res) => res.json()).then((res) => setApplications(res));
  }, []);
  console.log("applications", applications);

  return (
    <div className="bg-black">
      <div className="flex flex-col space-y-5 h-screen w-screen items-center justify-center">

        <h1 className="text-stone-200 ">5 jobs I have applied to:</h1>
        <div className="flex flex-col space-y-1 text-stone-200">
          {applications.map((application) => <p className="text-stone-200" key={application.id}>Job with id {application.jobId}</p>)}
        </div>
        <Link href="/board" className="text-stone-200 bottom-auto"> 👈 Go back to job board </Link>
      </div>

    </div>
  )
}