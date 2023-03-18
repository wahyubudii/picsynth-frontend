import React from "react";
import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed z-10 top-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-500">
      <div className="container mx-auto ">
        <div className="mx-10 sm:mx-20 lg:mx-24 xl:mx-40 flex items-center justify-between h-16">
          <Link href={"/"} className="flex items-center space-x-4">
            <Image alt="logo" height={30} width={30} src={logo} />
            <p className="dark:text-white text-black text-xl font-bold">
              Picsynth
            </p>
          </Link>
          <Link
            href={"/create-post"}
            className="font-medium bg-[#6469ff] px-4 py-2 rounded-md text-white"
          >
            Create
          </Link>
        </div>
      </div>
    </div>
  );
}
