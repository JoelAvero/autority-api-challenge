const asyncHandler = (fn) => (req, res, next) => {
  fn(req, res).catch((err) => {
    next(err);
  });
};

export default asyncHandler;
