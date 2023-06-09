import { useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent } from '@mui/material'

import { PhoneNumberConfirmation } from '@/features/confirmation'
import { PATHS } from '@/shared/paths.ts'
import Link from '@/shared/ui/Link'
import { PrettyTitle } from '@/shared/ui/Typography'

const SendPhoneNumberConfirmationCard = () => {
  const navigate = useNavigate()

  return (
    <Card sx={{ maxWidth: '400px' }}>
      <CardContent>
        <PrettyTitle>Enter a phone number</PrettyTitle>
        <PhoneNumberConfirmation
          onSendCode={({ phoneNumber }) => navigate(PATHS.CONFIRMATION_CODE(phoneNumber))}
        />
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Link to={PATHS.REGISTER}>Don`t have an account? Create a new one!</Link>
      </CardActions>
    </Card>
  )
}

export default SendPhoneNumberConfirmationCard
