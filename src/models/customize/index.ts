import { Schema, model, Document } from 'mongoose';

/*********************TYPE & INTERFACE*****************************/

export type Customize = {
  _id: string;
  banners: BannerType[];
  about: BannerType;
  home_footer: ContentType[];
  contact: ContentType[];
  terms_and_condition: ContentType[];
  privacy_policy: ContentType[];
};

export type BannerType = {
  _id: string;
  image: string;
  title: ContentType[];
  description: ContentType[];
};

export type ContentType = {
  _id: string;
  lang: string;
  content: string;
};

export type CustomizeModel = {} & Customize & Document;

/*******************************SCHEMA*****************************/

export const Content = {
  lang: { type: String, required: true },
  content: { type: String, required: true },
};

export const Banner = {
  image: { type: String, required: true },
  title: { type: Content, required: true },
  description: { type: Content, required: true },
};

const customizeSchema = new Schema(
  {
    banners: { type: [Banner], default: [] },
    about: { type: Banner, required: true },
    home_footer: { type: [Content], default: [] },
    contact: { type: [Content], default: [] },
    terms_and_conditions: { type: [Content], default: [] },
    privacy_policy: { type: [Content], default: [] },
  },
  { timestamps: true }
);

export default model<CustomizeModel>('Customize', customizeSchema);
