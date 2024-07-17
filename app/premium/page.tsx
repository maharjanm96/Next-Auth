"use client";

import { useSession } from "next-auth/react";
import React from "react";

const PremiumPage = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <>
          <h1 className="text-center text-2xl font-semibold">Premium Page</h1>
        </>
      ) : (
        <>
          <h1 className="text-center text-2xl font-semibold">Not logged in</h1>
        </>
      )}
    </>
  );
};

export default PremiumPage;
