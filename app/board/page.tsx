'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {

  return (
    <div className="flex h-screen bg-black">
      <JobBoard jobs={MOCK_JOBS} />
    </div>
  );
}

function DetailView({ expandedJob }: { expandedJob: any }) {
  if (expandedJob.hasOwnProperty('id')) {
    return (
      <div className="w-full h-full rounded border border-slate-700 bg-slate-900 ">
        <div className="flex flex-col text-stone-200">
          <h1 className="text-2xl font-bold">{expandedJob.title}</h1>
          <p className="text-md  text-stone-400">{`${expandedJob.company} • ${expandedJob.location}`}</p>
          <p className="text-md  text-stone-400"></p>
          <p className="text-md ">{expandedJob.description}</p>
        </div>

      </div>
    );
  }
  else
    return (
      <>
      </>
    );
}

function JobBoard({ jobs, }: { jobs: any[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedJob, setExpandedJob] = useState({});

  const filteredJobs = jobs.filter((job: any) => {
    return selectedCategory === 'all' || job.category === selectedCategory;
  });

  const [selectedJobs, setSelectedJobs] = useState([]);

  const handleJobExpand = (event: any) => {
    const nextJob = jobs.find(job => job.id == event.currentTarget.value);
    if (nextJob != expandedJob) {
      setExpandedJob(nextJob);
    }
    else {
      setExpandedJob({});
    }
  }

  const handleSubmit = () => {
    console.log(selectedJobs);
  }

  return (
    <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">

      <h1 className="text-stone-200 font-bold text-2xl"> Job Board </h1>
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="flex flex-row justify-center">
        {/* list of jobs */}
        <div className="flex flex-col space-y-5">
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
      <button className="bg-white text-black font-bold py-2 px-4 rounded" onClick={handleSubmit}> Submit </button>

    </div >
  )
}

// button needs value prop can pass information to state
// TODO: continue to be white after click
const Categories = ({ selectedCategory, setSelectedCategory }: any) => {
  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="flex flex-row space-x-5">
      <button value="all" onClick={handleCategoryChange} className="text-stone-400 hover:text-stone-200">All</button>
      <button value="marketing" onClick={handleCategoryChange} className="text-stone-400 hover:text-stone-200">Marketing</button>
      <button value="technical" onClick={handleCategoryChange} className="text-stone-400 hover:text-stone-200">Technical</button>
      <button value="design" onClick={handleCategoryChange} className="text-stone-400 hover:text-stone-200">Design</button>
    </div >
  );
};

function Job({ job, onSelectionChange, isExpanded }: { job: any, onSelectionChange: any, isExpanded: boolean }) {

  function handleChange(event: any) {
    // TODO: why doesn't this work?
    event.stopPropagation();
    if (event.target.checked) {
      onSelectionChange((selectedJobs: any) => selectedJobs.concat(job.id));
    }
    else if (!event.target.checked) {
      onSelectionChange((selectedJobs: any) => selectedJobs.filter((id: any) => id !== job.id));
    }
  }

  var jobDivClass = "flex flex-row px-4 space-x-4 py-1 rounded border ";
  if (isExpanded) {
    jobDivClass += "border-slate-500 bg-slate-700";
  }
  else {
    jobDivClass += "border-slate-700 bg-slate-900";
  }


  return (
    <div className={jobDivClass}>

      <div >
        <Image
          src={job.logo}
          alt="Company logo"
          width={75}
          height={75}
        />
      </div>


      <div className="flex flex-col">
        <p className="text-stone-200 font-bold text-lg text-left"> {job.title}</p>
        <p className="text-stone-400 text-sm"> {job.company}</p>
        <p className="text-stone-400 text-sm"> {job.location}</p>
      </div>

      <div className="flex flex-col justify-center space-y-4">
        <label className="text-stone-400 text-sm">
          <input className="m-1" type="checkbox" value={job.id} onChange={handleChange} />
          Apply
        </label>
        <p className="text-stone-200 text-sm"> {job.createdAt} </p>
      </div>

    </div>
  );
}

const MOCK_JOBS = [
  {
    id: 1,
    title: "Marketing Manager",
    description: "We are the leading systems integrator for all the major cloud providers including Amazon Web Services, Microsoft Azure, and Google Cloud Platform and we work with over 90% of Fortune 100 companies. Our contributions don’t end with just our clients – as a member of the Linux Foundation, Cloud Native Computing Foundation and Hyperledger Foundation, Accenture is on the forefront of defining the future of cloud and Web3 technologies by contribution and collaboration to the Open-Source community. Accenture is also committed to developing your skills and providing support to shape and grow your future. Our employees agree, as we have been consistently recognized on Fortune's 100 Best Companies To Work For list for 10 consecutive years. We’re looking for a strong and passionate Full Stack Web3 engineer to join our Cloud Native Engineering team. Here at Accenture, we work with the world’s largest companies and government agencies to enable innovation at scale with advanced cloud-native solutions and Web3 / Metaverse initiatives. If you are excited about solving unique and interesting problems and shaping the future of technology, we would love to talk with you. For now, all Accenture business travel, international and domestic, is currently restricted to client-essential sales/delivery activity only. For now, all Accenture business travel, international and domestic, is currently restricted to client-essential sales/delivery activity only. For now, all Accenture business travel, international and domestic, is currently restricted to client-essential sales/delivery activity only. For now, all Accenture business travel, international and domestic, is currently restricted to client-essential sales/delivery activity only.",
    company: "Company 1",
    logo: "/logo.png",
    createdAt: "2 days ago",
    category: "marketing",
    location: "New York, NY (remote)",
  },
  {
    id: 2,
    title: "Software Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Company 2",
    logo: "/logo.png",
    createdAt: "3 days ago",
    category: "technical",
    location: "Chicago, IL (remote)",
  },
  {
    id: 3,
    title: "Marketing Manager",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Company 3",
    logo: "/logo.png",
    createdAt: "4 days ago",
    category: "marketing",
    location: "Detroit, MI",
  },
];