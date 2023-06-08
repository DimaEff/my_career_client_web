import { forwardRef } from 'react'
import { type FieldError } from 'react-hook-form'
import { TextField, type TextFieldProps } from '@mui/material'

interface FormInputProps {
  fieldError: FieldError | undefined
}

// eslint-disable-next-line react/display-name
const FormInput = forwardRef<HTMLInputElement, FormInputProps & TextFieldProps>(
  ({ fieldError, ...props }, ref) => {
    return (
      <TextField
        error={!!fieldError?.message}
        helperText={fieldError?.message}
        ref={ref}
        {...props}
        fullWidth
      />
    )
  },
)

export default FormInput
