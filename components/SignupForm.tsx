// "use client";

// import React, { useState } from "react";
// import Button from "./Button"; // Adjust the path if needed
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// const SignupForm = () => {
//   const [fullname, setFullname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!fullname || !email || !password) {
//       setError("All fields are required.");
//       return;
//     }

//     try {
//       const res = await fetch("/api/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           fullname,
//           email,
//           password,
//         }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         // Reset the form
//         setFullname("");
//         setEmail("");
//         setPassword("");
//         setError("");
//         router.push("/login");
//       } else {
//         setError(data.message || "User already exists.");
//         console.log("User registration failed.");
//       }
//     } catch (error) {
//       setError("An error occurred. Please try again.");
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-md">
//         <h2 className="mb-6 text-2xl font-semibold text-center">Sign Up</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <input
//               type="text"
//               placeholder="Fullname"
//               value={fullname}
//               onChange={(e) => setFullname(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:border-black"
//             />
//           </div>
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:border-black"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:border-black"
//             />
//           </div>
//           <Button name="Sign Up" />
//           {error && (
//             <div className="w-auto rounded-md text-white bg-red-600 text-sm p-1 flex justify-start">
//               {error}
//             </div>
//           )}
//           <div className="flex gap-1 justify-center">
//             <p>Already have an account ?</p>
//             <Link href="/login">
//               <span className="underline">Login</span>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;
