import type {} from '@mui/lab/themeAugmentation'
import { type Components, createTheme, type Theme } from '@mui/material/styles'

const buttonOverrides: Components<Theme>['MuiButton'] = {
  defaultProps: {
    variant: 'contained',
  },
}

export const theme = createTheme({
  palette: {
    secondary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: ['Comfortaa', 'Roboto'].join(','),
  },
  components: {
    MuiButton: buttonOverrides,
    MuiLoadingButton: buttonOverrides,
  },
})
