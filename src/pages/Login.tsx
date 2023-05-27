import { Box } from '@mui/material'

import LoginPhoneNumberConfirmation from '@/widgets/LoginSendPhoneConfirmation'

const Login = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <LoginPhoneNumberConfirmation />
    </Box>
  )
}

export default Login
