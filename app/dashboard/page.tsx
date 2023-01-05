'use client'

import { ApplicationType } from "interfaces/main";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-black">
      <h1 className="text-stone-200">Admin dashboard</h1>
      <ApplicationList />
    </div>
  );
}

function ApplicationList() {
  const [applications, setApplications] = useState<ApplicationType[]>([]);

  useEffect(() => {
    fetch("/api/application/all")
      .then((res) => res.json())
      .then((res) => setApplications(res));
  }, []);

  return (
    <div className="flex flex-col w-screen justify-center items-center bg-black">
      <h1 className="text-stone-200">Manage applications</h1>
      {applications.map((application) => (
        <Application key={application.id} application={application} />))}
    </div>
  );
}

function Application({ application }: { application: ApplicationType }) {

  return (
    <div className="border-2 border-stone-200 text-stone-200 rounded-md p-2">
      <p>User: {application.userId}</p>
      <p>Job: {application.jobId}</p>
      <p>Status: {application.status}</p>
      <p>Created at: {application.createdAt}</p>
    </div>
  )
}