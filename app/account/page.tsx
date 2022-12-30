import Link from "next/link";

export default function AccountHome() {
  // const userApplications = fetch("/api/applications").then((res) => res.json());


  return (
    <div className="flex flex-col space-y-5 h-screen w-screen bg-black items-center justify-center">
      <Link href="/board" className="text-stone-200"> Go back to job board </Link>
      <h1 className="text-stone-200 ">Jobs I have applied to:</h1>
      <div className="flex flex-col space-y-1 text-stone-200">
        {/* TODO: job links to detail view */}
        <p>Job 1</p>
        <p>Job 2</p>
        <p>Job 3</p>
      </div>
    </div>
  )
}