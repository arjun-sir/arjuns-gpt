"use client";
import React from "react";
// import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function LoginForm() {
  const supabase = createClientComponentClient();

  //   console.log(`${window.location.origin}/auth/callback`);

  const handleLoginWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className=" flex h-screen w-full items-center justify-center">
      <div className="w-96 space-y-3 rounded-sm border p-5 shadow-sm">
        <h1 className=" text-lg font-bold">{"Welcome to Daily's AI"}</h1>
        <p className="text-sm">
          {
            " It is platform that build using Supabase and Chatgpt's API to create a ChatGPT like that can answer with our own knowledeg base."
          }
        </p>
        <button
          className="w-full bg-indigo-500"
          onClick={handleLoginWithGoogle}
        >
          Login With Github
        </button>
      </div>
    </div>
  );
}
