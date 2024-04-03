const { body, param } = require('express-validator');

export const validateTask = [
  body('name').notEmpty().withMessage('name is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('author').notEmpty().withMessage('Author is required'),
];

export const validateId = [param('id').isInt().withMessage('ID must be a valid integer')];
