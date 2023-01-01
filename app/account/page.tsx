'use client'

import Link from "next/link";
import { useState, useEffect } from "react";

export default function AccountHome() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("/api/application").then((res) => res.json()).then((res) => setApplications(res));
  }, []);
  console.log("applications", applications);

  return (
    <div className="flex flex-col space-y-5 h-screen w-screen bg-black items-center justify-center">
      <Link href="/board" className="text-stone-200"> Go back to job board </Link>
      <h1 className="text-stone-200 ">Jobs I have applied to:</h1>
      <div className="flex flex-col space-y-1 text-stone-200">
        {/* applications.map((application) => <p>{applications.jobId}</p> */}
      </div>
    </div>
  )
}