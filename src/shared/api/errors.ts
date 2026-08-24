export class TMDBError extends Error {
  public status: number;
  public tmdbCode?: number;
  public tmdbMessage?: string;

  constructor(
    message: string,
    status: number,
    tmdbCode?: number,
    tmdbMessage?: string
  ) {
    super(message);
    this.name = "TMDBError";
    this.status = status;
    this.tmdbCode = tmdbCode;
    this.tmdbMessage = tmdbMessage;
  }
}

export class TMDBNotFoundError extends TMDBError {
  constructor(message: string = "Resource not found") {
    super(message, 404);
    this.name = "TMDBNotFoundError";
  }
}

export class TMDBAuthError extends TMDBError {
  constructor(message: string = "Authentication failed") {
    super(message, 401);
    this.name = "TMDBAuthError";
  }
}

export class TMDBRateLimitError extends TMDBError {
  constructor(message: string = "Rate limit exceeded") {
    super(message, 429);
    this.name = "TMDBRateLimitError";
  }
}
