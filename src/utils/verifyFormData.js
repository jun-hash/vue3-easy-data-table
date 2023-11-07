// src/utils/verifyFormData.js

import Joi from 'joi';
import assembleFormData from './formDataAssembly';

const schema = Joi.object({
  individualInfo: Joi.object().required(),
  careerInfo: Joi.array().items(Joi.object()).required(),
});

function verifyFormData() {
  const formData = assembleFormData();
  const { error } = schema.validate(formData);
  if (error) {
    throw new Error(`Invalid FormData: ${error.details[0].message}`);
  }
}

export default verifyFormData;