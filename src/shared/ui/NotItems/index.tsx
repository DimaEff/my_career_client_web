import { useTranslation } from 'react-i18next'
import { Box, Typography } from '@mui/material'

import { LOCALES } from '@/shared/lib/locales.ts'

const NotItems = () => {
  const { t } = useTranslation()

  return (
    <Box textAlign={'center'}>
      <Typography variant={'h5'}>{t(LOCALES.NOT_ITEMS)}</Typography>
    </Box>
  )
}

export default NotItems
