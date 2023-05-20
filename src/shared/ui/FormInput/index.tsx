import { type FC, useMemo } from 'react'
import { Input, type InputProps } from '@nextui-org/react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { type FieldConfig, useField } from 'effector-forms'

import { Info } from '@/shared/ui/Info'

interface FormInputProps {
  field: FieldConfig
  message?: string
}

const FormInput: FC<FormInputProps & Partial<InputProps>> = ({
  field,
  color,
  message,
  ...props
}) => {
  const { value, onChange, errorText } = useField(field)
  const errorTextString = errorText()
  const colorWithValidation = useMemo(
    () => (errorTextString !== undefined ? 'error' : color),
    [color, errorTextString],
  )

  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      contentRight={
        (Boolean(errorTextString) || Boolean(message)) && (
          <Info message={errorTextString} color={colorWithValidation} />
        )
      }
      color={colorWithValidation}
      {...props}
      contentClickable
    />
  )
}

export default FormInput
