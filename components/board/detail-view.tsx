export default function DetailView({ expandedJob }: { expandedJob: any }) {
  if (expandedJob.hasOwnProperty('createdAt')) {
    return (
      <div className="w-full h-full max-h-96 overflow-scroll rounded border border-slate-700 bg-slate-900 ">
        <div className="flex flex-col text-stone-200 p-5">
          <h1 className="text-2xl font-bold">{expandedJob.title}</h1>
          <p className="text-md  text-stone-400 pb-2">{`${expandedJob.company} • ${expandedJob.location}`}</p>
          <p className="text-md  text-stone-400"></p>
          <p className="text-md ">{expandedJob.description}</p>
        </div>
      </div>
    );
  }
  else
    return (
      <div className="w-full h-full rounded border border-slate-700 bg-slate-900 ">
        <div className="flex flex-col text-stone-200">
          <h1 className="text-2xl font-bold p-5">Please select a post</h1>
        </div>
      </div>
    );
}