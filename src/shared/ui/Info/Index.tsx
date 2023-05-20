import { type FC } from 'react'
import { CiCircleInfo } from 'react-icons/ci'
import { type CSS, Tooltip } from '@nextui-org/react'

import { type Color } from '@/shared/lib'
import { useColorValue } from '@/shared/lib/hooks/useColorValue.ts'

interface InputWithInfoProps {
  message?: string
  color?: Color
  css?: CSS
}

const Info: FC<InputWithInfoProps> = ({ color, message, css }) => {
  const colorValue = useColorValue(color ?? 'error')

  return (
    <Tooltip content={message} color={color} contentColor={'error'} css={css}>
      <CiCircleInfo color={colorValue} />
    </Tooltip>
  )
}

export default Info
