import React from "react";
import Head from "next/head";
import { LayoutProps } from "@/types";
import Header from "@/components/Section/Header";
import Footer from "@/components/Section/Footer";

export default function Layout({
  children,
  customMeta,
}: LayoutProps): JSX.Element {
  return (
    <div>
      <Head>
        <title>{customMeta?.title}</title>
        <meta name="description" content={customMeta?.description} />
        <link rel="shortcut icon" href={customMeta?.favicon} />
      </Head>
      {/* paste this ig want scrollhide but have problem with rough notation `h-screen overflow-y-scroll scrollbar-hide` */}
      <div className="transition duration-500 ease-in-out bg-gray-50 z-10">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow flex justify-center">
            <div className="container mx-auto">
              <div className="mx-10 sm:mx-20 lg:mx-24 xl:mx-40">{children}</div>
            </div>
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}
