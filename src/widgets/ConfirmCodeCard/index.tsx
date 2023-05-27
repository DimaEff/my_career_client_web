import { Paper } from '@mui/material'

import { ConfirmCode } from '@/features/confirmation'
import { PrettyTitle } from '@/shared/ui/Typography'

const ConfirmCodeCard = () => {
  return (
    <Paper sx={{ maxWidth: '400px' }}>
      <PrettyTitle>Enter the code from the message</PrettyTitle>
      <ConfirmCode />
    </Paper>
  )
}

export default ConfirmCodeCard
