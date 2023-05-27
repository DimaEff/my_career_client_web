import { useMemo } from 'react'
import { type TypographyProps, useTheme } from '@mui/material'

import { type LogoSize } from '@/shared/ui/Logo/lib/types.ts'

interface LogoNameSizes {
  height: string
  nameSize: TypographyProps['variant']
}

export const useLogoSize = (size: LogoSize): LogoNameSizes => {
  const { spacing } = useTheme()
  const sizes = useMemo<Record<LogoSize, LogoNameSizes>>(
    () => ({
      sm: {
        height: spacing(5),
        nameSize: 'subtitle1',
      },
      md: {
        height: spacing(9),
        nameSize: 'h5',
      },
      lg: {
        height: spacing(15),
        nameSize: 'h2',
      },
    }),
    [spacing],
  )

  return sizes[size]
}
