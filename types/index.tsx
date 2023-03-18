import { FormEvent } from "react";

export type HeadLineProps = {
  title: string;
  subTitle: string;
};

export type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export type MetaProps = {
  title: string;
  description: string;
  favicon?: string | any;
  type: string;
};

export type FormState = {
  name: string;
  prompt: string;
  photo: string;
};

export type FormFieldProps = {
  labelName?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  handleChange?: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: () => void;
};

export type RenderCardProps = {
  data: string | any;
  title: string;
};

export type PostProps = {
  _id: string;
  name: string;
  prompt: string;
  photo: string;
};

export type DownloadImage = {
  _id: string;
  photo: string;
};
