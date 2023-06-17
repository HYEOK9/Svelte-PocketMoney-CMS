import { PUBLIC_API_URL } from "$env/static/public";

export const request = <T>(url: string, config: RequestInit = {}): Promise<T> =>
  fetch(url, config)
    .then((res) => res.json())
    .then((data) => data as T);

export const get = <T>(endpoint: string, config?: RequestInit) =>
  request<T>(`${PUBLIC_API_URL}${endpoint}`, { method: "GET", ...config });

export const post = <T>(endpoint: string, config?: RequestInit) =>
  request<T>(`${PUBLIC_API_URL}${endpoint}`, { method: "POST", ...config });

export const del = <T>(endpoint: string, config?: RequestInit) =>
  request<T>(`${PUBLIC_API_URL}${endpoint}`, { method: "DELETE", ...config });

export const patch = <T>(endpoint: string, config?: RequestInit) =>
  request<T>(`${PUBLIC_API_URL}${endpoint}`, { method: "PATCH", ...config });
