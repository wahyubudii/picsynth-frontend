import { HeadLineProps, MetaProps, RenderCardProps } from "@/types";
import { logo } from "../public/assets";
import Layout from "@/components/Global/BaseLayout";
import Card from "@/components/Global/Card";
import Loader from "@/components/Global/Loader";
import FormField from "@/components/Global/FormField";
import { useState } from "react";
import HeadLine from "@/components/Section/HeadLine";

const headLine: HeadLineProps = {
  title: "The Community Showcase",
  subTitle:
    "Browse through a collection of imaginative and visually stunning images generated by DALL-E AI",
};

const meta: MetaProps = {
  title: "PicSynth | Homepage",
  description: "Project portofolio integrate with DALL-E.",
  favicon: logo.src,
  type: "website",
};

const RenderCards = ({ data, title }: RenderCardProps) => {
  if (data?.length > 0) {
    return data.map((post: any) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  );
};

export default function index() {
  const [loading, setLoading] = useState(false);
  const [allPost, setAllPost] = useState(null);

  const [searchText, setSearchText] = useState("");

  return (
    <Layout customMeta={meta}>
      <HeadLine title={headLine.title} subTitle={headLine.subTitle} />

      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing result for{" "}
                <span className="text-[#222328]">{searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards data={[]} title="No search results found" />
              ) : (
                <RenderCards data={[]} title="No posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
