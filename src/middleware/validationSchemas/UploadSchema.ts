import Joi from 'joi';
import { GetSignatureType } from 'src/models/upload';

const UploadSchema = {
  signature: Joi.object<GetSignatureType>({
    public_id: Joi.string(),
    folder: Joi.string()
  })
};

export default UploadSchema;
