import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Image
          priority={true}
          width={512}
          height={512}
          src="/logo.png"
          alt="Platforms on Vercel"
          className="w-48 h-48"
        />
        <div className="text-center max-w-screen-sm mb-10">
          <h1 className="text-stone-200 font-bold text-2xl">
            College DAO job board
          </h1>
          <p className="text-stone-400 mt-5">
            Community-exclusive opportunities
          </p>
        </div>
        <div className="flex space-x-3">
          <Link
            href="/board"
            prefetch={false} // workaround until https://github.com/vercel/vercel/pull/8978 is deployed
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Log in
          </Link>

        </div>
      </div>
    </div>
  );
}
