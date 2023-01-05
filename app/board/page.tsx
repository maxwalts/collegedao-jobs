'use client';

import { useState, useEffect } from "react";
import Categories from "@/components/board/categories";
import DetailView from "../../components/board/detail-view";
import Job from "../../components/board/job";
import { JobType } from "../../interfaces/main";

export default function Home() {
  function handleDeleteJobs() {
    fetch("/api/job/edit",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(res => res.json())
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-black">
      <JobBoard />
      {/* <button onClick={handleDeleteJobs}>Delete all jobs</button> */}
    </div>
  );
}

async function getJobs() {
  console.log("getting jobs")
  const res = await fetch("/api/job/edit",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then(res => res.json())
    .catch((error) => {
      console.error('Error:', error);
    });
  return res;
}

function JobBoard({ }) {
  const defaultJob: JobType = { id: -1 };

  const [jobs, setJobs] = useState(MOCK_JOBS);
  const [expandedJob, setExpandedJob] = useState(defaultJob);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    getJobs().then((res) => {
      console.log(res);
      setJobs(res);
    });
  }, [])

  const filteredJobs = jobs.filter((job: any) => {
    return selectedCategory === 'all' || job.category === selectedCategory;
  });

  const handleJobExpand = (event: any) => {
    const nextJob = jobs.find(job => job.id == event.currentTarget.value);
    if (nextJob) {
      (nextJob != expandedJob) ? setExpandedJob(nextJob) : setExpandedJob(defaultJob);
    } else {
      setExpandedJob(defaultJob);
    }
  }

  const handleCreateApplication = () => {

    const res = fetch("/api/application/user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jobIds: selectedJobs, userId: 1 }),
      }
    )
      .catch((error) => {
        console.error('Error:', error);
      });
    console.log(res);
  }


  return (
    // taking out flex fixed a lot of the issues
    <div className="w-3/4 flex-col m-5 space-y-5">
      <h1 className="text-stone-200 font-bold text-2xl"> Job Board </h1>
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="flex flex-row space-x-5">
        {/* list of jobs */}
        <div className="flex flex-col max-h-96 w-96 overflow-scroll">
          {filteredJobs.map(job =>
            <button key={job.id} value={job.id} onClick={handleJobExpand}>
              <Job
                job={job}
                onSelectionChange={setSelectedJobs}
                isExpanded={expandedJob.id == job.id}
              />
            </button>
          )}
        </div>
        <DetailView expandedJob={expandedJob} />
      </div>
      <div className="w-full flex flex-row-reverse">
        <button className="bg-white text-black font-bold py-2 px-4 rounded" onClick={handleCreateApplication}> Create Application </button>
      </div>
    </div >
  )
}

const MOCK_JOBS: JobType[] = [
  {
    id: 1,
    title: "Marketing Manager",
    description: "We are the leading systems integrator for all the major cloud providers including Amazon Web Services, Microsoft Azure, and Google Cloud Platform and we work with over 90% of Fortune 100 companies. Our contributions don’t end with just our clients – as a member of the Linux Foundation, Cloud Native Computing Foundation and Hyperledger Foundation, Accenture is on the forefront of defining the future of cloud and Web3 technologies by contribution and collaboration to the Open-Source community. Accenture is also committed to developing your skills and providing support to shape and grow your future. Our employees agree, as we have been consistently recognized on Fortune's 100 Best Companies To Work For list for 10 consecutive years. We’re looking for a strong and passionate Full Stack Web3 engineer to join our Cloud Native Engineering team. Here at Accenture, we work with the world’s largest companies and government agencies to enable innovation at scale with advanced cloud-native solutions and Web3 / Metaverse initiatives.",
    company: "Company 1",
    logo: "/logo.png",
    createdAt: "date",
    category: "marketing",
    city: "New York, NY (remote)",
  },
];