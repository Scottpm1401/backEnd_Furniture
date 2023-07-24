import { Request, Response } from 'express';
import { CreateTemplateRequest, UpdateTemplateRequest } from 'src/models/api/cms';
import Template from 'src/models/template';
import { templateSerializer } from 'src/serializers';

const getAllTemplates = async (req: Request, res: Response) => {
  try {
    const templates = await Template.find();
    const formattedTemplates = templates.map((template) => templateSerializer(template));
    return res.status(200).json(formattedTemplates);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getTemplate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const template = await Template.findById(id);

    if (!template) return res.status(404).json({ message: 'error.template.not_found' });
    return res.status(200).json(templateSerializer(template));
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const createTemplate = async (req: Request, res: Response) => {
  try {
    const templateData: CreateTemplateRequest = req.body;
    const newTemplate = new Template(templateData);
    await newTemplate.save();
    return res.status(201).json(templateSerializer(newTemplate));
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const updateTemplate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData: UpdateTemplateRequest = req.body;

    const updatedTemplate = await Template.findByIdAndUpdate(id, updateData, {
      new: true
    });

    if (!updatedTemplate) return res.status(404).json({ message: 'error.template.not_found' });

    return res.status(200).json(templateSerializer(updatedTemplate));
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const deleteTemplate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // check if there is at least one other template
    const templateCount = await Template.countDocuments();
    if (templateCount <= 1) {
      return res.status(400).json({ message: 'error.template.cannot_delete_only_template' });
    }

    const template = await Template.findById(id);

    if (!template) return res.status(404).json({ message: 'error.template.not_found' });

    // check if current template is active?
    if (template.active)
      return res.status(500).json({ message: 'error.template.cannot_delete_active_template' });

    await template.delete();

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const activeTemplate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // deactivate all other templates
    await Template.updateMany({}, { active: false });

    // activate the specified template
    const updatedTemplate = await Template.findByIdAndUpdate(id, { active: true }, { new: true });

    if (!updatedTemplate) return res.status(404).json({ message: 'error.template.not_found' });

    return res.status(200).json(templateSerializer(updatedTemplate));
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const currentTemplate = async (req: Request, res: Response) => {
  try {
    const template = await Template.findOne({ active: true });
    if (!template) return res.status(404).json({ message: 'error.template.not_found' });
    return res.status(200).json(templateSerializer(template));
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export default {
  getAllTemplates,
  getTemplate,
  createTemplate,
  updateTemplate,
  deleteTemplate,
  activeTemplate,
  currentTemplate
};
