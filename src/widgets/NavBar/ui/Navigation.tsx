import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { Tab, Tabs } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { LOCALES } from '@/shared/lib/locales.ts'
import { PATHS } from '@/shared/paths.ts'
import { useRootStore } from '@/stores/useRootStore.ts'

interface NavigationPath {
  path: string
  name: string
}

const navigationWithoutCompany: NavigationPath[] = [
  {
    path: PATHS.COMPANIES,
    name: LOCALES.PATH_NAME.COMPANIES,
  },
]

const navigationWithCompany: NavigationPath[] = [
  {
    path: PATHS.HOME,
    name: LOCALES.PATH_NAME.HOME,
  },
  {
    path: PATHS.ROLES,
    name: LOCALES.PATH_NAME.ROLES,
  },
]

const Navigation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()

  const {
    authStore: { company },
  } = useRootStore()

  const navigationPaths = useMemo<NavigationPath[]>(
    () => (company === null ? navigationWithoutCompany : navigationWithCompany),
    [company],
  )

  return (
    <Tabs
      textColor={'secondary'}
      indicatorColor={'secondary'}
      value={location.pathname}
      sx={{
        ml: 2,
        '& *': {
          color: '#fff',
        },
      }}
    >
      {navigationPaths.map((p) => (
        <Tab key={p.path} value={p.path} label={t(p.name)} onClick={() => navigate(p.path)} />
      ))}
    </Tabs>
  )
}

export default observer(Navigation)
