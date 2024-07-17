"use client";

import { useSession } from "next-auth/react";

const UserDashboard = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className="grid place-items-center h-screen">
          <div className="flex flex-col gap-2 items-center shaodw-lg bg-slate-100 rounded-lg p-4 my-6 ">
            <div>
              Name: <span className="font-bold">Manish Maharjan</span>
            </div>
            <div>
              Email: <span className="font-bold">maharjanm96@gmail.com</span>
            </div>
            <div className="flex justify-center"></div>
          </div>
        </div>
      ) : (
        <>
          <center>You are not logged in.</center>
        </>
      )}
    </>
  );
};

export default UserDashboard;
