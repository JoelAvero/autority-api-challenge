const { body, param, oneOf } = require('express-validator');

export const createTask = [
  body('name').notEmpty().withMessage('name is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('author').notEmpty().withMessage('Author is required'),
];

export const validateId = [param('id').isInt().withMessage('ID must be a valid integer')];

export const updateTask = [
  oneOf(
    [
      body('name').exists().isString(),
      body('description').exists().isString(),
      body('author').exists().isString(),
      body('isComplete').exists().isBoolean(),
    ],
    { msg: 'At least one of the following fields is required: name, description, author, isComplete' },
  ),
];
