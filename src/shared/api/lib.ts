import { type FetchFunc } from '@/shared/api/models'

export const getBase = (path: string) => `${process.env.REACT_APP_API_URL}/${path}/`

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
