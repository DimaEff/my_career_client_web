import { createSearchParams, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent } from '@mui/material'

import { PhoneNumberConfirmation } from '@/features/confirmation'
import { REGISTER_CONFIRMATION_CODE_MODE } from '@/pages/constants.ts'
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
          onSendCode={({ phoneNumber }) =>
            navigate({
              pathname: PATHS.CONFIRMATION_CODE(phoneNumber),
              search: createSearchParams({
                mode: REGISTER_CONFIRMATION_CODE_MODE,
              }).toString(),
            })
          }
        />
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Link to={PATHS.REGISTER.INDEX}>Don`t have an account? Create a new one!</Link>
      </CardActions>
    </Card>
  )
}

export default SendPhoneNumberConfirmationCard
