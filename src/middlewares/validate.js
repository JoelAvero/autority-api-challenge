import { validationResult } from 'express-validator';
import createError from 'http-errors';
import { BAD_REQUEST } from '../helpers/constants';

const validate = (validations) => {
  return async (req, res, next) => {
    try {
      // eslint-disable-next-line no-restricted-syntax
      for (const validation of validations) {
        // eslint-disable-next-line no-await-in-loop
        const result = await validation.run(req);
        if (result.errors.length) break;
      }

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        throw createError(
          BAD_REQUEST,
          ...errors.errors.map(({ msg }) => {
            if (typeof msg === 'object' && msg.msg) {
              return msg.msg;
            }
            return msg;
          }),
        );
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validate;
