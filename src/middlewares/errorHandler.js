// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode).json({ error: true, message: err.message });
};

export default errorHandler;
