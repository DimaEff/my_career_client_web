export interface ApiResponse<T> {
  payload: T | null
  errorMessage: string | null
}

export type FetchFunc = <T>(...args: unknown[]) => Promise<ApiResponse<T> | null>

export type Id = number
