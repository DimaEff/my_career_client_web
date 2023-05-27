import { type FC } from 'react'
import { Box } from '@mui/material'

import logoImage from '@/assets/icons/logo.png'
import { type LogoSize } from '@/shared/ui/Logo/lib/types.ts'
import { useLogoSize } from '@/shared/ui/Logo/lib/useLogoSize.ts'

interface LogoProps {
  size?: LogoSize
}

const Logo: FC<LogoProps> = ({ size }) => {
  const width = useLogoSize(size ?? 'md')

  return (
    <Box sx={{ width }}>
      <img style={{ width: '100%' }} src={logoImage} />
    </Box>
  )
}

export default Logo
