import { validationResult } from 'express-validator';
import { errorResponse } from '../helpers';

const validate = (validations) => {
  return async (req, res, next) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const validation of validations) {
      // eslint-disable-next-line no-await-in-loop
      const result = await validation.run(req);
      if (result.errors.length) break;
    }

    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return next();
    }

    return errorResponse(res, ...errors.errors.map(({ msg }) => msg), 400);
  };
};

export default validate;
