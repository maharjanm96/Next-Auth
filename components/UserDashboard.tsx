"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Button from "./Button";
import Link from "next/link";

const UserDashboard = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className="grid place-items-center h-screen">
          <div className="flex flex-col gap-2 items-center shaodw-lg bg-slate-100 rounded-lg p-4 my-6 ">
            <img
              src={session.user?.image as string}
              className="rounded-full h-20 w-20"
            ></img>
            <div className="text-lg font-semibold">
              Welcome Back, {session.user?.name}
            </div>
            <div>
              <span className="font-semibold">
                Email: {session.user?.email}
              </span>
            </div>
            <div className="flex justify-center">
              <button
                className="border-2 p-2 w-full rounded-lg bg-black text-white"
                onClick={() => {
                  signOut({ callbackUrl: `/` });
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-full flex justify-center">
          <div className="flex flex-col w-64 items-center gap-5 justify-center">
            <div className="text-2xl font-semibold">You are not logged in.</div>
            <div className="w-full">
              <button
                onClick={() => {
                  signIn("google");
                }}
                className="border-2 p-2 w-full rounded-lg bg-black text-white mb-4"
              >
                Sign in with Google
              </button>
              <button
                onClick={() => {
                  signIn("github");
                }}
                className="border-2 p-2 w-full rounded-lg bg-black text-white"
              >
                Sing in with Github
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDashboard;
