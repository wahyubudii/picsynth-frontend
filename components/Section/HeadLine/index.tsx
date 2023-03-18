import { HeadLineProps } from "@/types";
import React from "react";

export default function HeadLine({ title, subTitle }: HeadLineProps) {
  return (
    <div className="mt-32">
      <h1 className="font-bold text-[#222328] text-[32px] dark:text-white">
        {title}
      </h1>
      <p className="mt-2 text-[#666e75] text-[14px] dark:text-gray-300">
        {subTitle}
      </p>
    </div>
  );
}
