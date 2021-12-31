class ErrorCustom extends Error {
  constructor({ error, status }) {
    super();
    this.message = JSON.stringify({ error, status });
  }
}

export { ErrorCustom };
