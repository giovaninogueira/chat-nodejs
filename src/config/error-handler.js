import { ErrorCustom } from "../utils/error-custom.js";

/**
 * Error Handler
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const errorHandler = (err, req, res, next) => {
  if (err instanceof ErrorCustom) {
    const body = JSON.parse(err.message);
    return res.status(body.status).send({
        error: body.error
    });
  }
  return res.status(500).send({
      error: "internal server error"
  });
};

export { errorHandler };
