import Joi from 'joi';
import {
  CreateTemplateRequest,
  UpdateTemplateRequest,
} from '../../models/api/cms';
import { BannerType, ContentType } from '../../models/template';

const ContentsSchema = Joi.array<ContentType[]>()
  .min(1)
  .items(
    Joi.object<ContentType>({
      lang: Joi.string().valid('en', 'vi').required(),
      content: Joi.string().required(),
      _id: Joi.string(),
    })
  );

const BannerSchema = Joi.object<BannerType>({
  _id: Joi.string(),
  image: Joi.string().required(),
  title: ContentsSchema,
  description: ContentsSchema,
});

const TemplateSchema = {
  create: Joi.object<CreateTemplateRequest>({
    banners: Joi.array<BannerType[]>().min(1).items(BannerSchema).required(),
    about: BannerSchema.required(),
    home_footer: ContentsSchema.required(),
    contact: ContentsSchema.required(),
    terms_and_conditions: ContentsSchema.required(),
    privacy_policy: ContentsSchema.required(),
    title: Joi.string().required(),
  }),
  update: Joi.object<UpdateTemplateRequest>({
    banners: Joi.array<BannerType[]>().min(1).items(BannerSchema),
    about: BannerSchema,
    home_footer: ContentsSchema,
    contact: ContentsSchema,
    terms_and_conditions: ContentsSchema,
    privacy_policy: ContentsSchema,
    title: Joi.string(),
  }),
};

export default TemplateSchema;
