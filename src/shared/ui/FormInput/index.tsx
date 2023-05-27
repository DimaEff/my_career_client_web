import { type FC } from 'react'
import { TextField, type TextFieldProps } from '@mui/material'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { type FieldConfig, useField } from 'effector-forms'

interface FormInputProps {
  field: FieldConfig
  message?: string
}

const FormInput: FC<FormInputProps & TextFieldProps> = ({ field, color, message, ...props }) => {
  const { value, onChange, errors } = useField(field)

  return (
    <TextField
      error={errors.length !== 0}
      helperText={errors[0]?.errorText}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...props}
      fullWidth
    />
  )
}

export default FormInput
