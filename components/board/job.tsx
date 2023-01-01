import Image from 'next/image';

export default function Job({ job, onSelectionChange, isExpanded }: { job: any, onSelectionChange: any, isExpanded: boolean }) {

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

  var jobDivClass = "flex flex-row px-4 space-x-3 py-1 border ";
  if (isExpanded) {
    jobDivClass += "border-slate-500 bg-slate-700";
  }
  else {
    jobDivClass += "border-slate-700 bg-slate-900";
  }

  return (
    <div className={jobDivClass}>
      <div className="flex flex-col justify-center">
        <Image
          src="/logo.png"
          alt="Company logo"
          width={100}
          height={100}
        />
      </div>

      <div className="flex flex-col">
        <p className="text-stone-200 font-bold text-lg"> {job.title}</p>
        <p className="text-stone-400 text-sm"> {job.company}</p>
        <p className="text-stone-400 text-sm"> {job.city}</p>
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
