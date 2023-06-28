import { PATHS } from '@/shared/paths.ts'

export const PATHS_WHERE_SHOULD_NOT_BE_NAVIGATION_BAR: string[] = [
  PATHS.LOGIN,
  PATHS.CONFIRMATION_CODE(),
  PATHS.REGISTER.INDEX,
]
