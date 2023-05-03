import { type ApiResponse } from '@/shared/api/models'

export type FetchFunc = <T>(...args: unknown[]) => Promise<ApiResponse<T> | null>

export type Id = number
