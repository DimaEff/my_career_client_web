import { useMemo } from 'react'
import { useTheme } from '@mui/material'

import { type LogoSize } from '@/shared/ui/Logo/lib/types.ts'

export const useLogoSize = (size: LogoSize): string => {
  const { spacing } = useTheme()
  const sizes = useMemo<Record<LogoSize, string>>(
    () => ({
      sm: spacing(5),
      md: spacing(9),
      lg: spacing(15),
    }),
    [spacing],
  )

  return sizes[size]
}
