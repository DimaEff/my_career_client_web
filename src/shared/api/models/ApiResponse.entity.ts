export interface ApiResponse<T> {
  payload: T | null
  errorMessage: string | null
}
