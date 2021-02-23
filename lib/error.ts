export interface IHttpErrors {
  error: string;
  description: string;
}

export class UnpacMeErrors extends Error implements IHttpErrors {
  readonly error: string;
  readonly description: string;
  constructor(errorResponse: IHttpErrors) {
    super(errorResponse.description);

    this.error = errorResponse.error;
    this.description = errorResponse.description;
  }
}
