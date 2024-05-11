"use client";

import { useUser } from "@clerk/nextjs";


export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl text-white font-bold">
        Welcome Back {isLoaded ? ", " : " "} <span className="text-orange-400">{user?.firstName}</span>
      </h2>
      <p className="text-md lg:text-lg text-white/70 font-semibold">
        This is your Financial Overview Report
      </p>
    </div>
  )
};