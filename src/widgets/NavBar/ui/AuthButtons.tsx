import LogoutIcon from '@mui/icons-material/Logout'
import { IconButton } from '@mui/material'

const AuthButtons = () => {
  return (
    <IconButton onClick={() => alert('logout!')}>
      <LogoutIcon />
    </IconButton>
  )
}

export default AuthButtons
