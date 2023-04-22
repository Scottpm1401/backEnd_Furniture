import { Schema, model, Document, ValidatorMessageFn } from 'mongoose';

export const langCodeReg = /^([a-z]{2})$/;

/*********************TYPE & INTERFACE*****************************/

export type TemplateType = {
  _id: string;
  banners: BannerType[];
  about: BannerType;
  home_footer: ContentType[];
  contact: ContentType[];
  terms_and_conditions: ContentType[];
  privacy_policy: ContentType[];
  active: boolean;
  title: string;
};

export type BannerType = {
  _id: string;
  image: string;
  title: ContentType[];
  description: ContentType[];
};

export type ContentType = {
  _id: string;
  lang: Language;
  content: string;
};

export enum Language {
  vietnam = 'vi',
  english = 'en',
}

export type TemplateModel = {} & TemplateType & Document;

/*******************************SCHEMA*****************************/

export const Content = {
  lang: {
    type: String,
    enum: ['en', 'vi'],
    default: 'en',
    validate: {
      validator: function (v: string) {
        return langCodeReg.test(v);
      },
      message: ((props) =>
        `${props.value} is not a valid language code!`) as ValidatorMessageFn,
    },
  },
  content: { type: String, required: true },
};

export const Banner = {
  image: { type: String, required: true },
  title: { type: [Content], required: true },
  description: { type: [Content], required: true },
};

const templateSchema = new Schema(
  {
    banners: { type: [Banner], default: [] },
    about: { type: Banner, required: true },
    home_footer: { type: [Content], default: [] },
    contact: { type: [Content], default: [] },
    terms_and_conditions: { type: [Content], default: [] },
    privacy_policy: { type: [Content], default: [] },
    active: { type: Boolean, default: false },
    title: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<TemplateModel>('Template', templateSchema);
