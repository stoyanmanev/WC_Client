const errorResponse = (err) => {
  const error = {
    error: true,
    message: err.message || "Failed to fetch",
  };
  return error;
};
export default errorResponse;