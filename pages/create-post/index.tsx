import React, { FormEvent, useState } from "react";
import { logo } from "@/public/assets";
import { FormState, HeadLineProps, MetaProps } from "@/types";
import Layout from "@/components/Global/BaseLayout";

import { preview } from "@/public/assets";
import { getRandomPrompt } from "@/utils/getRandomPrompt";
import FormField from "@/components/Global/FormField";
import Loader from "@/components/Global/Loader";
import Image from "next/image";
import HeadLine from "@/components/Section/HeadLine";

const headLine: HeadLineProps = {
  title: "Create",
  subTitle:
    "Create imaginative and visually stunning images through DALL-E AI and share them with the Community",
};

const meta: MetaProps = {
  title: "PicSynth | Create Post",
  description: "Project portofolio integrate with DALL-E.",
  favicon: logo.src,
  type: "website",
};

export default function CreatePost() {
  const [form, setForm] = useState<FormState>({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);

  const generateImage = () => {};

  const formHandler = () => {};

  const fieldHandler = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSurpiseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <Layout customMeta={meta}>
      <HeadLine title={headLine.title} subTitle={headLine.subTitle} />
      <form onSubmit={formHandler} className="my-14 max-w-3xl">
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={fieldHandler}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="Panda mad scientist mixing sparkling chemicals, digital art"
            value={form.prompt}
            handleChange={fieldHandler}
            isSurpriseMe
            handleSurpriseMe={handleSurpiseMe}
          />
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <Image
                alt={form.name}
                height={300}
                width={300}
                src={preview}
                className="w-full h-full object-contain"
              />
            ) : (
              <Image
                alt="preview"
                height={300}
                width={300}
                src={preview}
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white"
          >
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">
            Once you have created the image you want, you can share it with
            others in the community
          </p>
          <button
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            type="submit"
          >
            {loading ? "Loading..." : "Share with the community"}
          </button>
        </div>
      </form>
    </Layout>
  );
}
