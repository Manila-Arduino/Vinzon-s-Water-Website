"use client";

import { outfitFont } from "@/styles/fonts";
import "react-toastify/dist/ReactToastify.css";
import { twMerge } from "tailwind-merge";
import Tailwind_Wrapper from "./templates/Tailwind_Wrapper";

export default function Home() {
  return (
    <div className={twMerge("w-full min-h-full bg-bg text-text", outfitFont)}>
      <Tailwind_Wrapper />
    </div>
  );
}
