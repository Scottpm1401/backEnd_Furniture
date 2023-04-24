import { TemplateModel, TemplateResponse } from '../../models/template';

const templateSerializer = (template: TemplateModel) => {
  const formattedTemplate: TemplateResponse = {
    _id: template._id,
    banners: template.banners,
    about: template.about,
    home_footer: template.home_footer,
    contact: template.contact,
    terms_and_conditions: template.terms_and_conditions,
    privacy_policy: template.privacy_policy,
    active: template.active,
    title: template.title,
  };

  return formattedTemplate;
};

export default templateSerializer;
