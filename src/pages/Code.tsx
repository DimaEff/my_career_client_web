import { Box } from '@mui/material'

import ConfirmCodeCard from '@/widgets/ConfirmCodeCard'

const Code = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <ConfirmCodeCard />
    </Box>
  )
}

export default Code
