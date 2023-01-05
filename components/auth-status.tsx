import { unstable_getServerSession } from "next-auth/next";
import Link from "next/link";
import SignOut from "./sign-out";


export default async function AuthStatus() {
  const session = await unstable_getServerSession();
  return (
    <div className="flex flex-row space-x-5 bg-black justify-center align-middle">
      {session && (
        <>
          <Link href="/account" className="text-stone-200 text-md">
            {session.user?.email}
          </Link>
          <SignOut />
        </>
      )}
    </div>
  );
}


export async function authEmail() {
  const session = await unstable_getServerSession();
  console.log(session);
  return session?.user?.email;
}