import React from "react";
import { favicon } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="border-b border-gray-200 dark:border-gray-500">
      <div className="container mx-auto ">
        <div className="mx-10 sm:mx-20 lg:mx-24 xl:mx-40 flex items-center justify-between h-16">
          <Link href={"/"}>
            <Image alt="logo" height={100} width={100} src={favicon} />
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
