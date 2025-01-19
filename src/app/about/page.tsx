import React from "react";

export const metadata = {
  title: "About Me",
  description: "Here are some details about Aroundtoure.",
};

export default function About() {
  return (
    <div className="my-10 bg-black mx-0 flex flex-col items-center text-light">
      <h1 className="my-6 text-center text-4xl text-white">About</h1>
      <p>A World Tour</p>
    </div>
  );
}
