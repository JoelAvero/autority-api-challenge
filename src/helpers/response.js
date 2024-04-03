const response = (res, data, statusCode = 200) => {
  res.status(statusCode).json({ error: false, data });
};

export default response;
