import { OK } from './constants';

const response = (res, data, statusCode = OK) => {
  res.status(statusCode).json({ error: false, data });
};

export default response;
