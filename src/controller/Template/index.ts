import { NextFunction, Request, Response } from 'express';
import {
  CreateTemplateRequest,
  UpdateTemplateRequest,
} from '../../models/api/cms';
import Template from '../../models/template';

const getAllTemplates = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const templates = await Template.find();
    res.status(200).json(templates);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getTemplate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const template = await Template.findById(id);
    res.status(200).json(template);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const createTemplate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const templateData: CreateTemplateRequest = req.body;
    const newTemplate = new Template(templateData);
    await newTemplate.save();
    res.status(201).json(newTemplate);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const updateTemplate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const updateData: UpdateTemplateRequest = req.body;

    const updatedTemplate = await Template.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res.status(200).json(updatedTemplate);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const deleteTemplate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    // check if there is at least one other template
    const templateCount = await Template.countDocuments();
    if (templateCount <= 1) {
      return res
        .status(400)
        .json({ message: 'Cannot delete the only template' });
    }

    await Template.findByIdAndDelete(id);

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const activeTemplate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    // deactivate all other templates
    await Template.updateMany({}, { active: false });

    // activate the specified template
    const updatedTemplate = await Template.findByIdAndUpdate(
      id,
      { active: true },
      { new: true }
    );

    res.status(200).json(updatedTemplate);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const currentTemplate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const template = await Template.findOne({ active: true });

    res.status(200).json(template);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export default {
  getAllTemplates,
  getTemplate,
  createTemplate,
  updateTemplate,
  deleteTemplate,
  activeTemplate,
  currentTemplate,
};
