'use client';

import { useState } from "react";
import { JobType } from "../../interfaces/main";

export default function CreateJobForm() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [logo, setLogo] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const job: JobType = {
      title,
      company,
      city,
      description,
      category,
      logo,
    };
    const res = await fetch("/api/job/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    })
      .catch((error) => {
        console.error('Error:', error);
      });

    if (res) {
      const data = await res.json();
      console.log(data);
    }
  };

  return (
    <div className="flex flex-col space-y-5 h-screen w-screen bg-black items-center justify-center">
      <h1 className="text-stone-200 ">Create a Job Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="file"
          accept="image/png, image/jpeg"
          placeholder="Company Logo"
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="technical">Technical</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
          <option value="other">Other</option>
        </select>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-white" type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}