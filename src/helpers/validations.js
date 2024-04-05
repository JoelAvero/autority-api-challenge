const { body, param, oneOf } = require('express-validator');

export const createTask = [
  body('name')
    .notEmpty()
    .withMessage('name is required')
    .isLength({ max: 30 })
    .withMessage('Name must be less than 30 characters'),
  body('description').notEmpty().withMessage('Description is required'),
  body('author')
    .notEmpty()
    .withMessage('Author is required')
    .isLength({ max: 30 })
    .withMessage('Author name must be less than 30 characters'),
];

export const validateId = [param('id').isInt().withMessage('ID must be a valid integer')];

export const updateTask = [
  oneOf(
    [
      body('name').exists().notEmpty(),
      body('description').exists().notEmpty(),
      body('author').exists().notEmpty(),
      body('isComplete').exists().notEmpty(),
    ],
    { msg: 'At least one of the following fields is required: name, description, author, isComplete' },
  ),
  body('name')
    .notEmpty()
    .withMessage('name is required')
    .isLength({ max: 30 })
    .withMessage('Name must be less than 30 characters')
    .optional(),
  body('description').notEmpty().withMessage('Description is required').optional(),
  body('author')
    .notEmpty()
    .withMessage('Author is required')
    .isLength({ max: 30 })
    .withMessage('Author name must be less than 30 characters')
    .optional(),
  body('isComplete')
    .notEmpty()
    .withMessage('isComplete is required')
    .isBoolean()
    .withMessage('isComplete must be a boolean')
    .optional(),
];
