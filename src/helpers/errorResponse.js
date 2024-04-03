import { INTERNAL_SERVER_ERROR } from './constants';

const errorResponse = (res, message, statusCode = INTERNAL_SERVER_ERROR) => {
  res.status(statusCode).json({ error: true, message });
};

export default errorResponse;
