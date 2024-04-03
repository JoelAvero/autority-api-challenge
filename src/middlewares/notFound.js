import createError from 'http-errors';

const notFound = (req, res, next) => {
  next(createError(404));
};

export default notFound;
