interface InstanceHTTPClient {
  get<T>(url: string, options?: RequestInit): Promise<T>;
  post<T>(url: string, data?: unknown, options?: RequestInit): Promise<T>;
  put<T>(url: string, data?: unknown, options?: RequestInit): Promise<T>;
  delete<T>(url: string, options?: RequestInit): Promise<T>;
}

interface RequestOptions extends RequestInit {
  params?: Record<PropertyKey, string | number>;
}

class ApiClient implements InstanceHTTPClient {
  private baseURL: string;
  private defaultHeaders: HeadersInit;

  constructor() {
    const key = process.env.TMDB_API_KEY as string;
    const url = process.env.TMDB_API_URL as string;

    this.baseURL = url;
    this.defaultHeaders = {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json"
    };
  }

  private buildURL(endpoint: string, params?: RequestInit): string {
    endpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
    const url = new URL(endpoint, this.baseURL);

    url.searchParams.set("language", "pt-BR");

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, String(value));
      });
    }

    return url.toString();
  }

  async request<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const { params, headers, ...fetchOptions } = options || {};

    const url = this.buildURL(endpoint, params);

    const response = await fetch(url, {
      ...fetchOptions,
      headers: new Headers({
        ...this.defaultHeaders,
        ...headers
      })
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { method: "GET", ...options });
  }

  post<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    return this.request<T>(endpoint, {
      body: JSON.stringify(data),
      method: "POST",
      ...options
    });
  }

  put<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
      ...options
    });
  }

  delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      method: "DELETE",
      ...options
    });
  }
}

export const api = new ApiClient();
