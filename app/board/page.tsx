'use client';

import { useState } from "react";
import Categories from "@/components/board/categories";
import DetailView from "../../components/board/detail-view";
import Job from "../../components/board/job";

export default function Home() {

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-black">
      <JobBoard jobs={MOCK_JOBS} />
    </div>
  );
}

function JobBoard({ jobs, }: { jobs: any[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const defaultJob: Job = { id: -1 };
  const [expandedJob, setExpandedJob] = useState(defaultJob);

  const filteredJobs = jobs.filter((job: any) => {
    return selectedCategory === 'all' || job.category === selectedCategory;
  });

  const [selectedJobs, setSelectedJobs] = useState([]);

  const handleJobExpand = (event: any) => {
    const nextJob = jobs.find(job => job.id == event.currentTarget.value);
    (nextJob != expandedJob) ? setExpandedJob(nextJob) : setExpandedJob(defaultJob);
  }

  const handleSubmit = () => {
    console.log(selectedJobs);
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
      <button className="bg-white text-black font-bold py-2 px-4 rounded" onClick={handleSubmit}> Submit </button>
    </div >
  )
}



interface Job {
  id: number;
  title?: string,
  description?: string,
  company?: string,
  logo?: string,
  createdAt?: string,
  category?: string,
  location?: string,
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
  {
    id: 4,
    title: "Marketing Manager",
    description: "We are the leading systems integrator for all the major cloud providers including Amazon Web Services, Microsoft Azure, and Google Cloud Platform and we work with over 90% of Fortune 100 companies. Our contributions don’t end with just our clients – as a member of the Linux Foundation, Cloud Native Computing Foundation and Hyperledger Foundation, Accenture is on the forefront of defining the future of cloud and Web3 technologies by contribution and collaboration to the Open-Source community. Accenture is also committed to developing your skills and providing support to shape and grow your future. Our employees agree, as we have been consistently recognized on Fortune's 100 Best Companies To Work For list for 10 consecutive years. We’re looking for a strong and passionate Full Stack Web3 engineer to join our Cloud Native Engineering team. Here at Accenture, we work with the world’s largest companies and government agencies to enable innovation at scale with advanced cloud-native solutions and Web3 / Metaverse initiatives. If you are excited about solving unique and interesting problems and shaping the future of technology, we would love to talk with you. For now, all Accenture business travel, international and domestic, is currently restricted to client-essential sales/delivery activity only. For now, all Accenture business travel, international and domestic, is currently restricted to client-essential sales/delivery activity only. For now, all Accenture business travel, international and domestic, is currently restricted to client-essential sales/delivery activity only. For now, all Accenture business travel, international and domestic, is currently restricted to client-essential sales/delivery activity only.",
    company: "Company 1",
    logo: "/logo.png",
    createdAt: "2 days ago",
    category: "marketing",
    location: "New York, NY (remote)",
  },
  {
    id: 5,
    title: "Software Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Company 2",
    logo: "/logo.png",
    createdAt: "3 days ago",
    category: "technical",
    location: "Chicago, IL (remote)",
  },
  {
    id: 6,
    title: "Marketing Manager",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Company 3",
    logo: "/logo.png",
    createdAt: "4 days ago",
    category: "marketing",
    location: "Detroit, MI",
  },
];