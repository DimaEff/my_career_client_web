import { type FC } from 'react'
import { Box, Typography } from '@mui/material'

import logoImage from '@/assets/icons/logo.png'
import { type LogoSize } from '@/shared/ui/Logo/lib/types.ts'
import { useLogoSize } from '@/shared/ui/Logo/lib/useLogoSize.ts'

interface LogoProps {
  size?: LogoSize
  withName?: true
}

const Logo: FC<LogoProps> = ({ size, withName }) => {
  const { height, nameSize } = useLogoSize(size ?? 'md')

  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
      }}
    >
      <img style={{ height }} src={logoImage} alt={'logo'} />
      {withName && (
        <Typography fontWeight={700} variant={nameSize}>
          Мой карьер
        </Typography>
      )}
    </Box>
  )
}

export default Logo
