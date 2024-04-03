const errorResponse = (res, message, statusCode) => {
  res.status(statusCode).json({ error: true, message });
};

export default errorResponse;
