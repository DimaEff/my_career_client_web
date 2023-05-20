import { useMemo } from 'react'
import { useTheme } from '@nextui-org/react'
import { type TokenValue } from '@nextui-org/react/types/theme'

import { type Color } from '@/shared/lib'

export const useColorValue = (infoType: Color): string | number => {
  const { theme } = useTheme()

  if (theme === undefined) {
    console.error('Theme is undefined')
  }

  const colors = useMemo<Record<Color, TokenValue | undefined>>(
    () => ({
      default: theme?.colors.background,
      primary: theme?.colors.primary,
      secondary: theme?.colors.secondary,
      error: theme?.colors.error,
      warning: theme?.colors.warning,
      success: theme?.colors.success,
    }),
    [
      theme?.colors.background,
      theme?.colors.error,
      theme?.colors.primary,
      theme?.colors.secondary,
      theme?.colors.success,
      theme?.colors.warning,
    ],
  )

  return colors[infoType]?.value ?? ''
}
