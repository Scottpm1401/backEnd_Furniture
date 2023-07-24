import { NextFunction, Request, Response } from 'express';
import { isError, ObjectSchema } from 'joi';

import Logging from 'src/library/Logging';

export const ValidateJoi = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);

      next();
    } catch (error) {
      Logging.error(error);
      if (isError(error)) return res.status(422).json({ message: error.message });
    }
  };
};

export const ValidateJoiParam = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.params);

      next();
    } catch (error) {
      Logging.error(error);
      if (isError(error)) return res.status(422).json({ message: error.message });
    }
  };
};

export const FORM_VALIDATE = {
  password: {
    min: 6,
    max: 30
  },
  username: {
    min: 3,
    max: 30
  }
};
