const { errorResponse } = require('../helpers');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  errorResponse(res, err.message, err.statusCode);
};

export default errorHandler;
