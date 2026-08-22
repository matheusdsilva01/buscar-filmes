import {
  TMDBAuthError,
  TMDBError,
  TMDBNotFoundError,
  TMDBRateLimitError
} from "./errors"

interface InstanceHTTPClient {
  get<T, P = Record<string, string | number>>(
    url: string,
    options?: RequestOptions<P>
  ): Promise<T>
  post<T, P = Record<string, string | number>>(
    url: string,
    data?: unknown,
    options?: RequestOptions<P>
  ): Promise<T>
  put<T, P = Record<string, string | number>>(
    url: string,
    data?: unknown,
    options?: RequestOptions<P>
  ): Promise<T>
  delete<T, P = Record<string, string | number>>(
    url: string,
    options?: RequestOptions<P>
  ): Promise<T>
}

export interface RequestOptions<
  P = Record<string, string | number>
> extends Omit<RequestInit, "body"> {
  params?: P
  body?: BodyInit | null
}

export class ApiClient implements InstanceHTTPClient {
  private baseURL: string
  private defaultHeaders: HeadersInit

  constructor() {
    const key = process.env.TMDB_API_KEY as string
    const url = process.env.TMDB_API_URL as string

    this.baseURL = url
    this.defaultHeaders = {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json"
    }
  }

  private buildURL<P>(endpoint: string, params?: P): string {
    endpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint
    const url = new URL(endpoint, this.baseURL)

    url.searchParams.set("language", "pt-BR")

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.set(key, String(value))
        }
      })
    }

    return url.toString()
  }

  async request<T, P = Record<string, string | number>>(
    endpoint: string,
    options?: RequestOptions<P>
  ): Promise<T> {
    const { params, headers, ...fetchOptions } = options || {}

    const url = this.buildURL(endpoint, params)

    const response = await fetch(url, {
      ...fetchOptions,
      headers: new Headers({
        ...this.defaultHeaders,
        ...headers
      })
    })

    if (!response.ok) {
      let tmdbMessage: string | undefined
      let tmdbCode: number | undefined

      try {
        const errorData = await response.json()
        tmdbMessage = errorData.status_message
        tmdbCode = errorData.status_code
      } catch (e) {}

      const status = response.status

      if (status === 404) {
        throw new TMDBNotFoundError(tmdbMessage)
      }

      if (status === 401 || status === 403) {
        throw new TMDBAuthError(tmdbMessage)
      }

      if (status === 429) {
        throw new TMDBRateLimitError(tmdbMessage)
      }

      throw new TMDBError(
        tmdbMessage || `HTTP error! status: ${status}`,
        status,
        tmdbCode,
        tmdbMessage
      )
    }

    return response.json()
  }

  get<T, P = Record<string, string | number>>(
    endpoint: string,
    options?: RequestOptions<P>
  ): Promise<T> {
    return this.request<T, P>(endpoint, { method: "GET", ...options })
  }

  post<T, P = Record<string, string | number>>(
    endpoint: string,
    data?: unknown,
    options?: RequestOptions<P>
  ): Promise<T> {
    return this.request<T, P>(endpoint, {
      body: JSON.stringify(data),
      method: "POST",
      ...options
    })
  }

  put<T, P = Record<string, string | number>>(
    endpoint: string,
    data?: unknown,
    options?: RequestOptions<P>
  ): Promise<T> {
    return this.request<T, P>(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
      ...options
    })
  }

  delete<T, P = Record<string, string | number>>(
    endpoint: string,
    options?: RequestOptions<P>
  ): Promise<T> {
    return this.request<T, P>(endpoint, {
      method: "DELETE",
      ...options
    })
  }
}

export const api = new ApiClient()
