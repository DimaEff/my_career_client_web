import { getBase } from '@/shared/api/lib'

export const getAdminBase = (path: string) => getBase(`admin/${path}`)
