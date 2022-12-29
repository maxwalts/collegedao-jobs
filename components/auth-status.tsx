import { unstable_getServerSession } from "next-auth/next";
import SignOut from "./sign-out";

export default async function AuthStatus() {
  const session = await unstable_getServerSession();
  return (
    // div for navbar
    // align items center
    // justify content space between
    <div className="flex flex-row space-x-5 bg-black justify-center align-middle">
      {session && (
        <>
          <p className="text-stone-200 text-md">
            {session.user?.email}
          </p>
          <SignOut />
        </>
      )}
    </div>
  );
}