import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { Tab, Tabs } from '@mui/material'

import { LOCALES } from '@/shared/lib/locales.ts'
import { PATHS } from '@/shared/paths.ts'

const Navigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { t } = useTranslation()

  const navigationPaths = [
    {
      path: PATHS.HOME,
      name: LOCALES.PATH_NAME.HOME,
    },
    {
      path: PATHS.COMPANIES,
      name: LOCALES.PATH_NAME.COMPANIES,
    },
  ]

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

export default Navigation
