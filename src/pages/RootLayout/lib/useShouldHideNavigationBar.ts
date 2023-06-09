import { matchPath, useMatches } from 'react-router-dom'

import { PATHS_WHERE_SHOULD_NOT_BE_NAVIGATION_BAR } from '@/pages/RootLayout/lib/constants.ts'

export const useShouldHideNavigationBar = (): boolean => {
  const matches = useMatches()
  const pathName = matches[1]?.pathname // the last element because the first is '/'

  return PATHS_WHERE_SHOULD_NOT_BE_NAVIGATION_BAR.some(
    (path) => matchPath({ path }, pathName) !== null,
  )
}
