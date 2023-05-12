import { type FetchFunc } from '@/shared/api/models'

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
export const getBase = (path: string) => `${import.meta.env.API_URL}/${path}/`

export const withErrorHandling = <T extends FetchFunc>(f: T): T => {
  // noinspection JSAnnotator
  return (async (...args: Parameters<T>) => {
    try {
      return await f(...args)
    } catch (e) {
      console.error(e)
      return null
    }
  }) as T
}
