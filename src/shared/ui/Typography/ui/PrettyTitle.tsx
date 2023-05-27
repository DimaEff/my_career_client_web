import { type FC, type PropsWithChildren } from 'react'
import { Typography } from '@mui/material'

import { GRADIENT } from '@/shared/lib'

const PrettyTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      variant={'h4'}
      sx={{
        fontSize: 40,
        fontWeight: 600,
        background: GRADIENT.PURPLE_PINK,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </Typography>
  )
}

export default PrettyTitle
