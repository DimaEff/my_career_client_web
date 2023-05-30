import { type FC, type PropsWithChildren } from 'react'
import { Link as RLink, type LinkProps as RLinkProps } from 'react-router-dom'
import { Typography, type TypographyProps } from '@mui/material'

const Link: FC<PropsWithChildren<TypographyProps & Pick<RLinkProps, 'to'>>> = ({
  children,
  color,
  to,
  ...props
}) => {
  return (
    <Typography
      sx={(theme) => ({
        '& > a': {
          color: color || theme.palette.primary.main,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      })}
      {...props}
    >
      <RLink to={to}>{children}</RLink>
    </Typography>
  )
}

export default Link
