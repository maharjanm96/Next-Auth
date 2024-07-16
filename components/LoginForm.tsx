"use client";

import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      // Check if res is undefined or has an error
      if (!res || res.error) {
        setError("Invalid Credentials");
        return;
      }

      // If signIn succeeds, res should contain the session object
      if (res.ok) {
        router.replace("/dashboard");
        return;
      }

      setError("Sign in failed");
    } catch (error) {
      console.error("Error Occurred", error);
      setError("Error signing in");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <Button name="Login" />
          {error && <div className="text-red-500 text-lg">{error}</div>}
          <Link href="/signup">
            Don't have an account? <span className="underline">Sign Up</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
