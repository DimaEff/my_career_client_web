import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent } from '@mui/material'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { useField } from 'effector-forms'

import { PhoneNumberConfirmation } from '@/features/confirmation'
import { phoneNumberForm } from '@/features/confirmation/model'
import { PATHS } from '@/shared/paths.ts'
import { PrettyTitle } from '@/shared/ui/Typography'

const LoginPhoneNumberConfirmation = () => {
  const navigate = useNavigate()
  const phoneNumber = useField(phoneNumberForm.fields.phoneNumber)

  return (
    <Card sx={{ maxWidth: '400px' }}>
      <CardContent>
        <PrettyTitle>Enter a phone number</PrettyTitle>
        <PhoneNumberConfirmation onSendCode={() => navigate(PATHS.LOGIN.CODE(phoneNumber.value))} />
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to={PATHS.REGISTER}>Don`t have an account? Create a new one!</Link>
      </CardActions>
    </Card>
  )
}

export default LoginPhoneNumberConfirmation
