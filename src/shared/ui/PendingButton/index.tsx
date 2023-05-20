import { type FC, type PropsWithChildren } from 'react'
import { Button, type ButtonProps, Loading } from '@nextui-org/react'

interface PendingButtonProps {
  pending?: boolean
}

const PendingButton: FC<PropsWithChildren<PendingButtonProps & Partial<ButtonProps>>> = ({
  children,
  pending,
  disabled,
  ...props
}) => {
  return (
    <Button disabled={Boolean(disabled) || pending} {...props}>
      {pending ? <Loading /> : children}
    </Button>
  )
}

export default PendingButton
