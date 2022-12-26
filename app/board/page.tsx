'use client';

import SignOut from "@/components/sign-out";
import Image from "next/image";
import { useState } from "react";

export default function Home() {


  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <JobBoard jobs={MOCK_JOBS} />
        <SignOut />
      </div>
    </div>
  );
}

function JobBoard({ jobs }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredJobs = jobs.filter((job) => {
    return selectedCategory === 'all' || job.category === selectedCategory;
  });

  return (
    <>
      <h1 className="text-stone-200 font-bold text-2xl"> Job Board </h1>
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="flex flex-col space-y-5 w-1/2">
        {filteredJobs.map(job =>
          <Job key={job.id}
            title={job.title}
            description={job.description}
            logo={job.logo}
            createdAt={job.createdAt}
            category={job.category}
          />
        )
        }
      </div>
    </>
  )
}

// button needs value prop can pass information to state
// TODO: continue to be white after click
const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const handleCategoryChange = (event) => {
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

function Job(props) {
  return (
    <div className="flex flex-row px-4 space-x-4 py-1 rounded border border-slate-700 bg-slate-900">
      <Image
        src={props.logo}
        alt="Company logo"
        width={75}
        height={75}
      />

      <div className="flex flex-col">
        <p className="text-stone-200 font-bold text-lg"> {props.title}</p>
        <p className="text-stone-400 text-sm"> {props.description}</p>
      </div>

      <div className="align-bottom">
        <p className="text-stone-200 text-sm"> {props.createdAt} </p>
      </div>

    </div>
  );
}

// model Jobs {
//   id          Int @id @default (autoincrement())
//   company     String
//   logo        String
//   title       String
//   category    String
//   description String
//   createdAt   DateTime @default (now())
//   updatedAt   DateTime @updatedAt
// }


const MOCK_JOBS = [
  {
    id: 1,
    title: "Marketing Manager",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Company 1",
    logo: "/logo.png",
    createdAt: "2 days ago",
    category: "marketing",
  },
  {
    id: 2,
    title: "Software Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Company 2",
    logo: "/logo.png",
    createdAt: "3 days ago",
    category: "technical",
  },
  {
    id: 3,
    title: "Marketing Manager",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Company 3",
    logo: "/logo.png",
    createdAt: "4 days ago",
    category: "marketing",
  },
];