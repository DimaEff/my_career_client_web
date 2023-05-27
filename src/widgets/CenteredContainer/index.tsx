import { type FC, type PropsWithChildren } from 'react'
import { Box, useTheme } from '@mui/material'

import { Logo } from '@/shared/ui/Logo'

interface CenteredContainerProps {
  withLogo?: true
}

const CenteredContainer: FC<PropsWithChildren<CenteredContainerProps>> = ({
  children,
  withLogo,
}) => {
  const theme = useTheme()
  const logoMargin = 24

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
        }}
      >
        {withLogo && (
          <Box
            sx={{
              position: 'absolute',
              top: theme.spacing(-logoMargin),
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Logo size={'lg'} withName />
          </Box>
        )}
        <Box
          sx={{
            maxHeight: `calc(100vh - ${theme.spacing(logoMargin * 2)})`,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default CenteredContainer
