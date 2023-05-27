import { Card, CardContent } from '@mui/material'

import { ConfirmCode } from '@/features/confirmation'
import { PrettyTitle } from '@/shared/ui/Typography'

const ConfirmCodeCard = () => {
  return (
    <Card sx={{ maxWidth: '400px' }}>
      <CardContent>
        <PrettyTitle>Enter the code from the message</PrettyTitle>
        <ConfirmCode />
      </CardContent>
    </Card>
  )
}

export default ConfirmCodeCard
