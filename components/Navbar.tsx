import React from "react";

import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className=" w-full flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-row gap-8 cursor-pointer text-xl font-bold p-4">
        <Link href="/dashboard">
          <div>Dashboard</div>
        </Link>
        <Link href="/premium">
          <div>Premium</div>
        </Link>
        {/* <Link href="/profile">
          <div>Profile</div>
        </Link> */}
        <Link href="/">
          <div>Home</div>
        </Link>

        {/* <Link href="/auth/login">
          <div>Login</div>
        </Link>
        <Link href="/auth/signup">
          <div>Signup</div>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
