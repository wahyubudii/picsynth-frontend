import React, { useState } from "react";
import { shuffle } from "lodash";
import { download } from "@/public/assets";
import { downloadImage } from "@/utils/downloadImage";
import { PostProps } from "@/types";
import Image from "next/image";

const colors = [
  "bg-indigo-700",
  "bg-blue-700",
  "bg-green-700",
  "bg-red-700",
  "bg-amber-700",
  "bg-pink-700",
  "bg-purple-700",
  "bg-gray-700",
  "bg-slate-700",
  "bg-orange-700",
  "bg-lime-700",
  "bg-emerald-700",
  "bg-cyan-700",
  "bg-sky-700",
  "bg-indigo-700",
];

export default function Card({ _id, name, prompt, photo }: PostProps) {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f]/75 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full object-cover ${shuffle(
                colors
              ).pop()} flex justify-center items-center text-white text-xs font-bold`}
            >
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => downloadImage({ _id: _id, photo: photo })}
            className="outline-none bg-transparent border-none"
          >
            <Image
              alt="download"
              src={download}
              height={1280}
              width={680}
              className="h-6 w-6 object-contain invert"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
