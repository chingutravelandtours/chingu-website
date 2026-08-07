"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      email === "admin@chingu.com" &&
      password === "123456"
    ) {
      router.push("/dashboard");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10">

        <h1 className="text-3xl font-bold text-center text-red-700">
          CHINGU Travel and Tours
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          B2B Travel Agent Portal
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
          >
            LOGIN
          </button>

        </form>

        <p className="text-center mt-6 text-sm text-gray-500">
          Forgot your password?
        </p>

      </div>
    </main>
  );
}