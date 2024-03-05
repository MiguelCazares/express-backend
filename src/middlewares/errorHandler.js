function errorHandler(err, req, res, next) {
  console.error('errorHandler', err);
  res.status(500).json({ error: err.message, stack: err.stack });
}

function logErrors(err, req, res, next) {
  console.error('logErrors', err);
  next(err);
}

module.exports = {
  errorHandler,
  logErrors
};
